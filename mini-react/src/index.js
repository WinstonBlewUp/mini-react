import { createElement, render } from './mini-react';
import Counter from './components/Counter';
import Updater from './components/Updater';

function App() {
    return createElement(
        'div',
        null,
        createElement(Counter),
        createElement(Updater)
    );
}

const container = document.getElementById('root');
render(createElement(App), container);

function rerenderApp() {
    render(createElement(App), container);
}

// Ajouter la fonction de rendu dans le contexte global pour la réutiliser
window.rerenderApp = rerenderApp;
