import React, { Suspense, Fragment, useEffect } from 'react';

import { Spinner, Container, Row, Col } from 'react-bootstrap';

import { Header, Footer } from 'Layouts';

// import useStyles from './Layout.jss';

import { useGlobal } from '../../store';

function Layout({ children }) {
	const [
		{},
		{
			post: { getWallet }
		}
	] = useGlobal();

	useEffect(() => {
		getWallet({
			temptoken: localStorage.getItem('temptoken'),
			api_key: localStorage.getItem('api_key'),
			userId: localStorage.getItem('user_id')
		});
	}, []);

	return (
		<Fragment>
			<Suspense fallback={null}>
				<Header />
			</Suspense>

			<Container>
				<Row className="justify-content-center pt-5 pb-5">
					<Suspense
						fallback={
							<div className="d-flex justify-content-center align-items-center pt-5 pb-5">
								<Spinner animation="border" variant="primary" />
							</div>
						}>
						<Col sm={10} md={8}>
							{children}
						</Col>
					</Suspense>
				</Row>
			</Container>

			{/*<Suspense fallback={null}>*/}
			{/*    <Footer/>*/}
			{/*</Suspense>*/}
		</Fragment>
	);
}

export default Layout;
