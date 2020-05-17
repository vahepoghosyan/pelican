import axios from 'axios';

export const signIn = (store, body, history) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/login`, body)
		.then(res => {
			localStorage.setItem('api_key', res.data.api_key);
			localStorage.setItem('user_id', res.data.user_id);
			history.push('/frontend');
			store.setState({ isUserLoggedIn: true, errorMessage: '' });
		})
		.catch(err => {
			if (err.response.status === 401) {
				store.setState({ errorMessage: err.response.data.message });
				// console.log(err.response.data.message);
				// store.setState({ error: true });
			}
			return err;
		});
};

export const signUp = (store, body, history) => {
	store.setState({ loader: true });
	axios
		.post(`https://pelicanbrowser.com/webapi/register`, body)
		.then(res => {
			// console.log(res.data);
			store.setState({
				user: {
					id: res.data.user_id,
					phone: body.phone,
					email: body.email
				},
				tempToken: res.data.temp_token,
				errorMessage: '',
				loader: false
			});

			history.push('/frontend/activation-code');
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.data.message, loader: false });
		});
};

export const activate = (store, body, history) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/activate`, body)
		.then(res => {
			if (res.status === 200) {
				history.push('/frontend');
			}
			store.setState({ errorMessage: '' });
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.data.message });
		});
};

export const resend = (store, body) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/resend`, body)
		.then(res => {
			console.log(res);
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.data.message });
		});
};

export const changePassword = (store, body) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/changepass`, body)
		.then(res => {
			console.log(res);
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			alert(err);
		});
};

export const forgotPassword = (store, body) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/forgot`, body)
		.then(res => {
			console.log(res);
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			alert(err);
		});
};

export const withdrawal = (store, body) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/withdrawals`, body)
		.then(res => {
			console.log(res);
			// localStorage.setItem('token', res.data.response);
		})
		.catch(err => {
			alert(err);
		});
};

export const getWallet = (store, body) => {
	store.setState({ loader: true });
	axios
		.post(`https://pelicanbrowser.com/webapi/wallet`, body)
		.then(res => {
			store.setState({ wallet: res.data, loader: false, isUserLoggedIn: !!!res.data.guestMode});
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.message, loader: false, isUserLoggedIn: false });
		});
};
