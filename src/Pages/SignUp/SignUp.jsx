import React, { useEffect, useState } from 'react';

import { Form, Button, Col, Row, Alert, Spinner } from 'react-bootstrap';

import { useHistory, Redirect } from 'react-router-dom';

import { useGlobal } from '../../store';

function SignUp({
	isSignUpPage,
	balanceToWithdraw,
	serviceIdentificatorType = 1,
	serviceIdentificator,
	isChecked,
	paymentDay
}) {
	const history = useHistory();

	const [phone, setPhone] = useState({
		value: '',
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});
	const [email, setEmail] = useState({
		value: '',
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});
	const [password, setPassword] = useState({
		value: '',
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});

	const [isInValidForm, setIsInValidForm] = useState(false);

	const [
		{ errorMessage, loader },
		{
			post: { signUp }
		}
	] = useGlobal();

	// useEffect(() => {
	//
	// }, []);

	const handlePhoneChange = event => {
		let value = event.target.value;

		value = value.replace(/[^\d]/g, '').replace(/^0{2,}/, '0');

		if (value === '') {
			value = '';
		} else {
			if (value[0] !== '0') {
				value = '0' + value;
			}

			value = value.substr(0, 9);
		}

		const isValid = value.length === 9;

		setPhone({
			...phone,
			value,
			isInvalid: false,
			isValid
		});

		setIsInValidForm(!(isValid && email.isValid && password.isValid));
	};

	const handlePhoneBlur = event => {
		if (phone.value.length < 9) {
			setPhone({ ...phone, inValidMessage: 'Դաշտը պետք է պարունակի 9 թիվ', isInvalid: true });
		}
	};

	const handleEmailChange = ({ target }) => {
		const { value } = target;
		const regEmail = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

		const isValid = regEmail.test(value);

		setEmail({ ...email, value, isInvalid: false, isValid });

		setIsInValidForm(!(phone.isValid && isValid && password.isValid));
	};

	const handleEmailBlur = ({ target }) => {
		const { value } = target;
		const regEmail = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

		!regEmail.test(value) &&
			setEmail({ ...email, isInvalid: true, inValidMessage: 'Դաշտը պետք է պարունակի վավեր էլ. հասցե' });
	};

	const handlePasswordChange = ({ target }) => {
		const { value } = target;

		const isValid = value.length >= 4;

		setPassword({ ...email, value, isInvalid: false, isValid });

		setIsInValidForm(!(phone.isValid && email.isValid && isValid));
	};

	const handlePasswordBlur = ({ target }) => {
		const { value } = target;

		value.length < 4 &&
			setPassword({ ...email, isInvalid: true, inValidMessage: 'Դաշտը պետք է պարունակի առնվազն 4 նիշ' });
	};

	const handleSignUp = event => {
		if (isSignUpPage) {
			signUp(
				{
					phone: phone.value,
					email: email.value,
					password: password.value,
					temptoken: localStorage.getItem('temptoken')
				},
				history,
				true
			);
		} else {
			signUp(
				{
					phone: phone.value,
					email: email.value,
					password: password.value,
					temptoken: localStorage.getItem('temptoken'),
					serviceIdentificator: serviceIdentificator.value,
					serviceIdentificatorType,
					balanceToWithdraw
				},
				history,
				false
			);
		}
	};

	if (loader) {
		return (
			<div className="d-flex justify-content-center align-items-center pt-5 pb-5 spinner">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}

	return (
		<Col md={7}>
			{isSignUpPage ? (
				<h3 className="text-center mb-5">Գրանցվել</h3>
			) : (
				<h5 className="text-center mb-4">Մուտքագրեք Ձեր հեռախոսահամարը և էլ. հասցեն</h5>
			)}

			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

			<Form>
				<Form.Group>
					<Form.Label className="font-weight-bold">Հեռխոս</Form.Label>
					<Form.Control
						type="text"
						placeholder="Օրինակ 095 123 123"
						value={phone.value}
						maxLength={9}
						onChange={handlePhoneChange}
						onBlur={handlePhoneBlur}
						isInvalid={phone.isInvalid}
						isValid={phone.isValid}
					/>
					<Form.Control.Feedback type="invalid">{phone.inValidMessage}</Form.Control.Feedback>
				</Form.Group>
				<Form.Group>
					<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
					<Form.Control
						type="text"
						placeholder="Օրինակ՝ name@example.com"
						value={email.value}
						onChange={handleEmailChange}
						onBlur={handleEmailBlur}
						isInvalid={email.isInvalid}
						isValid={email.isValid}
					/>
					<Form.Control.Feedback type="invalid">{email.inValidMessage}</Form.Control.Feedback>
				</Form.Group>
				{/*TODO Birth input and validation*/}
				{/*<Form.Group>*/}
				{/*	<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>*/}
				{/*	<Form.Control*/}
				{/*		type="date"*/}
				{/*		placeholder="Օրինակ name@example.com"*/}
				{/*		value={email.value}*/}
				{/*		onChange={handleEmailChange}*/}
				{/*		onBlur={handleEmailBlur}*/}
				{/*		isInvalid={email.isInvalid}*/}
				{/*		isValid={email.isValid}*/}
				{/*	/>*/}
				{/*	<Form.Control.Feedback type="invalid">{email.inValidMessage}</Form.Control.Feedback>*/}
				{/*</Form.Group>*/}
				<Form.Group>
					<Form.Label className="font-weight-bold">Գաղտնաբառ</Form.Label>
					<Form.Control
						type="password"
						placeholder="••••••••"
						value={password.value}
						onChange={handlePasswordChange}
						onBlur={handlePasswordBlur}
						isInvalid={password.isInvalid}
						isValid={password.isValid}
					/>
					<Form.Control.Feedback type="invalid">{password.inValidMessage}</Form.Control.Feedback>
				</Form.Group>

				<Button variant="primary" disabled={isInValidForm} block onClick={handleSignUp}>
					{isSignUpPage ? 'Գրանցվել' : 'Նվազեցնել պարտքը ' + balanceToWithdraw + '֏-ով'}
				</Button>
			</Form>
		</Col>
	);
}

export default SignUp;
