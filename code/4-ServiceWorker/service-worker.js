// service-worker 注册文件

self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open('app-v1').then(function (cache) {
			console.log('open cach')
			return cache.addAll([
				// 如果将页面中的所有静态文件全部缓存就可以实现离线应用
				'./app.js', 'service-worker.js', 'ServiceWorker.html',
			])
		})
	)
})

self.addEventListener('fetch', function (e) {
	e.respondWith(
		caches.match(e.request).then(function (res) {
			if (res) {
				return res;
			} else {
				// 通过 fetch 方法向网络发请求
			}
		})
	);
})
