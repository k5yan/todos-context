export const selectCurrentDB = (state) => state.dbOperations.currentDB;
export const selectTodos = (state) => state.db.todos;
export const selectRequiredTodos = (state) => state.db.requiredTodos;
export const selectRequiredItem = (state) => state.dbOperations.requiredItem;
export const selectRefreshListFlag = (state) => state.dbOperations.refreshListFlag;
