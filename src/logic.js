const appLogic = (event) => {
    const _targetNode = event.target;
    const _className = _targetNode.className;
    console.log(_targetNode.parentElement);
    console.log(_targetNode.parentElement.lastElementChild);

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

            case 'project-change':
                _targetNode.parentElement.classList.toggle('hidden');
                break;

            default:
                break;
        }
    };

    const handle = () => {
        _toggle(_className);
    };

    return { handle };
};

export default appLogic;