setInterval(updateTestingCenter, 100);

function updateTestingCenter()
{
	document.getElementById("testing_center").src = "";
	document.getElementById("testing_center").src = "http://testing.byu.edu/images/conditions/axiscam.jpg";
}

function openTab(url)
{
	//alert(url);
	//window.location = url;
	chrome.tabs.create({'url': url}, function(tab) {
	  // Tab opened.
	});
}