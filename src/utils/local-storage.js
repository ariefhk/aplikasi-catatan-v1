export const getStorageData = (keyName) => {
    const savedItem = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem;
};

export const saveStorageData = (keyName, value) => {
    return localStorage.setItem(keyName, JSON.stringify(value));
};

export const deleteStorageData = (keyName) => {
    return localStorage.removeItem(keyName);
};

export const updateStorageData = (keyName, updateVal) => {
    const getItem = localStorage.getItem(keyName);
    if (!getItem) throw new Error("Item not found!");
    return localStorage.setItem(keyName, JSON.stringify(updateVal));
};
