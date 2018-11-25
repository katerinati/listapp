export default (prevState = {}, action) => {
  const { payload } = action;
  const { items } = prevState;

  switch(action.type) {
    case 'ADD_ITEM':
      return {items: [...items, payload]};

    case 'REMOVE_ITEM':
      return {items: items.filter(item => item.id !== payload.itemId)};

    case 'UPDATE_ITEM':
      return {items: items.map(item => ((item.id === payload.item.id) ? {...item, ...payload.item} : item))};

    default:
      return prevState
  }
}