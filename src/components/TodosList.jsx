import { AppContext } from '../App/context';
import { useEffect, useState } from 'react';
import { List } from './List';
import { SearchBlock } from './SearchBlock';

export const TodosList = () => {
	const [todos, setTodos] = useState([]);

	const [currentDB, setCurrentDB] = useState(true);

	const [requiredItem, setRequiredItem] = useState(``);
	const [requiredTodos, setRequiredTodos] = useState([]);

	const requiredItemChange = ({ target }) => setRequiredItem(target.value.trim());
	const getRequiredTodos = () => {
		setRequiredTodos(todos.filter((todo) => todo.todo.includes(requiredItem)));
		setCurrentDB(false);
	};

	const [refreshListFlag, setRefreshListFlag] = useState(false);
	const refreshList = () => {
		setRefreshListFlag(!refreshListFlag);
	};

	const dbSwitcher = {
		true: todos,
		false: requiredTodos,
	};

	const contextCurrentDB = {
		requiredItem,
		requiredItemChange,
		getRequiredTodos,
		currentDB,
		setCurrentDB,
		dbSwitcher,
		refreshList,
	};

	useEffect(() => {
		console.log(currentDB);
	}, [currentDB]);

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then((data) => data.json())
			.then((todos) => {
				setTodos(todos);
			});
	}, [refreshListFlag]);

	// const SearchBlockProps = {
	// 	requiredItem: requiredItem,
	// 	requiredItemChange: requiredItemChange,
	// 	getRequiredTodos: getRequiredTodos,
	// 	setCurrentDB: setCurrentDB,
	// };

	// const ListProps = {
	// 	todos: dbSwitcher[currentDB],
	// 	refreshList: refreshList,
	// 	setCurrentDB: setCurrentDB,
	// };

	return (
		<AppContext.Provider value={contextCurrentDB}>
			<SearchBlock />
			<List />
		</AppContext.Provider>
	);
};
