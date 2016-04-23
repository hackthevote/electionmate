electionMateApp.controller('electionMateCtrl', function($scope) {

    $scope.message = "hello world!!";
    $scope.current_question = 'registered';
    $scope.user_state = {};
    $scope.questions = [
        {
            'id': "registered",
            'question': "Are you registered to vote?",
            'text': false,
            'answers': [
                {
                    'value': true,
                    'display': 'Yes',
                    'next_question': 'postcode'
                },
                {
                    'value': false,
                    'display': 'No',
                    'next_question': null
                }
            ]
        },
        {
            'id': "postcode",
            'question': "What's your postcode",
            'text': true,
            'text_target': 'postcode_entry',
            'answers': [
                {
                    'value': true,
                    'display': null,
                    'next_question': 'on_the_day'
                },
                {
                    'value': false,
                    'display': "I don't know",
                    'next_question': null
                }
            ]
        },
        {
            'id': "on_the_day",
            'question': "Will you be there on the 23rd June 2016?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': null
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': "do_you_know_where"
                }
            ]
        },
        {
            'id': "do_you_know_where",
            'question': "Do you know where you'll be on the 23rd June 2016?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': "perm_or_temp"
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': "post_or_proxy"
                }
            ]
        },
        {
            'id': "perm_or_temp",
            'question': "Will you be somewhere that you live on the 23rd, or are you temporarily away from home",
            'answers': [
                {
                    'value': 'perm',
                    'display': "I live there permanently",
                    'next_question': null
                },
                {
                    'value': 'temp',
                    'display': "I'm just visiting",
                    'next_question': null
                }
            ]
        }
    ];

    $scope.nextQuestion = function(value) {
        $scope.user_state[$scope.current_question] = value;
        var current_question_object = null;
        var chosen_answer = null
        
        for (question in $scope.questions) {
            var found_question = $scope.questions[question];
            if ($scope.current_question == found_question.id) {
                current_question_object = found_question;
            }
        }
        
        for (answer in current_question_object.answers) {
            var found_answer = current_question_object.answers[answer];
            if (value == found_answer.value) {
                chosen_answer = found_answer;
            }
        }

        $scope.current_question = chosen_answer.next_question;
    };

});
