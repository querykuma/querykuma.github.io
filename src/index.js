/* global confetti */
document.addEventListener("DOMContentLoaded", () => {
	const e_profile_img = document.getElementById("profile_img");

	const o_question = confetti.shapeFromPath({ "path": "M99 21c-3-6-8-11-15-15-6-4-14-6-22-6-10 0-19 3-25 6l-9 8-2 4 2 4 9 7h6l5-4c3-2 8-4 15-4 6 0 11 2 15 5l4 5 1 4-2 8-3 4-7 5-9 5-10 9-3 7-1 8v5c0 3 2 5 5 5h12c3 0 5-2 5-5v-7l1-1 2-2 8-4c5-3 11-6 15-12 2-3 5-6 6-10 2-4 2-9 2-13-1-7-3-12-5-16zM57 102c-7 0-13 6-13 13s6 13 13 13 13-6 13-13-6-13-13-13z" });

	e_profile_img.addEventListener("click", (e) => {
		const defaults = {
			"spread": 360,
			"ticks": 40,
			"gravity": 0,
			"decay": 0.94,
			"startVelocity": 20,
			"origin": {
				"x": e.clientX / document.documentElement.clientWidth,
				"y": e.clientY / document.documentElement.clientHeight
			}
		};

		function shoot() {
			confetti({
				...defaults,
				"particleCount": 40,
				"scalar": 5,
				"flat": true,
				"shapes": [o_question],
				"colors": ["#b82445", "#DD4", "#0008e9"]
			});

			confetti({
				...defaults,
				"particleCount": 10,
				"scalar": 1,
				"shapes": ["star"]
			});
		}

		setTimeout(shoot, 0);
		setTimeout(shoot, 100);
		setTimeout(shoot, 200);
	});
});
