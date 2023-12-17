import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/TodoStyle.module.css';
import { SaveTodoChanges } from '../App/SaveTodoChanges';
import { DeleteTodo } from '../App/DeleteTodo';

export const Todo = () => {
	const [todoText, setTodoText] = useState(``);
	const redirect = useNavigate();
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:3004/todos/${params.id}`)
			.then((data) => data.json())
			.then((todo) => {
				setTodoText(todo.todo);
			});
	}, [params]);

	const todoChange = ({ target }) => setTodoText(target.value);
	return (
		<>
			<div className={styles.todoContainer}>
				<div className={styles.todoTextareaContainer}>
					<span className={styles.spanStyle}>{todoText}</span>
					<textarea
						className={styles.todoText}
						value={todoText}
						onChange={todoChange}
						onBlur={() => SaveTodoChanges(params, todoText)}
					></textarea>
				</div>
				<button
					className={styles.todoDelete}
					onClick={() => {
						DeleteTodo(params, redirect);
					}}
				>
					<span> ✖ </span>
				</button>
			</div>
			<button
				className={`${styles.mainButtons} ${styles.toListButton}`}
				onClick={() => {
					redirect('/');
				}}
			>
				<span> ← </span>
			</button>
		</>
	);
};
