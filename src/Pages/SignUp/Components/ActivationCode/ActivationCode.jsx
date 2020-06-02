import React, { useEffect, useState } from 'react';

import { Form, Button, Col, Row, Alert, Spinner } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useGlobal } from '../../../../store';

import NotFound from '../../../NotFound/NotFound';

function ActivationCode({ location, amount = 600, userServiceId = 1 }) {
	const history = useHistory();

	const [activationCode, setActivationCode] = useState({
		value: '',
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});

	const isSimpleReg = (location.state && location.state.isSimpleReg) || false;
	const isFromSignUp = (location.state && location.state.isFromSignUp) || false;

	const [
		{ errorMessage, tempToken, user, loader },
		{
			post: { activate, resend, withdrawal }
		}
	] = useGlobal();

	const handleActivationCodeChange = ({target}) => {
		let value = target.value;

		value = value.replace(/[^\d]/g, '');

		if (value === '') {
			value = '';
		} else {
			value = value.substr(0, 6);
		}

		const isValid = value.length === 6;

		setActivationCode({
			...activationCode,
			value,
			isInvalid: false,
			isValid
		});
	};

	const handleActivationCodeBlur = ({target}) => {
		if (activationCode.value.length < 6) {
			setActivationCode({ ...activationCode, inValidMessage: 'Դաշտը պետք է պարունակի 6 թիվ', isInvalid: true });
		}
	};

	const handleActivate = event => {
		activate(
			{
				sms_activation_code: activationCode.value,
				temptoken: localStorage.getItem('temptoken'),
				email_activation_code: ''
			},
			history,
			isSimpleReg
		);
	};

	const handleRepeatSendTheCode = event => {
		event.preventDefault();

		resend({ email: user.email, phone: user.phone, temp_token: tempToken });
	};

	if (!isFromSignUp) {
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
		<Col md={8}>
			<h3 className="text-center mb-5">Ակտիվացում</h3>

			{!isSimpleReg && <p>Այս գործողությունը անելու եք միայն մեկ անգամ՝ համակարգում գրանցվելուց</p>}

			{!errorMessage && !!user.id && (
				<Alert variant="success">
					Համակարգում գրանցվելու համար մուտքագրեք 6-նիշ ունեցող կոդը որը ստացաք sms-ով
				</Alert>
			)}

			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

			<Form>
				<Form.Group>
					<Form.Label className="font-weight-bold">SMS կոդ</Form.Label>
					<Form.Control
						type="text"
						placeholder="Օրինակ 123456"
						value={activationCode.value}
						onChange={handleActivationCodeChange}
						onBlur={handleActivationCodeBlur}
						isInvalid={activationCode.isInvalid}
						isValid={activationCode.isValid}
					/>
					<Form.Control.Feedback type="invalid">{activationCode.inValidMessage}</Form.Control.Feedback>
					<a href="" onClick={handleRepeatSendTheCode}>
						<small>Կրկին ուղարկել SMS-ը</small>
					</a>
				</Form.Group>

				<Button variant="primary" disabled={activationCode.isInvalid || activationCode.value.length < 6} block onClick={handleActivate}>
					Ակտիվացնել
				</Button>
			</Form>
		</Col>
	);
}

export default ActivationCode;
