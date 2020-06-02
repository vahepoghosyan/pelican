import React, { useEffect, useState } from 'react';

import { Spinner, Col, Button, Form, Row } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useGlobal } from '../../store';

import NotFound from '../NotFound/NotFound';
import SignUp from '../SignUp/SignUp';

function Withdrawal({ location }) {
	const history = useHistory();

	const service = location.state && location.state.service;

	const days = [
		1,
		2,
		3,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31
	];

	const [isChecked, setIsChecked] = useState(false);
	const [paymentDay, setPaymentDay] = useState(0);

	const [serviceIdentifier, setServiceIdentifier] = useState({
		value: '',
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});

	const [serviceIdentifierType, setServiceIdentifierType] = useState(
		(service && service.service_identificator_id) || 0
	);

	const [payAmount, setPayAmount] = useState({
		value: service && service.pay_max_amount,
		isInvalid: false,
		isValid: false,
		inValidMessage: ''
	});

	const [
		{ loader, isUserLoggedIn, servicesIdentifierTypes },
		{
			post: { withdrawal, addService },
			get: { getServicesIdentifierTypes }
		}
	] = useGlobal();

	useEffect(() => {
		getServicesIdentifierTypes();
	}, []);

	const serviceIdentifierIdName =
		servicesIdentifierTypes.length &&
		service &&
		servicesIdentifierTypes[+service.service_identificator_id - 1] &&
		servicesIdentifierTypes[+service.service_identificator_id - 1].name;

	const secondaryTitle = service
		? !!service.indetificator
			? `${service.indetificator} ${serviceIdentifierIdName}-ով «${service.name}» ծառայության վճարում`
			: `Մուտքագրեք «${service.name}» ծառայության  Ձեր տվյալները`
		: '';

	const handleDetailsChange = ({ target }) => {
		const { value } = target;

		setServiceIdentifier({ ...serviceIdentifier, value, isInvalid: !!!value.length, isValid: value !== '' });
	};

	const handleDetailsBlur = ({ target }) => {
		const { value } = target;

		value === '' &&
			setServiceIdentifier({
				...serviceIdentifier,
				isInvalid: true,
				inValidMessage: 'Այս դաշտը չի կարող լինել դատարկ'
			});
	};

	const handlePayAmountChange = ({ target }) => {
		let { value } = target;

		value = value.replace(/[^\d]/g, '');

		if (+value > +service.pay_max_amount) {
			setPayAmount({
				...payAmount,
				value,
				isInvalid: true,
				inValidMessage: 'Մուտքագրած գումարը գերազանցում է Ձեր մնացորդը'
			});
		} else {
			const isValid = value.length;
			setPayAmount({ ...payAmount, value, isInvalid: !!!value.length, isValid, inValidMessage: '' });
		}
	};

	const handlePayAmountBlur = ({ target }) => {
		const { value } = target;
		value === '' &&
			setPayAmount({
				...payAmount,
				isInvalid: true,
				inValidMessage: 'Այս դաշտը չի կարող լինել դատարկ'
			});
	};

	const handlePaymentDayChange = ({ target }) => {
		const { value } = target;

		setPaymentDay(value);
	};

	const handleWithdrawalClick = () => {
		withdrawal(
			{
				amount: service && service.pay_max_amount,
				userServiceId: service && service.monthly_service_id,
				api_key: localStorage.getItem('api_key'),
				userId: localStorage.getItem('user_id')
			},
			history
		);
	};

	const handleAddServiceClick = () => {
		addService({
			montlyServiceId: service && service.monthly_service_id,
			serviceIdentificator: serviceIdentifier.value,
			serviceIdentificatorType: serviceIdentifierType,
			avg_monthly_amount: null,
			set_default_date: paymentDay
		}).then(res => {
			withdrawal(
				{
					amount: service && service.pay_max_amount,
					userServiceId: service && service.monthly_service_id,
					api_key: localStorage.getItem('api_key'),
					userId: localStorage.getItem('user_id')
				},
				history
			);
		});
	};

	if (!service) {
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
		<>
			<Col md={6} className="mb-4">
				<h3 className="text-center mb-3">Գործարք</h3>
				<h6 className="text-center mb-4 font-weight-bold">{secondaryTitle}</h6>
				{service && !!!service.indetificator ? (
					<>
						<Form.Group>
							<Form.Label className="font-weight-bold">Ծառայության տվյալի տեսակը</Form.Label>
							<Form.Control
								as="select"
								custom
								disabled={!servicesIdentifierTypes.length}
								value={serviceIdentifierType}
								onChange={event => setServiceIdentifierType(event.target.value)}>
								<option value={0} disabled>
									Ընտրեք ծառայության տվյալի տեսակը
								</option>
								{servicesIdentifierTypes.map(identifier => {
									return (
										<option value={identifier.id} key={identifier.id}>
											{identifier.name}
										</option>
									);
								})}
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label className="font-weight-bold">Ձեր տվյալները</Form.Label>
							<Form.Control
								type="text"
								value={serviceIdentifier.value}
								disabled={serviceIdentifierType === 0}
								placeholder="Օրինակ 8 3123 234 435"
								onChange={handleDetailsChange}
								onBlur={handleDetailsBlur}
								isInvalid={serviceIdentifier.isInvalid}
								isValid={serviceIdentifier.isValid}
							/>
							<Form.Control.Feedback type="invalid">
								{serviceIdentifier.inValidMessage}
							</Form.Control.Feedback>
						</Form.Group>
					</>
				) : (
					''
				)}

				<Form.Group>
					<Form.Label className="font-weight-bold">Մուտքագրեք գումարը</Form.Label>
					<Form.Control
						type="text"
						value={payAmount.value}
						placeholder="Օրինակ՝ 1300"
						onChange={handlePayAmountChange}
						onBlur={handlePayAmountBlur}
						isInvalid={payAmount.isInvalid}
						isValid={payAmount.isValid}
					/>
					<Form.Control.Feedback type="invalid">{payAmount.inValidMessage}</Form.Control.Feedback>
				</Form.Group>
				{service && !service.user_service_id ? (
					<Row className="align-items-center">
						<Col>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check
									custom
									name="terms"
									label="Վճարել ամեն ամիս"
									onChange={event => {
										setIsChecked(event.target.checked);
									}}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Control
									as="select"
									disabled={!isChecked}
									custom
									value={paymentDay}
									onChange={handlePaymentDayChange}>
									<option disabled value={0}>
										Ընտրեք վճարման օրը
									</option>
									{days.map(day => (
										<option key={day}>{day}</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
				) : (
					''
				)}

				{isUserLoggedIn ? (
					service && !!service.indetificator ? (
						<Button variant="primary" disabled={payAmount.isInvalid} block onClick={handleWithdrawalClick}>
							Նվազեցնել պարտքը
						</Button>
					) : (
						<Button
							variant="primary"
							disabled={
								serviceIdentifierType === 0 ||
								serviceIdentifier.isInvalid ||
								serviceIdentifier.value === '' ||
								payAmount.isInvalid ||
								(isChecked && paymentDay === 0)
							}
							block
							onClick={handleAddServiceClick}>
							Նվազեցնել պարտքը
						</Button>
					)
				) : (
					''
				)}
			</Col>
			{!isUserLoggedIn ? (
				<SignUp
					isSignUpPage={false}
					balanceToWithdraw={service && service.pay_max_amount}
					serviceIdentificator={serviceIdentifier}
					serviceIdentificatorType={1}
					isChecked={isChecked}
					paymentDay={paymentDay}
				/>
			) : (
				''
			)}
		</>
	);
}

export default Withdrawal;
