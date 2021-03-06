electionMateApp.controller('electionMateCtrl', function($scope, localStorageService) {

    $scope.todos = [];
    $scope.questions = [];
    $scope.date = new Date();
 
    var user_answers = localStorageService.get('user_answers');
    $scope.user_state = user_answers || {};

    var current_question = localStorageService.get('current_question');
    $scope.current_question = current_question || 'registered';

    $scope.todos = localStorageService.get('todos');
    console.log($scope.todos)

    $scope.$watch('user_state', function() {
      localStorageService.set('user_answers', $scope.user_state);
    }, true);

    $scope.$watch('current_question', function() {
      localStorageService.set('current_question', $scope.current_question);
    }, true);

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

   $scope.start = function() {
     $.getJSON('js/questions.json', function(response) {
       $scope.questions = response["questions"];
       $scope.$digest();
     });

   };
   
   $scope.days = Math.floor((new Date("June, 23, 2016") - new Date())/(1000*60*60*24));

   $scope.restart = function() {
     localStorageService.set('user_answers', {});
     $scope.reset();
   };

   $scope.reset = function() {
     $scope.current_question = 'registered';
     $scope.user_state = {};
     $scope.todos = [];
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
            $scope.current_question = 'done';
        } else {
            $scope.current_question = chosen_answer.next_question;
        }
    };

    $scope.todoChange = function() {
      localStorageService.set('todos', $scope.todos);
    }

    $scope.start();

});
