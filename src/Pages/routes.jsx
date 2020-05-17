// VENDORS
import React, { lazy } from 'react';

// COMPONENTS
const Home = lazy(() => import(/* webpackChunkName: "pages/home" */ 'Pages/Home/Home'));
const SignIn = lazy(() => import(/* webpackChunkName: "pages/signIn" */ 'Pages/SignIn/SignIn'));
const SignUp = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/SignUp/SignUp'));
const ActivationCode = lazy(() =>
	import(/* webpackChunkName: "pages/signUp" */ 'Pages/SignUp/Components/ActivationCode/ActivationCode')
);
const Settings = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/Settings/Settings'));
const WithdrawalHistory = lazy(() =>
	import(/* webpackChunkName: "pages/signUp" */ 'Pages/WithdrawalHistory/WithdrawalHistory')
);
const ForgetPassword = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/ForgetPassword/ForgetPassword'));
const NotFound = lazy(() => import(/* webpackChunkName: "pages/NotFound" */ 'Pages/NotFound/NotFound'));

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const publicRoutes = {
	home: {
		path: '/',
		children: props => <Home {...props} />
	},
	signIn: {
		path: '/sign-in',
		children: props => <SignIn {...props} />
	},
	signUp: {
		path: '/sign-up',
		children: props => <SignUp {...props} />
	},
	withdrawalHistory: {
		path: '/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	forgetPassword: {
		path: '/forget-password',
		children: props => <ForgetPassword {...props} />
	},
	notFound: {
		path: '/',
		render: props => <NotFound {...props} />
	}
};

export const privateRoutes = {
	home: {
		path: '/',
		children: props => <Home {...props} />
	},
	signIn: {
		path: '/sign-in',
		children: props => <SignIn {...props} />
	},
	signUp: {
		path: '/sign-up',
		children: props => <SignUp {...props} />
	},
	activationCode: {
		path: '/activation-code',
		children: props => <ActivationCode {...props} />
	},
	// settings: {
	// 	path: '/settings',
	// 	children: props => <Settings {...props} />
	// },
	withdrawalHistory: {
		path: '/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	forgetPassword: {
		path: '/forget-password',
		children: props => <ForgetPassword {...props} />
	},
	notFound: {
		path: '/',
		render: props => <NotFound {...props} />
	}
};

export { history };
