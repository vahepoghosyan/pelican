import React, { useEffect, useState } from 'react';

import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import { useGlobal } from '../../store';

function SignIn() {
	const history = useHistory();

	const [
		{ errorMessage },
		{
			post: { signIn }
		}
	] = useGlobal();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [validated, setValidated] = useState(false);

	const handleSignIn = event => {
		if (login === '' || password === '') {
			setValidated(true);
		} else {
			signIn(
				{
					login,
					password
				},
				history
			);
		}
	};

	useEffect(() => {
		errorMessage !== '' && setValidated(false);
	}, [errorMessage]);

	return (
		<>
			<h3 className="text-center mb-5">Մուտք գործել</h3>
			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
			<Form validated={validated}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label className="font-weight-bold">Էլ. հասցե կամ հեռխոս</Form.Label>
					<Form.Control
						type="text"
						placeholder="Էլ. հասցե կամ հեռխոս"
						onChange={event => setLogin(event.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label className="font-weight-bold">Գաղտնաբառ</Form.Label>
					<Form.Control
						type="password"
						placeholder="Գաղտնաբառ"
						className="mb-2"
						onChange={event => setPassword(event.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
					<Link to="/frontend/forget-password">
						<small>Գաղտնաբառի վերականգնում</small>
					</Link>
				</Form.Group>
				<Button block variant="primary" onClick={handleSignIn}>
					Մուտք
				</Button>
			</Form>
		</>
	);
}

export default SignIn;
