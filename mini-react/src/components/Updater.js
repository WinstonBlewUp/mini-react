import { useState, createElement } from '../mini-react';

function Updater() {
    const [text, setText] = useState('Initial Text');

    console.log('Updater rendered with text:', text);

    return createElement(
        'div',
        null,
        createElement('h2', null, text),
        createElement('button', { onClick: () => {
            console.log('Button clicked');
            setText('Updated Text');
        }}, 'Update Text')
    );
}

export default Updater;
