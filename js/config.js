angular.module('appConfig', [])

.config([
	'$ionicConfigProvider',
	function($ionicConfigProvider) {
		$ionicConfigProvider.platform.android.tabs.position("buttom");
		$ionicConfigProvider.platform.ios.tabs.position("buttom");
}
]);
