import axios from 'axios';

export const getSettings = (store, body, userId) => {
	store.setState({ loader: true });
	const request = axios.get(`https://pelicanbrowser.com/webapi/users/${userId}`, {
		prams: body,
		headers: {
			'X-API-Key': localStorage.getItem('api_key')
		}
	});

	return request
		.then(res => {
			store.setState({ loader: false, settings: res.data });
			return res;
		})
		.catch(err => {
			alert(err);
		});
};

export const withdrawalHistory = (store, body, isPagination) => {
	if (isPagination) {
		store.setState({ withdrawalHistoryLoader: true });
		axios.post(`https://pelicanbrowser.com/webapi/withdrawalhistory`, body).then(res => {
			store.setState({
				withdrawalHistoryLoader: false,
				withdrawalsHistory: res.data
			});
		});
	} else {
		store.setState({ loader: true });
		const withdrawalHistory = axios.post(`https://pelicanbrowser.com/webapi/withdrawalhistory`, body);
		const withdrawalHistoryCount = axios.get(`https://pelicanbrowser.com/webapi/withdrawalhistorycount`, {
			headers: {
				'X-API-Key': localStorage.getItem('api_key'),
				'X-USER-ID': localStorage.getItem('user_id')
			}
		});
		axios
			.all([withdrawalHistory, withdrawalHistoryCount])
			.then(
				axios.spread((...res) => {
					store.setState({
						loader: false,
						withdrawalsHistory: res[0].data,
						withdrawalHistoryCount: res[1].data
					});
				})
			)
			.catch(err => {
				alert(err);
			});
	}
};

export const getMyServices = (store, userId) => {
	store.setState({ loader: true });
	axios
		.get(`https://pelicanbrowser.com/webapi/services`, {
			headers: {
				'X-API-Key': localStorage.getItem('api_key'),
				'X-USER-ID': localStorage.getItem('user_id')
			}
		})
		.then(res => {
			store.setState({ loader: false, myServices: res.data });
		})
		.catch(err => {
			alert(err);
		});
};

export const getAllServices = store => {
	axios
		.get(`https://pelicanbrowser.com/webapi/all?type=services`)
		.then(res => {
			store.setState({ allServices: res.data });
		})
		.catch(err => {
			alert(err);
		});
};

export const getServicesIdentifierTypes = store => {
	axios
		.get(`https://pelicanbrowser.com/webapi/all?type=service-identificator-types`)
		.then(res => {
			store.setState({ servicesIdentifierTypes: res.data });
		})
		.catch(err => {
			alert(err);
		});
};
