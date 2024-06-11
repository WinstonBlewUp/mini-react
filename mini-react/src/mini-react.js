let globalState = [];
let setters = [];
let callIndex = 0;
let rootContainer = null;
let rootVDom = null;

function useState(initialValue) {
    const state = globalState[callIndex] !== undefined ? globalState[callIndex] : initialValue;
    const index = callIndex;

    function setState(newValue) {
        globalState[index] = newValue;
        callIndex = 0; // Réinitialise l'index des appels
        console.log('State updated:', globalState); // Vérifie que l'état est mis à jour
        window.rerenderApp(); // Appel pour re-rendre avec le nouveau VDOM
    }

    setters.push(setState);
    callIndex++;
    return [state, setState];
}

function createElement(tag, props, ...children) {
    if (typeof tag === 'function') {
        callIndex = 0; // Réinitialise l'index avant de créer l'élément fonctionnel
        return tag(props);
    }

    if (typeof tag !== 'string') {
        throw new Error(`Invalid tag type: ${typeof tag}`);
    }

    const element = document.createElement(tag);

    if (props) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on')) {
                const event = key.toLowerCase().substring(2);
                element.addEventListener(event, props[key]);
            } else {
                element[key] = props[key];
            }
        });
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        } else {
            console.error('Invalid child type:', child);
        }
    });

    return element;
}

function render(vdom, container) {
    if (container) {
        rootContainer = container; // Stocke le conteneur racine
        rootVDom = vdom; // Stocke le VDOM racine
    }
    callIndex = 0; // Réinitialise l'index avant le rendu

    if (!(rootVDom instanceof Node)) {
        throw new Error('VDOM is not a valid DOM node.');
    }

    if (rootContainer && rootVDom) {
        rootContainer.innerHTML = '';
        rootContainer.appendChild(rootVDom); // Utiliser rootVDom ici pour s'assurer que le ré-rendu utilise le bon VDOM
    }
    console.log('VDOM rendered:', rootVDom); // Vérifie que le VDOM est re-rendu
}

export { useState, createElement, render };
