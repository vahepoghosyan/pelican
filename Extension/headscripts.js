 function closeContent(ele) {
	 
    ele.parentNode.style.display = "none";
	ele.parentNode.remove();		
	
	var elems = document.body.getElementsByTagName("*");
	var len = elems.length;

	for (var i=0;i<len;i++) {
		
		var pos = window.getComputedStyle(elems[i],null).getPropertyValue('position');
		if (pos == 'fixed') {
			var topa = window.getComputedStyle(elems[i],null).getPropertyValue('top');
			//var topa = elems[i].style.top;
			if(topa == "") {
				console.log("fixed element with empty top detected");
				console.log(elems[i]);
				//elems[i].style.top = "120px";
			}else
			{
				if(topa.endsWith("px")) {
					var topNumber = topa.substring(0,topa.length - 2);
					elems[i].style.top = (parseInt(topNumber) - 120) + "px";
				} else {
					console.log(topa);
					console.log(elems[i]);
					elems[i].style.top = parseInt(topNumber) - 120;
				}
			}
		}
	}	
	
	var previousBodyCss = document.body.style.cssText.replace("margin-top: 120px !important; position: absolute !important;","");
	
	document.body.setAttribute('style', previousBodyCss);	
	
	//document.body.setAttribute('style',document.body.style.cssText + ' margin-top:120px !important; position: absolute !important;');	
}

