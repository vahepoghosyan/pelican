// VENDORS
import React, { useEffect, useState } from 'react';
import { Alert, Button, ListGroup, ProgressBar, Col, InputGroup, FormControl, Row, Spinner } from 'react-bootstrap';
import { isObjectEmpty } from '../../helpers/utils';

// COMPONENTS
import { useGlobal } from '../../store';

function Home() {
	const [
		{
			loader,
			errorMessage,
			wallet
		}
	] = useGlobal();

	return loader ? (
		<div className="d-flex justify-content-center align-items-center pt-5 pb-5">
			<Spinner animation="border" variant="primary" />
		</div>
	) : (
		<>
			<h3 className="text-center mb-3">Իմ դրամապանակը</h3>

			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

			<h6 className="font-weight-bold text-center mb-3">
				Այս պահին Հաշիվը <span className="text-primary">{wallet && wallet.userData.balance}֏</span>
			</h6>

			<p className="text-center">
				Մեր օգտատերերի ամսեկան ծախսերի միջին տվյալների հիման վրա սա թույլ կտա վճարել Ձեր
			</p>
			<ListGroup variant="flush" className="mb-5">
				{wallet &&
					wallet.walletData.map((item, index) => {
						return (
							<ListGroup.Item
								className="d-flex justify-content-between align-items-end pt-4 pb-4"
								key={index}>
								<Col xs={2}>
									<small>{item.name}</small>
									<h5 className="m-0 font-weight-bold text-primary">{item.percent_covered}%</h5>
								</Col>
								<Col xs={8} className='text-center'>
									<small>{item.monthly_credits} դրամի հաշվով</small>
									<ProgressBar
										variant="success"
										now={item.percent_covered}
									/>
								</Col>
								<Col xs={2} className="text-right">
									<Button variant="primary">Վճարել</Button>
								</Col>
							</ListGroup.Item>
						);
					})}
			</ListGroup>

			<p className="text-center">Եթե այս տեմպով օգտվեք ապա օգտվելու սկզբից մեկ ամիսլրանալու պահին կունենք</p>
			<Row className="justify-content-center">
				<Col xs={7}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Recipient's username"
							value={wallet ? wallet.userData.monthly_goal : ''}
							onChange={() => {}}
						/>
						<InputGroup.Append>
							<Button>Սահմանել ամսվա նպատակ</Button>
						</InputGroup.Append>
					</InputGroup>
				</Col>
			</Row>
			<ListGroup variant="flush" className="mb-5">
                {wallet &&
                wallet.walletData.map((item, index) => {
                    return (
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-end pt-4 pb-4"
                            key={index}>
                            <Col xs={2}>
                                <small>{item.name}</small>
                                <h5 className="m-0 font-weight-bold text-primary">{item.percent_covered_projection}%</h5>
                            </Col>
                            <Col xs={8} className='text-center'>
                                <small>{item.monthly_credits} դրամի հաշվով</small>
                                <ProgressBar
                                    variant="success"
                                    now={item.percent_covered_projection}
                                />
                            </Col>
                            <Col xs={2} className="text-right">
                                <Button variant="primary">Վճարել</Button>
                            </Col>
                        </ListGroup.Item>
                    );
                })}
			{/*	<ListGroup.Item className="d-flex justify-content-between align-items-center pt-4 pb-4">*/}
			{/*		<div className="text-muted">*/}
			{/*			<small>Ջուր</small>*/}
			{/*			<h6 className="m-0 font-weight-bold">100%</h6>*/}
			{/*		</div>*/}
			{/*		<ProgressBar*/}
			{/*			variant="success"*/}
			{/*			now={50}*/}
			{/*			label={`${1000} դրամի հաշվով`}*/}
			{/*			className="flex-grow-1 mr-3 ml-3"*/}
			{/*		/>*/}
			{/*		<Button variant="primary" disabled>*/}
			{/*			Վճարել*/}
			{/*		</Button>*/}
			{/*	</ListGroup.Item>*/}
			{/*	<ListGroup.Item className="d-flex justify-content-between align-items-center pt-4 pb-4">*/}
			{/*		<div className="text-muted">*/}
			{/*			<small>Ջուր</small>*/}
			{/*			<h6 className="m-0 font-weight-bold">100%</h6>*/}
			{/*		</div>*/}
			{/*		<ProgressBar*/}
			{/*			variant="success"*/}
			{/*			now={63}*/}
			{/*			label={`${1000} դրամի հաշվով`}*/}
			{/*			className="flex-grow-1 mr-3 ml-3"*/}
			{/*		/>*/}
			{/*		<Button variant="primary" disabled>*/}
			{/*			Վճարել*/}
			{/*		</Button>*/}
			{/*	</ListGroup.Item>*/}
			{/*	<ListGroup.Item className="d-flex justify-content-between align-items-center pt-4 pb-4">*/}
			{/*		<div className="text-muted">*/}
			{/*			<small>Ջուր</small>*/}
			{/*			<h6 className="m-0 font-weight-bold">100%</h6>*/}
			{/*		</div>*/}
			{/*		<ProgressBar*/}
			{/*			variant="success"*/}
			{/*			now={50}*/}
			{/*			label={`${1000} դրամի հաշվով`}*/}
			{/*			className="flex-grow-1 mr-3 ml-3"*/}
			{/*		/>*/}
			{/*		<Button variant="primary" disabled>*/}
			{/*			Վճարել*/}
			{/*		</Button>*/}
			{/*	</ListGroup.Item>*/}
			</ListGroup>
		</>
	);
}

export default Home;
