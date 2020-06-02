import React, { useEffect, useState } from 'react';

import { Alert, Button, ListGroup, ProgressBar, Col, InputGroup, FormControl, Row, Spinner } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useGlobal } from '../../store';

function Home() {
	const history = useHistory();

	const [
		{ loader, errorMessage, wallet, successActivateMessage, successWithdrawalMessage },
		{
			post: { getWallet },
			update: { updateUser }
		}
	] = useGlobal();

	const [localWalletDataFirst, setLocalWalletDataFirst] = useState([]);
	const [localWalletDataSecond, setLocalWalletDataSecond] = useState([]);

	const [seeMoreFlagFirst, setSeeMoreFlagFirst] = useState(true);
	const [seeMoreFlagSecond, setSeeMoreFlagSecond] = useState(true);

	const [monthlyGoal, setMonthlyGoal] = useState('');

	useEffect(() => {
		getWallet(
			{
				temptoken: localStorage.getItem('temptoken'),
				api_key: localStorage.getItem('api_key'),
				userId: localStorage.getItem('user_id')
			},
			history
		);
	}, []);

	useEffect(() => {
		if (wallet) {
			setLocalWalletDataFirst(wallet.walletData);
			setLocalWalletDataSecond(wallet.walletData);
			setMonthlyGoal(wallet.userData.monthly_goal);
		}
	}, [wallet]);

	const handlePay = service => event => {
		history.push({ pathname: 'frontend/withdrawal', state: { service } });
	};

	const handleShowMoreFirst = event => {
		setLocalWalletDataFirst(
			localWalletDataFirst.map(service => {
				return { ...service, ['show_in_balance_page_default']: '1' };
			})
		);
		setSeeMoreFlagFirst(false);
	};

	const handleShowMoreSecond = () => {
		setLocalWalletDataSecond(
			localWalletDataSecond.map(service => {
				return { ...service, ['show_in_balance_page_default']: '1' };
			})
		);
		setSeeMoreFlagSecond(false);
	};

	const handleMonthlyGoalChange = ({ target }) => {
		let { value } = target;

		value = value.replace(/[^\d]/g, '');

		setMonthlyGoal(value);
	};

	const handleSaveMonthlyGoal = () => {
		updateUser({
			monthly_goal: monthlyGoal
		}).then(res =>
			getWallet(
				{
					temptoken: localStorage.getItem('temptoken'),
					api_key: localStorage.getItem('api_key'),
					userId: localStorage.getItem('user_id')
				},
				history
			)
		);
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
			<h3 className="text-center mb-3">Իմ դրամապանակը</h3>

			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
			{successActivateMessage && <Alert variant="success">{successActivateMessage}</Alert>}
			{successWithdrawalMessage && <Alert variant="success">{successWithdrawalMessage}</Alert>}

			<h6 className="font-weight-bold text-center mb-3">
				Այս պահին Հաշիվը <span className="text-primary">{wallet && wallet.userData.balance}֏</span>
			</h6>

			<p className="text-center">
				Մեր օգտատերերի ամսեկան ծախսերի միջին տվյալների հիման վրա սա թույլ կտա վճարել Ձեր
			</p>
			<ListGroup variant="flush" className={seeMoreFlagFirst ? 'mb-3' : 'mb-5'}>
				{wallet &&
					localWalletDataFirst.map((service, index) => {
						return +service.show_in_balance_page_default ? (
							<ListGroup.Item
								className="d-flex justify-content-between align-items-end pt-4 pb-4"
								key={index}>
								<Col xs={2}>
									<small>{service.name}</small>
									<h5 className="m-0 font-weight-bold text-primary">{service.percent_covered}%</h5>
								</Col>
								<Col xs={8} className="text-center">
									<small>{service.monthly_credits} դրամի հաշվով</small>
									<ProgressBar variant="success" now={service.percent_covered} />
								</Col>
								<Col xs={2} className="text-right">
									<Button
										variant="primary"
										disabled={!!+service.disabled}
										onClick={!!+service.disabled ? () => {} : handlePay(service)}>
										Վճարել
									</Button>
								</Col>
							</ListGroup.Item>
						) : (
							''
						);
					})}
			</ListGroup>
			{seeMoreFlagFirst && (
				<div className="text-center mb-5">
					<Button variant="outline-primary" onClick={handleShowMoreFirst}>
						Տեսնել ավելին
					</Button>
				</div>
			)}
			<p className="text-center">Եթե այս տեմպով օգտվեք ապա օգտվելու սկզբից մեկ ամիսլրանալու պահին կունենք</p>
			<Row className="justify-content-center">
				<Col xs={7}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Ամսական նպատակ"
							value={monthlyGoal}
							onChange={handleMonthlyGoalChange}
						/>
						<InputGroup.Append>
							<Button disabled={monthlyGoal === ''} onClick={handleSaveMonthlyGoal}>
								Սահմանել ամսվա նպատակ
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
			<ListGroup variant="flush">
				{wallet && // TODO when fields disabled
					localWalletDataSecond.map((service, index) => {
						return +service.show_in_balance_page_default ? (
							<ListGroup.Item
								className="d-flex justify-content-between align-items-end pt-4 pb-4"
								key={index}>
								<Col xs={2}>
									<small>{service.name}</small>
									<h5 className="m-0 font-weight-bold text-primary">
										{service.percent_covered_projection}%
									</h5>
								</Col>
								<Col xs={8} className="text-center">
									<small>{service.monthly_credits} դրամի հաշվով</small>
									<ProgressBar variant="success" now={service.percent_covered_projection} />
								</Col>
								<Col xs={2} className="text-right">
									<Button disabled={!!+service.disabled} variant="primary">
										Վճարել
									</Button>
								</Col>
							</ListGroup.Item>
						) : (
							''
						);
					})}
			</ListGroup>
			{seeMoreFlagSecond && (
				<div className="text-center mb-5">
					<Button variant="outline-primary" onClick={handleShowMoreSecond}>
						Տեսնել ավելին
					</Button>
				</div>
			)}
		</Col>
	);
}

export default Home;
