import React, { useEffect, useState } from 'react';

import { Table, Spinner, Col, Button, Modal, Form, Row, Alert } from 'react-bootstrap';

import { useGlobal } from '../../store';

function MyServices() {
	const [showAddServiceModal, setShowAddServiceModal] = useState(false);
	const [showSetDefaultService, setShowSetDefaultService] = useState(false);
	const [service, setService] = useState(0);
	const [paymentDay, setPaymentDay] = useState('15');
	const [defaultPaymentDay, setDefaultPaymentDay] = useState('15');
	const [isChecked, setIsChecked] = useState(false);
	const [serviceDetails, setServiceDetails] = useState('');
	const [serviceData, setServiceData] = useState({});
	const [serviceIdentifierType, setServiceIdentifierType] = useState(0);
	const [defaultService, setDefaultService] = useState('');

	const [
		{ loader, myServices, allServices, servicesIdentifierTypes, successMessage },
		{
			get: { getMyServices, getAllServices, getServicesIdentifierTypes },
			post: { addService },
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

	useEffect(() => {
		getMyServices(localStorage.getItem('user_id'));
		getAllServices();
		getServicesIdentifierTypes();
	}, []);

	const handleClose = () => {
		setService(0);
		setServiceIdentifierType(0);
		setIsChecked(false);
		setServiceDetails('');
		setPaymentDay('15');
		setDefaultPaymentDay('15');
		setShowAddServiceModal(false);
		setShowSetDefaultService(false);
	};

	const handleShow = (isAddService, serviceId) => () => {
		if (isAddService) {
			setShowAddServiceModal(true);
		} else {
			setShowSetDefaultService(true);
			setDefaultService(serviceId);
		}
	};

	const handlePaymentDayChange = ({ target }) => {
		setPaymentDay(target.value);
	};

	const handleDefaultPaymentDayChange = ({ target }) => {
		setDefaultPaymentDay(target.value);
	};

	const handleAddService = () => {
		addService({
			montlyServiceId: serviceData.id,
			serviceIdentificator: serviceDetails,
			serviceIdentificatorType: serviceIdentifierType,
			avg_monthly_amount: null,
			set_default_date: paymentDay
		}).then(res => getMyServices(localStorage.getItem('user_id')));
		handleClose();
	};

	const handleSetDefaultService = () => {
		updateUser({
			update: {
				default_user_service_id: defaultService,
				default_service_pay_day_number: defaultPaymentDay
			}
		}).then(res => getMyServices(localStorage.getItem('user_id')));
		handleClose();
	};

	return (
		<Col md={12}>
			<h3 className="text-center mb-5">Իմ ծառայությունները</h3>

			{successMessage && (
				<Row className="justify-content-center">
					<Col md={6}>
						<Alert variant="success">{successMessage}</Alert>
					</Col>
				</Row>
			)}

			<div className="text-center">
				<Button onClick={handleShow(true)} disabled={!allServices.length}>
					Ավելացնել Ծառայություն
				</Button>
			</div>
			{loader ? (
				<div className="d-flex justify-content-center align-items-center pt-5 pb-5 spinner">
					<Spinner animation="border" variant="primary" />
				</div>
			) : myServices.length ? (
				<Table responsive className="text-center">
					<thead>
						<tr>
							<th>Ծառայություն</th>
							<th>Հիմնական ավտոմատ վճարում</th>
							<th>Ձեր ամսվա միջինը</th>
							<th>Մեր օգտատերերի ամսական միջինը</th>
						</tr>
					</thead>
					<tbody>
						{myServices.map((service, index) => {
							console.log(service);
							return (
								<tr key={index}>
									<td>
										{service.montly_service_name}{' '}
										<span className="font-weight-bold">{service.indetificator}</span>
									</td>
									<td>
										{service.default_service === '1' ? (
											<div>
												ամեն ամսվա{' '}
												<span className="text-primary font-weight-bold">
													{service.default_service_pay_day_number}
												</span>
											</div>
										) : (
											<Button
												variant="outline-primary"
												onClick={handleShow(false, service.user_service_id)}>
												Դարձնել հիմնական
											</Button>
										)}
									</td>
									<td>
										<span className="font-weight-bold text-primary h5">
											{service.avg_monthly_amount ? service.avg_monthly_amount + '֏' : '-'}
										</span>
									</td>
									<td>
										<span className="font-weight-bold text-primary h5">
											{service.avg_monthly_credits ? service.avg_monthly_credits + '֏' : '-'}
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			) : (
				<h5 className="pt-5 mt-5 text-center">Դուք չունեք ավելացրած ծառայություն</h5>
			)}

			<Modal show={showAddServiceModal} size="lg" onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Ծառայություններ</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pt-4 pb-4">
					<Form.Group>
						<Form.Label className="font-weight-bold">Ծառայություններ</Form.Label>
						<Form.Control
							as="select"
							custom
							defaultValue={service}
							onChange={({ target }) => {
								setService(target.value);

								const selectedItem = allServices.filter(item => {
									return item.name === target.value;
								});

								setServiceData(selectedItem[0]);
							}}>
							<option disabled value={0}>
								Ընտրեք ծառայությունը
							</option>
							{allServices.length &&
								allServices.map((service, index) => {
									return (
										<option key={index} disabled={+service.disabled}>
											{service.name}
										</option>
									);
								})}
						</Form.Control>
					</Form.Group>
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
						<Form.Label className="font-weight-bold">Մուտքագրեք տվյալները</Form.Label>
						<Form.Control
							placeholder="Օրինակ՝ 123321234"
							value={serviceDetails}
							disabled={service === 0 || serviceIdentifierType === 0}
							onChange={({ target }) => setServiceDetails(target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check
								custom
								name="terms"
								label="Դարձնել ամսական ավտոմատ վճարվող ծառայություն"
								disabled={service === 0}
								onChange={({ target }) => setIsChecked(target.checked)}
							/>
						</Form.Group>
						{isChecked ? (
							<>
								<Form.Label className="font-weight-bold">Ընտրեք վճարման օրը</Form.Label>
								<Form.Control
									as="select"
									custom
									defaultValue={paymentDay}
									onChange={handlePaymentDayChange}>
									{days.map(day => (
										<option key={day}>{day}</option>
									))}
								</Form.Control>
							</>
						) : (
							''
						)}
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-primary" onClick={handleClose}>
						Փակել
					</Button>
					<Button
						variant="primary"
						disabled={!(service !== 0 && serviceDetails !== '')}
						onClick={handleAddService}>
						Ավելացնել
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showSetDefaultService} size="lg" onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Դարձնել հիմնական</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pt-4 pb-4">
					<Form.Group>
						<Form.Label className="font-weight-bold">Ընտրեք վճարման օրը</Form.Label>
						<Form.Control
							as="select"
							custom
							defaultValue={defaultPaymentDay}
							onChange={handleDefaultPaymentDayChange}>
							{days.map(day => (
								<option key={day}>{day}</option>
							))}
						</Form.Control>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-primary" onClick={handleClose}>
						Փակել
					</Button>
					<Button variant="primary" onClick={handleSetDefaultService}>
						Դարձնել հիմնական
					</Button>
				</Modal.Footer>
			</Modal>
		</Col>
	);
}

export default MyServices;
