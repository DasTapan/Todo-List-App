const appLogic = (event) => {
    const _targetNode = event.target;
    const _className = _targetNode.className;

    const _toggle = (className) => {

        switch (className) {

            case 'demo-button':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.nextElementSibling.classList.remove('hidden');
                break;

            case 'save':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
                break;

            case 'cancel':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
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