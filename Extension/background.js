// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onMessage.addListener(  (request, sender, sendResponse) => {
    
	chrome.browserAction.setBadgeBackgroundColor({color:[93, 146, 0, 230]});
	chrome.browserAction.setBadgeText({text:  request.message});	
	
	sendResponse("ers");
});


chrome.runtime.onInstalled.addListener(function(details) {		
	
	
	if(details.reason == "install"){
		console.log("This is a first install!");	

		var temptoken = null;
		chrome.storage.local.get(['temtoken'], function(result) {
			  temptoken = result.temptoken;
		});
		
		if(!temptoken)
		{
			temptoken = makeid(30);		
			
			chrome.storage.local.set({'temptoken': temptoken}, function() {
			  // Notify that we saved.
			  console.log('Settings saved');		 
			});
		}
		
	}else if(details.reason == "update"){
		var thisVersion = chrome.runtime.getManifest().version;
		console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
	}			

	
	chrome.storage.sync.set({color: '#3aa757'}, function() {
	console.log('The color is green.');
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	chrome.declarativeContent.onPageChanged.addRules([{
	  conditions: [new chrome.declarativeContent.PageStateMatcher({
		pageUrl: {hostEquals: 'developer.chrome.com'},
	  })],
	  actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
  });
});

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
