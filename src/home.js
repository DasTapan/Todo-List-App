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
    mainElement.append(sidebar, midsection);

    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = 'Default Project';

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    //add to DOM
    midsection.append(projectHeading, taskContainer);

    const sidebarTop = document.createElement('div');
    sidebarTop.classList.add('sidebar-top');

    const sidebarBottom = document.createElement('div');
    sidebarBottom.classList.add('sidebar-bottom');

    // add to DOM
    sidebar.append(sidebarTop, sidebarBottom);

    const inboxLink = document.createElement('a');
    inboxLink.classList.add('inbox');
    inboxLink.textContent = 'Inbox';

    const todayLink = document.createElement('a');
    todayLink.classList.add('today');
    todayLink.textContent = 'Today';

    const sevenDaysLink = document.createElement('a');
    sevenDaysLink.classList.add('seven-days');
    sevenDaysLink.textContent = '7 Days';

    const importantLink = document.createElement('a');
    importantLink.classList.add('important');
    importantLink.textContent = 'Important';

    //add to DOM
    sidebarTop.append(inboxLink, todayLink, sevenDaysLink, importantLink);
};

export default pageLoad;