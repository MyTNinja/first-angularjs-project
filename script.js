let app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
	$scope.items = ["Example"];

	$scope.addItem = function () {
        $scope.errorMessage = "";
        $scope.show = false;

		if (!$scope.newItem) {
			return;
		} //empty item field

		if ($scope.items.indexOf($scope.newItem) >= 0) {
            $scope.errorMessage = "Item already in list!"; //error
            $scope.show = true;
		} else {
			$scope.items.push($scope.newItem);
			$scope.newItem = "";
		}
	};

	$scope.removeItem = function (i) {
        $scope.errorMessage = "";
        $scope.show = false;

		$scope.items.splice(i, 1);
	};
});
