//new element option

export const MakeRawTodo = (refreshList) => {
	fetch('http://localhost:3004/todos', {
		method: 'POST',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			todo: 'Новая заметка',
			complete: false,
		}),
	}).finally(() => {
		refreshList();
	});
};
