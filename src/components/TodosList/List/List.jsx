import { CHOOSE_CURRENT_DB, SET_REFRESH_LIST_FLAG } from '../../../redux/actions';
import {
	selectCurrentDB,
	selectRequiredTodos,
	selectTodos,
} from '../../../redux/selectors';
import styles from '../../../styles/TodoStyle.module.css';
import { MakeRawTodo } from '../../../utils';
import { TodoTitle } from './TodoTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const List = () => {
	const [listSort, setListSort] = useState(true);
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const requiredTodos = useSelector(selectRequiredTodos);
	const currentDB = useSelector(selectCurrentDB);

	const dbSwitcher = {
		true: todos,
		false: requiredTodos,
	};
	const currentTodos = dbSwitcher[currentDB];

	const refreshList = () => {
		dispatch(SET_REFRESH_LIST_FLAG);
	};

	return (
		<div className={styles.appContainer}>
			<div className={styles.listContainer}>
				{listSort
					? currentTodos
							.map((item) => <TodoTitle key={item.id} item={item} />)
							.reverse()
					: currentTodos.map((item) => <TodoTitle key={item.id} item={item} />)}
			</div>
			<div>
				<button
					className={`${styles.mainButtons} ${styles.AddButton}`}
					onClick={() => {
						MakeRawTodo(refreshList);
						dispatch(CHOOSE_CURRENT_DB(true));
					}}
				>
					<span> + </span>
				</button>
				<button
					className={`${styles.mainButtons} ${styles.ReverseListButton}`}
					onClick={() => {
						setListSort(!listSort);
					}}
				>
					<span> ↑↓ </span>
				</button>
			</div>
		</div>
	);
};
