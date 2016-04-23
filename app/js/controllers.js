electionMateApp.controller('electionMateCtrl', function($scope) {

    $scope.message = "hello world!!";
    $scope.current_question = 'registered';
    $scope.user_state = {};
    $scope.todos = [];
    $scope.questions = [];

   $scope.start = function() {
     $scope.loadJSON(function(response) {
       var data = JSON.parse(response);
       $scope.questions = data["questions"];
       $scope.$digest();
     });
   };

   $scope.loadJSON = function(callback) {
     var xobj = new XMLHttpRequest();
         xobj.overrideMimeType("application/json");
     xobj.open('GET', 'js/questions.json', true); // Replace 'my_data' with the path to your file
     xobj.onreadystatechange = function () {
           if (xobj.readyState == 4 && xobj.status == "200") {
             callback(xobj.responseText);
           }
     };
     xobj.send(null);
  };

    $scope.nextQuestion = function(value) {
        $scope.user_state[$scope.current_question] = value;
        var current_question_object = null;
        var chosen_answer = null;

        for (var question in $scope.questions) {
            var found_question = $scope.questions[question];
            if ($scope.current_question == found_question.id) {
                current_question_object = found_question;
            }
        }

        for (var answer in current_question_object.answers) {
            var found_answer = current_question_object.answers[answer];
            if (value == found_answer.value) {
                chosen_answer = found_answer;
            }
        }
        
        if (chosen_answer.todo) {
            $scope.todos.push(chosen_answer.todo);
        }
        
        if (chosen_answer.next_question === null) {
            $scope.user_state.complete = true;
        }
        $scope.current_question = chosen_answer.next_question;
    };

});
