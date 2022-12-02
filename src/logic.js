import { toggleIndex, getCurrentIndex, masterArray } from "./master-structure.js";
import projectLoad from "./project.js";
import taskLoad from "./task.js";
import { projectName } from "./home.js";

const appLogic = (event) => {
    const _targetNode = event.target;
    const _className = _targetNode.className;

    const _formSubmission = (className) => {
        switch (className) {
            case 'project-pop-up':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                const newProject = [];
                newProject.push(_targetNode.firstElementChild.value);
                masterArray.push(newProject);
                _targetNode.firstElementChild.value = '';
                projectLoad();
                console.log(masterArray);
                break;

            default:
                break;
        }
    };

    const _toggle = (className) => {

        switch (className) {

            case 'task-title':
                _targetNode.parentElement.classList.remove('brief-layout');
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.nextElementSibling.classList.remove('hidden');
                break;

            case 'save':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.previousElementSibling.classList.add('brief-layout');
                break;

            case 'cancel':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.previousElementSibling.classList.add('brief-layout');
                break;

            case 'add-project':
                _targetNode.parentElement.lastElementChild.classList.toggle('hidden');
                break;

            case 'del-btn':
                let dummyArray = [];
                let projectId = _targetNode.parentElement.id;
                dummyArray = masterArray.filter((element) => masterArray.indexOf(element).toString() != projectId);
                masterArray.length = 0;
                masterArray.push(...dummyArray);
                projectLoad();
                console.log(masterArray);
                break;

            case 'project-unchanged':
                _targetNode.previousElementSibling.previousElementSibling.value = '';
                _targetNode.parentElement.classList.toggle('hidden');
                break;

            case 'new-task':
                _targetNode.nextElementSibling.classList.toggle('hidden');
                break;

            case 'task-button':
                _targetNode.parentElement.parentElement.classList.toggle('hidden');
                break;

            case 'project-name':
                toggleIndex(Number(_targetNode.parentElement.id));
                projectName.textContent = masterArray[getCurrentIndex()][0];
                taskLoad(masterArray[getCurrentIndex()]);
                break;

            case 'delete-button':
                let dummy = [];
                let targetedProject = masterArray[getCurrentIndex()];
                let projId = _targetNode.parentElement.parentElement.id;
                dummy = targetedProject.filter((element) => targetedProject.indexOf(element).toString() != projId);
                targetedProject.length = 0;
                targetedProject.push(...dummy);
                taskLoad(targetedProject);
                break;

            default:
                break;
        }
    };

    const handleToggle = () => {
        _toggle(_className);
    };

    const handleSubmission = () => {
        let _sanitizedClassName = _className.split(' ')[0];
        _formSubmission(_sanitizedClassName);
    };

    return { handleToggle, handleSubmission };
};

export default appLogic;