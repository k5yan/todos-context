export const dbStateInitial = {
	todos: [],
	requiredTodos: [],
};

export const dbStateReducer = (state = dbStateInitial, action) => {
	switch (action.type) {
		case 'UPLOAD_MAIN_DATABASE': {
			return {
				...state,
				todos: action.payload,
			};
		}
		case 'UPLOAD_REQUIRED_DATABASE': {
			return {
				...state,
				requiredTodos: action.payload,
			};
		}

		default:
			return state;
	}
};
