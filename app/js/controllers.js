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
                    'next_question': null
                }
            ]
        }
    ];

    $scope.nextQuestion = function(value) {
        $scope.user_state[$scope.current_question] = value;
        if ($scope.current_question == 'registered') {
            $scope.current_question = 'postcode';
        }
        else if ($scope.current_question == 'postcode') {
            $scope.current_question = 'on_the_day';
        }
    };

});
