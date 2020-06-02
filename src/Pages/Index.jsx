// VENDORS
import React, { Suspense, useEffect } from 'react';

import { hot } from 'react-hot-loader';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { publicRoutes, privateRoutes } from 'Pages/routes';

import { useGlobal } from '../store';

import './index.scss';

import { Layout } from 'Layouts';

function Index() {
	const [
		{ isUserLoggedIn },
		{
			post: { getWallet }
		}
	] = useGlobal();

	const ROUTES = isUserLoggedIn ? privateRoutes : publicRoutes;

	useEffect(() => {
		// getWallet(
		// 	{
		// 		temptoken: localStorage.getItem('temptoken'),
		// 		api_key: localStorage.getItem('api_key'),
		// 		userId: localStorage.getItem('user_id')
		// 	},
		// 	history
		// );
	}, []); // TODO remove before build

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					{Object.entries(ROUTES).map(([routeKey, routeSettings]) => (
						<Route key={routeKey} exact={routeKey !== 'notFound'} {...routeSettings} />
					))}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

const AppHot = hot(module)(Index);

if (process.env.NODE_ENV !== 'production' && module.hot) {
	window.addEventListener('message', e => {
		console.clear();
	});
}

export default () => {
	ReactDOM.render(
		<Suspense fallback={null}>
			<AppHot />
		</Suspense>,
		document.getElementById('root')
	);
};
