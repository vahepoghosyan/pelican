import React, { useState } from 'react';

import { Form, Button, Col, Row, Alert, Spinner } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import { useGlobal } from '../../store';
import NotFound from '../NotFound/NotFound';

function Summary({ location }) {
	const history = useHistory();

	const [{ successActivateMessage, successWithdrawalMessage, loader }] = useGlobal();

	const isFromWithdrawalOrActivate = (location.state && location.state.isFromWithdrawalOrActivate) || false;

	if (!isFromWithdrawalOrActivate) {
		return <NotFound />;
	}

	if (loader) {
		return (
			<div className="d-flex justify-content-center align-items-center pt-5 pb-5 spinner">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}

	return (
		<Col md={5} className='text-center' >
			<h3 className=" mb-5">Ամփոփում</h3>
			<p className='mb-4'>{successActivateMessage || successWithdrawalMessage}</p>
			<Button as={Link} to="/frontend">
				Վերադառնալ դրամապանակ
			</Button>
		</Col>
	);
}

export default Summary;
