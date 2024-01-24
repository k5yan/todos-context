import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/TodoStyle.module.css';
import { selectRequiredItem, selectTodos } from '../../../redux/selectors';
import {
	CHANGE_DB,
	CHOOSE_CURRENT_DB,
	SET_REQUIRED_ITEM,
	UPLOAD_REQUIRED_DATABASE,
} from '../../../redux/actions';

export const SearchBlock = () => {
	const dispatch = useDispatch();
	const requiredItem = useSelector(selectRequiredItem);
	const todos = useSelector(selectTodos);

	const getRequiredTodos = () => {
		dispatch(UPLOAD_REQUIRED_DATABASE(todos, requiredItem));
		dispatch(CHANGE_DB());
	};

	const requiredItemChange = ({ target }) =>
		dispatch(SET_REQUIRED_ITEM(target.value.trim()));

	return (
		<div className={styles.searchBlock}>
			<input
				className={styles.todoSearch}
				value={requiredItem}
				onChange={({ target }) => requiredItemChange({ target })}
			></input>
			<button
				className={`${styles.mainButtons} ${styles.SearchButton}`}
				onClick={() => getRequiredTodos()}
			>
				<span className={styles.searchSpan}> 🔎︎ </span>
			</button>
			<button
				className={`${styles.mainButtons} ${styles.HomeButton}`}
				onClick={() => dispatch(CHOOSE_CURRENT_DB(true))}
			>
				<span> ⌂ </span>
			</button>
		</div>
	);
};
