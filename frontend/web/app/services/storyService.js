angular.module('dStory')
.service('storyService', function($q) {
	var currStory = {};
	var stories = [{
			headpic: 'static/img/elderly-man-smile.jpg',
			title: 'Big Smile for the ladies',
      date: 'Jan 12th, 2010',
      descr: 'my grandpa pwns you all',
			content:[
				{
					type: 'picture',
					url: 'static/img/sample_1_500.jpg'
				},
				{
					type: 'text',
					content: 'How long has it been now? 12hrs? Coding for 12 hours!'
				},
				{
					type: 'picture',
					url: 'static/img/sample_2_500.jpg'
				},
				{
					type: 'text',
					content: 'me and Jake Brogrmming!'
				},
				{
					type: 'picture',
					url: 'static/img/sample_6_500.jpg'
				},
				{
					type: 'text',
					content: 'You know the old saying, if you leave food you will end up in hell'
				}
			]},
		{
			headpic: 'static/img/sample_3_500.jpg',
			title: "I don't always drink energy drinks but when I do, I code for 10hours.",
      date: 'Feb 20th, 2016',
      descr: 'One time we did all the things',
      content:[]
		},
		{
			headpic: 'static/img/sample_4_500.jpg',
			title: "Good place to spend weekends",
      date: 'Feb 20th, 2016',
      descr: 'there was a good desc',
			content:[]
		},
		{
			headpic: 'static/img/sample_5_500.jpg',
			title: "How much will it be if I sell this??? XD",
      date: 'Feb 20th, 2016',
      descr: 'content',
			content: []
		}
  ];
  return {
    stories: stories,
		currStory: currStory
  }
});
