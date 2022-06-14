const addList = (list) => {
    return {
        type: 'ADD_LIST',
        payload: list
    };
};

const editList = (list) => {
    return {
        type: 'EDIT_LIST',
        payload: list
    };
};


const removeList = (id) => {
    return {
        type: 'REMOVE_LIST',
        payload: id
    };
};

export { addList, removeList, editList }