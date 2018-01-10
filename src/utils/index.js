// document.addEventListener('backbutton', function (evt) {
// 	alert('I\'m want to back')
// 	alert(JOSN.stringify(window))

// 	if (window.location.href !== firstPageUrl) {
// 			window.history.back();
// 	} else {
// 			throw new Error('Exit'); // This will suspend the app
// 	}
// }, false);

export default function(handler) {
	document.addEventListener('backbutton', handler, false);
}