




document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';
//document.body.style.transform = "translateY(0px)";

var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );

//append all elements
//document.body.appendChild( div );

document.body.insertBefore(div, document.body.firstChild);

/*
var searchForm = document.getElementById("searchform");
searchForm.style.top = "120px";

var elems = document.body.getElementsByTagName("*");
var len = elems.length

for (var i=0;i<len;i++) {

    if (window.getComputedStyle(elems[i],null).getPropertyValue('position') == 'fixed') {
        elems[i].style.top +=
    }

}

*/

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


	chrome.storage.local.get(['temtoken'], function(result) {
          console.log("Temptoken=" + result.key);
    });
	
	




fetch('https://pelicanbrowser.com/webapi/content').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
	div.innerHTML = result;
})


lastLocation = null;
sendLog();
setInterval(sendLog,10000);

function sendLog()
{
	var newLocation = document.location.href;
		
		if(newLocation != lastLocation)
		{	
			lastLocation = newLocation;		
			
			
			chrome.storage.local.get(['temptoken'], function(result) {
				
				console.log(result);
				
				var x = document.getElementById("idtemptoken");
				
				if(!x) {
					x = document.createElement( 'input' );
					x.type = 'hidden';
					x.id = 'idtemptoken';
				}
				x.value = result.temptoken;
				document.body.insertBefore(x, document.body.firstChild);
				
				
				
				//if(document.location.href == 'https://pelicabrowser.com/webapi/wallet')
				//{
				//	document.location.href = 'https://pelicabrowser.com/webapi/wallet';
				//}
				
				
				var params = {
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(
					{
						"location": newLocation,
						"temptoken": result.temptoken
					}
				),
				method: "POST"
			};
				
				
				fetch('https://pelicanbrowser.com/webapi/log',params)
			  .then(r => r.text())
			  .then(function (data) {
				console.log('Request succeeded with JSON response', data);
			  })
			  .catch(function (error) {
				console.log('Request failed', error);
			  });
				
			 
			});
			
			
			
			
		}
}




