let _currentProjectIndex = 0;

const defaultProject = [
    'Default',
    {
        status: 'incomplete',
        title: 'Buy Milk',
        dueDate: '23/12/2022',
        priority: 'H'
    },
    {
        status: 'incomplete',
        title: 'Recharge WiFi',
        dueDate: '12/12/2022',
        priority: 'L'
    },
    {
        status: 'incomplete',
        title: 'Exercise',
        dueDate: '07/11/2022',
        priority: 'L'
    },
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