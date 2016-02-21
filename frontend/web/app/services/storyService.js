angular.module('dStory')
.service('storyService', function($q) {
	var currStory = {};
	var stories = [
		{
			headpic: 'static/img/sample_7_500.jpg',
			title: 'Health Hackathon 2016',
      date: 'Jan 12th, 2010',
      descr: 'Health Hackathon 2016',
			content:[
				{
					type: 'picture',
					url: 'static/img/sample_1_500.jpg'
				},
				{
					type: 'picture',
					url: 'static/img/sample_6_500.jpg'
				},
				{
					type: 'text',
					content: 'On the second day, we coded for 12 hours straight!'
				},
				{
					type: 'picture',
					url: 'static/img/sample_3_500.jpg'
				}

			]},
		{
			headpic: 'static/img/family.jpg',
			title: "Me and my family eating out.",
      date: 'Feb 20th, 2016',
      descr: 'One time we did all the things',
      content:[]
		},
		{
			headpic: 'static/img/skiing.jpg',
			title: "Skiing in Fernie with friends.",
			date: 'Feb 20th, 2016',
			descr: 'One time we did all the things',
			content:[]
		}



  ];

	var pushStory = function(story){
		console.log('stories');
		console.log(story);
		this.stories.push(story);
	};

  return {
    stories: stories,
		currStory: currStory,
		pushStory: pushStory
  }
});
