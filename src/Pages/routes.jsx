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
		path: '/frontend',
		children: props => <Home {...props} />
	},
	signIn: {
		path: '/frontend/sign-in',
		children: props => <SignIn {...props} />
	},
	signUp: {
		path: '/frontend/sign-up',
		children: props => <SignUp {...props} />
	},
	withdrawalHistory: {
		path: '/frontend/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	forgetPassword: {
		path: '/frontend/forget-password',
		children: props => <ForgetPassword {...props} />
	},
	notFound: {
		path: '/frontend/',
		render: props => <NotFound {...props} />
	}
};

export const privateRoutes = {
	home: {
		path: '/frontend',
		children: props => <Home {...props} />
	},
	signIn: {
		path: '/frontend/sign-in',
		children: props => <SignIn {...props} />
	},
	signUp: {
		path: '/frontend/sign-up',
		children: props => <SignUp {...props} />
	},
	activationCode: {
		path: '/frontend/activation-code',
		children: props => <ActivationCode {...props} />
	},
	// settings: {
	// 	path: '/settings',
	// 	children: props => <Settings {...props} />
	// },
	withdrawalHistory: {
		path: '/frontend/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	forgetPassword: {
		path: '/frontend/forget-password',
		children: props => <ForgetPassword {...props} />
	},
	notFound: {
		path: '/frontend/',
		render: props => <NotFound {...props} />
	}
};

export { history };
