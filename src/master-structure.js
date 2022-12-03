let _currentProjectIndex = 0;

const defaultProject = [
    'Default',
];

const _setProjectIndex = (newIndex) => {
    _currentProjectIndex = newIndex;
};

const toggleIndex = (newIndex) => {
    _setProjectIndex(newIndex);
};

const getCurrentIndex = () => {
    return _currentProjectIndex;
};

const masterArray = [defaultProject,];

export { toggleIndex, getCurrentIndex, masterArray };