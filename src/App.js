import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TodosList } from './components/TodosList';
import { Todo } from './components/Todo';

export function App() {
	return (
		<>
			<div className="App" />
			<Routes>
				<Route path="/" element={<TodosList />} />
				<Route path="/todo/:id" element={<Todo />} />
			</Routes>
		</>
	);
}
