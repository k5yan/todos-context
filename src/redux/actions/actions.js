export const CHOOSE_CURRENT_DB = (payload) => ({
	type: 'CHOOSE_CURRENT_DB',
	payload: payload,
});

export const UPLOAD_REQUIRED_DATABASE = (todos, requiredItem) => ({
	type: 'UPLOAD_REQUIRED_DATABASE',
	payload: todos.filter((todo) => todo.todo.includes(requiredItem)),
});

export const SET_REQUIRED_ITEM = (payload) => ({
	type: 'SET_REQUIRED_ITEM',
	payload: payload,
});

export const SET_REFRESH_LIST_FLAG = {
	type: 'SET_REFRESH_LIST_FLAG',
};

////async

const fetchChangeDbMock = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(false);
		}, 1250);
	});
};

export const CHANGE_DB = () => (dispatch) =>
	fetchChangeDbMock().then((currentDbData) => {
		dispatch(CHOOSE_CURRENT_DB(currentDbData));
	}); //in SearchBlock
