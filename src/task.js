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

        // start edit form
        const formEdit = document.createElement('form');
        formEdit.action = '';
        formEdit.method = '';
        formEdit.classList.add('edit-details');

        const formRowOne = document.createElement('div');
        formRowOne.classList.add('form-row');
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Title :'
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.id = 'title';
        titleInput.name = 'title';
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date-div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Date :';
        dueDateLabel.setAttribute('for', 'due-date');
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.name = 'due-date';
        dateInput.id = 'due-date';

        // add to DOM
        formRowOne.append(titleLabel, titleInput, dueDateLabel, dateInput);

        const formRowTwo = document.createElement('div');
        formRowTwo.classList.add('form-row');
        const textAreaLabel = document.createElement('label');
        textAreaLabel.setAttribute('for', 'details');
        textAreaLabel.textContent = 'Details :';
        const textAreaInput = document.createElement('textarea');
        textAreaInput.name = 'details';
        textAreaInput.id = 'details';
        const priorityDiv = document.createElement('div');
        priorityDiv.classList.add('priority-div');
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority :';
        priorityLabel.setAttribute('for', 'priority');
        const prioritySelect = document.createElement('select');
        prioritySelect.name = 'priority';
        prioritySelect.id = 'priority';
        const optionOne = document.createElement('option');
        optionOne.textContent = 'High';
        optionOne.value = 'h';
        const optionTwo = document.createElement('option');
        optionTwo.textContent = 'Medium';
        optionTwo.value = 'm';
        const optionThree = document.createElement('option');
        optionThree.textContent = 'Low';
        optionThree.value = 'l';

        // add to DOM
        prioritySelect.append(optionOne, optionTwo, optionThree);
        formRowTwo.append(textAreaLabel, textAreaInput, priorityLabel, prioritySelect);

        const formRowThree = document.createElement('div');
        formRowThree.classList.add('form-row');
        const saveEditButton = document.createElement('button');
        saveEditButton.id = 'save-edit';
        saveEditButton.textContent = 'Save';
        const cancelEditButton = document.createElement('button');
        cancelEditButton.id = 'cancel-edit';
        cancelEditButton.textContent = 'Cancel';

        // add to DOM
        formRowThree.append(saveEditButton, cancelEditButton);

        // add to DOM
        formEdit.append(formRowOne, formRowTwo, formRowThree);
        rawInfoDiv.append(formEdit);
        // end edit form

        // add to DOM
        taskDiv.append(briefInfoDiv, rawInfoDiv);
        parentElement.append(taskDiv);
    }

};

export default taskLoad;