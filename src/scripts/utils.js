function isDOMElement(element) {
    return element instanceof Element;
}

function createElement(element, attributes = {}, children = []) {
    if (!element) {
        throw new Error('Element type is not provided');
    }

    const elem = document.createElement(element);

    if (!isDOMElement(elem)) {
        return undefined;
    }

    for (const [key, value] of Object.entries(attributes)) {
        elem.setAttribute(key, value); // Use elem here
    }

    if (typeof children === 'string') {
        elem.innerText = children; // Use elem here
    } else if (Array.isArray(children)) {
        children.forEach((child) => {
            if (child instanceof Element) {
                elem.appendChild(child); // Use elem here
            }
        });
    } else if (children instanceof Element) {
        elem.appendChild(children); // Use elem here
    }

    return elem;
}

function render(element, target) {
    if (!(element instanceof Element)) {
        throw new Error('Invalid element');
    }

    if (!(target instanceof Element)) {
        throw new Error('Invalid target element');
    }

    target.appendChild(element);
    return target;
}

window.UI = {
    createElement,
    render
};
