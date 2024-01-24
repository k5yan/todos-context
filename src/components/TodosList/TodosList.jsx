import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './List';
import { SearchBlock } from './SearchBlock';
import { selectRefreshListFlag } from '../../redux/selectors';

export const TodosList = () => {
	const dispatch = useDispatch();
	const refreshListFlag = useSelector(selectRefreshListFlag);

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then((data) => data.json())
			.then((todos) => {
				dispatch({ type: 'UPLOAD_MAIN_DATABASE', payload: todos });
			});
	}, [dispatch, refreshListFlag]);

	return (
		<>
			<SearchBlock />
			<List />
		</>
	);
};
