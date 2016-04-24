electionMateApp.controller('representMeCtrl',  function($scope, getRepQuestion) {

  $scope.questions = [];
  $scope.current_question = "";

  Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  $scope.findQuestion = function() {
    getRepQuestion.query()
      .then(function(response) {
        $scope.questions = response.data.results;
        $scope.questionSample();
      });

  };

  $scope.questionSample = function() {
    var question = $scope.questions.randomElement();
    $scope.current_question = question.question;
  };
});
