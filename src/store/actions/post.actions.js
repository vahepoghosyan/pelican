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

export const signUp = (store, body, history, isSimpleReg) => {
	store.setState({ loader: true });

	axios
		.post(`https://pelicanbrowser.com/webapi/register`, body)
		.then(res => {
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

			localStorage.setItem('user_id', res.data.user_id);

			history.push({ pathname: '/frontend/activation-code', state: { isSimpleReg, isFromSignUp: true } });
		})
		.catch(err => {
			store.setState({
				errorMessage: err.response.status === 500 ? err.response.data : err.response.data.message,
				loader: false
			});
		});
};

export const activate = (store, body, history, isSimpleReg) => {
	axios
		.post(`https://pelicanbrowser.com/webapi/activate`, body)
		.then(res => {
			localStorage.setItem('api_key', res.data.api_key);
			localStorage.setItem('user_id', res.data.user_id);

			store.setState({ successActivateMessage: res.data.message, isUserLoggedIn: true, errorMessage: '' });

			setTimeout(() => {
				store.setState({ successActivateMessage: '' });
			}, 5000);

			isSimpleReg
				? history.push('/frontend')
				: history.push({ pathname: '/frontend/summary', state: { isFromWithdrawalOrActivate: true } });
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

export const withdrawal = (store, body, history) => {
	store.setState({ loader: true });
	axios
		.post(`https://pelicanbrowser.com/webapi/withdrawals`, body)
		.then(res => {
			store.setState({ successWithdrawalMessage: res.data.message, loader: false });

			setTimeout(() => {
				store.setState({ successWithdrawalMessage: '' });
			}, 5000);

			history.push({ pathname: '/frontend', state: { res: res.data, isFromWithdrawalOrActivate: true } });
		})
		.catch(err => {
			alert(err);
		});
};

export const getWallet = (store, body, history) => {
	store.setState({ loader: true });
	axios
		.post(`https://pelicanbrowser.com/webapi/wallet`, body, {
			headers: {
				'X-API-Key': localStorage.getItem('api_key')
			}
		})
		.then(res => {
			store.setState({ wallet: res.data, loader: false, isUserLoggedIn: !!!res.data.guestMode });
			// !!res.data.guestMode && history.push('/frontend/sign-in');
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.message, loader: false, isUserLoggedIn: false });
		});
};

export const addService = (store, body) => {
	store.setState({ loader: true });

	const request = axios.post(`https://pelicanbrowser.com/webapi/services`, body, {
		headers: {
			'X-API-Key': localStorage.getItem('api_key'),
			'X-USER-ID': localStorage.getItem('user_id')
		}
	});

	return request
		.then(res => {
			store.setState({ loader: false, successMessage: res.data.message });

			setTimeout(() => {
				store.setState({ successMessage: '' });
			}, 5000);

			return res;
		})
		.catch(err => {
			store.setState({ errorMessage: err.response.message, loader: false });
		});
};
