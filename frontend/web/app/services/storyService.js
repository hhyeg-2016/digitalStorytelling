angular.module('dStory')
.service('storyService', function($q) {
	var story = [{
			headpic: 'static/img/elderly-man-smile.jpg',
			title: 'Big Smile for the ladies',
			content:[
				{
					type: 'picture',
					url: 'web/static/img/sample_1.jpg'
				},
				{
					type: 'text',
					content: 'How long has it been now? 12hrs? Coding for 12 hours!'
				},
				{
					type: 'picture',
					url: 'web/static/img/sample_2.jpg'
				},
				{
					type: 'text',
					content: 'me and Jake Brogrmming!'
				},
				{
					type: 'picture',
					url: 'web/static/img/sample_6.jpg'
				},
				{
					type: 'text',
					content: 'You know the old saying, if you leave food you will end up in hell'
				}
			]},
		{
			headpic: 'static/img/sample_3.jpg',
			title: "I don't always drink energy drinks but when I do, I code for 10hours.",
			content:[]
		},
		{
			headpic: 'static/img/sample_4.jpg',
			title: "Good place to spend weekends",
			content:[]
		},
		{
			headpic: 'static/img/sample_5.jpg',
			title: "How much will it be if I sell this??? XD"
			content: []
		}		
	}
});
