import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<Col md={6} className="mt-5 pt-5 text-center">
			<h2 className="mb-5">404</h2>
			<Button as={Link} to="/frontend">
				Վերադառնալ դրամապանակ
			</Button>
		</Col>
	);
}

export default NotFound;
