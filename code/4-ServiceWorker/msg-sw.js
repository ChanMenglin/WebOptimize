self.addEventListener('message', function (e) {
	var promiss = self.clients.matchAll().then(function (clientList) {
		var sendId = e.source ? e.source.sendId : 'unknown'
		clientList.forEach(function (client) {
			if (client.id != sendId) {
				client.postMessage({
					client: sendId,
					message: e.data,
				});
			 }
		})
	})

	= e.waitUntil()
})
