export const signOut = (store, history) => {
	localStorage.removeItem('api_key');
	localStorage.removeItem('user_id');
	history.push('/frontend/sign-in');
	store.setState({ isUserLoggedIn: false });
};
