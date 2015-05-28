setInterval(updateTestingCenter, 1000);

function updateTestingCenter()
{
	#('#testing_center').attr('src', 'https://testing.byu.edu/sites/all/scripts/linecamfeed.php' + '?timestamp=' + Date());
}

function openTab(url)
{
	//alert(url);
	//window.location = url;
	chrome.tabs.create({'url': url}, function(tab) {
	  // Tab opened.
	});
}
