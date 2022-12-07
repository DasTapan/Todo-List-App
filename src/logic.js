import { toggleIndex, getCurrentIndex, masterArray } from "./master-structure.js";
import projectLoad from "./project.js";
import taskLoad from "./task.js";
import { projectName } from "./home.js";
import { format, parseISO } from "date-fns";
import storeData from "./storage.js";

const appLogic = (event) => {
    const _targetNode = event.target;
    const _className = _targetNode.className;

    const _formSubmission = (className) => {
        switch (className) {
            //new project
            case 'project-pop-up':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                const newProject = [];
                newProject.push(_targetNode.firstElementChild.value);
                masterArray.push(newProject);
                _targetNode.firstElementChild.value = '';
                storeData();
                projectLoad();
                console.log(masterArray);
                break;

            //new task 
            case 'task-form':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                const collection = _targetNode.children;
                const newTask = {
                    status: '',
                    details: collection[1].querySelector(':nth-child(2)').value,
                    title: collection[0].querySelector(':nth-child(2)').value,
                    dueDate: format(parseISO(collection[3].querySelector(':nth-child(2)').value), 'dd-MM-yyyy'),
                    priority: collection[2].querySelector(':nth-child(2)').value,
                };
                masterArray[getCurrentIndex()].push(newTask);
                taskLoad(masterArray[getCurrentIndex()]);
                storeData();
                break;

            case 'edit-details':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                let currentTaskIndex = Number(_targetNode.parentElement.parentElement.id);
                const taskCollection = _targetNode.children;
                const editedTask = {
                    status: '',
                    details: taskCollection[1].querySelector(':nth-child(2)').value,
                    title: taskCollection[0].querySelector(':nth-child(2)').value,
                    dueDate: taskCollection[0].querySelector(':nth-child(4)').value,
                    priority: taskCollection[1].querySelector(':nth-child(4)').value,
                };
                masterArray[getCurrentIndex()][currentTaskIndex] = editedTask;
                taskLoad(masterArray[getCurrentIndex()]);
                storeData();
                break;

            default:
                break;
        }
    };

    const _toggle = (className) => {

        switch (className) {

            case 'task-title':
                // does not use toggle because display: flex & none doesn't co exist
                _targetNode.parentElement.classList.remove('brief-layout');
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.nextElementSibling.classList.remove('hidden');
                break;

            case 'cancel-task':
                _targetNode.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.parentElement.parentElement.previousElementSibling.classList.add('brief-layout');
                _targetNode.parentElement.parentElement.parentElement.classList.add('hidden');
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
                storeData();
                projectLoad();
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
                storeData();
                taskLoad(targetedProject);
                break;

            default:
                break;
        }
    };

    const handleToggle = () => {
        _toggle(_className.split(' ')[0]);
    };

    const handleSubmission = () => {
        let _sanitizedClassName = _className.split(' ')[0];
        _formSubmission(_sanitizedClassName);
    };

    return { handleToggle, handleSubmission };
};

export default appLogic;