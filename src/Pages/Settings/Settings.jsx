import React, { useEffect, useMemo, useState } from 'react';

import { Form, Button, Col, Row, Nav, Tab, Tabs, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useGlobal } from '../../store';

function Settings() {
	const [
		{ loader, settings, myServices, successMessage },
		{
			get: { getSettings, getMyServices },
			update: { updateUser }
		}
	] = useGlobal();

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

	const [serviceName, setServiceName] = useState('Ջուր');
	const [paymentDay, setPaymentDay] = useState(1);
	const [monthlyGoal, setMonthlyGoal] = useState('');

	const [settingsItem, setSettingsItem] = useState(null);

	useEffect(() => {
		getSettings({ api_key: localStorage.getItem('api_key') }, localStorage.getItem('user_id')).then(res => {
			getMyServices(localStorage.getItem('user_id'));
		});
	}, []);

	useEffect(() => {
		if (settings.length) {
			setSettingsItem(settings[0]);
			setMonthlyGoal(settings[0].monthly_goal);
			setServiceName(settings[0].default_service_name);
			setPaymentDay(settings[0].default_service_pay_day_number);
		}
	}, [settings]);

	const handleMonthlyGoalChange = ({ target }) => {
		let { value } = target;

		value = value.replace(/[^\d]/g, '');

		setMonthlyGoal(value);
	};

	const handleMyServiceChange = ({ target }) => {
		setServiceName(target.value);
	};

	const handlePaymentDayChange = ({ target }) => {
		setPaymentDay(target.value);
	};

	const handleUpdateClick = ({ target }) => {
		const filteredServiceId = myServices.filter(service => service.montly_service_name === serviceName)[0]
			.user_service_id;

		updateUser({
			update: {
				monthly_goal: monthlyGoal,
				email: `'${settingsItem.email}'`,
				default_service_pay_day_number: paymentDay,
				default_user_service_id: filteredServiceId
			}
		});
	};

	if (loader) {
		return (
			<div className="d-flex justify-content-center align-items-center pt-5 pb-5 spinner">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}

	return (
		<Col md={8}>
			<h3 className="text-center mb-5">Իմ կարգավորումները</h3>

			{successMessage && <Alert variant="success">{successMessage}</Alert>}

			<Form>
				<h5 className="text-center mb-5">Վճարումների կարգավորումներ</h5>
				<Form.Group>
					<Form.Label className="font-weight-bold">Ամսական ցանկալի գումար</Form.Label>
					<Form.Control value={monthlyGoal || ''} onChange={handleMonthlyGoalChange} />
				</Form.Group>
				{myServices.length ? (
					<>
						<hr className="divider" />
						<Form.Label className="font-weight-bold">
							Ընտրված ամսական ավտոմատ վճարման ծառայություն
						</Form.Label>
						<Row className="align-items-center">
							<Col>
								<Form.Group>
									<Form.Control
										as="select"
										custom
										value={serviceName}
										onChange={handleMyServiceChange}>
										<option disabled value={0}>
											Ընտրեք ծառայությունը
										</option>
										{myServices.map((service, index) => {
											return (
												<option key={index} value={service.montly_service_name}>
													{service.montly_service_name + ' ' + service.indetificator}
												</option>
											);
										})}
									</Form.Control>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Control
										as="select"
										custom
										value={paymentDay}
										onChange={handlePaymentDayChange}>
										<option value={0}>Ընտրեք վճարման օրը</option>
										{days.map(day => (
											<option key={day}>{day}</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
					</>
				) : (
					''
				)}

				<hr className="divider" />
				<h5 className="text-center mb-3">Անձնական տվյալներ</h5>
				<Form.Group>
					<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
					<Form.Control disabled value={(settingsItem && settingsItem.email) || ''} />
				</Form.Group>

				<Form.Group>
					<Form.Label className="font-weight-bold">Հեռախոս</Form.Label>
					<Form.Control disabled value={(settingsItem && settingsItem.phone) || ''} />
					<Form.Text className="text-muted">Հեռախոսահամարի փոփոխության համար դիմեք մեզ</Form.Text>
					<Link to="/frontend/change-password">
						<small>Փոփոխել գաղտնաբառը</small>
					</Link>
				</Form.Group>
				<Form.Group className="mb-5">
					<Button block variant="primary" onClick={handleUpdateClick}>
						Պահպանել
					</Button>
				</Form.Group>
			</Form>
		</Col>
	);
}

// 307997 authorization code

export default Settings;
