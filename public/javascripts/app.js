var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

var marker_image = 'images/P_green.svg';
var userMarker_image = 'images/avatar.svg';
var car_image = 'images/car.svg';
var userMarker;
var first = true;

var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": "-42"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#309c9a"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#1b192f"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-42"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#4d83c5"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#010b3f"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-44"
            },
            {
                "saturation": "-60"
            },
            {
                "color": "#5a7492"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#07142e"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "lightness": "0"
            }
        ]
    }
];

function initMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.865627, lng: 151.207275 },
        zoom: 17,
        disableDefaultUI: true
    });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    directionsDisplay.setMap(map);
}

function initMarkers($scope, $compile) {
    markers = [];
    
    var contentString = 
        '<div><div id="content" style="width:250px;height:150px;margin-bottom:1em;"></div>' +
'<md-divider></md-divider>' +
'<div id="parking-info">' +
    '<div class="street-name">23 Crown St</div>' +
    '<div>' +
        '<md-icon class="material-icons">person</md-icon>' +
        '<span>120m away from Churassco</span>' +
    '</div>' +
'</div>' +
'<md-divider></md-divider>' +
'<div layout="row">' +
    '<md-button class="md-primary" ng-click="goConfirmation()" flex="40">' +
        '<md-icon class="material-icons">payment</md-icon> Pay' +
    '</md-button>' +
    '<md-button class="md-primary" flex="50">' +
        '<md-icon class="material-icons">directions</md-icon> Park' +
    '</md-button>' +
'</div></div>';
    var compiled = $compile(contentString)($scope);

    $.getJSON('/parking/disabled', function(data) {
        for (i = 0; i < data.length; i++) {
            var latLng = { lat: data[i].Y_Lat, lng: data[i].X_Lon };
            markers.push(new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'Lol',
                icon: marker_image
            }));
            google.maps.event.addListener(markers[i], 'click', function() {
                var myinfowindow = new google.maps.InfoWindow({ content: compiled[0] });
                myinfowindow.open(map, this);
                var pano = null;
                google.maps.event.addListener(myinfowindow, 'domready', function () {
                    if (pano != null) {
                        pano.unbind("position");
                        pano.setVisible(false);
                    }

                    var fenway = {lat: latLng.lat, lng: latLng.lng};
                    var panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('content'), {
                        position: fenway,
                        pov: {
                            heading: 34,
                            pitch: 10
                        },
                        navigationControl: true,
                        navigationControlOptions: { style: google.maps.NavigationControlStyle.ANDROID },
                        enableCloseButton: false,
                        addressControl: false,
                        linksControl: false
                    });
                    map.setStreetView(panorama);
                    panorama.bindTo("position", userMarker);
                    panorama.setVisible(true);
                    google.maps.event.addListener(myinfowindow, 'closeclick', function () {
                        panorama.unbind("position");
                        panorama.setVisible(false);
                        panorama = null;
                    });
                });
            });
        }
    });
}

function mapUserLocation($scope, $compile, latitude, longitude) {
    var latLng = { lat: latitude, lng: longitude };
    if (!first) {
        var directionsRequest = {
            origin: 'Sydney, NSW',
            destination: latLng,
            travelMode: 'DRIVING'
        };
        directionsService.route(directionsRequest, function(result, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
                console.log('Directions: ' + result);
            }
            else {
                console.log('Directions result: ' + status);
            }
        });
    }
    first = false;

    if(!userMarker) {
        userMarker = new google.maps.Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Anonymous',
            icon: userMarker_image
        });

        var markerImage = new google.maps.MarkerImage(car_image, new google.maps.Size(80, 60), null, new google.maps.Point(0, 30), new google.maps.Size(30, 30));
        new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'Car',
            icon: markerImage
        });
        
        map.panTo(userMarker.position);
        
    } else {
        userMarker.setPosition(latLng);
        map.panTo(userMarker.position);
    }
}

var app = angular.module('livingSydney', ['ngRoute', 'ngMaterial', 'angularMoment']);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/', {
            templateUrl: 'templates/index.html',
            controller: 'IndexCtrl'
        }).
        when('/confirmed', {
            templateUrl: 'templates/confirmed.html',
            controller: 'ConfirmationCtrl'
        }).
        otherwise('/phones');
}).run(function($rootScope) {
    $rootScope.loading = true;
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.loading = false;
    });
});

app.service('GeoCoderService', function($q) {
    this.geoCodeAddress = function(address) {
        this.geocoder = new google.maps.Geocoder();
        var request = {
            address: address,
            componentRestrictions: {
                country: 'AU',
                locality: 'sydney'
            }
        };
        var deferred = $q.defer();
        this.geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                deferred.resolve(results);
            } else {
                deferred.reject({
                    data: 'No Results'
                });
            }
        });
        return deferred.promise;
    }
});

app.controller('AppCtrl', function ($scope, $compile, $timeout, $mdSidenav, $log, $q, GeoCoderService, $location) {
    $scope.showFilters = false;
    $scope.toggleFilterMenu = function () {
        $scope.showFilters = !$scope.showFilters;
    };

    $scope.currentLocation = function () {
        $location.path('/');
    }

    $scope.goConfirmation = function () {
        $location.path('/confirmed');
    }

    $scope.parkingTypeOptions = [
        { value : '<1P', distance : 1 },
        { value : '1P', distance : 2 },
        { value : '2P', distance: 3 },
        { value : '2P+', distance : 4 }
    ];

    $scope.simulateQuery = false;
    $scope.isDisabled    = false;
    
    $scope.querySearch   = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange   = searchTextChange;
    
    function querySearch (query) {
      return GeoCoderService.geoCodeAddress(query);
    }
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        if(item && item.geometry) {
            var lat = item.geometry.location.lat();
            var lng = item.geometry.location.lng();
            mapUserLocation($scope, $compile, lat, lng);
        }
      $log.info('Item changed to ' + JSON.stringify(item));
    }
  })
  .controller('IndexCtrl', function ($scope, $compile, $window) {
    initMap();
    var navigator = $window.navigator;
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            mapUserLocation($scope, $compile, position.coords.latitude, position.coords.longitude);
        });
        var watchID = navigator.geolocation.watchPosition(function(position) {
            mapUserLocation($scope, $compile, position.coords.latitude, position.coords.longitude);
        });
        initMarkers($scope, $compile);
    } else {
        initMarkers($scope, $compile);
    }
  })
  .controller('ConfirmationCtrl', function ($location, $scope, $mdToast) {
    $scope.dismiss = function () {
        $location.path('/');
    }

    $scope.entryTime = new Date();
    $scope.endTime = new Date();

    $scope.setReminder = function () {
        $mdToast.show(
            $mdToast.simple('Reminder set')
        );
    }
  });