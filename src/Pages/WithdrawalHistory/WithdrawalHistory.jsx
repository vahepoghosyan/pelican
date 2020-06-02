import React, { useEffect, useState } from 'react';

import { Col, ListGroup, Pagination, Spinner } from 'react-bootstrap';

import { useGlobal } from '../../store';

function WithdrawalHistory() {
	const [
		{ withdrawalsHistory, withdrawalHistoryCount, withdrawalHistoryLoader, loader },
		{
			get: { withdrawalHistory }
		}
	] = useGlobal();

	const [pagination, setPagination] = useState([]);
	const [activePage, setActivePage] = useState(1);

	console.log(pagination);

	useEffect(() => {
		withdrawalHistory(
			{
				api_key: localStorage.getItem('api_key'),
				userId: localStorage.getItem('user_id'),
				limit: '7',
				offset: '0'
			},
			false
		);
	}, []);

	useEffect(() => {
		if (withdrawalHistoryCount) {
			let pagination = [];

			let pageCount = Math.ceil(withdrawalHistoryCount[0].entryCount / withdrawalsHistory.length);

			for (let i = 0; i < pageCount; i++) {
				pagination[i] = i + 1;
			}

			setPagination(pagination);
		}
	}, [withdrawalHistoryCount]);

	const handlePagination = page => event => {
		withdrawalHistory(
			{
				api_key: localStorage.getItem('api_key'),
				userId: localStorage.getItem('user_id'),
				limit: '7',
				offset: page
			},
			true
		);
		setActivePage(page);
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
			<h3 className="text-center mb-3">Նվազեցումների պատմություն</h3>
			{withdrawalsHistory && (
				<h5 className="text-center mb-5 font-weight-light">
					Ընդհանուր նվազեցրել եք:
					<span className="h4 text-primary font-weight-bold pl-2 align-middle">
						{withdrawalsHistory[0].alltimewithdrawal}֏
					</span>
				</h5>
			)}
			{!withdrawalHistoryLoader ? (
				<ListGroup variant="flush" className="mb-5">
					{withdrawalsHistory &&
						withdrawalsHistory.map((item, index) => {
							return (
								<ListGroup.Item
									className="d-flex justify-content-between align-items-center pt-4 pb-4"
									key={index}>
									<div>
										<h6>{item.service_name}</h6>
										<small>{item.time}</small>
									</div>
									<div className="h5 font-weight-bold">{item.amount}֏</div>
								</ListGroup.Item>
							);
						})}
				</ListGroup>
			) : (
				<div className="d-flex justify-content-center align-items-center pt-5 pb-5 spinner">
					<Spinner animation="border" variant="primary" />
				</div>
			)}

			<div className="d-flex justify-content-center">
				<Pagination>
					{pagination.map(page => {
						return (
							<Pagination.Item key={page} active={activePage === page} onClick={handlePagination(page)}>
								{page}
							</Pagination.Item>
						);
					})}
				</Pagination>
			</div>
		</Col>
	);
}

export default WithdrawalHistory;
