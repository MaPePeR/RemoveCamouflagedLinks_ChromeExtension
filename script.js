removeOnClickFromLinks = function(){
	console.log("removing onClick-Listeners");
	for(var i=0; i<atags.length; i++)
	{
		console.log(atags[i].href);
		if(atags[i].href&&atags[i].href!==""&&atags[i].getAttribute('href').charAt(0)!=='#')
		{
			//href attribute is present, not empy and does not start with '#' => We will open a new page after the link has been clicked => onclick is not useful
			atags[i].onclick=null
		}

	}
	timeout=null
}
//Execute the routine every 150ms, after the dom has changed.
var timeout=window.setTimeout(removeOnClickFromLinks,150);
document.addEventListener('DOMNodeInserted', function(e) {
	//console.log(e)
	if(timeout===null)
		timeout=window.setTimeout(removeOnClickFromLinks,150);
});
//Live-NodeList updates automatically when new a-tags are added to the document.
var atags = document.getElementsByTagName('a');


