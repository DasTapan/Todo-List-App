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

        // start form
        const formEdit = document.createElement('form');
        formEdit.action = '';
        formEdit.method = 'post';
        formEdit.classList.add('edit-details');

        const formRowOne = document.createElement('div');
        formRowOne.classList.add('form-row');
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Title: '
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.id = 'title';
        titleInput.name = 'title';
        formRowOne.append(titleLabel, titleInput);

        const formRowTwo = document.createElement('div');
        formRowTwo.classList.add('form-row');
        const textAreaLabel = document.createElement('label');
        textAreaLabel.setAttribute('for', 'details');
        textAreaLabel.textContent = 'Details: ';
        const textAreaInput = document.createElement('textarea');
        textAreaInput.name = 'details';
        textAreaInput.id = 'details';
        formRowTwo.append(textAreaLabel, textAreaInput);

        const formRowThree = document.createElement('div');
        formRowThree.classList.add('form-row');

        formEdit.append(formRowOne, formRowTwo, formRowThree);
        rawInfoDiv.append(formEdit);
        // end form

        // add to DOM
        taskDiv.append(briefInfoDiv, rawInfoDiv);
        parentElement.append(taskDiv);
    }

};

export default taskLoad;