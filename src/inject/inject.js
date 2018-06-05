chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(readyStateCheckInterval);

			/* config */
			const host = window.location.host;
			let onflo = false;
			let speed = 1000;
			if (window.location.hash === '#onflo') {
				onflo = true;
				console.log('Onflo extension injecting into: ' + host);
			}

			/* twitter */
			if (host === 'twitter.com' && onflo) {
				let count = 0;
				const hearts = () => document.querySelectorAll('div.HeartAnimation');
				const heart = () => hearts()[count];
				let automate = setInterval(function () {
					if (hearts().length >= count) {
						if (heart()) {
							heart().scrollIntoView(count);
							heart().click();
						}
						count += 2;
					} else {
						clearInterval(automate);
					}
				}, speed);
			}

			/* instagram */
			if (host === 'www.instagram.com' && onflo) {
				document.querySelectorAll('.v1Nh3 a')[0].click();
				let automate = setInterval(function () {
					const heart = () => document.querySelector('a.fr66n');
					const arrow = () => document.querySelector('a.HBoOv');
					if (heart() && heart().innerText === 'Like\n') heart().click();
					else if (heart().innerText === 'Unlike\n' && arrow()) arrow().click();
					else clearInterval(automate);
				}, speed);
			}

		}
	}, 10);
});