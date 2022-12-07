import { masterArray } from "./master-structure.js";
import { projectArray } from "./home.js";

const projectLoad = () => {
    // clean div 
    while (projectArray.lastElementChild) {
        projectArray.removeChild(projectArray.lastElementChild);
    }

    for (let i = 0; i < masterArray.length; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = i;

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('project-name');
        nameSpan.textContent = `${masterArray[i][0]} ` + 'Project';

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('del-btn');

        // add to DOM
        projectDiv.append(nameSpan, deleteProjectButton);
        projectArray.appendChild(projectDiv);
    }
};

export default projectLoad;