const container = document.querySelector('#container');
for(i = 0; i < 16; i ++) {
    const divContainer = document.createElement('div');
    container.appendChild(divContainer);
    for(j = 0; j < 16; j++) {
        const div = document.createElement('div');
        divContainer.appendChild(div);
    }
}
