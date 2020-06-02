import axios from 'axios';

export const updateUser = (store, body) => {
	const request = axios.patch(`https://pelicanbrowser.com/webapi/users/${localStorage.getItem('user_id')}`, body, {
		headers: {
			'X-API-Key': localStorage.getItem('api_key'),
			'X-USER-ID': localStorage.getItem('user_id')
		}
	});

	return request
		.then(res => {
			store.setState({ successMessage: res.data.message });

			setTimeout(() => {
				store.setState({ successMessage: '' });
			}, 5000);

			return res;
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			alert(err);
		});
};
