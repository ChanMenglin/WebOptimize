if (navigator.serviceWorker) {
	var sendButton = document.getElementById('send-msg-button');
	var msg = document.getElementById('msg-import');

	navigator.serviceWorker.ready.then(() => {
		// I thought the page would be controlled at this point, thanks to clients.claim()
		console.log('.ready resolved, and navigator.serviceWorker.controller is', navigator.serviceWorker.controller);
		navigator.serviceWorker.addEventListener('controllerchange', () => {
		  console.log('Okay, now things are under control. navigator.serviceWorker.controller is', navigator.serviceWorker.controller);
		});
	  });

	sendButton.addEventListener('click', function () {
		// 主页面发送信息到 Service Worker
		navigator.serviceWorker.controller.postMessage(msg.value);
	});

	navigator.serviceWorker.addEventListener('message', function (e) {
		// Service Worker 发送信息到主页面
		var msgBox = document.getElementById('msg-box');
		msgBox.innerHTML += ('<li>'+ e.data.message +'</li>')
	})

	navigator.serviceWorker.register('./msg-sw.js', {scope: './'})
		.then( function (reg) {
			console.log(reg)
		})
		.catch( function (e) {
			console.log(e)
		})
} else {
	console.log('Service Worker is not supported');
}
