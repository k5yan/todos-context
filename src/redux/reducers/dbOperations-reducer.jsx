export const dbOperationsInitital = {
	requiredItem: ``,
	currentDB: true,
	refreshListFlag: false,
};

export const dbOperationsReducer = (state = dbOperationsInitital, action) => {
	switch (action.type) {
		case 'SET_REQUIRED_ITEM': {
			return {
				...state,
				requiredItem: action.payload,
			};
		}
		case 'CHOOSE_CURRENT_DB': {
			return {
				...state,
				currentDB: action.payload,
			};
		}
		case 'SET_REFRESH_LIST_FLAG': {
			return {
				...state,
				refreshListFlag: !state.refreshListFlag,
			};
		}
		default:
			return state;
	}
};
