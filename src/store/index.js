// VENDORS
import React from 'react';

import useGlobalHook from 'use-global-hook';

import * as actions from './actions';

const initialState = {
	isUserLoggedIn: false,
	user: {
		id: '',
		email: '',
		phone: ''
	},
	forgetPasswordEmailVerified: false,
	errorMessage: '',
	successMessage: '',
	successActivateMessage: '',
	successWithdrawalMessage: '',
	smsActivationCode: 0,
	tempToken: '',
	loader: false,
	wallet: null,
	withdrawalsHistory: null,
	withdrawalHistoryCount: null,
	withdrawalHistoryLoader: false,
	settings: [],
	myServices: [],
	allServices: [],
	servicesIdentifierTypes: []
};

export const useGlobal = useGlobalHook(React, initialState, actions);
