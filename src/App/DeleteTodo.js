//delete element option
export const DeleteTodo = (params, redirect) => {
	fetch(`http://localhost:3004/todos/${params.id}`, {
		method: 'DELETE',
	}).finally(() => redirect('/'));
};
