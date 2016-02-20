angular.module('dStory')
.service('dataService', function($q) {
  var pic = "static/img/elderly-man-smile.jpg";

  var mockData = [
    {
      type: 'text',
      content: 'Morbi faucibus tortor ut mattis ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse.'
    },
    {
      type: 'picture',
      content: 'web/static/img/elderly-man-smile.jpg'
    }
  ];

  var getData = function() {
    var d = $q.defer();
    if(mockData){
      d.resolve(mockData);
    } else {
      d.reject('unable to load data');
    }
    return d.promise;
  };

  var getPic = function() {
    var d = $q.defer();
    if(pic){
      d.resolve(pic);
    } else {
      d.reject('unable to load pic');
    }
    return d.promise;
  };

  var pushData = function(datum) {
    mockData.push(datum);
  };

  return {
    pushData: pushData,
    getData: getData,
    getPic: getPic
  };
});
