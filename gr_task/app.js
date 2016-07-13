/**
 * Created by boochoo on 12/07/16.
 */

var gr = angular.module('gameRefinery', ['ui.bootstrap', 'angularUtils.directives.dirPagination']);

gr.controller('mainCtrl', function ($scope, $rootScope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order

    $scope.predicate = 'name';
    $scope.reverse = true;
    $scope.currentPage = 1;

    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };


    $scope.newPerson = {};
    $scope.editing = false;
    $scope.localPerson = JSON.parse(localStorage.getItem('grLocalstorage'));
    $scope.person = $scope.localPerson || [


            {"id": 1, name: "Jarkka", "gender": 'Female', "age": 26},
            {"id": 2, name: "Erkki", "gender": 'Female', "age": 7},
            {"id": 3, name: "Tola", "gender": 'Female', "age": 25},
            {"id": 4, name: "Hellooaa", "gender": 'Female', "age": 16},
            {"id": 5, name: "Sam", "gender": 'Female', "age": 45},
            {"id": 6, name: "Jarkoo", "gender": 'Female', "age": 56},
            {"id": 7, name: "Erkkiniemi", "gender": 'Female', "age": 76},
            {"id": 8, name: "Tofuuuu", "gender": 'Female', "age": 89},
            {"id": 9, name: "Hela Dean", "gender": 'Female', "age": 3},
            {"id": 10, name: "Samainine", "gender": 'Female', "age": 67},
            {"id": 11, name: "supooo", "gender": 'Female', "age": 89},
            {"id": 12, name: "Erkki", "gender": 'Male', "age": 7},
            {"id": 13, name: "Tola", "gender": 'Male', "age": 6},
            {"id": 14, name: "Hellooaa", "gender": 'Male', "age": 78},
            {"id": 15, name: "Samrita", "gender": 'Female', "age": 26},
            {"id": 16, name: "Jarkkainiiii", "gender": 'Female', "age": 26},
            {"id": 17, name: "Erkkireeee", "gender": 'Female', "age": 26},
            {"id": 18, name: "Tolafeeeeee", "gender": 'Female', "age": 26},
            {"id": 19, name: "Hellooaayeyeyye", "gender": 'Female', "age": 26},
            {"id": 20, name: "Sampe", "gender": 'Female', "age": 26},
            {"id": 21, name: "Jarkkayyy", "gender": 'Female', "age": 26},
            {"id": 22, name: "Persikki", "gender": 'Female', "age": 26},
            {"id": 23, name: "tombola", "gender": 'Female', "age": 26},
            {"id": 24, name: "Huomio Operatorio", "gender": 'Female', "age": 26},
            {"id": 25, name: "Sam Cook", "gender": 'Female', "age": 26},
            {"id": 26, name: "Jay Z ", "gender": 'Female', "age": 26},
            {"id": 27, name: "Beyonce", "gender": 'Female', "age": 26},
            {"id": 28, name: "Rihanna", "gender": 'Female', "age": 26},
            {"id": 29, name: "J cole", "gender": 'Female', "age": 26},
            {"id": 30, name: "Lamar", "gender": 'Female', "age": 26},
            {"id": 31, name: "Kendrick", "gender": 'Female', "age": 26},
            {"id": 32, name: "drake", "gender": 'Female', "age": 26},
            {"id": 33, name: "Snoopy", "gender": 'Female', "age": 26},
            {"id": 34, name: "Dr Dre", "gender": 'Female', "age": 26},
            {"id": 35, name: "Sibelius", "gender": 'Female', "age": 26},
            {"id": 36, name: "Chopin", "gender": 'Female', "age": 26},
            {"id": 37, name: "Art Tatum", "gender": 'Female', "age": 26},
            {"id": 38, name: "Herbie", "gender": 'Female', "age": 26},
            {"id": 39, name: "Hancook", "gender": 'Female', "age": 26},
            {"id": 40, name: "James Blake", "gender": 'Male', "age": 26},
            {"id": 41, name: "James Blunt", "gender": 'Male', "age": 26},
            {"id": 42, name: "Reddit User", "gender": 'Male', "age": 26},
            {"id": 43, name: "Boochoo", "gender": 'Male', "age": 26},
            {"id": 44, name: "Finnan", "gender": 'Male', "age": 26},
            {"id": 45, name: "Yoni", "gender": 'Male', "age": 26},
            {"id": 46, name: "Musse", "gender": 'Male', "age": 26},
            {"id": 47, name: "Titi", "gender": 'Male', "age": 26},
            {"id": 48, name: "Haki", "gender": 'Male', "age": 26},
            {"id": 49, name: "Mahi", "gender": 'Male', "age": 26},
            {"id": 50, name: "Rekik", "gender": 'Male', "age": 26},
            {"id": 51, name: "Chung", "gender": 'Female', "age": 26},
            {"id": 52, name: "Jossie", "gender": 'Female', "age": 26},
            {"id": 53, name: "Ashu", "gender": 'Female', "age": 26},
            {"id": 54, name: "Dagi", "gender": 'Female', "age": 26},
            {"id": 55, name: "Dani", "gender": 'Female', "age": 26},
            {"id": 56, name: "Eyu", "gender": 'Female', "age": 26},
            {"id": 57, name: "Elsi", "gender": 'Female', "age": 26},
            {"id": 58, name: "Mikiye", "gender": 'Female', "age": 26},
            {"id": 59, name: "Habby", "gender": 'Female', "age": 26},
            {"id": 60, name: "Hanna", "gender": 'Female', "age": 26},
            {"id": 61, name: "Desta", "gender": 'Female', "age": 26},
            {"id": 62, name: "Mati", "gender": 'Male', "age": 26},
            {"id": 63, name: "Paul", "gender": 'Male', "age": 26},
            {"id": 64, name: "Sebli", "gender": 'Male', "age": 26},
            {"id": 65, name: "Melat", "gender": 'Male', "age": 26},
            {"id": 66, name: "Tom Cruise", "gender": 'Male', "age": 26},
            {"id": 67, name: "Will Smith", "gender": 'Male', "age": 26},
            {"id": 68, name: "Cheek", "gender": 'Male', "age": 26},
            {"id": 69, name: "Hellooaa", "gender": 'Male', "age": 26},
            {"id": 70, name: "Sam", "gender": 'Male', "age": 26},
            {"id": 71, name: "Jarkka", "gender": 'Male', "age": 26},
            {"id": 72, name: "Erkki", "gender": 'Male', "age": 26},
            {"id": 73, name: "Tola", "gender": 'Male', "age": 26},
            {"id": 74, name: "Hellooaa", "gender": 'Male', "age": 26},
            {"id": 75, name: "Samosa", "gender": 'Male', "age": 26},
            {"id": 76, name: "Jarktttka", "gender": 'Female', "age": 26},
            {"id": 77, name: "Erkaasfki", "gender": 'Female', "age": 26},
            {"id": 78, name: "Toaaaala", "gender": 'Female', "age": 26},
            {"id": 79, name: "Hellooasssa", "gender": 'Female', "age": 26},
            {"id": 80, name: "Samssss", "gender": 'Male', "age": 26},
            {"id": 81, name: "Jarkkaiii", "gender": 'Male', "age": 26},
            {"id": 82, name: "Erkki", "gender": 'Male', "age": 26},
            {"id": 83, name: "Tola", "gender": 'Male', "age": 26},
            {"id": 84, name: "Hellooaa", "gender": 'Male', "age": 26},
            {"id": 85, name: "Sam", "gender": 'Male', "age": 26},
            {"id": 86, name: "Jarkka", "gender": 'Male', "age": 26},
            {"id": 87, name: "Erkki", "gender": 'Male', "age": 26},
            {"id": 88, name: "Tola", "gender": 'Male', "age": 26},
            {"id": 89, name: "Tola", "gender": 'Male', "age": 26},
            {"id": 90, name: "Hellooaa", "gender": 'Male', "age": 26},
            {"id": 91, name: "Sam Sam", "gender": 'Male', "age": 26},
            {"id": 92, name: "Samshusha", "gender": 'Male', "age": 26},
            {"id": 93, name: "John Ham", "gender": 'Male', "age": 26},
            {"id": 94, name: "Johnny Cook", "gender": 'Male', "age": 26},
            {"id": 95, name: "Billie Holiday", "gender": 'Female', "age": 26},
            {"id": 96, name: "Sam Worthington", "gender": 'Female', "age": 26},
            {"id": 97, name: "Avator", "gender": 'Female', "age": 26},
            {"id": 98, name: "red eyed peas", "gender": 'Female', "age": 26},
            {"id": 99, name: "Boooyaka", "gender": 'Female', "age": 26},
            {"id": 100, name: "Rambo", "gender": 'Female', "age": 2}
        ];

    /* $http.get('persons.json').success(function(data){
     $scope.person = data;
     });
     */

    $scope.gender = [
        {type: 'male'},
        {type: 'female'}
    ];

    $scope.addPerson = function () {
        if (angular.isDefined($scope.newName) && $scope.newName != '' && $scope.newGender != '' && $scope.newAge != '') {
            $scope.person.push({
                name: $scope.newName,
                gender: $scope.newGender,
                age: $scope.newAge
            });
        } else {

            sweetAlert("Bad Input", "Check if you are putting the right information!", "error");
        }

        localStorage.setItem('grLocalstorage', JSON.stringify($scope.person));
        clearFields();

    };

    console.log(localStorage.getItem("grLocalstorage"));

    function clearFields() {

        //clearing everything after addPerson()
        $scope.id = '';
        $scope.newName = '';
        $scope.newGender = '';
        $scope.newAge = '';

    }

    $scope.remove = function (person) {

        swal({
                title: 'Remove Person',
                text: "Are you sure you want to delete this person?",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Delete!",
                cancelButtonText: "Cancel",
                closeOnConfirm: true

            },


            function () {
                var index = $scope.person.indexOf(person);
                console.log($scope.person[index]);
                $scope.person.splice(index, 1);
                localStorage.setItem("grLocalstorage", JSON.stringify($scope.person));
                $scope.$apply();

                swal("Deleted!");
            });

    };

    $scope.editPerson = function (field) {


        $scope.editing = true;
    };

    $scope.saveField = function () {
        if ($scope.editing !== false) {
            //$scope.person[$scope.editing] = $scope.newPerson;
            $scope.editing = false;
        }

        localStorage.setItem('grLocalstorage', JSON.stringify($scope.person));

    };

    $scope.cancel = function (index) {
        if ($scope.editing !== false) {
            $scope.person[$scope.editing] = $scope.newPerson;
            $scope.editing = false;
        }
    };

    $scope.totalItems = $scope.person.length;
    $scope.numPerPage = 5;
    $scope.paginate = function (value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.person.indexOf(value);
        return (begin <= index && index < end);
    };


});
