//edit option
export const SetComplete = (id, complete, titleTodoText) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			todo: titleTodoText,
			complete: !complete,
		}),
	});
};
