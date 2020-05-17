// VENDORS
import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Button, Container, Row, Col, Nav } from 'react-bootstrap';

// COMPONENTS

import { useGlobal } from '../../store';

export default function ButtonAppBar() {
	const history = useHistory();

	const [
		{ isUserLoggedIn, wallet },
		{
			simple: { signOut }
		}
	] = useGlobal();

	const handleLogout = event => {
		signOut(history);
	};

	return (
		<Container>
			<Row className="justify-content-space-between align-items-center pt-3 pb-3">
				<Col xs={2}>
					<Link to="/frontend">
						<img src="/assets/img/pelican.png" className="mw-100" alt="logo" />
					</Link>
				</Col>
				<Col className="text-right">
					{wallet && (
						<div className="d-flex justify-content-end align-items-center">
							{isUserLoggedIn ? (
								<Nav activeKey="/home">
									<Nav.Item>
										<Nav.Link as={Link} to="/frontend">
											Դրամապանակ
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link as={Link} to="/frontend/withdrawal-history">
											Գործարքներ
										</Nav.Link>
									</Nav.Item>
									{/*<Nav.Item>*/}
									{/*	<Nav.Link as={Link} to="/settings">*/}
									{/*		Կարգավորումներ*/}
									{/*	</Nav.Link>*/}
									{/*</Nav.Item>*/}
								</Nav>
							) : (
								''
							)}
							<h6 className="m-0 ml-5">
								Մնացորդ:{' '}
								<span className="font-weight-bold text-primary">{wallet.userData.balance}֏</span>
							</h6>
							{!isUserLoggedIn ? (
								<>
									<Link to="/frontend/sign-in" className="ml-3">
										<Button variant="outline-primary">Մուտք</Button>
									</Link>
									<Link to="/frontend/sign-up" className="ml-3">
										<Button>Գրանցվել</Button>
									</Link>
								</>
							) : (
								''
							)}
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
}
