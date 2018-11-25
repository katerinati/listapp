import uuid from "uuid"

export const addItem = (itemText) => (
  {
    type: 'ADD_ITEM',
    payload: {
      id: uuid(),
      text: itemText,
      isDone: false
    }
  }
);

export const removeItem = (itemId) => (
  {
    type: 'REMOVE_ITEM',
    payload: {
      itemId
    }
  }
);

export const updateItem = (item) => (
  {
    type: 'UPDATE_ITEM',
    payload: {
      item
    }
  }
);