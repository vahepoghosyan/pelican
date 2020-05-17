import axios from 'axios';

export const settings = (store, body, userId) => {
	try {
		const response = axios.get(`https://pelicanbrowser.com/webapi/users/${userId}`, body);
	} catch (error) {
		const isError404 = error.response && error.response.status === 404;
		const status = isError404 ? 'NOT_FOUND' : 'ERROR';
		// store.setState({ status });
		// store.actions.counter.addFail();
	}
};

export const withdrawalHistory = (store, body) => {
	store.setState({ loader: true });
	axios
		.post(`https://pelicanbrowser.com/webapi/withdrawalhistory`, body)
		.then(res => {
			store.setState({ loader: false, withdrawalsHistory: res.data });
		})
		.catch(err => {
			alert(err);
		});
};

export const services = (store, body) => {
	axios
		.get(`https://pelicanbrowser.com/webapi/services`, {
			headers: { 'Content-Type': 'application/json' },
			params: body
		})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			alert(err);
		});
};
