import React from 'react';

import { Form, Button, Col, Row, Title } from 'react-bootstrap';

import { useGlobal } from '../../store';

function SignIn() {
	// const [{ isUserLoggedIn }, { SignIn }] = useGlobal();


	return (
		<>
			<h3 className="text-center mb-5">Իմ կարգավորումները</h3>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
					<Form.Control plaintext readOnly defaultValue="email@example.com" />
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label className="font-weight-bold">Հեռախոս</Form.Label>
					<Form.Control plaintext readOnly defaultValue="+374 55 123 123" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label className="font-weight-bold">Գաղտնաբառ</Form.Label>
					<Form.Control type="password" placeholder="Գաղտնաբառ" />
				</Form.Group>
				<Button block variant="primary">Պահպանել</Button>
			</Form>
		</>
	);
}

// 307997 authorization code

export default SignIn;
