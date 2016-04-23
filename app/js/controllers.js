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
                    'next_question': 'nino'
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
                    'next_question': 'on_the_day'
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
                    'next_question': 'two_places'
                },
                {
                    'value': 'temp',
                    'display': "I'm just visiting",
                    'next_question': null
                }
            ]
        },
        {
            'id': "post_or_proxy",
            'question': "Would you prefer to vote in advance by post or have a friend vote for you?",
            'answers': [
                {
                    'value': 'post',
                    'display': "Vote by post",
                    'next_question': 'post'
                },
                {
                    'value': 'proxy',
                    'display': "Have a friend vote for me",
                    'next_question': 'proxy'
                }
            ]
        },
        {
            'id': "proxy",
            'question': "Have you already registered for a proxy vote?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': null
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': null
                }
            ]
        },
        {
            'id': "post",
            'question': "Have you already registered for a postal vote?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': null
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': null
                }
            ]
        },
        {
            'id': "two_places",
            'question': "Do you live in two places, for example a term-time and a holiday-time address?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': null
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': null
                }
            ]
        },
        {
            'id': "nino",
            'question': "Do you know your National Insurance number",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': 'postcode'
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': 'too_late'
                }
            ]
        },
        {
            'id': "too_late",
            'question': "Is it too late to find out?",
            'answers': [
                {
                    'value': true,
                    'display': "Yes",
                    'next_question': 'postcode'
                },
                {
                    'value': false,
                    'display': "No",
                    'next_question': 'postcode'
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
        
        if (chosen_answer.next_question == null) {
            $scope.user_state.complete = true;
        }
        $scope.current_question = chosen_answer.next_question;
    };

});
