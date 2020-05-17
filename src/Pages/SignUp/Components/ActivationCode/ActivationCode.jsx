import React, { useState } from 'react';

import { Form, Button, Col, Row, Alert } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useGlobal } from '../../../../store';

function SignUp() {
	const history = useHistory();

	const [activationCode, setActivationCode] = useState('');

	const [
		{ errorMessage, tempToken, user },
		{
			post: { activate, resend }
		}
	] = useGlobal();

	const handleActivate = event => {
		activate(
			{
				sms_activation_code: activationCode,
				temp_token: tempToken
			},
			history
		);
		// 	let reg = /^[0-9]*$/;
		//
		// 	// if (phone.length === 0 && event.target.value !== 0) {
		// 	// 	event.preventDefault();
		// 	// 	console.log(123);
		// 	// }
		//
		// 	if (
		// 		reg.test(event.target.value) &&
		// 		event.target.value.length <= 9 &&
		// 		!(phone.length === 0 && event.target.value !== '0')
		// 	) {
		// 		setPhone(event.target.value);
		// 	} else {
		// 		event.preventDefault();
		// 	}
	};

	const handleRepeatSendTheCode = event => {
		event.preventDefault();

		resend({ email: user.email, phone: user.phone, temp_token: tempToken });
	};

	return (
		<>
			<h3 className="text-center mb-5">Ակտիվացիա</h3>
			{/*<p>Համակարգում գրանցվելու համար մուտքագրեք 6-անիշ ունեցող կոդը որը ստացաք sms-ով</p>*/}
			{true && !errorMessage && <Alert variant="success">Համակարգում գրանցվելու համար մուտքագրեք 6-անիշ ունեցող կոդը որը ստացաք sms-ով</Alert>}
			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
			<Form>
				<Form.Group>
					<Form.Label className="font-weight-bold">SMS կոդ</Form.Label>
					<Form.Control
						type="text"
						placeholder="SMS կոդ"
						onChange={event => setActivationCode(event.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">Այս դաշտը չի կարող լինել դատարկ</Form.Control.Feedback>
					<a href="" onClick={handleRepeatSendTheCode}>
						<small>Կրկին ուղարկել SMS-ը</small>
					</a>
				</Form.Group>

				<Button variant="primary" block onClick={handleActivate}>
					Ակտիվացնել
				</Button>
			</Form>
		</>
	);
}

export default SignUp;
