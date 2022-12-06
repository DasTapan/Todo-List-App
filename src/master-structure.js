let _currentProjectIndex = 0;

const defaultProject = ['Default',];

const masterArray = [defaultProject,];

const _setProjectIndex = (newIndex) => {
    _currentProjectIndex = newIndex;
};

const toggleIndex = (newIndex) => {
    _setProjectIndex(newIndex);
};

const getCurrentIndex = () => {
    return _currentProjectIndex;
};

export { toggleIndex, getCurrentIndex, masterArray };