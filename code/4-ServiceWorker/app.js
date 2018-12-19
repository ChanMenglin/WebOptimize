if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./service-worker.js', {scope: './'})
		.then( function (reg) {

		})
		.catch( function (e) {
			console.log(e)
		})
} else {
	console.log('Service Worker is not supported');
}
