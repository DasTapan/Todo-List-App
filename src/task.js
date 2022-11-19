const taskLoad = () => {
    const parentElement = document.querySelector('.task-container');
    console.log(parentElement);
    console.log('Har Hindu Sena ho');
    console.log('Har Hindu Sanatani ho');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');

    const briefInfoDiv = document.createElement('div');
    briefInfoDiv.classList.add('brief-info');

    const demoButton = document.createElement('button');
    demoButton.classList.add('demo-button');
    demoButton.textContent = 'Demo';

    // add to DOM
    briefInfoDiv.append(demoButton);

    const rawInfoDiv = document.createElement('div');
    rawInfoDiv.classList.add('raw-info', 'hidden');
    // rawInfoDiv.style.display = 'none';

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
};

export default taskLoad;