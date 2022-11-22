const taskLoad = () => {
    const parentElement = document.querySelector('.task-container');
    console.log(parentElement);
    console.log('Har Hindu Sena ho');
    console.log('Har Hindu Sanatani ho');

    for (let i = 0; i < 6; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');

        const briefInfoDiv = document.createElement('div');
        briefInfoDiv.classList.add('brief-info', 'brief-layout');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('task-title');
        titleSpan.textContent = 'Buy Milk';
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('due-date');
        dateSpan.textContent = '23/12/2022';
        const delButton = document.createElement('button');
        delButton.classList.add('delete-button');

        const demoButton = document.createElement('button');
        demoButton.classList.add('demo-button');
        demoButton.textContent = 'Demo';

        // add to DOM
        briefInfoDiv.append(checkBox, titleSpan, dateSpan, delButton);

        const rawInfoDiv = document.createElement('div');
        rawInfoDiv.classList.add('raw-info', 'hidden');

        const saveButton = document.createElement('button');
        saveButton.classList.add('save');
        saveButton.textContent = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel');
        cancelButton.textContent = 'Cancel';

        // add to DOM
        rawInfoDiv.append(saveButton, cancelButton);
        taskDiv.append(briefInfoDiv, rawInfoDiv);
        parentElement.append(taskDiv);
    }

};

export default taskLoad;