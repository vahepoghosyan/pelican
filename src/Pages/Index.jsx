// VENDORS
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from 'react-router-dom';

import { history, publicRoutes, privateRoutes } from 'Pages/routes';

import { useGlobal } from '../store';

import './index.scss';

import { Layout } from 'Layouts';

function Index() {
	const [{ isUserLoggedIn }] = useGlobal();

	const ROUTES = isUserLoggedIn ? privateRoutes : publicRoutes;

	return (
		<Router history={history}>
			<Layout>
				<Switch>
					{Object.entries(ROUTES).map(([routeKey, routeSettings]) => (
						<Route key={routeKey} exact={routeKey !== 'notFound'} {...routeSettings} />
					))}
				</Switch>
			</Layout>
		</Router>
	);
}

export default () => {
	ReactDOM.render(
		<Suspense fallback={null}>
			<Index />
		</Suspense>,
		document.getElementById('root')
	);
};
