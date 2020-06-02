import React, { Suspense, Fragment, useEffect } from 'react';

import { Spinner, Container, Row, Col } from 'react-bootstrap';

import { Header, Footer } from 'Layouts';

import { useHistory } from 'react-router-dom';

import { useGlobal } from '../../store';

function Layout({ children }) {

	return (
		<Fragment>
			<Suspense fallback={null}>
				<Header />
			</Suspense>

			<Container>
				<Row className="justify-content-center flex-column align-items-center pt-5 pb-5">
					<Suspense
						fallback={
							<div className="d-flex justify-content-center align-items-center pt-5 pb-5">
								<Spinner animation="border" variant="primary" />
							</div>
						}>
						{children}
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
