// document.addEventListener('backbutton', function (evt) {
// 	alert('I\'m want to back')
// 	alert(JOSN.stringify(window))

// 	if (window.location.href !== firstPageUrl) {
// 			window.history.back();
// 	} else {
// 			throw new Error('Exit'); // This will suspend the app
// 	}
// }, false);

export function back(handler) {
	document.addEventListener('backbutton', handler, false);
}

export function imageCodeToURL(state, code) {
	let str = code.toString();
	let reg = /(jp(e)?g|png|gif)/;
	let i = str.substr(0, 1),
			j = str.substr(1, 2),
			ext = str.substr(str.search(reg));
	return [
		'https://fuss10.elemecdn.com/',
		i,
		'/',
		j,
		'/',
		code.substr(3) + '.' + ext
	].join('')
};