const pageLoad = () => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const headerElement = document.createElement('div');
    headerElement.classList.add('header');
    headerElement.textContent = 'Todo List App';

    const mainElement = document.createElement('div');
    mainElement.classList.add('main');

    const footerElement = document.createElement('div');
    footerElement.classList.add('footer');
    footerElement.textContent = 'DasTapan All Rights Reserved';

    // add to DOM
    document.body.appendChild(contentDiv);
    contentDiv.append(headerElement, mainElement, footerElement);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const midsection = document.createElement('div');
    midsection.classList.add('midsection');

    // add to DOM
    mainElement.append(sidebar,midsection);

    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = 'Default Project';

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    //add to DOM
    midsection.append(projectHeading, taskContainer);
};

export default pageLoad;