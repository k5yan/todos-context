import styles from '../styles/TodoStyle.module.css';
import { AppContext } from '../App/context';
import { useContext } from 'react';

export const SearchBlock = () => {
	const { requiredItem, requiredItemChange, getRequiredTodos, setCurrentDB } =
		useContext(AppContext);
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
				onClick={() => setCurrentDB(true)}
			>
				<span> ⌂ </span>
			</button>
		</div>
	);
};
