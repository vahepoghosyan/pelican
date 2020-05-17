export const signOut = (store, history) => {
	localStorage.setItem('api_key', '');
	history.push('/frontend/sign-in');
	store.setState({ isUserLoggedIn: false });
};
