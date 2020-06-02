import React, { useState } from 'react';

import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useGlobal } from '../../store';

function ForgetPassword({ isChange }) {
	const [
		{ },
		{
			post: { changePassword, forgotPassword }
		}
	] = useGlobal();

	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [email, setEmail] = useState('');

	const handleChangePassword = () => {
		if (password === newPassword) {
			isChange ? changePassword({
				source : "ui",
				api_key: localStorage.getItem('api_key'),
				userId: localStorage.getItem('user_id'),
				newp: newPassword,
			}) : forgotPassword({})

		}
	};
	return (
		<Col md={8}>
			<h3 className="text-center mb-5">Գաղտնաբառի {isChange ? 'փոփոխում' : 'վերականգնում'} </h3>
			<Form>
				{isChange ? (
					<Form.Group>
						<Form.Label className="font-weight-bold">հին գաղտնաբառ</Form.Label>
						<Form.Control
							type="password"
							placeholder="••••••••"
							onChange={event => setOldPassword(event.target.value)}
						/>
					</Form.Group>
				) : (
					<Form.Group controlId="formBasicEmail">
						<Form.Label className="font-weight-bold">Էլ. հասցե</Form.Label>
						<Form.Control
							type="text"
							placeholder="Էլ. հասցե"
							onChange={event => setEmail(event.target.value)}
						/>
					</Form.Group>
				)}
				<Form.Group>
					<Form.Label className="font-weight-bold">{isChange ? 'Նոր գաղտնաբառ' : 'Գաղտնաբառ'} </Form.Label>
					<Form.Control
						type="password"
						placeholder="••••••••"
						onChange={event => setPassword(event.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label className="font-weight-bold">Կրկնել գաղտնաբառ</Form.Label>
					<Form.Control
						type="password"
						placeholder="••••••••"
						onChange={event => setNewPassword(event.target.value)}
					/>
				</Form.Group>
				<Button block variant="primary" onClick={handleChangePassword}>
					{isChange ? 'Փոփոխել' : 'Վերականգնել'} գաղտնաբառը
				</Button>
			</Form>
		</Col>
	);
}

// 307997 authorization code

export default ForgetPassword;
