import styles from '../styles/TodoStyle.module.css';
import { MakeRawTodo } from '../App/MakeRawTodo';
import { TodoTitle } from './TodoTitle';
import { useState } from 'react';
import { AppContext } from '../App/context';
import { useContext } from 'react';
export const List = () => {
	const { dbSwitcher, currentDB, setCurrentDB, refreshList } = useContext(AppContext);
	const todos = dbSwitcher[currentDB];
	const [listSort, setListSort] = useState(true);
	return (
		<div className={styles.appContainer}>
			<div className={styles.listContainer}>
				{listSort
					? todos.map((item) => <TodoTitle item={item} />).reverse()
					: todos.map((item) => <TodoTitle item={item} />)}
			</div>
			<div>
				<button
					className={`${styles.mainButtons} ${styles.AddButton}`}
					onClick={() => {
						MakeRawTodo(refreshList);
						setCurrentDB(true);
					}}
				>
					<span> + </span>
				</button>
				<button
					className={`${styles.mainButtons} ${styles.ReverseListButton}`}
					onClick={() => {
						setCurrentDB(true);
						setListSort(!listSort);
					}}
				>
					<span> ↑↓ </span>
				</button>
			</div>
		</div>
	);
};
