var team_data = [
	{
		name: "Jane Smith",
		position: "designer",
		photoshop: 88,
		illustrator: 92,
		sketch: 90,
		after_effects: 98,
	},
	{
		name: "Tucker Carter",
		position: "web developer",
		photoshop: 70,
		illustrator: 65,
		sketch: 80,
		after_effects: 78,
	},
	{
		name: "Penn Garcia",
		position: "designer",
		photoshop: 60,
		illustrator: 98,
		sketch: 80,
		after_effects: 83,
	}
];

function setProgress(skill, value) {
	$(`#${skill}__progress`).css({'width': `${value}%`});
	$(`#${skill}__percents`).text(`${value}%`);
}

function setData(obj) {
	$('.team-info__name').first().text(obj.name);
	$('.team-info__position').first().text(obj.position);
	let keys = ['photoshop', 'illustrator', 'sketch', 'after_effects'];
	for (let key of keys) {
		setProgress(key, obj[key]);
	}
}

Array.from($('.team-info__bubble')).forEach(
	function(elem) {
		let index = elem.dataset.index;
		$(elem).on('click', 
			function() {
				Array.from($('.team-info__bubble.active')).forEach(active => $(active).removeClass('active'));
				$(elem).addClass('active');
				setData(team_data[index]);
			}
		);
	}
);

$('.team-info__bubble').first().click();