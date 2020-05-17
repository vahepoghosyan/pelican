import React, { useState } from 'react';

import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

import { useHistory, Redirect } from 'react-router-dom';

import { useGlobal } from '../../store';

function SignUp() {
	const history = useHistory();

	const [email, setEmail] = useState('vahitman47@gmail.com');
	const [phoneCode, setPhoneCode] = useState(0);
	const [phone, setPhone] = useState('095464229');
	const [password, setPassword] = useState('qweqwe');
	const [validated, setValidated] = useState(false);
	// const [isSelectInvalid, setIsSelectInvalid] = useState(false);

	const [
		{ errorMessage },
		{
			post: { signUp }
		}
	] = useGlobal();

	const handlePhone = event => {
		let reg = /^[0-9]*$/;

		// if (phone.length === 0 && event.target.value !== 0) {
		// 	event.preventDefault();
		// 	console.log(123);
		// }

		if (
			reg.test(event.target.value) &&
			event.target.value.length <= 9 &&
			!(phone.length === 0 && event.target.value !== '0')
		) {
			setPhone(event.target.value);
		} else {
			event.preventDefault();
		}
	};

	const handleSignUp = event => {
		if (email === '' || phone === '' || phone.length < 9 || password === '') {
			setValidated(true);
			// setIsSelectInvalid(true);
		} else {
		    signUp(
				{
                    phone,
					password,
					email,

				},
				history
			)
		}
	};

	return (
		<>
			<h3 className="text-center mb-5">Գրանցվել</h3>

			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

			<Form validated={validated}>
				{/*<Form.Row className="no-gutters">*/}
				{/*<Form.Group as={Col} xs={3}>*/}
				{/*	<Form.Label className="font-weight-bold">Հեռխոս</Form.Label>*/}
				{/*	<Form.Control*/}
				{/*		as="select"*/}
				{/*		custom*/}
				{/*		required*/}
				{/*		defaultValue={0}*/}
				{/*		onChange={event => setPhoneCode(event.target.value)}*/}
				{/*		isInvalid={isSelectInvalid}>*/}
				{/*		<option value={0} disabled>*/}
				{/*			Ընտրեք*/}
				{/*		</option>*/}
				{/*		<option>033</option>*/}
				{/*		<option>041</option>*/}
				{/*		<option>043</option>*/}
				{/*		<option>055</option>*/}
				{/*		<option>077</option>*/}
				{/*		<option>091</option>*/}
				{/*		<option>093</option>*/}
				{/*		<option>094</option>*/}
				{/*		<option>095</option>*/}
				{/*	</Form.Control>*/}
				{/*	<Form.Control.Feedback type="invalid">*/}
				{/*		Ընտրեք կոդը*/}
				{/*	</Form.Control.Feedback>*/}
				{/*</Form.Group>*/}
				<Form.Group>
					<Form.Label className="font-weight-bold">Հեռխոս</Form.Label>
					<Form.Control
						type="text"
						placeholder="Օրինակ 095 123 123"
						value={phone}
						onChange={handlePhone}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
				</Form.Group>
				{/*</Form.Row>*/}

				<Form.Group>
					<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
					<Form.Control
						type="text"
						placeholder="Էլ. հասցե"
						value={email}
						onChange={event => setEmail(event.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
				</Form.Group>
				<Form.Group>
					<Form.Label className="font-weight-bold">Գաղտնաբառ</Form.Label>
					<Form.Control
						type="password"
						placeholder="Գաղտնաբառ"
						value={password}
						onChange={event => setPassword(event.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
				</Form.Group>

				<Button variant="primary" block onClick={handleSignUp}>
					Գրանցվել
				</Button>
			</Form>
		</>
	);
}

export default SignUp;
