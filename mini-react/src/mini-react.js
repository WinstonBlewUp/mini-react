let componentInstances = new Map();
let currentComponentId = null;

function useState(initialValue) {
    const component = componentInstances.get(currentComponentId);
    const state = component.states[component.callIndex] !== undefined ? component.states[component.callIndex] : initialValue;
    const index = component.callIndex;

    function setState(newValue) {
        component.states[index] = newValue;
        console.log('State updated:', component.states); // Verify state update
        window.rerenderApp(); // Re-render with new VDOM
    }

    component.callIndex++;
    return [state, setState];
}

function createElement(tag, props, ...children) {
    if (typeof tag === 'function') {
        const componentId = getComponentId(tag, props); // Get or create unique ID for the component instance
        if (!componentInstances.has(componentId)) {
            componentInstances.set(componentId, { states: [], callIndex: 0 });
        }
        currentComponentId = componentId;
        const component = componentInstances.get(componentId);
        component.callIndex = 0; // Reset callIndex for re-rendering
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
    if (!(vdom instanceof Node)) {
        throw new Error('VDOM is not a valid DOM node.');
    }

    if (container) {
        container.innerHTML = '';
        container.appendChild(vdom);
    }
    console.log('VDOM rendered:', vdom); // Verify VDOM re-render
}

function getComponentId(component, props) {
    return `${component.name}-${JSON.stringify(props)}`;
}

export { useState, createElement, render };

