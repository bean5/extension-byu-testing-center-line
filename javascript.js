setInterval(updateTestingCenter, 7 * 1000);

var d = new Date();

function updateTestingCenter()
{
	document.getElementById("testing_center").src = "";
	document.getElementById("testing_center").src = "http://testing.byu.edu/images/conditions/axiscam.jpg";
}