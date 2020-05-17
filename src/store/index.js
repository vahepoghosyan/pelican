// VENDORS
import React from 'react';

import useGlobalHook from 'use-global-hook';

import * as actions from './actions';

const initialState = {
	isUserLoggedIn: false,
	user: {
		id: 0,
		goal: 5000,
		email: 'updated@email.com',
		phone: '055123123'
	},
	forgetPasswordEmailVerified: false,
	errorMessage: '',
	smsActivationCode: 0,
	tempToken: '',
	loader: false,
	wallet: null,
	withdrawalsHistory: null
};

export const useGlobal = useGlobalHook(React, initialState, actions);
