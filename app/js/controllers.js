'use strict';

/* Controllers */
// Тут мы в модуле указываем параметры:
// 1 параметр - это название нашего модуля;
// 2 - в [], это от чего зависит модуль!
var phonecatApp = angular.module('phonecatApp', []);

// создаём контроллер
phonecatApp.controller('PhoneListCtrl', function($scope){
    // Для заголовка =)
    $scope.title = 'Телефоны';

    // создаём тестовый список!
    $scope.phones = [
        {'name':    'Nexus5',
        'snippet':  'Fast just got faster with Nexus 5.',
        'status':   true,
        'priority': 1},
        {'name':    'Motorola XOOM',
        'snippet':  'Text motorolla.',
        'status':   false,
        'priority': 2},
        {'name':    'Motorola XOOM',
        'snippet':  'Text motorolla.',
        'status':   true,
        'priority': 3}
    ];

    // Filter
    var date = new Date();
    $scope.today = date;

    // новая функция фильтрации
    // все name с приоритетом > 1!!!
    $scope.doneAndFilter = function(phoneItem){
        //return phoneItem.name && phoneItem.priority > 1;
        // плюс статус === true!!!!
        return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
    };


    // Теперь наш новый "фильтр по имени"
    //$scope.sortField = 'name';
    // Сначала мы передаём undefind - что бы при загрузке странички НЕ БЫЛО СОРТИРОВКИ!!!!!!
    $scope.sortField    = undefined;
    $scope.reverse      = false;

    // Универсальная сортировка, которую можно использовать в своих проектах!!!
    $scope.sort = function(fieldName)
    {
        if ($scope.sortField === fieldName)
        {
            $scope.reverse      = !$scope.reverse;
        }
        else
        {
            $scope.sortField    = fieldName;
            $scope.reverse      = false;
        }
    };

    // Дополнительные кнопки:
    $scope.isSortUp = function(fieldName)
    {
        return $scope.sortField === fieldName && !$scope.reverse;
    };
    $scope.isSortDown = function(fieldName)
    {
        return $scope.sortField === fieldName && $scope.reverse;
    };
});
