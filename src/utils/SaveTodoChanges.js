//edit option
export const SaveTodoChanges = (params, todoText) => {
	fetch(`http://localhost:3004/todos/${params.id}`, {
		method: 'PUT',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			todo: todoText,
		}),
	});
};
