import { useState, createElement } from '../mini-react';

function Counter() {
    const [count, setCount] = useState(0);

    console.log('Counter rendered with count:', count);

    return createElement(
        'div',
        null,
        createElement('h1', null, `Count: ${count}`),
        createElement('button', { onClick: () => {
            console.log('Button clicked');
            setCount(count + 1);
        }}, 'Increment')
    );
}

export default Counter;
