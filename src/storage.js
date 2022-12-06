import { masterArray } from "./master-structure.js";

const defaultProject = ['Default',];

const _retrieveData = () => {
    let savedJson = localStorage.getItem('masterArray');
    let savedMasterArray = JSON.parse(savedJson);
    masterArray.length = 0;
    masterArray.push(...savedMasterArray);
};

if (!localStorage.getItem('masterArray')) {
    masterArray.length = 0;
    masterArray[0] = defaultProject;
} else {
    _retrieveData();
}

const storeData = () => {
    localStorage.removeItem('masterArray');
    localStorage.setItem('masterArray', JSON.stringify(masterArray));
};

export default storeData;