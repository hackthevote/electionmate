electionMateApp.controller('representMeCtrl',  function($scope, getRepQuestion) {

  $scope.questions = [];
  $scope.current_question = "";
  $scope.isNotComplete = true;
  $scope.questionCounter = 0;

  Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  $scope.findQuestion = function() {
    getRepQuestion.query()
      .then(function(response) {
        $scope.questions = response.data.results;
        $scope.questionSample();
        $scope.questionCounter += 1;
        if ($scope.isSampleComplete()) {
          $scope.isNotComplete = false;
        }
      });

  };

  $scope.questionSample = function() {
    var question = $scope.questions.randomElement();
    $scope.current_question = question.question;
  };

  $scope.isSampleComplete = function() {
    return $scope.questionCounter > 3;
  };
  $scope.findQuestion();
});
