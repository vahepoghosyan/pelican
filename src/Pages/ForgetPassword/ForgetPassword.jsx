import React from 'react';

import { Form, Button, Col, Row, Title } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useGlobal } from '../../store';

function ForgetPassword() {
	const [{ forgetPasswordEmailVerified }, { SignIn }] = useGlobal();

	return (
		<>
			<h3 className="text-center mb-5">Գաղտնաբառի վերականգնում</h3>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
					<Form.Control type="text" placeholder="Enter email" />
				</Form.Group>
				<Form.Group>
					<Form.Label className="font-weight-bold">Նոր գաղտնաբառ</Form.Label>
					<Form.Control type="password" placeholder="Գաղտնաբառ" />
				</Form.Group>
				<Form.Group>
					<Form.Label className="font-weight-bold">Կրկնել գաղտնաբառ</Form.Label>
					<Form.Control type="password" placeholder="Գաղտնաբառ" />
				</Form.Group>
				<Button block variant="primary">Վերականգնել գաղտնաբառը</Button>
			</Form>
		</>
	);
}

// 307997 authorization code

export default ForgetPassword;
