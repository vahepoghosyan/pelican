function closeContent(ele,restore) {	 	 
	 
    ele.parentNode.style.display = "none";
	ele.parentNode.remove();		
	
	if(restore)
	{
	
		var elems = document.body.getElementsByTagName("*");
		var len = elems.length;

		for (var i=0;i<len;i++) {
			
			var pos = window.getComputedStyle(elems[i],null).getPropertyValue('position');
			if (pos == 'fixed') {
				var topa = window.getComputedStyle(elems[i],null).getPropertyValue('top');
				//var topa = elems[i].style.top;
				if(topa == "") {
					// console.log("fixed element with empty top detected");
					// console.log(elems[i]);
					//elems[i].style.top = "120px";
				}else
				{
					if(topa.endsWith("px")) {
						var topNumber = topa.substring(0,topa.length - 2);
						elems[i].style.top = (parseInt(topNumber) - 120) + "px";
					} else {
						// console.log(topa);
						// console.log(elems[i]);
						elems[i].style.top = parseInt(topNumber) - 120;
					}
				}
			}
		}	
		
		var previousBodyCss = document.body.style.cssText.replace("margin-top: 120px !important; position: absolute !important;","");
		
		document.body.setAttribute('style', previousBodyCss);	
	
	}
}







document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';
//document.body.style.transform = "translateY(0px)";

var div = document.createElement('div');
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );

//append all elements
//document.body.appendChild( div );

document.body.insertBefore(div, document.body.firstChild);



/*
var searchForm = document.getElementById("searchform");
searchForm.style.top = "120px";
*/





//document.body.style = document.body.style + " margin-top:120px;";





/*
div.appendChild( btnForm );
btnForm.appendChild( btn );
//set attributes for div
div.id = 'myDivId';
//div.style.position = 'fixed';
div.style.top = '0px';
div.style.left = '0px';
div.style.width = '100%';   
div.style.height = '100px';
div.style.backgroundColor = 'red';
//div.innerHTML = document.getElementsByName("q")[0].value;

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'hello';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';
*/


	


function updateBalance(temptoken)
{
	var params = {
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify(
			{
				"guest_mode": "1",
				"temptoken": temptoken
			}
		),
		method: "POST"
	};		

	fetch('https://pelicanbrowser.com/webapi/wallet',params)
		.then(r => r.text())
		.then(function (data) {
			
			// console.log(data);
			
			
			chrome.runtime.sendMessage({message: JSON.parse(data).userData.balance}, (response) => {
			  // console.log(response);
			});
			
			//chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
			//chrome.browserAction.setBadgeText({text:  JSON.parse(data).userData.balance});			
			
			// console.log('Request succeeded with JSON response', data);
		}
		)
		.catch(function (error) {
			// console.log('Request failed', error);
			}
		);		
		
}




lastLocation = null;
sendLog();
setInterval(sendLog,10000);



function log(loc,action)
{
	chrome.storage.local.get(['temptoken'], function(result) {	
		
		
		var params = {
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(
				{
					"location": loc,
					"temptoken": result.temptoken,
					"action": action
				}
			),
			method: "POST"
		};			
			
		fetch('https://pelicanbrowser.com/webapi/log',params)
			.then(r => r.text())
			.then(function (data) {
				// console.log('Request succeeded with JSON response', data);
				}
			)
			.catch(function (error) {
				// console.log('Request failed', error);
				}
			);			
		 
	});
			
}

function moveElements()
{
	var elems = document.body.getElementsByTagName("*");
		var len = elems.length;

		for (var i=0;i<len;i++) {
			var pos = window.getComputedStyle(elems[i],null).getPropertyValue('position');
			if (pos == 'fixed') {
				var topa = window.getComputedStyle(elems[i],null).getPropertyValue('top');
				//var topa = elems[i].style.top;
				if(topa == "") {
					// console.log("fixed element with empty top detected");
					// console.log(elems[i]);
					//elems[i].style.top = "120px";
				}else
				{
					if(topa.endsWith("px")) {
						var topNumber = topa.substring(0,topa.length - 2);
						elems[i].style.top = (parseInt(topNumber) + 120) + "px";
					} else {
						// console.log(topa);
						// console.log(elems[i]);
						elems[i].style.top = parseInt(topNumber) + 120;
					}
				}
			}

		}
		
		document.body.setAttribute('style',document.body.style.cssText + ' margin-top:120px !important; position: absolute !important;');
		/*
		var body = document.body,
		html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight, 
						   html.clientHeight, html.scrollHeight, html.offsetHeight );
		document.body.scrollHeight = document.body.scrollHeight - 120;
		screen.height = screen.height - 120;
		window.innerHeight = window.innerHeight - 120;
		*/
}


function sendLog()
{
	var newLocation = document.location.href;		
	if(newLocation != lastLocation)
	{	
		lastLocation = newLocation;	
		log(newLocation,"pagecurrent");
	}
}

chrome.storage.local.get(['temptoken'], function(result) {
	
	
	
	
	setTimeout(function() {
		
		var paramsContent = {
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(
				{
					"sbs": document.location.href,
					"temptoken": result.temptoken
				}
			),
			method: "POST"
		};		
		
		
		
		fetch('https://pelicanbrowser.com/webapi/content',paramsContent).then(r => r.text()).then(result => {
			// Result now contains the response text, do what you want...
			
			data = JSON.parse(result);
			
			var buttonText = "Broken content";
			
			switch(data.ad_type)
			{
				case "1":
					moveElements();
					div.innerHTML = data.content;	
					buttonText = "Broken content";					
					break;
				case "2":
					div.innerHTML = data.content;
					buttonText = "Never show ads on this page";
					break;
				case "3":
					// No extra content					
					break;
				default:
					// console.log("Unknown ad type");
			}
			
			
			//var s = document.createElement('script');
			//s.src = chrome.extension.getURL('headscripts.js');
			//console.log(s.src );
			//(document.head||document.documentElement).appendChild(s);
			//s.onload = function() {
			//	s.parentNode.removeChild(s);
			
			var closeW = document.getElementById("content-close");
			closeW.addEventListener("click",function() {
			  closeContent(closeW,data.ad_type == "1");
			  log(document.location.href,"close-manual")
			});
			
			// var brokenPageButton = document.getElementById("report-broken-page");
			// brokenPageButton.addEventListener("click",function() {
			// 	log(document.location.href,"broken-page-report");
			// 	alert("Շնորհալություն: Ձեր զեկույցը ուղարկվել է Պելիկանի թիմին");
			// });

				//};
		})
		
		
		
	},4000)		
	
	
	// data you want to sent
	var data = {
		temptoken: result.temptoken
	};

	// send data through a DOM event
	document.dispatchEvent(new CustomEvent('csEvent', {detail: data}));
	
	updateBalance(result.temptoken);
		
});

 


