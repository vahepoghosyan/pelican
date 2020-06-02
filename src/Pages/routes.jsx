import React, { lazy } from 'react';

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
const ChangePassword = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/ChangePassword/ForgetPassword'));
const MyServices = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/MyServices/MyServices'));
const Withdrawal = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/Withdrawal/Withdrawal'));
const Summary = lazy(() => import(/* webpackChunkName: "pages/signUp" */ 'Pages/Summary/Summary'));
const NotFound = lazy(() => import(/* webpackChunkName: "pages/NotFound" */ 'Pages/NotFound/NotFound'));


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
		children: props => <SignUp isSignUpPage={true} {...props} />
	},
	activationCode: {
		path: '/frontend/activation-code',
		children: props => <ActivationCode {...props} />
	},
	withdrawalHistory: {
		path: '/frontend/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	forgetPassword: {
		path: '/frontend/forget-password',
		children: props => <ChangePassword isChange={false} {...props} />
	},
	withdrawal: {
		path: '/frontend/withdrawal',
		children: props => <Withdrawal {...props} />
	},
	summary: {
		path: '/frontend/summary',
		children: props => <Summary {...props} />
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
	settings: {
		path: '/frontend/settings',
		children: props => <Settings {...props} />
	},
	withdrawalHistory: {
		path: '/frontend/withdrawal-history',
		children: props => <WithdrawalHistory {...props} />
	},
	changePassword: {
		path: '/frontend/change-password',
		children: props => <ChangePassword isChange={true} {...props} />
	},
	myServices: {
		path: '/frontend/my-services',
		children: props => <MyServices {...props} />
	},
	withdrawal: {
		path: '/frontend/withdrawal',
		children: props => <Withdrawal {...props} />
	},
	summary: {
		path: '/frontend/summary',
		children: props => <Summary {...props} />
	},
	notFound: {
		path: '/frontend/',
		render: props => <NotFound {...props} />
	},
};
