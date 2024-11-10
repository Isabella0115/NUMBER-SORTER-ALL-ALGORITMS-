function createHomeLayout() {
    const container = UI.createElement('div', { class: 'container-root' }, [
        UI.createElement('h1', { class: 'heading' }, 'NUMBER SORTER'),
        UI.createElement('p', { class: 'text' }, 'By which algorithm do you want to sort the numbers?'),
        UI.createElement('div', { class: 'buttons' }, [
            UI.createElement('a', {
                href: 'bubble.html',
                class: 'btn btn-outline-primary'
            }, 'Bubble Sort'),
            UI.createElement('a', {
                href: 'insertion.html',
                class: 'btn btn-outline-primary'
            }, 'Insertion Sort'),
        
            UI.createElement('a', {
                href: 'selection.html',
                class: 'btn btn-outline-primary'
            }, 'Selection Sort')
        ])
    ]);

    UI.render(container, document.querySelector('body'));
}

createHomeLayout();

