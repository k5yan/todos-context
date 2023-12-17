import { useState } from 'react';
import styles from '../styles/TodoStyle.module.css';
import { Link } from 'react-router-dom';
import { SetComplete } from '../App/SetComplete';

export const TodoTitle = ({ item }) => {
	const [checkBox, setCheckBox] = useState(item.complete);
	let titleTodoText = item.todo;
	if (titleTodoText.length > 28) {
		titleTodoText = titleTodoText.slice(0, 28) + `...`;
	}
	return (
		<div key={item.id} className={styles.todoContainer}>
			<input
				key={item.id}
				type="checkbox"
				className={styles.todoCheckbox}
				checked={checkBox}
				onChange={() => {
					setCheckBox(!checkBox);
					SetComplete(item.id, item.complete, titleTodoText);
				}}
			></input>
			<Link to={`/todo/${item.id}`}>
				<div className={styles.todoTextareaContainer}>{titleTodoText}</div>
			</Link>
		</div>
	);
};
