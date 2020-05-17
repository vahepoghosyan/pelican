export const signOut = (store, history) => {
	localStorage.setItem('api_key', '');
	history.push('/sign-in');
	store.setState({ isUserLoggedIn: false });
};
