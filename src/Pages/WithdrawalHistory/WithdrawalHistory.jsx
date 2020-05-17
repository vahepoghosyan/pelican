import React, { useEffect } from 'react';

import { Form, Button, Col, Row, ListGroup, Pagination, Spinner } from 'react-bootstrap';

import { useGlobal } from '../../store';

function WithdrawalHistory() {
	const [
		{ withdrawalsHistory, loader },
		{
			get: { withdrawalHistory }
		}
	] = useGlobal();

	useEffect(() => {
		withdrawalHistory({
			api_key: localStorage.getItem('api_key'),
			userId: localStorage.getItem('user_id'),
			limit: "2",
			offset: "0"
		});
	}, []);

	return loader ? (
		<div className="d-flex justify-content-center align-items-center pt-5 pb-5">
			<Spinner animation="border" variant="primary" />
		</div>
	) : (
		<>
			<h3 className="text-center mb-3">Նվազեցումների պատմություն</h3>
			{withdrawalsHistory && (
				<h5 className="text-center mb-5 font-weight-light">
					Ընդհանուր նվազեցրել եք:
					<span className="h4 text-primary font-weight-bold pl-2 align-middle">
						{withdrawalsHistory[0].alltimewithdrawal}֏
					</span>
				</h5>
			)}
			<ListGroup variant="flush" className="mb-5">
				{withdrawalsHistory &&
					withdrawalsHistory.map((item, index) => {
						return (
							<ListGroup.Item className="d-flex justify-content-between align-items-center pt-4 pb-4" key={index}>
								<div>
									<h6>{item.service_name}</h6>
									<small>{item.time}</small>
								</div>
								<div className="h5 font-weight-bold">{item.amount}֏</div>
							</ListGroup.Item>
						);
					})}
			</ListGroup>
			{/*<div className="d-flex justify-content-center">*/}
			{/*	<Pagination>*/}
			{/*		<Pagination.Item active={1}>1</Pagination.Item>*/}
			{/*		<Pagination.Item>2</Pagination.Item>*/}
			{/*		<Pagination.Item>3</Pagination.Item>*/}
			{/*		<Pagination.Item>4</Pagination.Item>*/}
			{/*		<Pagination.Item>5</Pagination.Item>*/}
			{/*		<Pagination.Item>6</Pagination.Item>*/}
			{/*		<Pagination.Item>7</Pagination.Item>*/}
			{/*	</Pagination>*/}
			{/*</div>*/}
		</>
	);
}

// 307997 authorization code

export default WithdrawalHistory;
