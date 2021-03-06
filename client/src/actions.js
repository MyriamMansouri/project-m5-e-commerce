// get items from the backend
export const requestItems = () => ({
  type: "REQUEST_ITEMS",
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS",
  items,
});

export const receiveItemsError = () => ({
  type: "RECEIVE_ITEMS_ERROR",
});

// get one item from the backend
export const requestCurrItem = () => ({
  type: "REQUEST_CURR_ITEM",
});

export const receiveCurrItem = (item) => ({
  type: "RECEIVE_CURR_ITEM",
  item,
});

export const receiveCurrItemError = () => ({
  type: "RECEIVE_CURR_ITEM_ERROR",
});


// get companies from the backend
export const requestCompanies = () => ({
  type: "REQUEST_COMPANIES",
});

export const receiveCompanies = (items) => ({
  type: "RECEIVE_COMPANIES",
  items,
});

export const receiveCompaniesError = () => ({
  type: "RECEIVE_COMPANIES_ERROR",
});

// add remove items and empty from cart
export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});

// post order to backend
export const postOrder = (order) => ({
  type: "POST_ORDER",
  order,
});

export const completeOrder = () => ({
  type: "COMPLETE_ORDER",
});

export const orderCompletionError = (order) => ({
  type: "ORDER_COMPLETION_ERROR",
  order,
});

export const requestUserData = (user) => ({
  type: "REQUEST_USER_DATA",
  user,
});

export const receiveUserData = () => ({
  type: "Receive_USER_DATA",
});

//KENNY-TEST
export const searchItem = (search, results) => ({
  type: "SEARCH_ITEM",
  search,
  results,
});
