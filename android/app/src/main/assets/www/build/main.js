webpackJsonp([0],{

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popover_popover__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_modal_add_modal__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__intro_intro__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_place_search_place__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__place_review_place_review__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__place_modify_place_modify__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireDatabase } from 'angularfire2/database';














var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation, diagnostic, alertCtrl, loadingCtrl, auth, events, popoverCtrl, modalCtrl, toastCtrl, zone, http, actionSheetCtrl, AlertCtrl) {
        // loadingCtrl && loadingCtrl.present();
        // console.log(this.auth.currentUser())
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.AlertCtrl = AlertCtrl;
        this.marker_info = {
            smoking: {
                status: 1,
                markers: [],
                datas: []
            },
            no_smoking: {
                status: 1,
                markers: [],
                circles: [],
                datas: []
            },
            center: {
                status: 1,
                markers: [],
                datas: []
            },
            warning: {
                status: 1,
                datas: [],
                circles: []
            },
            my_location: null
        };
        this.address_text = "";
        this.footer_hidden = true;
        this.footer_title = "제목";
        this.footer_discription = "상세내용 설명입니다.";
        this.place_type = "장소구분";
        this.marker_type = "마커구분";
        this.tel = "010-5345-3933";
        this.place_distance = "100m";
        this.descriptions = [];
        this.search_map_mode = false;
        this.angry_face_hide = true;
        this.my_emotion_button_hide = true;
        this.center_child_fab_hide = true;
        this.chat_badge_count = 0;
        this.chat_input_text = "";
        this.chat_opened = false;
        this.auth.getUser().then(function (user) {
            if (user) {
                _this.auth.signInWithCustomToken({
                    uid: user.uid
                }).then(function () {
                    _this.addChatListener();
                });
            }
            else {
                _this.auth.createUser().then(function (user) {
                    return _this.auth.signInWithCustomToken({
                        uid: user.uid
                    });
                }).then(function (userInfo) {
                    return _this.auth.sqlite.Connect();
                }).then(function (db) {
                    return _this.auth.insert(db, _this.auth.user.uid, _this.auth.user.nickname, true);
                }).then(function () {
                    _this.addChatListener();
                    var modal = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__intro_intro__["a" /* IntroPage */], {
                        nickname: _this.auth.user.nickname,
                        uid: _this.auth.user.uid
                    });
                    modal.present();
                })
                    .catch(function (error) {
                    _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                    console.log(JSON.stringify(error));
                });
            }
        }).catch(function (error) {
            console.log(JSON.stringify(error));
            // this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다")
        });
    }
    MapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.diagnostic.registerLocationStateChangeHandler(function (status) {
            //location_off
            //high_accuracy
            if (status == "high_accuracy") {
                _this.moveToMyLocation();
            }
        });
        this.mapInit()
            .then(function () {
            _this.loadingCtrl.dismiss();
            _this.mapEventBinding();
            _this.loadData(false);
            return _this.isLocationEnabled();
        }).then(function (status) {
            if (status) {
                _this.moveToMyLocation();
            }
            else {
                _this.alertCtrl.showConfirm("위치(GPS) 기능이 비활성화 중입니다. 위치기반 서비스를 사용하기 위해 활성화 하시겠습니까?", "네", "아니오", function () {
                    _this.diagnostic.switchToLocationSettings();
                }, function () {
                    console.log("GPS 비활성화");
                });
            }
        })
            .catch(function (error) {
            console.log(error);
            _this.loadingCtrl.dismiss();
        });
    };
    MapPage.prototype.loadData = function (refreshForce) {
        var _this = this;
        this.http.loadData(refreshForce)
            .then(function (data) {
            data['smoking'].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.marker_info["smoking"].datas.push(obj);
                // !v.hidden && this.addMarker(obj, "smoking")
            });
            data["no_smoking"].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.marker_info["no_smoking"].datas.push(obj);
                // this.addMarker(obj, "no_smoking")
            });
            data["center"].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.marker_info["center"].datas.push(obj);
            });
            data["warning"].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.marker_info["warning"].datas.push(obj);
                // this.addMarker(obj, "no_smoking")
            });
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.viewMarkerEventSubscribe();
        this.getMyAddressSubscribe();
        this.refreshEventSubscribe();
        this.chatBadgeCountEventSubscribe();
    };
    MapPage.prototype.ionViewWillLeave = function () {
        this.http.FirebaseDB.database.ref("/chat").off();
    };
    MapPage.prototype.addChatListener = function () {
        var _this = this;
        this.http.FirebaseDB.database.ref("/chat").on("child_added", function (v) {
            var nickname = v.child("nickname").val();
            var distance;
            var uid = v.child("uid").val();
            var date = v.child("date").val();
            var content = v.child("content").val();
            var latitude = v.child("latitude").val();
            var longitude = v.child("longitude").val();
            if (v.child("nickname").val() == _this.auth.user.nickname) {
                nickname = "나";
            }
            _this.getMyLocation().then(function (my_location) {
                distance = _this.convertDistanceToText(_this.getDistance(my_location.latLng, { lat: latitude, lng: longitude }));
                _this.events.publish("add_chat_message", {
                    nickname: nickname,
                    distance: distance,
                    content: content,
                    date: _this.converTime(new Date(date)),
                    uid: uid
                });
            });
            if (_this.chat_opened && v.key.indexOf(_this.auth.user.uid) == -1) {
                _this.chat_badge_count = _this.chat_badge_count + 1;
            }
        });
    };
    MapPage.prototype.chatBadgeCountEventSubscribe = function () {
        var _this = this;
        this.events.subscribe("chat_badge_count", function (count) {
            _this.chat_badge_count = count;
        });
    };
    MapPage.prototype.refreshEventSubscribe = function () {
        var _this = this;
        this.events.subscribe("refresh", function () {
            _this.marker_info["smoking"].datas = [];
            _this.marker_info["no_smoking"].datas = [];
            _this.marker_info["center"].datas = [];
            _this.loadData(true);
        });
    };
    MapPage.prototype.getMyAddressSubscribe = function () {
        var _this = this;
        this.events.subscribe("load_my_address", function () {
            _this.http.searchAddress(_this.camera_location)
                .then(function (res) {
                if (res && res.results[0]) {
                    _this.address_text = res.results[0].formatted_address.replace("대한민국 ", "");
                    _this.events.publish("get_my_address", _this.address_text);
                }
                else {
                    _this.events.publish("get_my_address", _this.address_text);
                    _this.alertCtrl.showAlert("위치 정보를 불러 올 수 없습니다.");
                }
            }).catch(function (error) {
                console.log(JSON.stringify(error));
                _this.events.publish("get_my_address", _this.address_text);
                _this.alertCtrl.showAlert("위치 정보를 불러 올 수 없습니다.");
            });
        });
    };
    MapPage.prototype.viewMarkerEventSubscribe = function () {
        var _this = this;
        this.events.subscribe("view_marker", function (data) {
            _this.selected_place_data = data;
            _this.popover && _this.popover.dismiss();
            if (data.category == "흡연 구역") {
                _this.marker_info.smoking.status = 1;
                _this.map.moveCamera({
                    target: {
                        lat: data.latitude,
                        lng: data.longitude
                    },
                    zoom: 18
                });
                var smoking_names = _this.marker_info.smoking.datas.filter(function (v, i) {
                    return v.name;
                });
                if (smoking_names.indexOf(data.name) > -1) {
                    var marker = _this.marker_info.smoking.markers[smoking_names.indexOf(data.name)];
                    marker.showInfoWindow();
                }
            }
            else if (data.category == "금연 구역") {
                _this.marker_info.no_smoking.status = 1;
                _this.map.moveCamera({
                    target: {
                        lat: data.latitude,
                        lng: data.longitude
                    },
                    zoom: 18
                });
                var no_smoking_names = _this.marker_info.no_smoking.datas.filter(function (v, i) {
                    return v.name;
                });
                if (no_smoking_names.indexOf(data.name) > -1) {
                    var marker = _this.marker_info.no_smoking.markers[no_smoking_names.indexOf(data.name)];
                    marker.showInfoWindow();
                }
            }
            else if (data.category == "금연 치료 의료 기관") {
                _this.map.moveCamera({
                    target: {
                        lat: data.latitude,
                        lng: data.longitude
                    },
                    zoom: 18
                });
                var center_names = _this.marker_info.center.datas.filter(function (v, i) {
                    return v.name;
                });
                if (center_names.indexOf(data.name) > -1) {
                    var marker = _this.marker_info.center.markers[center_names.indexOf(data.name)];
                    marker.setVisible(true);
                    marker.showInfoWindow();
                }
                else {
                    _this.marker_info.center.datas.push(data);
                    if (_this.map.getCameraTarget()) {
                        var marker = _this.addMarker(data, "center");
                        marker.showInfoWindow();
                    }
                }
            }
            _this.presentFooter(data);
        });
    };
    MapPage.prototype.addCircle = function (params) {
        var _this = this;
        var circle = this.map.addCircleSync({
            'center': { 'lat': params.latitude, 'lng': params.longitude },
            'radius': 50,
            'strokeColor': 'transparent',
            'strokeWidth': 0,
            'fillColor': 'rgba(255,0,0,0.2)',
            'clickable': true
        });
        circle.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CIRCLE_CLICK).subscribe(function (e) {
            _this.selected_place_data = params;
            _this.presentFooter(params);
        });
        return circle;
    };
    MapPage.prototype.addWarningCircle = function (params) {
        var circle = this.map.addCircleSync({
            'center': { 'lat': params.latitude, 'lng': params.longitude },
            'radius': 50,
            'strokeColor': 'transparent',
            'strokeWidth': 0,
            'fillColor': 'rgba(255,255,0,0.1)',
            'clickable': true
        });
        // circle.on(GoogleMapsEvent.CIRCLE_CLICK).subscribe((e) => {
        //   this.selected_place_data = params;
        //   this.presentFooter(params)
        // })
        return circle;
    };
    MapPage.prototype.converTime = function (date) {
        date = new Date(date);
        if (__WEBPACK_IMPORTED_MODULE_2_moment__(date).format('YYYYMMDD') == __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYYMMDD')) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format('hh:mm a');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format('YYYY-MM-DD');
        }
    };
    MapPage.prototype.convertDistanceToText = function (distance) {
        if (distance >= 1000) {
            return (distance / 1000).toFixed(1) + "km";
        }
        else {
            return distance.toFixed(0) + "m";
        }
    };
    MapPage.prototype.addMarker = function (params, type) {
        var _this = this;
        var marker = this.map.addMarkerSync({
            title: params.name,
            icon: type == "smoking" ? "./assets/imgs/smoking-pin.png" : (type == "center" ? "./assets/imgs/center-pin.png" : "./assets/imgs/no-smoking-pin.png"),
            animation: 'BOUNCE',
            draggable: true,
            position: {
                lat: params.latitude,
                lng: params.longitude
            },
            visible: this.marker_info[type].status == 1 ? true : false,
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (e) {
            _this.selected_place_data = params;
            _this.presentFooter(params);
            _this.zone.run(function () {
                _this.footer_hidden = false;
                _this.content.resize();
            });
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_DRAG_START).subscribe(function (e) {
            // alert(JSON.stringify(e));
            // this.footer_hidden = false;
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_DRAG_END).subscribe(function (e) {
            _this.alertCtrl.showConfirm("위치를 수정하시겠습니까?", "네", "아니오", function () {
                //positive
                if (params.password == _this.auth.user.uid) {
                    _this.http.updateMarkerInfo({
                        id: params.place_id,
                        latLng: e[0],
                        type: type
                    });
                }
                else {
                    _this.alertCtrl.showAlert("권한이 없습니다.");
                }
            }, function () {
                //negative
                marker.setPosition({
                    lat: params.latitude,
                    lng: params.longitude
                });
            });
        });
        this.marker_info[type].markers.push(marker);
        return marker;
    };
    MapPage.prototype.isLocationEnabled = function () {
        return this.diagnostic.isLocationEnabled();
    };
    MapPage.prototype.getMyLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* LocationService */].getMyLocation();
    };
    MapPage.prototype.moveToMyLocation = function () {
        var _this = this;
        this.getMyLocation().then(function (myLocation) {
            _this.map && _this.map.moveCamera({
                target: myLocation.latLng,
                zoom: 18
            });
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    MapPage.prototype.mapInit = function () {
        var options = {
            controls: {
                // compass: true,
                myLocation: true,
                myLocationButton: true,
                indoorPicker: false,
                mapToolbar: true
            },
            camera: {
                target: {
                    lat: 37.5662994,
                    lng: 126.9757564
                },
                zoom: 18
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', options);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY);
    };
    MapPage.prototype.mapEventBinding = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (params) {
            var latLng = params[0];
            var map = params[1]; // <-- You can get the target of MAP_CLICK event
            _this.zone.run(function () {
                _this.footer_hidden = true;
                _this.content.resize();
            });
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MY_LOCATION_CLICK).subscribe(function (e) {
            !_this.search_map_mode && (_this.my_emotion_button_hide = false);
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_START).subscribe(function (e) {
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (e) {
            _this.camera_location = e[0].target;
            if (_this.search_map_mode) {
                _this.http.searchAddress(_this.camera_location)
                    .then(function (res) {
                    if (res && res.results[0]) {
                        _this.address_text = res.results[0].formatted_address.replace("대한민국 ", "");
                    }
                    else {
                        _this.alertCtrl.showAlert("위치 정보를 불러 올 수 없습니다.");
                    }
                }).catch(function (error) {
                    console.log(JSON.stringify(error));
                    _this.alertCtrl.showAlert("위치 정보를 불러 올 수 없습니다.");
                });
            }
            else {
                _this.marker_info["smoking"].datas.map(function (v, i) {
                    if (_this.marker_info["smoking"].markers[i] == null &&
                        !v.hidden &&
                        _this.getDistance(_this.camera_location, { lat: v.latitude, lng: v.longitude }) <= 500 &&
                        _this.marker_info["smoking"].status == 1) {
                        _this.marker_info["smoking"].markers[i] = _this.addMarker(v, "smoking");
                    }
                });
                _this.marker_info["no_smoking"].datas.map(function (v, i) {
                    if (_this.marker_info["no_smoking"].markers[i] == null &&
                        !v.hidden &&
                        _this.getDistance(_this.camera_location, { lat: v.latitude, lng: v.longitude }) <= 500 &&
                        _this.marker_info["no_smoking"].status == 1) {
                        _this.marker_info["no_smoking"].markers[i] = _this.addMarker(v, "no_smoking");
                        _this.marker_info["no_smoking"].circles[i] = _this.addCircle(v);
                    }
                });
                _this.marker_info["warning"].status = 1;
                _this.marker_info["warning"].datas.map(function (v, i) {
                    if (!v.hidden &&
                        _this.marker_info["warning"].circles[i] == null &&
                        _this.getDistance(_this.camera_location, { lat: v.latitude, lng: v.longitude }) <= 500 &&
                        _this.marker_info["warning"].status == 1) {
                        _this.marker_info["warning"].circles[i] = _this.addWarningCircle(v);
                    }
                });
            }
            _this.zone.run(function () {
                _this.content.resize();
            });
        });
    };
    MapPage.prototype.clickFilter = function (type, e) {
        var _this = this;
        this.footer_hidden = true;
        this.content.resize();
        this.marker_info[type].markers.map(function (v, i) {
            if (_this.marker_info[type].status == 1) {
                v.setVisible(false);
            }
            else {
                v.setVisible(true);
            }
        });
        type == "no_smoking" && this.marker_info[type].circles.map(function (v, i) {
            if (_this.marker_info[type].status == 1) {
                v.setVisible(false);
            }
            else {
                v.setVisible(true);
            }
        });
        var type_text;
        if (type == 'smoking')
            type_text = "흡연 구연";
        else
            type_text = "금연 구역";
        if (this.marker_info[type].status == 1) {
            this.marker_info[type].status = 0;
            this.presentToast(type_text + " 숨기기");
        }
        else {
            this.marker_info[type].status = 1;
            this.presentToast(type_text + " 보이기");
        }
    };
    MapPage.prototype.presentAddModal = function () {
        this.presentToast("장소 추가 하기");
        this.searchMap();
        // let alert = this.AlertCtrl.create();
        // alert.setTitle('장소 추가');
        // alert.addInput({
        //   type: 'radio',
        //   label: '주소로 장소 찾기',
        //   value: '0',
        //   checked: true
        // });
        // alert.addInput({
        //   type: 'radio',
        //   label: '지도에서 장소 찾기',
        //   value: '1'
        // });
        // alert.addButton('취소');
        // alert.addButton({
        //   text: '선택',
        //   handler: data => {
        //     if (data == 1) {//지도에서 검색
        //       this.searchMap()
        //     } else {//주소로 검색
        //       const modal = this.modalCtrl.create(AddModalPage);
        //       modal.present();
        //     }
        //   }
        // });
        // alert.present();
    };
    MapPage.prototype.searchMap = function () {
        var _this = this;
        this.search_map_mode = true;
        this.marker_info["smoking"].markers.map(function (v, i) {
            v.setVisible(false);
        });
        this.marker_info["smoking"].status = 0;
        this.marker_info["no_smoking"].markers.map(function (v, i) {
            v.setVisible(false);
        });
        this.marker_info['no_smoking'].circles.map(function (v, i) {
            v.setVisible(false);
        });
        this.marker_info["no_smoking"].status = 0;
        this.marker_info["center"].markers.map(function (v, i) {
            v.setVisible(false);
        });
        this.marker_info["center"].status = 0;
        this.marker_info["warning"].circles.map(function (v, i) {
            v.setVisible(false);
        });
        this.marker_info["warning"].status = 0;
        this.moveToMyLocation();
        this.getMyLocation()
            .then(function (myLocation) {
            _this.http.searchAddress(myLocation.latLng).then(function (res) {
                if (res && res.results[0]) {
                    _this.address_text = res.results[0].formatted_address.replace("대한민국 ", "");
                }
                else {
                    _this.alertCtrl.showAlert("위치 정보를 불러 올 수 없습니다.");
                }
            }).catch(function (error) {
                console.log(error);
                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
            });
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
        this.zone.run(function () {
            _this.content.resize();
        });
    };
    MapPage.prototype.confirmArress = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__add_modal_add_modal__["a" /* AddModalPage */], { address: this.address_text, location: this.camera_location });
        modal.present();
        this.search_map_mode = false;
    };
    MapPage.prototype.cancelSearchMap = function () {
        var _this = this;
        this.search_map_mode = false;
        this.zone.run(function () {
            _this.content.resize();
        });
    };
    MapPage.prototype.openChat = function () {
        this.chat_opened = true;
        this.chat_badge_count = 0;
        this.events.publish("get_my_location", this.camera_location);
    };
    MapPage.prototype.openChatInput = function () {
        var _this = this;
        var alertCtrl = this.alertCtrl.alertCtrl;
        var prompt = alertCtrl.create({
            title: '',
            message: "\uD604\uC7AC \uC704\uCE58\uC5D0\uC11C \uD558\uACE0 \uC2F6\uC740 \uB9D0\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?(\uCD5C\uB300 10\uAE00\uC790) ",
            inputs: [
                {
                    name: 'content',
                    placeholder: '입력',
                    max: "10"
                },
            ],
            buttons: [
                {
                    text: '취소',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '완료',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        _this.getMyLocation().then(function (my_location) {
                            _this.http.sendChat({
                                uid: _this.auth.user.uid,
                                nickname: _this.auth.user.nickname,
                                content: data.content.substring(0, 10),
                                latitude: my_location.latLng.lat,
                                longitude: my_location.latLng.lng,
                                date: new Date().toString()
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
        this.closeMyEmotionButton();
        this.my_emotion_button_hide = true;
    };
    MapPage.prototype.presentPopover = function (ev) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__popover_popover__["a" /* PopoverPage */], {});
        this.popover.onDidDismiss(function () {
            _this.popover = null;
            // this.backButtonAction();
        });
        this.popover.present({
            ev: ev
        }).then(function () {
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });
    };
    MapPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    MapPage.prototype.addPlace = function () {
        this.presentAddModal();
    };
    MapPage.prototype.revealAngry = function () {
        var _this = this;
        this.presentToast("간접흡연 발생 지역으로 저장됩니다.");
        this.closeMyEmotionButton();
        this.getMyLocation().then(function (my_location) {
            return _this.http.addWarningPlace({
                latitude: my_location.latLng.lat,
                longitude: my_location.latLng.lng,
                uid: _this.auth.user.uid,
                nickname: _this.auth.user.nickname,
                hidden: false,
                date: new Date().toString()
            });
        }).then(function () {
            console.log("ok");
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
        this.my_emotion_button_hide = !this.my_emotion_button_hide;
        if (this.angry_face_hide) {
            this.angry_face_hide = !this.angry_face_hide;
            setTimeout(function () {
                _this.angry_face_hide = !_this.angry_face_hide;
            }, 3000);
        }
        this.moveToMyLocation();
    };
    MapPage.prototype.revealMyEmotionButton = function () {
        if (this.my_emotion_button_hide) {
            this.moveToMyLocation();
        }
        this.closeMyEmotionButton();
        this.my_emotion_button_hide = !this.my_emotion_button_hide;
    };
    MapPage.prototype.clickMyEmoticonButton = function () {
    };
    MapPage.prototype.clickFabContainerButton = function () {
        this.center_child_fab_hide = !this.center_child_fab_hide;
        // console.log(this.fabContainer)   
    };
    MapPage.prototype.closeMyEmotionButton = function () {
        this.fabContainer.setActiveLists(false);
        this.center_child_fab_hide = true;
    };
    MapPage.prototype.getRad = function (x) {
        return x * Math.PI / 180;
    };
    MapPage.prototype.getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.getRad(p2.lat - p1.lat);
        var dLong = this.getRad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.getRad(p1.lat)) * Math.cos(this.getRad(p2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };
    MapPage.prototype.searchPlace = function () {
        // this.navCtrl.push(SearchPlacePage, {})
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__search_place_search_place__["a" /* SearchPlacePage */]);
        modal.present();
    };
    MapPage.prototype.presentFooter = function (params) {
        var _this = this;
        this.descriptions = [];
        this.getMyLocation()
            .then(function (myLocation) {
            _this.footer_title = params.name;
            _this.footer_discription = params.address1 || params.operation && "운영관리 : " + params.operation;
            _this.place_type = params.type;
            _this.marker_type = params.category;
            params.description1 && _this.descriptions.push(params.description1);
            params.description2 && _this.descriptions.push(params.description2);
            params.description3 && _this.descriptions.push(params.description3);
            _this.editor = params.editor;
            _this.place_distance = _this.convertDistanceToText(_this.getDistance(myLocation.latLng, { lat: params.latitude, lng: params.longitude }));
            _this.zone.run(function () {
                _this.footer_hidden = false;
                _this.content.resize();
            });
        }).catch(function (error) {
            console.log(JSON.stringify(error));
            _this.footer_title = params.name;
            _this.footer_discription = params.address1 || params.operation && "운영관리 : " + params.operation;
            _this.place_type = params.type;
            _this.marker_type = params.category;
            _this.place_distance = "";
            params.description1 && _this.descriptions.push(params.description1);
            params.description2 && _this.descriptions.push(params.description2);
            params.description3 && _this.descriptions.push(params.description3);
            _this.editor = params.editor;
            _this.zone.run(function () {
                _this.footer_hidden = false;
                _this.content.resize();
            });
        });
    };
    MapPage.prototype.clickEditButton = function () {
        var _this = this;
        console.log(this.selected_place_data);
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '위치 수정',
                    role: 'destructive',
                    icon: "ios-pin-outline",
                    handler: function () {
                        _this.map.moveCamera({
                            target: {
                                lat: _this.selected_place_data.latitude,
                                lng: _this.selected_place_data.longitude
                            },
                            zoom: 18
                        });
                        _this.footer_hidden = true;
                        _this.content.resize();
                        var toast = _this.toastCtrl.create({
                            message: '마커를 드래그하여 위치를 변경하세요.',
                            showCloseButton: true,
                            closeButtonText: '완료',
                        });
                        toast.present();
                    }
                },
                {
                    text: '정보 수정',
                    role: 'destructive',
                    icon: "ios-create-outline",
                    handler: function () {
                        // const modal = this.modalCtrl.create(PlaceModifyPage, this.selected_place_data);
                        // modal.present();
                        if (_this.selected_place_data.password == _this.auth.user.uid) {
                            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__place_modify_place_modify__["a" /* PlaceModifyPage */], _this.selected_place_data);
                            modal.present();
                        }
                        else {
                            _this.alertCtrl.showAlert("권한이 없습니다.");
                        }
                    }
                },
                {
                    text: '리뷰 남기기',
                    icon: "ios-text-outline",
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__place_review_place_review__["a" /* PlaceReviewPage */], _this.selected_place_data);
                        modal.present();
                    }
                },
                {
                    text: '닫기',
                    icon: "ios-close-outline",
                    role: 'cancel',
                    handler: function () {
                        return true;
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MapPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fabContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabContainer */])
    ], MapPage.prototype, "fabContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/map/map.html"*/'<ion-header [hidden]="search_map_mode">\n  <ion-navbar>\n    <button end ion-button menuToggle (click)="openChat()">\n      <ion-badge small color="danger" [hidden]="chat_badge_count == 0">{{chat_badge_count}}</ion-badge>\n      <ion-icon name="ios-chatbubbles" color="light"></ion-icon>\n    </button>\n    <ion-buttons>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="menu" color="light" ></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="height: 100%;" id="map_canvas"></div>\n  <ion-fab middle center [hidden]="my_emotion_button_hide || search_map_mode" #fabContainer (click)="clickFabContainerButton()">\n    <button ion-fab mini (click)="clickMyEmoticonButton()"><ion-icon name="ios-megaphone"></ion-icon></button>\n    <button ion-fab mini (click)="openChatInput()" color="secondary" [hidden]="center_child_fab_hide"><ion-icon name="md-text"></ion-icon></button>\n    <button ion-fab mini (click)="revealAngry()" color="danger" [hidden]="center_child_fab_hide"><ion-icon name="ios-sad" ></ion-icon></button>\n    <ion-fab-list side="left"> </ion-fab-list>\n    <ion-fab-list side="right"> </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab center middle [hidden]="angry_face_hide ||  search_map_mode ">\n    <button ion-fab mini color="danger" class="pulse">\n      <ion-icon name="ios-sad" color="light"></ion-icon>    \n      <!-- <img src="./assets/svgs/angry.svg" style="background-color:white;"> -->\n    </button>\n  </ion-fab>\n  <ion-fab right bottom style="margin-bottom:42px;" [hidden]="search_map_mode">\n    <button ion-fab mini (click)="searchPlace()" color="light">\n      <ion-icon name = "ios-search" color="gray-700"></ion-icon>\n    </button>\n    <button ion-fab mini (click)="addPlace()" color="light">\n        <img src="./assets/svgs/add-location-on.svg" >    \n    </button>\n    <button ion-fab mini (click)="clickFilter(\'smoking\')" color="light">\n      <img src="./assets/svgs/smoking-on.svg" [hidden]="marker_info[\'smoking\'].status == 0">     \n      <img src="./assets/svgs/smoking-off.svg" [hidden]="marker_info[\'smoking\'].status == 1">     \n      <!-- <ion-icon name="ios-cloud-outline" [color]="marker_info[\'smoking\'].status == 1? \'primary\' : \'none\'"></ion-icon> -->\n    </button>\n    <button no-padding ion-fab mini (click)="clickFilter(\'no_smoking\')" color="light" style="margin-top:10px;">\n        <img src="./assets/svgs/non-smoking-on.svg" [hidden]="marker_info[\'no_smoking\'].status == 0">     \n        <img src="./assets/svgs/non-smoking-off.svg" [hidden]="marker_info[\'no_smoking\'].status == 1">     \n      <!-- <ion-icon name="ios-no-smoking-outline" [color]="marker_info[\'no_smoking\'].status == 1? \'danger\' : \'none\'"></ion-icon> -->\n    </button>\n    <button ion-fab mini (click)="revealMyEmotionButton()" [color]="my_emotion_button_hide? \'light\' : \'primary\'" style="margin-top:10px;">\n      <ion-icon name="ios-megaphone" ></ion-icon>\n      <!-- <img src="./assets/svgs/angry.svg" > -->\n    </button>\n  </ion-fab>\n\n  <ion-fab top left [hidden]="!search_map_mode">\n    <button ion-fab mini (click)="cancelSearchMap()"><ion-icon name="md-close"></ion-icon></button>\n  </ion-fab>\n\n  <ion-fab center middle [hidden]="!search_map_mode" color="none">\n    <button ion-fab mini color="none"><ion-icon name="ios-contract" color="dark"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer [hidden]="footer_hidden || search_map_mode">\n  <ion-card style="margin:0px; width:100%;">\n    <ion-card-content>\n\n      <ion-card-title>\n        {{footer_title}}\n      </ion-card-title>\n      <span>\n        <ion-icon name="ios-pin-outline"></ion-icon>\n        {{footer_discription}}\n      </span><br>\n      <span>\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n        {{place_type}} \n      </span>\n      <span style="color:black; opacity:0.5;">\n          | {{marker_type}}  | {{place_distance}}\n      </span><br>\n      <span style="color:black; opacity:0.5;" *ngFor="let d of descriptions">\n          <ion-icon name="md-alert"  color="danger"></ion-icon>\n          {{d}}<br>         \n      </span>\n      <span style="color:black; opacity:0.5;">\n          <ion-icon name="ios-create-outline"></ion-icon>\n          편집자 :{{editor}}\n        </span><br>\n      <ion-fab right bottom (click)="clickEditButton()">\n        <button ion-fab mini>\n          <img src="./assets/svgs/edit-location.svg" >\n        </button>\n      </ion-fab>\n    </ion-card-content>\n\n\n\n  </ion-card>\n</ion-footer>\n<ion-footer [hidden]="!search_map_mode">\n  <ion-item text-center text-wrap>\n    <h3>\n      <ion-icon name="ios-pin-outline"> {{address_text}}</ion-icon>\n    </h3>\n  </ion-item>\n  <button ion-button full large style="margin:0px; " (click)="confirmArress()">이 위치로 설정</button>\n</ion-footer>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_9__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, alertCtrl, FirebaseDB) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.FirebaseDB = FirebaseDB;
        this.API_KEY = "AIzaSyCWsq1qkJbuGKH1xT1oWkmIvyq5-uF44RA";
        this.BASE_URL = "https://gongzone-4fb9f.firebaseapp.com";
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.signIn = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.BASE_URL + "/signIn", { uid: params.uid }).subscribe(function (res) {
                if (res.success == 1) {
                    resolve(res);
                }
                else {
                    reject(res.error);
                }
            });
        });
    };
    HttpProvider.prototype.loadData = function (refreshForce) {
        var _this = this;
        if (refreshForce) {
            return new Promise(function (resolve, reject) {
                _this.FirebaseDB.database.ref("/map").once("value", function (datas) {
                    _this.data = Object.assign({}, {
                        smoking: datas.child("smoking"),
                        no_smoking: datas.child("no_smoking"),
                        center: datas.child("center"),
                        warning: datas.child("warning")
                    });
                    resolve(_this.data);
                }, function (error) {
                    reject(error);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                if (_this.data) {
                    resolve(_this.data);
                }
                else {
                    _this.FirebaseDB.database.ref("/map").once("value", function (datas) {
                        _this.data = Object.assign({}, {
                            smoking: datas.child("smoking"),
                            no_smoking: datas.child("no_smoking"),
                            center: datas.child("center"),
                            warning: datas.child("warning")
                        });
                        resolve(_this.data);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
        }
    };
    HttpProvider.prototype.sendQuestion = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/question").push().set(params, function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    HttpProvider.prototype.updateMarkerInfo = function (params) {
        var _this = this;
        var type = params.type;
        var latLng = params.latLng;
        var id = params.id;
        this.FirebaseDB.database.ref("/map/" + type + "/" + id + "/latitude").set(latLng.lat, function (error) {
            if (error) {
                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                console.log(JSON.stringify(error));
                return;
            }
            _this.FirebaseDB.database.ref("/map/" + type + "/" + id + "/longitude").set(latLng.lng, function (error) {
                if (error) {
                    _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                    console.log(JSON.stringify(error));
                    return;
                }
                _this.alertCtrl.showAlert("수정되었습니다!");
            });
        });
    };
    HttpProvider.prototype.searchGeoLocation = function (address) {
        var _this = this;
        var URI = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&language=ko&key=" + this.API_KEY;
        return new Promise(function (resolve, reject) {
            _this.http.get(encodeURI(URI), {}).subscribe(function (res) {
                console.log(res);
                if (res.status == "OK") {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    HttpProvider.prototype.searchAddress = function (latLng) {
        var _this = this;
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLng.lat + "," + latLng.lng + "&language=ko&key=" + this.API_KEY;
        return new Promise(function (resolve, reject) {
            _this.http.get(encodeURI(url), {}).subscribe(function (res) {
                if (res.status == "OK") {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    HttpProvider.prototype.addPlace = function (params) {
        var _this = this;
        var url = this.BASE_URL + "/addPlace";
        return new Promise(function (resolve, reject) {
            _this.http.post(url, params).subscribe(function (res) {
                console.log(res);
                if (res.success == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    HttpProvider.prototype.addWarningPlace = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map/warning").push().set(params, function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    HttpProvider.prototype.modifyPlace = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var category;
            if (params.category == "흡연 구역") {
                category = "smoking";
            }
            else if (params.category == "금연 구역") {
                category = "no_smoking";
            }
            else {
                category = "center";
            }
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("address2").set(params.address2);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("description1").set(params.description1);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("description2").set(params.description2);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("description3").set(params.description3);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("name").set(params.name);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("operator").set(params.operator);
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).child("date").set(new Date().toString(), function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    HttpProvider.prototype.removePlace = function (params) {
        var _this = this;
        var url = this.BASE_URL + "/removePlace";
        return new Promise(function (resolve, reject) {
            _this.http.post(url, params).subscribe(function (res) {
                console.log(res);
                if (res.success == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    HttpProvider.prototype.saveReview = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var category = params.category == "흡연 구역" ? "smoking" : (params.category == "금연 구역" ? "no_smoking" : "center");
        var review_content = params.review_content;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review").once("value", function (datas) {
                var index = datas.numChildren();
                // this.FirebaseDB.database.ref(`/member/${params.uid}/my_review/${index}`).set
                _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + index).set({
                    review_content: review_content,
                    nickname: params.nickname,
                    uid: params.uid,
                    like_count: 0,
                    dislike_count: 0,
                    date: new Date().toString()
                }, function (error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (index == 0) {
                            resolve({
                                review_content: review_content,
                                nickname: params.nickname,
                                uid: params.uid,
                                like_count: 0,
                                dislike_count: 0,
                                date: new Date().toString()
                            });
                        }
                        else {
                            var review_1 = [];
                            Object.keys(datas.toJSON()).map(function (v, i) {
                                review_1.push(datas.toJSON()[v]);
                            });
                            review_1.push({
                                review_content: review_content,
                                nickname: params.nickname,
                                uid: params.uid,
                                like_count: 0,
                                dislike_count: 0,
                                date: new Date().toString()
                            });
                            resolve(review_1);
                        }
                    }
                });
            });
        });
    };
    HttpProvider.prototype.getUserInfo = function (params) {
        var _this = this;
        var url = this.BASE_URL + "/getUserInfo";
        return new Promise(function (resolve, reject) {
            _this.http.post(url, params).subscribe(function (res) {
                console.log(res);
                if (res.success == 1) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            });
        });
    };
    HttpProvider.prototype.addBookmark = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var uid = params.uid;
        // delete params.place_id
        // delete params.uid;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/member").child(uid).child("my_bookmark").child(place_id).set({
                address1: params.address1,
                address2: params.address2,
                category: params.category,
                editor: params.editor,
                hidden: params.hidden,
                latitude: params.latitude,
                longitude: params.longitude,
                name: params.name,
                operator: params.operator,
                password: params.password,
                type: params.type
            }, function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    HttpProvider.prototype.removeBookmark = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var uid = params.uid;
        // delete params.place_id;
        // delete params.uid;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/member").child(uid).child("my_bookmark").child(place_id).set(null, function (error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    HttpProvider.prototype.loadPlaceInfo = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var category = params.category == "흡연 구역" ? "smoking" : (params.category == "금연 구역" ? "no_smoking" : "center");
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).once("value", function (datas) {
                if (datas.numChildren() == 0) {
                    reject(null);
                }
                else {
                    resolve(datas.toJSON());
                }
            });
        });
    };
    HttpProvider.prototype.updatePlaceAccuracy = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var uid = params.uid;
        var nickname = params.nickname;
        var accuracy = params.accuracy;
        var category = params.category == "흡연 구역" ? "smoking" : (params.category == "금연 구역" ? "no_smoking" : "center");
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map").child(category).child(params.place_id).once("value", function (datas) {
                if (datas.numChildren() == 0) {
                    reject(null);
                }
                else {
                    var accuracy_reviewer_1 = datas.child("accuracy_reviewer").toJSON();
                    var accuracy_reviewer_count = Object.keys(accuracy_reviewer_1).length;
                    var positive_accuracy_reviewer = Object.keys(accuracy_reviewer_1).filter(function (v, i) {
                        if (accuracy_reviewer_1[v].accuracy == true) {
                            return v;
                        }
                    });
                    var accuracy_rate_1 = parseInt("" + ((positive_accuracy_reviewer.length / accuracy_reviewer_count) * 100));
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/accuracy_rate").set(accuracy_rate_1);
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/accuracy_reviewer/" + Object.keys(accuracy_reviewer_1).length).set({
                        uid: uid,
                        nickname: nickname,
                        accuracy: accuracy,
                        date: new Date().toString()
                    }, function (error) {
                        if (error)
                            reject(error);
                        else
                            resolve(accuracy_rate_1);
                    });
                }
            });
        });
    };
    HttpProvider.prototype.likeClick = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var uid = params.uid;
        var category = params.category == "흡연 구역" ? "smoking" : (params.category == "금연 구역" ? "no_smoking" : "center");
        var review_id = params.review_id;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id).once("value", function (datas) {
                var count;
                if (datas.child("like_user").child(uid).exists()) {
                    count = parseInt(datas.child("like_count").val());
                }
                else {
                    count = parseInt(datas.child("like_count").val()) + 1;
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id + "/like_user/" + uid).set(uid);
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id + "/like_count").set(count, function (error) {
                        if (error)
                            reject(error);
                        else
                            resolve(count);
                    });
                }
            });
        });
    };
    HttpProvider.prototype.dislikeClick = function (params) {
        var _this = this;
        var place_id = params.place_id;
        var uid = params.uid;
        var category = params.category == "흡연 구역" ? "smoking" : (params.category == "금연 구역" ? "no_smoking" : "center");
        var review_id = params.review_id;
        return new Promise(function (resolve, reject) {
            _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id).once("value", function (datas) {
                var count;
                if (datas.child("dislike_user").child(uid).exists()) {
                    count = parseInt(datas.child("dislike_count").val());
                }
                else {
                    count = parseInt(datas.child("dislike_count").val()) + 1;
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id + "/dislike_user/" + uid).set(uid);
                    _this.FirebaseDB.database.ref("/map/" + category + "/" + place_id + "/review/" + review_id + "/dislike_count").set(count, function (error) {
                        if (error)
                            reject(error);
                        else
                            resolve(count);
                    });
                }
            });
        });
    };
    HttpProvider.prototype.sendChat = function (params) {
        var uid = params.uid;
        var nickname = params.nickname;
        var content = params.content;
        var latitude = params.latitude;
        var longitude = params.longitude;
        var date = params.date;
        this.FirebaseDB.database.ref("/chat").child(new Date().getTime() + uid).set({
            uid: uid,
            nickname: nickname,
            content: content,
            latitude: latitude,
            longitude: longitude,
            date: date
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.present = function () {
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
    };
    LoadingProvider.prototype.dismiss = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqliteProvider = /** @class */ (function () {
    function SqliteProvider(sqlite) {
        this.sqlite = sqlite;
    }
    SqliteProvider.prototype.Connect = function () {
        return this.sqlite.create({
            name: 'mentor.db',
            location: 'default'
        });
    };
    SqliteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */]])
    ], SqliteProvider);
    return SqliteProvider;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__center_center__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.selectItem = function (menu_name) {
        if (menu_name == '내 정보') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__["a" /* MyProfilePage */]);
            modal.present();
            // this.navCtrl.push(MyProfilePage)
        }
        else if (menu_name == '금연치료의료기관') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__center_center__["a" /* CenterPage */]);
            modal.present();
            // this.navCtrl.push(CenterPage)
        }
        else if (menu_name == '환경설정') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* SettingPage */]);
            modal.present();
            // this.navCtrl.push(SettingPage)
        }
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/popover/popover.html"*/'<ion-list no-margin>\n\n  <button ion-item (click)="selectItem(\'내 정보\')">\n    <ion-icon name="md-person" color="gray-700" item-start ></ion-icon>\n    내 정보\n  </button>\n  <button ion-item (click)="selectItem(\'금연치료의료기관\')">\n    <ion-icon name="md-medkit" color="danger" item-start ></ion-icon>\n    금연치료 의료기관\n  </button>\n  <button ion-item (click)="selectItem(\'환경설정\')">\n    <ion-icon name="md-settings" color="gray-600" item-start></ion-icon>\n    설정\n  </button>\n</ion-list>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams, viewCtrl, http, auth, loadingCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.selected_type = "my_place";
        this.my_place = [];
        this.my_place_list = [];
        // my_review = []
        // my_review_list = []
        this.my_bookmark = [];
        this.my_bookmark_list = [];
    }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nickname = this.auth.user.nickname;
        console.log(this.auth.user);
        // this.events.subscribe("get_my_address", (address) => {
        //   this.address_text = address
        // })
        // this.events.publish("load_my_address")
        this.loadingCtrl.present();
        this.auth.currentUser().getIdToken()
            .then(function (idToken) {
            console.log(idToken);
            return _this.http.getUserInfo({
                idToken: idToken
            });
        }).then(function (userInfo) {
            _this.loadingCtrl.dismiss();
            userInfo.my_place && Object.keys(userInfo.my_place).map(function (key, i) {
                userInfo.my_place[key].place_id = key;
                _this.my_place.push(userInfo.my_place[key]);
                if (_this.my_place_list.length < 50)
                    _this.my_place_list.push(userInfo.my_place[key]);
            });
            // userInfo.my_review && Object.keys(userInfo.my_review).map((key, i) => {
            //   userInfo.my_review[key].review_id = key;
            //   this.my_review.push(userInfo.my_review[key])
            //   if (this.my_review_list.length < 50) this.my_review_list.push(userInfo.my_review[key])
            // })
            userInfo.my_bookmark && Object.keys(userInfo.my_bookmark).map(function (key, i) {
                userInfo.my_bookmark[key].bookmark_id = key;
                _this.my_bookmark.push(userInfo.my_bookmark[key]);
                if (_this.my_bookmark_list.length < 50)
                    _this.my_bookmark_list.push(userInfo.my_bookmark[key]);
            });
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
            _this.loadingCtrl.dismiss();
        });
    };
    MyProfilePage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe("get_my_address");
    };
    MyProfilePage.prototype.removePlace = function (place) {
        var _this = this;
        this.alertCtrl.showConfirm("삭제하시겠습니까?", "네", "아니오", function () {
            _this.loadingCtrl.present();
            _this.auth.currentUser().getIdToken()
                .then(function (idToken) {
                var obj = place;
                obj.idToken = idToken;
                return _this.http.removePlace(obj);
            }).then(function (res) {
                _this.my_place.splice(_this.my_place.indexOf(place), 1);
                var index = _this.my_place_list.indexOf(place);
                if (index > -1)
                    _this.my_place_list.splice(index, 1);
                _this.events.publish("refresh");
                _this.loadingCtrl.dismiss();
                _this.alertCtrl.showAlert("삭제되었습니다.");
            }).catch(function (error) {
                console.log(JSON.stringify(error));
                _this.loadingCtrl.dismiss();
            });
        }, function () { });
    };
    MyProfilePage.prototype.clickMyBookmark = function (bookmark, e) {
        if (e.target.tagName == "DIV") {
            this.events.publish("view_marker", bookmark);
            this.dismiss();
        }
    };
    MyProfilePage.prototype.removeBookmark = function (bookmark) {
        var _this = this;
        var obj = bookmark;
        obj.place_id = bookmark.bookmark_id;
        obj.uid = this.auth.user.uid;
        this.http.removeBookmark(bookmark).then(function () {
            _this.my_bookmark.splice(_this.my_bookmark.indexOf(bookmark), 1);
            var index = _this.my_bookmark_list.indexOf(bookmark);
            if (index > -1)
                _this.my_bookmark_list.splice(index, 1);
            _this.alertCtrl.showAlert("삭제되었습니다.");
        }).catch(function (error) {
            _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
            console.log(JSON.stringify(error));
        });
    };
    MyProfilePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        switch (this.selected_type) {
            case "my_place":
                var list_count_1 = this.my_place_list.length;
                setTimeout(function () {
                    for (var i = 0; i < 50; i++) {
                        if (_this.my_place_list.length < _this.my_place.length) {
                            _this.my_place_list.push(_this.my_place[list_count_1 + i]);
                        }
                    }
                    infiniteScroll.complete();
                }, 500);
                break;
            case "my_bookmark":
                var my_bookmark = this.my_bookmark_list.length;
                setTimeout(function () {
                    for (var i = 0; i < 50; i++) {
                        if (_this.my_bookmark_list.length < _this.my_bookmark.length) {
                            _this.my_bookmark_list.push(_this.my_bookmark[list_count_1 + i]);
                        }
                    }
                    infiniteScroll.complete();
                }, 500);
                break;
        }
    };
    MyProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MyProfilePage.prototype.clickMyPlace = function (my_place, e) {
        if (e.target.tagName == "DIV") {
            this.events.publish("view_marker", my_place);
            this.dismiss();
        }
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/my-profile/my-profile.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <ion-title text-center>{{nickname}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment [(ngModel)]="selected_type">\n    <ion-segment-button value="my_place">\n      마이존({{my_place?.length}})\n    </ion-segment-button>\n    <ion-segment-button value="my_bookmark">\n      북마크존({{my_bookmark?.length}})\n    </ion-segment-button>\n    <!-- <ion-segment-button value="my_review">\n      나의 리뷰({{my_review?.length}})\n    </ion-segment-button> -->\n  </ion-segment>\n\n</ion-header>\n\n<ion-content no-padding>\n  <!-- <ion-item text-center no-padding class="profile-box">\n    <ion-icon name="md-heart" color="danger"></ion-icon>\n    <h2>{{nickname}}</h2>\n    <p>\n      <ion-icon name="ios-pin-outline"> {{address_text}}</ion-icon>\n    </p>\n  </ion-item> -->\n\n  <!-- <ion-list>\n    <button ion-item>\n          <ion-thumbnail item-start no-padding style="width:40px; height:40px; margin-right:10%;">\n            <img src="./assets/svgs/smoking-off.svg">\n          </ion-thumbnail>\n     \n          <h2>ddd</h2>\n          <p text-wrap>dddd</p>\n          <button ion-button icon-only clear item-end color="danger" (click)="removePlace(p)">   <ion-icon name="ios-trash-outline" ></ion-icon></button>\n\n    </button>\n  </ion-list> -->\n\n  <ion-slides [hidden]="(selected_type == \'my_place\' && my_place_list?.length !=0) ||  (selected_type == \'my_bookmark\' && my_bookmark_list?.length !=0) ">\n    <ion-slide>\n\n      <p style="color:#9d9d9d;"> 정보가 없습니다.</p>\n    </ion-slide>\n  </ion-slides>\n\n\n  <div [ngSwitch]="selected_type">\n    <ion-list *ngSwitchCase="\'my_place\'" [hidden]="my_place_list?.length == 0">\n      <button ion-item *ngFor="let p of my_place_list" (click)="clickMyPlace(p, $event)" >\n        <ion-thumbnail item-start no-padding style="width:40px; height:40px; ">\n          <img [src]="p.category ==\'흡연 구역\' ? \'./assets/svgs/smoking-off.svg\' : \'./assets/svgs/non-smoking-off.svg\' "  style="width:100%; height:100%;">\n        </ion-thumbnail>\n   \n        <h2>{{p.name}}</h2>\n        <p text-wrap>{{p.address1}}</p>\n        <button ion-button icon-only clear item-end color="danger" (click)="removePlace(p)">   <ion-icon name="ios-trash-outline" ></ion-icon></button>\n\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'my_bookmark\'" [hidden]="my_bookmark_list?.length == 0">\n        <button ion-item *ngFor="let b of my_bookmark_list" (click)="clickMyBookmark(b, $event)" >\n            <ion-thumbnail item-start no-padding style="width:40px; height:40px; ">\n              <img [src]="b.category ==\'흡연 구역\' ? \'./assets/svgs/smoking-off.svg\' : \'./assets/svgs/non-smoking-off.svg\' " [hidden]="b.category != \'흡연 구역\' && b.category != \'금연 구역\' "  style="width:100%; height:100%;">\n              <ion-icon name="md-medkit" color="danger" [hidden]="b.category == \'흡연 구역\' || b.category == \'금연 구역\' "></ion-icon>\n            </ion-thumbnail>\n       \n            <h2>{{b.name}}</h2>\n            <p text-wrap>{{b.address1}}</p>\n            <button ion-button icon-only clear item-end color="danger" (click)="removeBookmark(b)">   <ion-icon name="ios-trash-outline" ></ion-icon></button>\n    \n          </button>\n\n    </ion-list>\n    <!-- <ion-list *ngSwitchCase="\'my_review\'" [hidden]="my_review_list?.length == 0">\n      <button ion-item>\n\n      </button>\n\n    </ion-list> -->\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CenterPage = /** @class */ (function () {
    function CenterPage(navCtrl, navParams, http, events, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.list = [];
        this.data = [];
    }
    CenterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingCtrl.present();
        this.http.loadData(false)
            .then(function (data) {
            _this.loadingCtrl.dismiss();
            data['center'].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.data.push(obj);
                if (_this.list.length < 50)
                    _this.list.push(obj);
            });
        }).catch(function (error) {
            _this.loadingCtrl.dismiss();
            console.log(error);
        });
    };
    CenterPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var list_count = this.list.length;
        setTimeout(function () {
            for (var i = 0; i < 50; i++) {
                if (_this.list.length < _this.data.length) {
                    _this.list.push(_this.data[list_count + i]);
                }
            }
            infiniteScroll.complete();
        }, 500);
    };
    CenterPage.prototype.searchItems = function (e) {
        var _this = this;
        var item = e.target.value;
        if (item == "") {
            this.list = [];
            this.data.map(function (v, i) {
                if (_this.list.length < 50)
                    _this.list.push(v);
            });
        }
        else {
            this.list = [];
            this.data.map(function (v, i) {
                if (v.name.indexOf(item) > -1 || v.address1.indexOf(item) > -1) {
                    _this.list.push(v);
                }
            });
        }
    };
    CenterPage.prototype.viewCenterDetail = function (center) {
        this.events.publish("view_marker", center);
        this.navCtrl.pop();
    };
    CenterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-center',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/center/center.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title text-center>금연치료 의료기관</ion-title>\n        <ion-buttons end>\n          <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n              </button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-searchbar (ionInput)="searchItems($event)" style="background-color:#2196F3;" placeholder="검색"></ion-searchbar>\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-list>\n    <button ion-item *ngFor="let l of list" (click)="viewCenterDetail(l)">\n      <ion-icon name="ios-pin-outline"></ion-icon>\n      {{ l.name }}\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/center/center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], CenterPage);
    return CenterPage;
}());

//# sourceMappingURL=center.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.notification_checked = true;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.notificationSetting = function () {
    };
    SettingPage.prototype.goQuestion = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
        modal.present();
    };
    SettingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/setting/setting.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title text-center>설정</ion-title>\n        <ion-buttons end>\n          <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>      \n      <ion-icon color="secondary" [name]="notification_checked == true? \'md-notifications\' : \'md-notifications-off\'" item-start></ion-icon>\n      <ion-label>알림</ion-label>\n      <ion-toggle checked="true" (ionChange)="notificationSetting($event)"></ion-toggle>\n    </ion-item>\n    <button ion-item (click)="goQuestion()" >\n      <ion-icon name="md-mail" color="gray-600" item-start></ion-icon>\n      <ion-label>문의하기</ion-label>        \n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionPage = /** @class */ (function () {
    function QuestionPage(navCtrl, navParams, viewCtrl, loadingCtrl, http, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.sendQuestion = function (email, context) {
        var _this = this;
        if (email.value.indexOf("@") > -1 && email.value.indexOf(".") > -1 && context.value && context.value.trim() != "") {
            this.loadingCtrl.present();
            this.http.sendQuestion({
                email: email.value,
                context: context.value,
                uid: this.auth.user.uid
            }).then(function (res) {
                _this.alertCtrl.showAlert("문의하신 내용이 전달되었습니다. 최대한 빠른 답변드리겠습니다. 감사합니다. : ) ");
                _this.loadingCtrl.dismiss();
                _this.dismiss();
            })
                .catch(function (err) {
                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다. 잠시 후 다시 시도해 주세요 :() ");
                _this.loadingCtrl.dismiss();
            });
        }
        else {
            this.alertCtrl.showAlert("양식을 정확히 작성해 주세요 : ) ");
        }
    };
    QuestionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/question/question.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        문의하기\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon color="primary" name="md-close" showWhen="android, windows"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  \n    <ion-list>\n  \n      <ion-item>\n        <ion-label color="primary" floating>회신 E-mail</ion-label>\n        <ion-input #email type="email"></ion-input>\n      </ion-item>\n\n  \n      <ion-item>\n        <ion-label color="primary" floating>내용</ion-label>\n        <ion-textarea #context rows="30"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  \n    <ion-fab right bottom (click)="sendQuestion(email, context)">\n      <button ion-fab color="primary"><ion-icon name="md-send"></ion-icon></button>\n    </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddModalPage = /** @class */ (function () {
    function AddModalPage(navCtrl, navParams, viewCtrl, http, alertCtrl, modalCtrl, events, AlertCtrl, auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.AlertCtrl = AlertCtrl;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.place_category = "흡연 구역";
        this.smoking_place_type = "개방형";
        this.no_smoking_place_type = "공원";
        this.searchAddressDone = true;
        this.address_result = [];
        this.address_text = "";
        if (this.navParams.get("address")) {
            this.address_text = this.navParams.get("address");
            this.location = this.navParams.get("location");
            this.selectAddress(this.address_text);
        }
    }
    AddModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddModalPage');
    };
    AddModalPage.prototype.ionViewWillLeave = function () {
    };
    AddModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddModalPage.prototype.deleteAddress = function (e) {
        this.searchAddressDone = false;
        this.address_text = "";
        this.address_result = [];
    };
    AddModalPage.prototype.inputAddress = function (e) {
        var input = e.target.value;
        console.log(input);
    };
    AddModalPage.prototype.searchAddress = function () {
        var _this = this;
        if (this.address_text == "") {
            this.alertCtrl.showAlert("주소를 입력하세요.");
        }
        else {
            this.http.searchGeoLocation(this.address_text)
                .then(function (res) {
                _this.address_result = res.results;
                var alert = _this.AlertCtrl.create();
                alert.setTitle('검색 결과');
                _this.address_result.map(function (v, i) {
                    alert.addInput({
                        type: 'radio',
                        label: v.formatted_address.replace("대한민국 ", ""),
                        value: "" + i,
                        checked: true
                    });
                });
                alert.addButton('취소');
                alert.addButton({
                    text: '선택',
                    handler: function (data) {
                        _this.selectAddress(_this.address_result[data].formatted_address.replace("대한민국 ", ""));
                    }
                });
                alert.present();
            }).catch(function (error) {
                _this.alertCtrl.showAlert("검색 결과가 없습니다.");
            });
            // console.log(address_text)
        }
    };
    AddModalPage.prototype.searchStart = function () {
    };
    AddModalPage.prototype.selectAddress = function (selected_address) {
        this.searchAddressDone = true;
        this.address_text = selected_address;
    };
    // searchOnMap(){
    //   const modal = this.modalCtrl.create(MapSearchPage);
    //   modal.present();
    // }
    AddModalPage.prototype.clickAdd = function () {
        var _this = this;
        console.log("주소", this.address_text);
        console.log("상세주소", this.detail_address.value);
        console.log("장소 구분 ", this.place_category);
        console.log("장소 분류 ", this.place_category == "흡연 구역" ? this.smoking_place_type : this.no_smoking_place_type);
        console.log("장소명 ", this.place_name.value);
        console.log("장소 설명 ", this.place_description.value);
        console.log("운영주체 ", this.place_operation.value);
        console.log(this.auth.user);
        // if (this.address_text == "") {
        //   this.alertCtrl.showAlert("주소를 검색하세요.")
        //   return;
        // }   
        if (this.place_name.value == "") {
            this.alertCtrl.showAlert("장소명을 입력하세요.");
            return;
        }
        // if (this.place_description.value == "") {
        //   // this.alertCtrl.showAlert("장소에 대한 설명이 필요합니다.")
        //   // return;
        // }
        this.alertCtrl.showConfirm("추가하시겠습니까? (정확한 장소가 아닐 경우 삭제될 수 있습니다.)", "네", "아니오", function () {
            if (_this.auth.user) {
                _this.loadingCtrl.present();
                _this.auth.currentUser().getIdToken()
                    .then(function (idToken) {
                    return _this.http.addPlace({
                        address1: _this.address_text,
                        address2: _this.detail_address.value,
                        category: _this.place_category,
                        description1: _this.place_description.value == "" ? null : _this.place_description.value,
                        editor: _this.auth.user.nickname,
                        password: _this.auth.user.uid,
                        latitude: _this.location.lat,
                        longitude: _this.location.lng,
                        name: _this.place_name.value,
                        operator: _this.place_operation.value,
                        type: _this.place_category == "흡연 구역" ? _this.smoking_place_type : _this.no_smoking_place_type,
                        idToken: idToken
                    });
                }).then(function (res) {
                    _this.events.publish("refresh");
                    _this.loadingCtrl.dismiss();
                    _this.alertCtrl.showAlert("장소가 추가 되었습니다. 추가된 장소는 내정보 > 마이존에서 확인하실 수 있습니다.");
                    _this.dismiss();
                }).catch(function (error) {
                    _this.loadingCtrl.dismiss();
                    console.log(JSON.stringify(error));
                    _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                });
            }
        }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("detail_address"),
        __metadata("design:type", Object)
    ], AddModalPage.prototype, "detail_address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("place_name"),
        __metadata("design:type", Object)
    ], AddModalPage.prototype, "place_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("place_description"),
        __metadata("design:type", Object)
    ], AddModalPage.prototype, "place_description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("place_operation"),
        __metadata("design:type", Object)
    ], AddModalPage.prototype, "place_operation", void 0);
    AddModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-modal',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/add-modal/add-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      장소 추가\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="border:0px;">\n  <ion-item>\n    <ion-label floating>주소</ion-label>\n    <ion-input type="text" [(ngModel)]="address_text" (click)="searchStart()" readonly=\'true\'></ion-input>\n    <!-- <button ion-button clear large item-end style="margin-bottom: -5%;" (click)="searchAddress(addressInput)" [hidden]="searchAddressDone"><ion-icon name="ios-search" ></ion-icon></button>\n    <button ion-button clear large item-end style="margin-bottom: -5%;" (click)="deleteAddress()" [hidden]="!searchAddressDone"><ion-icon name="md-close" ></ion-icon></button> -->\n  </ion-item>\n\n  <ion-list [hidden]="!searchAddressDone">\n    <ion-item>\n      <ion-label floating>상세 주소</ion-label>\n      <ion-input type="text" #detail_address></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>장소 구분</ion-label>\n      <ion-select [(ngModel)]="place_category" interface="popover">\n        <ion-option value="흡연 구역" selected="true">흡연 구역</ion-option>\n        <ion-option value="금연 구역">금연 구역</ion-option>\n        <!-- <ion-option value="금연 지원 센터 기관">금연 지원 센터 기관</ion-option> -->\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]="place_category== \'금연 구역\' || !searchAddressDone ">\n      <ion-label floating>장소 분류</ion-label>\n      <ion-select [(ngModel)]="smoking_place_type" interface="popover">\n        <ion-option value="개방형" selected="true">개방형</ion-option>\n        <ion-option value="폐쇄형">폐쇄형</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]="place_category== \'흡연 구역\' || !searchAddressDone ">\n        <ion-label floating>장소 분류</ion-label>\n        <ion-select [(ngModel)]="no_smoking_place_type" interface="popover">\n          <ion-option value="공원" selected="true">공원</ion-option>\n          <ion-option value="버스정류장">버스정류장</ion-option>\n          <ion-option value="정부지방청사">정부지방청사</ion-option>\n          <ion-option value="학교">학교</ion-option>\n          <ion-option value="의료기관">의료기관</ion-option>\n          <ion-option value="어린이/청소년 이용시설">어린이/청소년 이용시설</ion-option>\n          <ion-option value="도서관">도서관</ion-option>\n          <ion-option value="학원">학원</ion-option>\n          <ion-option value="대형건물">대형건물</ion-option>\n          <ion-option value="공연장">공연장</ion-option>\n          <ion-option value="점포">점포</ion-option>\n          <ion-option value="관광숙박업소">관광숙박업소</ion-option>\n          <ion-option value="체육시설">체육시설</ion-option>\n          <ion-option value="사회복지시설">사회복지시설</ion-option>\n          <ion-option value="대중목욕탕">대중목욕탕</ion-option>\n          <ion-option value="게임방/PC방">게임방/PC방</ion-option>\n          <ion-option value="고속도로 휴게시설">고속도로 휴게시설</ion-option>\n          <ion-option value="공동주택">공동주택</ion-option>\n          <ion-option value="산림인접지역">산림인접지역</ion-option>\n          <ion-option value="자연공원">자연공원</ion-option>\n          <ion-option value="문화유적지">문화유적지</ion-option>\n          <ion-option value="택시승강장">택시승강장</ion-option>\n          <ion-option value="기차">기차</ion-option>\n          <ion-option value="공항">공항</ion-option>\n          <ion-option value="항공기">항공기</ion-option>\n          <ion-option value="기타">기타</ion-option>\n        </ion-select>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating>장소명</ion-label>\n      <ion-input type="text" #place_name></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>장소 설명</ion-label>\n      <ion-input type="text" #place_description></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>운영 주체</ion-label>\n      <ion-input type="text" #place_operation></ion-input>\n    </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n<ion-footer [hidden]="!searchAddressDone">\n  <button ion-button full large style="margin:0px; " (click)="clickAdd()">추가하기</button>\n</ion-footer>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/add-modal/add-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], AddModalPage);
    return AddModalPage;
}());

//# sourceMappingURL=add-modal.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams, viewCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.IsSlideEnd = false;
        this.user = {
            uid: "",
            nickname: ""
        };
        this.slides = [];
        if (auth.user)
            this.user = auth.user;
        else {
            this.user.uid = this.navParams.get("uid");
            this.user.nickname = this.navParams.get("nickname");
        }
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        if (this.auth.user)
            this.user = this.auth.user;
        else {
            this.user.uid = this.navParams.get("uid");
            this.user.nickname = this.navParams.get("nickname");
        }
        // this.slidesElement.lockSwipes(true);
        console.log('ionViewDidLoad IntroPage');
        this.slides = [{
                title: "",
                description: "점점 늘어가는 금연구역 때문에 <b>'필 터'</b> 를 찾고 계신가요? 지금 <b>공존</b>에서 <b>흡연구역</b>과 <b>금연구역</b>에 대한 정보를 확인하세요.",
                image: "./assets/imgs/smoke.png",
            },
            {
                title: "",
                description: "<b>간접 흡연</b>, 이제 참지 말고 그 자리에서 <b>공존</b>으로 표출하세요. 건강한 시민 의식을 위한 첫걸음 입니다. ",
                image: "./assets/imgs/map-point.png",
            },
            {
                title: this.user.nickname + "번째 방문자",
                description: "<b>공존</b>은 흡연자와 비흡연자가 공존할 수 있는 소통의 장이 되고자 합니다.<br> 이제 " + this.user.nickname + "번째 방문자라는 의미의 아이디로 시작하겠습니다. 서비스 이용을 위해 위치 권한이 필요합니다. 팝업이 뜨면 [허용] 버튼을 눌러주세요.",
                image: "./assets/imgs/shake.png",
            }];
    };
    IntroPage.prototype.closePage = function (e) {
        if (this.IsSlideEnd) {
            this.dismiss();
        }
        else {
            this.slidesElement.slideNext();
        }
    };
    IntroPage.prototype.ionSlideDidChange = function (e) {
        if (this.slidesElement.length && this.slidesElement.length() - 1 > this.slidesElement.getActiveIndex()) {
            this.IsSlideEnd = false;
        }
        else {
            this.IsSlideEnd = true;
        }
    };
    IntroPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], IntroPage.prototype, "slidesElement", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/intro/intro.html"*/'<ion-content class="tutorial-page">\n  <ion-slides pager (ionSlideDidChange)="ionSlideDidChange($event)">\n    <ion-slide *ngFor="let slide of slides" >\n      <ion-toolbar>\n        <!-- <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons> -->\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <!-- <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="./assets/imgs/logo.png" class="slide-image" />\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide> -->\n  </ion-slides>\n  <ion-fab right bottom (click)="closePage($event)" >\n    <button ion-fab color="primary">\n      <ion-icon name="ios-arrow-forward-outline" [hidden] = "IsSlideEnd" ></ion-icon>\n      <ion-icon name="md-checkmark" [hidden] = "!IsSlideEnd"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPlacePage = /** @class */ (function () {
    function SearchPlacePage(navCtrl, navParams, http, loadingCtrl, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.smoking_list = [];
        this.smoking_data = [];
        this.no_smoking_list = [];
        this.no_smoking_data = [];
        this.selected_place_type = "smoking";
    }
    SearchPlacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingCtrl.present();
        console.log('ionViewDidLoad SarchPlacePage');
        this.http.loadData(false).then(function (data) {
            _this.loadingCtrl.dismiss();
            data['smoking'].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.smoking_data.push(obj);
                if (_this.smoking_list.length < 50)
                    _this.smoking_list.push(obj);
            });
            data['no_smoking'].forEach(function (v) {
                var obj = v.toJSON();
                obj.place_id = v.key;
                _this.no_smoking_data.push(obj);
                if (_this.no_smoking_list.length < 50)
                    _this.no_smoking_list.push(obj);
            });
        });
    };
    SearchPlacePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            if (_this.selected_place_type == "smoking") {
                var smoking_list_count = _this.smoking_list.length;
                for (var i = 0; i < 50; i++) {
                    if (_this.smoking_list.length < _this.smoking_data.length) {
                        _this.smoking_list.push(_this.smoking_data[smoking_list_count + i]);
                    }
                }
            }
            else {
                var no_smoking_list_count = _this.no_smoking_list.length;
                for (var i = 0; i < 50; i++) {
                    if (_this.no_smoking_list.length < _this.no_smoking_data.length) {
                        _this.no_smoking_list.push(_this.no_smoking_data[no_smoking_list_count + i]);
                    }
                }
            }
            infiniteScroll.complete();
        }, 500);
    };
    SearchPlacePage.prototype.searchItems = function (e) {
        var _this = this;
        var item = e.target.value;
        if (item == "") {
            if (this.selected_place_type == "smoking") {
                this.smoking_list = [];
                this.smoking_data.map(function (v, i) {
                    if (_this.smoking_list.length < 50)
                        _this.smoking_list.push(v);
                });
            }
            else {
                this.no_smoking_list = [];
                this.no_smoking_data.map(function (v, i) {
                    if (_this.no_smoking_list.length < 50)
                        _this.no_smoking_list.push(v);
                });
            }
        }
        else {
            if (this.selected_place_type == "smoking") {
                this.smoking_list = [];
                this.smoking_data.map(function (v, i) {
                    if (v.name.indexOf(item) > -1 || v.address1.indexOf(item) > -1 || v.address2.indexOf(item) > -1) {
                        _this.smoking_list.push(v);
                    }
                });
            }
            else {
                this.no_smoking_list = [];
                this.no_smoking_data.map(function (v, i) {
                    if (v.name.indexOf(item) > -1 || v.address1.indexOf(item) > -1 || v.address2.indexOf(item) > -1) {
                        _this.no_smoking_list.push(v);
                    }
                });
            }
        }
    };
    SearchPlacePage.prototype.viewPlaceDetail = function (place) {
        console.log(place);
        this.events.publish("view_marker", place);
        this.navCtrl.pop();
    };
    SearchPlacePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-place',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/search-place/search-place.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>검색</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar (ionInput)="searchItems($event)" style="background-color:#2196F3;" placeholder="주소 검색"></ion-searchbar>\n  <ion-segment [(ngModel)]="selected_place_type">\n    <ion-segment-button value="smoking">\n      흡연구역\n    </ion-segment-button>\n    <ion-segment-button value="no_smoking">\n      금연구역\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n<ion-content [ngSwitch]="selected_place_type">\n  <ion-list *ngSwitchCase="\'smoking\'">\n    <button ion-item *ngFor="let sl of smoking_list" (click)="viewPlaceDetail(sl)">\n        <ion-icon name="ios-pin-outline"></ion-icon>\n        {{ sl.name }}\n      </button>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'no_smoking\'">\n    <button ion-item *ngFor="let nsl of no_smoking_list" (click)="viewPlaceDetail(nsl)">\n        <ion-icon name="ios-pin-outline"></ion-icon>\n          {{ nsl.name }}\n        </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/search-place/search-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SearchPlacePage);
    return SearchPlacePage;
}());

//# sourceMappingURL=search-place.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceReviewPage = /** @class */ (function () {
    function PlaceReviewPage(navCtrl, navParams, viewCtrl, toastCtrl, AlertCtrl, alertCtrl, http, auth, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.AlertCtrl = AlertCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.bookmarkAdded = false;
        this.review = [];
        this.review_content = "";
        this.place_id = "";
        this.place_id = this.navParams.get("place_id");
        this.category = this.navParams.get("category");
        this.address1 = this.navParams.get("address1");
        this.http.loadPlaceInfo({
            place_id: this.place_id,
            category: this.category
        }).then(function (placeInfo) {
            Object.keys(placeInfo.accuracy_reviewer).map(function (v, i) {
                if (placeInfo.accuracy_reviewer[v].uid == _this.auth.user.uid) {
                    _this.accuracy_rate = placeInfo.accuracy_rate;
                    _this.slidesElement.lockSwipes(false);
                    _this.slidesElement.slideNext();
                    _this.slidesElement.lockSwipes(true);
                }
            });
            Object.keys(placeInfo.review).map(function (v, i) {
                _this.review.push(placeInfo.review[v]);
            });
            // this.review.push({
            //   review_id : "123",
            //   nickname : "#1212332",
            //   review_content : "여기 너무 지저분해요ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ",
            //   like_count : "200",
            //   dislike_count : "300",
            //   date : new Date().toString()
            // }) 
        });
        this.auth.currentUser().getIdToken()
            .then(function (idToken) {
            console.log(idToken);
            return _this.http.getUserInfo({
                idToken: idToken
            });
        }).then(function (userInfo) {
            userInfo.my_bookmark && Object.keys(userInfo.my_bookmark).map(function (key, i) {
                if (key == _this.place_id) {
                    _this.bookmarkAdded = true;
                }
            });
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
        });
    }
    PlaceReviewPage.prototype.ionViewDidLoad = function () {
        this.slidesElement.lockSwipes(true);
    };
    PlaceReviewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlaceReviewPage.prototype.addBookmark = function () {
        var _this = this;
        var obj = this.navParams.data;
        obj.uid = this.auth.user.uid;
        if (this.bookmarkAdded) {
            this.http.removeBookmark(obj).then(function () {
                var toast = _this.toastCtrl.create({
                    message: '북마크존에서 삭제',
                    duration: 2000
                });
                toast.present();
                _this.bookmarkAdded = !_this.bookmarkAdded;
            }).catch(function (error) {
                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                console.log(JSON.stringify(error));
            });
        }
        else {
            this.http.addBookmark(obj).then(function () {
                var toast = _this.toastCtrl.create({
                    message: '북마크존에 추가',
                    duration: 2000
                });
                toast.present();
                _this.bookmarkAdded = !_this.bookmarkAdded;
            }).catch(function (error) {
                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                console.log(JSON.stringify(error));
            });
        }
    };
    PlaceReviewPage.prototype.likeClick = function (review) {
        var _this = this;
        this.http.likeClick({
            place_id: this.place_id,
            uid: this.auth.user.uid,
            review_id: this.review.indexOf(review),
            category: this.category
        }).then(function (count) {
            _this.review[_this.review.indexOf(review)].like_count = count;
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PlaceReviewPage.prototype.dislikeClick = function (review) {
        var _this = this;
        this.http.dislikeClick({
            place_id: this.place_id,
            uid: this.auth.user.uid,
            review_id: this.review.indexOf(review),
            category: this.category
        }).then(function (count) {
            _this.review[_this.review.indexOf(review)].dislike_count = count;
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PlaceReviewPage.prototype.clickAssessment = function (accuracy) {
        var _this = this;
        var obj = this.navParams.data;
        obj.uid = this.auth.user.uid;
        obj.nickname = this.auth.user.nickname;
        obj.accuracy = accuracy;
        var toast = this.toastCtrl.create({
            message: '반영되었습니다.',
            duration: 3000
        });
        toast.present();
        this.slidesElement.lockSwipes(false);
        this.slidesElement.slideTo(1);
        this.slidesElement.lockSwipes(true);
        this.http.updatePlaceAccuracy(obj)
            .then(function (accuracy_rate) {
            _this.accuracy_rate = accuracy_rate;
        }).catch(function (error) {
            console.log(error);
        });
    };
    PlaceReviewPage.prototype.converTime = function (date) {
        date = new Date(date);
        if (__WEBPACK_IMPORTED_MODULE_6_moment__(date).format('YYYYMMDD') == __WEBPACK_IMPORTED_MODULE_6_moment__().format('YYYYMMDD')) {
            return __WEBPACK_IMPORTED_MODULE_6_moment__(date).format('hh:mm a');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_6_moment__(date).format('YYYY-MM-DD');
        }
    };
    PlaceReviewPage.prototype.sendReview = function () {
        var _this = this;
        console.log(this.review_content);
        var alert = this.AlertCtrl.create({
            // title: '리뷰 작성',
            subTitle: "리뷰 작성",
            inputs: [
                {
                    name: 'review_content',
                    placeholder: '리뷰를 입력하세요.'
                }
            ],
            buttons: [
                {
                    text: '취소',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '완료',
                    handler: function (data) {
                        _this.review_content = data.review_content;
                        var obj = _this.navParams.data;
                        obj.uid = _this.auth.user.uid;
                        obj.nickname = _this.auth.user.nickname;
                        obj.review_content = _this.review_content;
                        if (_this.auth.user) {
                            _this.loadingCtrl.present();
                            _this.auth.currentUser().getIdToken()
                                .then(function (idToken) {
                                return _this.http.saveReview(obj);
                            }).then(function (review) {
                                _this.review = review;
                                _this.loadingCtrl.dismiss();
                                _this.alertCtrl.showAlert("리뷰가 작성 되었습니다.");
                                _this.dismiss();
                            }).catch(function (error) {
                                _this.loadingCtrl.dismiss();
                                console.log(JSON.stringify(error));
                                _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], PlaceReviewPage.prototype, "slidesElement", void 0);
    PlaceReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-review',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-review/place-review.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <ion-title text-center>리뷰</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" color="light" showWhen="android,windows"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-card>\n    <ion-slides effect="fade" speed="1500">\n      <ion-slide style="background-color: white">\n        <ion-icon name=\'ios-pin-outline\'></ion-icon>\n        <p>{{address1}}</p>\n        <ion-item text-center>\n          <h3>이 위치가 정확한가요?</h3>\n          <button ion-button outline round small (click)="clickAssessment(true)">네</button>\n          <button ion-button outline round small (click)="clickAssessment(false)">아니오</button>\n        </ion-item>\n      </ion-slide>\n      <ion-slide style="background-color: white">\n        <ion-icon name=\'ios-pin-outline\'></ion-icon>\n        <p>{{address1}}</p>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-item text-center (click)="addBookmark()">\n                <ion-icon [name]="!bookmarkAdded? \'ios-star-outline\' : \'ios-star\'"  color="secondary"></ion-icon>\n                <h4>북마크존</h4>\n                <h4>{{ bookmarkAdded? \'삭제\' : \'추가\'}}</h4>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item text-center>\n              <ion-icon name="ios-stats-outline"></ion-icon>\n              <h4>위치 정확도</h4>\n              <h4>{{accuracy_rate}}%</h4>\n            </ion-item>\n\n          </ion-col>\n          <ion-col col-4>\n            <ion-item text-center>\n              <ion-icon name="ios-create-outline"></ion-icon>\n              <h4>총 리뷰</h4>\n              <h4>{{review?.length}}</h4>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-slides [hidden]="review?.length != 0 ">\n    <ion-slide>\n      <p style="color:#9d9d9d;"> 첫 번째 리뷰를 작성해 보세요.</p>\n    </ion-slide>\n  </ion-slides>\n\n\n  <ion-list *ngFor="let m of review">\n    <ion-card inset>\n      <ion-row>\n        <ion-col col-9>\n          <h2 item-start style="margin-left:10px; margin-top:10px;">{{m.nickname}}</h2>\n        </ion-col>\n        <ion-col col-3>\n          <p item-end style="color:gray">{{converTime(m.date)}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <p text-wrap style="margin-left:10px;" >{{m.review_content}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3>\n          <!-- <button ion-button clear small style="color:gray" (c)>신고</button> -->\n        </ion-col>\n        <ion-col col-9 text-right>\n          <button ion-button clear small (click)="likeClick(m)">\n            <ion-icon name="ios-thumbs-up-outline" > {{m.like_count}}</ion-icon>  \n          </button>\n          <button ion-button clear small color="light" (click)="dislikeClick(m)">\n            <ion-icon name="ios-thumbs-down-outline" color="secondary" > {{m.dislike_count}}</ion-icon>  \n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="sendReview()"><ion-icon name="md-create"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-review/place-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], PlaceReviewPage);
    return PlaceReviewPage;
}());

//# sourceMappingURL=place-review.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceModifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaceModifyPage = /** @class */ (function () {
    function PlaceModifyPage(navCtrl, navParams, http, alertCtrl, viewCtrl, events, 
        // public AlertCtrl: AlertController,
        auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.address1 = navParams.get("address1") || "";
        this.address2 = navParams.get("address2") || "";
        this.category = navParams.get("category") || "";
        this.smoking_place_type = this.category == "흡연 구역" ? navParams.get("type") : "";
        this.no_smoking_place_type = this.category == "금연 구역" ? navParams.get("type") : "";
        this.name = navParams.get("name") || "";
        this.description1 = navParams.get("description1") || "";
        this.description2 = navParams.get("description2") || "";
        this.description3 = navParams.get("description3") || "";
        this.operator = navParams.get("operator") || "";
        this.latitude = navParams.get("latitude") || "";
        this.longitude = navParams.get("longitude") || "";
        this.place_id = navParams.get("place_id") || "";
    }
    PlaceModifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceModifyPage');
    };
    PlaceModifyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlaceModifyPage.prototype.clickModify = function () {
        var _this = this;
        if (this.name == "") {
            this.alertCtrl.showAlert("장소명을 입력하세요.");
        }
        this.alertCtrl.showConfirm("수정하시겠습니까? (정확한 장소가 아닐 경우 삭제될 수 있습니다.)", "네", "아니오", function () {
            if (_this.auth.user) {
                _this.loadingCtrl.present();
                _this.auth.currentUser().getIdToken()
                    .then(function (idToken) {
                    return _this.http.modifyPlace({
                        place_id: _this.place_id,
                        address1: _this.address1,
                        address2: _this.address2,
                        category: _this.category,
                        description1: _this.description1 == "" ? null : _this.description1,
                        description2: _this.description2 == "" ? null : _this.description2,
                        description3: _this.description3 == "" ? null : _this.description3,
                        editor: _this.auth.user.nickname,
                        password: _this.auth.user.uid,
                        // latitude: this.latitude,
                        // longitude: this.longitude,
                        name: _this.name,
                        operator: _this.operator,
                        type: _this.category == "흡연 구역" ? _this.smoking_place_type : _this.no_smoking_place_type,
                    });
                }).then(function (res) {
                    _this.events.publish("refresh");
                    _this.loadingCtrl.dismiss();
                    _this.alertCtrl.showAlert("정보가 수정 되었습니다.");
                    _this.dismiss();
                }).catch(function (error) {
                    _this.loadingCtrl.dismiss();
                    console.log(JSON.stringify(error));
                    _this.alertCtrl.showAlert("네트워크 상태가 원활하지 않습니다.");
                });
            }
        }, function () { });
    };
    PlaceModifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-modify',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-modify/place-modify.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      장소 정보 수정\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="border:0px;">\n  <ion-item>\n    <ion-label floating>주소</ion-label>\n    <ion-input type="text" [(ngModel)]="address1" readonly=\'true\' disabled="true"></ion-input>\n    <!-- <button ion-button clear large item-end style="margin-bottom: -5%;" (click)="searchAddress(addressInput)" [hidden]="searchAddressDone"><ion-icon name="ios-search" ></ion-icon></button> -->\n      <!-- <button ion-button clear large item-end style="margin-bottom: -5%;" (click)="deleteAddress()" ><ion-icon name="md-close" ></ion-icon></button> -->\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>상세 주소</ion-label>\n      <ion-input type="text" [(ngModel)]="address2"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>장소 구분</ion-label>\n      <ion-select [(ngModel)]="category" interface="popover" disabled="true" readonly="true">\n        <ion-option value="흡연 구역" selected="true">흡연 구역</ion-option>\n        <ion-option value="금연 구역">금연 구역</ion-option>\n        <!-- <ion-option value="금연 지원 센터 기관">금연 지원 센터 기관</ion-option> -->\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]="category== \'금연 구역\' ">\n      <ion-label floating>장소 분류</ion-label>\n      <ion-select [(ngModel)]="smoking_place_type" interface="popover">\n        <ion-option value="개방형" selected="true">개방형</ion-option>\n        <ion-option value="폐쇄형">폐쇄형</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item [hidden]="category== \'흡연 구역\'  ">\n      <ion-label floating>장소 분류</ion-label>\n      <ion-select [(ngModel)]="no_smoking_place_type" interface="popover">\n        <ion-option value="공원" selected="true">공원</ion-option>\n        <ion-option value="버스정류장">버스정류장</ion-option>\n        <ion-option value="정부지방청사">정부지방청사</ion-option>\n        <ion-option value="학교">학교</ion-option>\n        <ion-option value="의료기관">의료기관</ion-option>\n        <ion-option value="어린이/청소년 이용시설">어린이/청소년 이용시설</ion-option>\n        <ion-option value="도서관">도서관</ion-option>\n        <ion-option value="학원">학원</ion-option>\n        <ion-option value="대형건물">대형건물</ion-option>\n        <ion-option value="공연장">공연장</ion-option>\n        <ion-option value="점포">점포</ion-option>\n        <ion-option value="관광숙박업소">관광숙박업소</ion-option>\n        <ion-option value="체육시설">체육시설</ion-option>\n        <ion-option value="사회복지시설">사회복지시설</ion-option>\n        <ion-option value="대중목욕탕">대중목욕탕</ion-option>\n        <ion-option value="게임방/PC방">게임방/PC방</ion-option>\n        <ion-option value="고속도로 휴게시설">고속도로 휴게시설</ion-option>\n        <ion-option value="공동주택">공동주택</ion-option>\n        <ion-option value="산림인접지역">산림인접지역</ion-option>\n        <ion-option value="자연공원">자연공원</ion-option>\n        <ion-option value="문화유적지">문화유적지</ion-option>\n        <ion-option value="택시승강장">택시승강장</ion-option>\n        <ion-option value="기차">기차</ion-option>\n        <ion-option value="공항">공항</ion-option>\n        <ion-option value="항공기">항공기</ion-option>\n        <ion-option value="기타">기타</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>장소명</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>장소 설명</ion-label>\n      <ion-input type="text" [(ngModel)]="description1"></ion-input>\n    </ion-item>\n\n    <ion-item [hidden]="description2 == \'\'">\n      <ion-label floating>장소 설명</ion-label>\n      <ion-input type="text" [(ngModel)]="description2"></ion-input>\n    </ion-item>\n\n\n    <ion-item [hidden]="description3 == \'\'">\n      <ion-label floating>장소 설명</ion-label>\n      <ion-input type="text" [(ngModel)]="description3"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>운영 주체</ion-label>\n      <ion-input type="text" [ngModel]="operator"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n<ion-footer >\n  <button ion-button full large style="margin:0px; " (click)="clickModify()">수정하기</button>\n</ion-footer>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-modify/place-modify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], PlaceModifyPage);
    return PlaceModifyPage;
}());

//# sourceMappingURL=place-modify.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(549);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertProvider.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: '알림',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    AlertProvider.prototype.showConfirm = function (message, positiveText, negativeText, positiveHanddler, negativeHandler) {
        var alert = this.alertCtrl.create({
            title: '알림',
            message: message,
            buttons: [
                {
                    text: positiveText,
                    handler: positiveHanddler
                },
                {
                    text: negativeText,
                    role: 'cancel',
                    handler: negativeHandler
                }
            ]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sqlite_sqlite__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = /** @class */ (function () {
    function AuthProvider(FirebaseAuth, sqlite, http) {
        this.FirebaseAuth = FirebaseAuth;
        this.sqlite = sqlite;
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.getUser = function () {
        var _this = this;
        var _db;
        return new Promise(function (resolve, reject) {
            if (_this.user) {
                resolve(_this.user);
            }
            else {
                _this.sqlite.Connect()
                    .then(function (db) {
                    _db = db;
                    return _this.createTable(db);
                }).then(function () {
                    return _this.find(_db);
                }).then(function (result) {
                    if (result.rows.length == 0) {
                        resolve(null);
                    }
                    else {
                        resolve(result.rows.item(0));
                    }
                }).catch(function (error) {
                    console.log(JSON.stringify(error));
                    reject(error);
                });
            }
        });
    };
    AuthProvider.prototype.createUser = function () {
        return this.FirebaseAuth.auth.signInAnonymously()
            .then(function (userRecord) {
            console.log(userRecord.user.uid);
            return userRecord.user;
        }).catch(function (error) {
            console.log(JSON.stringify(error));
            return null;
        });
    };
    AuthProvider.prototype.signInWithCustomToken = function (params) {
        var _this = this;
        var nickname, fcm;
        return this.http.signIn({
            uid: params.uid
        }).then(function (res) {
            nickname = res.nickname;
            fcm = res.fcm;
            return _this.FirebaseAuth.auth.signInWithCustomToken(res.customToken);
        }).then(function (userInfo) {
            _this.user = Object.assign({}, {
                uid: userInfo.user.uid,
                nickname: nickname,
                fcm: fcm
            });
            return _this.user;
        });
    };
    AuthProvider.prototype.currentUser = function () {
        return this.FirebaseAuth.auth.currentUser;
    };
    AuthProvider.prototype.createTable = function (db) {
        var sql = 'CREATE TABLE IF NOT EXISTS user (uid VARCHAR(50) PRIMARY KEY, nickname VARCHAR(50) ,subscribe BOOLEAN NOT NULL)';
        return db.executeSql(sql, []);
    };
    AuthProvider.prototype.dropTable = function (db) {
        var sql = 'DROP TABLE user';
        return db.executeSql(sql, []);
    };
    AuthProvider.prototype.find = function (db) {
        var sql = 'SELECT * FROM user';
        return db.executeSql(sql, []);
    };
    AuthProvider.prototype.insert = function (db, uid, nickname, subscribe) {
        var sql = 'INSERT INTO user VALUES("' + uid + '", "' + nickname + '" , "' + subscribe + '")';
        return db.executeSql(sql, []);
    };
    AuthProvider.prototype.update = function (db, id, subscribe) {
        var sql = "UPDATE user SET id = '" + subscribe + "' WHERE id = '" + id + "' ";
        return db.executeSql(sql, []);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__sqlite_sqlite__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_modal_add_modal__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_place_search_place__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_profile_my_profile__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bookmark_bookmark__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_place_review_place_review__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_center_center__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_place_modify_place_modify__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_search_map_search__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_question_question__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_maps__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_diagnostic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_loading_loading__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_http_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_sqlite_sqlite__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var firebaseConfig = {
    apiKey: "AIzaSyCWsq1qkJbuGKH1xT1oWkmIvyq5-uF44RA",
    authDomain: "gongzone-4fb9f.firebaseapp.com",
    databaseURL: "https://gongzone-4fb9f.firebaseio.com",
    projectId: "gongzone-4fb9f",
    storageBucket: "gongzone-4fb9f.appspot.com",
    messagingSenderId: "538760156637"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_modal_add_modal__["a" /* AddModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_place_search_place__["a" /* SearchPlacePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_review_place_review__["a" /* PlaceReviewPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_center_center__["a" /* CenterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_search_map_search__["a" /* MapSearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_place_modify_place_modify__["a" /* PlaceModifyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_question_question__["a" /* QuestionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_modal_add_modal__["a" /* AddModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_place_search_place__["a" /* SearchPlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_review_place_review__["a" /* PlaceReviewPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_center_center__["a" /* CenterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_search_map_search__["a" /* MapSearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_place_modify_place_modify__["a" /* PlaceModifyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_question_question__["a" /* QuestionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_diagnostic__["a" /* Diagnostic */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_sqlite_sqlite__["a" /* SqliteProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';

// import { IntroPage } from '../pages/intro/intro';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, zone
        // public FirebaseAuth: AngularFireAuth,
        // public FirebaseDB: AngularFireDatabase
    ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.zone = zone;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */];
        this.chat = [];
        this.initializeApp();
        // this.chat = [{
        //   uid : '1',
        //   content : "111",
        //   distance : "1.1",
        //   date : "3:43 pm",
        //   nickname : "#!!!!"
        // }];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString("#2196F3");
            _this.splashScreen.hide();
            _this.events.subscribe("add_chat_message", function (data) {
                _this.chat.push({
                    uid: data.uid,
                    content: data.content,
                    distance: data.distance,
                    date: data.date,
                    nickname: data.nickname
                });
                _this.zone.run(function () {
                    _this.content.resize();
                });
            });
            _this.events.subscribe("get_my_location", function (data) {
                _this.latitude = parseFloat(data.lat).toFixed(5) || "";
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/app/app.html"*/'<ion-menu side="right" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                    <img src="./assets/svgs/map-marker.svg" style="width:20px; height:20px;">\n                <!-- <ion-icon name="ios-pin"></ion-icon>  -->\n                {{latitude}}\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-slides [hidden]="chat?.length != 0 ">\n            <ion-slide>\n                <p style="color:#9d9d9d;">대화가 없습니다.</p>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-list [hidden]="chat?.length == 0 ">\n            <ion-item *ngFor="let c of chat">\n                <h2>{{c.nickname}}</h2>\n                <p>{{c.content}}</p>\n\n                <p item-end>{{c.date}}<br><i>{{c.distance}} </i></p>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]
            // public FirebaseAuth: AngularFireAuth,
            // public FirebaseDB: AngularFireDatabase
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 279,
	"./af.js": 279,
	"./ar": 280,
	"./ar-dz": 281,
	"./ar-dz.js": 281,
	"./ar-kw": 282,
	"./ar-kw.js": 282,
	"./ar-ly": 283,
	"./ar-ly.js": 283,
	"./ar-ma": 284,
	"./ar-ma.js": 284,
	"./ar-sa": 285,
	"./ar-sa.js": 285,
	"./ar-tn": 286,
	"./ar-tn.js": 286,
	"./ar.js": 280,
	"./az": 287,
	"./az.js": 287,
	"./be": 288,
	"./be.js": 288,
	"./bg": 289,
	"./bg.js": 289,
	"./bm": 290,
	"./bm.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 300,
	"./de-at": 301,
	"./de-at.js": 301,
	"./de-ch": 302,
	"./de-ch.js": 302,
	"./de.js": 300,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-au": 305,
	"./en-au.js": 305,
	"./en-ca": 306,
	"./en-ca.js": 306,
	"./en-gb": 307,
	"./en-gb.js": 307,
	"./en-ie": 308,
	"./en-ie.js": 308,
	"./en-il": 309,
	"./en-il.js": 309,
	"./en-nz": 310,
	"./en-nz.js": 310,
	"./eo": 311,
	"./eo.js": 311,
	"./es": 312,
	"./es-do": 313,
	"./es-do.js": 313,
	"./es-us": 314,
	"./es-us.js": 314,
	"./es.js": 312,
	"./et": 315,
	"./et.js": 315,
	"./eu": 316,
	"./eu.js": 316,
	"./fa": 317,
	"./fa.js": 317,
	"./fi": 318,
	"./fi.js": 318,
	"./fo": 319,
	"./fo.js": 319,
	"./fr": 320,
	"./fr-ca": 321,
	"./fr-ca.js": 321,
	"./fr-ch": 322,
	"./fr-ch.js": 322,
	"./fr.js": 320,
	"./fy": 323,
	"./fy.js": 323,
	"./gd": 324,
	"./gd.js": 324,
	"./gl": 325,
	"./gl.js": 325,
	"./gom-latn": 326,
	"./gom-latn.js": 326,
	"./gu": 327,
	"./gu.js": 327,
	"./he": 328,
	"./he.js": 328,
	"./hi": 329,
	"./hi.js": 329,
	"./hr": 330,
	"./hr.js": 330,
	"./hu": 331,
	"./hu.js": 331,
	"./hy-am": 332,
	"./hy-am.js": 332,
	"./id": 333,
	"./id.js": 333,
	"./is": 334,
	"./is.js": 334,
	"./it": 335,
	"./it.js": 335,
	"./ja": 336,
	"./ja.js": 336,
	"./jv": 337,
	"./jv.js": 337,
	"./ka": 338,
	"./ka.js": 338,
	"./kk": 339,
	"./kk.js": 339,
	"./km": 340,
	"./km.js": 340,
	"./kn": 341,
	"./kn.js": 341,
	"./ko": 342,
	"./ko.js": 342,
	"./ky": 343,
	"./ky.js": 343,
	"./lb": 344,
	"./lb.js": 344,
	"./lo": 345,
	"./lo.js": 345,
	"./lt": 346,
	"./lt.js": 346,
	"./lv": 347,
	"./lv.js": 347,
	"./me": 348,
	"./me.js": 348,
	"./mi": 349,
	"./mi.js": 349,
	"./mk": 350,
	"./mk.js": 350,
	"./ml": 351,
	"./ml.js": 351,
	"./mn": 352,
	"./mn.js": 352,
	"./mr": 353,
	"./mr.js": 353,
	"./ms": 354,
	"./ms-my": 355,
	"./ms-my.js": 355,
	"./ms.js": 354,
	"./mt": 356,
	"./mt.js": 356,
	"./my": 357,
	"./my.js": 357,
	"./nb": 358,
	"./nb.js": 358,
	"./ne": 359,
	"./ne.js": 359,
	"./nl": 360,
	"./nl-be": 361,
	"./nl-be.js": 361,
	"./nl.js": 360,
	"./nn": 362,
	"./nn.js": 362,
	"./pa-in": 363,
	"./pa-in.js": 363,
	"./pl": 364,
	"./pl.js": 364,
	"./pt": 365,
	"./pt-br": 366,
	"./pt-br.js": 366,
	"./pt.js": 365,
	"./ro": 367,
	"./ro.js": 367,
	"./ru": 368,
	"./ru.js": 368,
	"./sd": 369,
	"./sd.js": 369,
	"./se": 370,
	"./se.js": 370,
	"./si": 371,
	"./si.js": 371,
	"./sk": 372,
	"./sk.js": 372,
	"./sl": 373,
	"./sl.js": 373,
	"./sq": 374,
	"./sq.js": 374,
	"./sr": 375,
	"./sr-cyrl": 376,
	"./sr-cyrl.js": 376,
	"./sr.js": 375,
	"./ss": 377,
	"./ss.js": 377,
	"./sv": 378,
	"./sv.js": 378,
	"./sw": 379,
	"./sw.js": 379,
	"./ta": 380,
	"./ta.js": 380,
	"./te": 381,
	"./te.js": 381,
	"./tet": 382,
	"./tet.js": 382,
	"./tg": 383,
	"./tg.js": 383,
	"./th": 384,
	"./th.js": 384,
	"./tl-ph": 385,
	"./tl-ph.js": 385,
	"./tlh": 386,
	"./tlh.js": 386,
	"./tr": 387,
	"./tr.js": 387,
	"./tzl": 388,
	"./tzl.js": 388,
	"./tzm": 389,
	"./tzm-latn": 390,
	"./tzm-latn.js": 390,
	"./tzm.js": 389,
	"./ug-cn": 391,
	"./ug-cn.js": 391,
	"./uk": 392,
	"./uk.js": 392,
	"./ur": 393,
	"./ur.js": 393,
	"./uz": 394,
	"./uz-latn": 395,
	"./uz-latn.js": 395,
	"./uz.js": 394,
	"./vi": 396,
	"./vi.js": 396,
	"./x-pseudo": 397,
	"./x-pseudo.js": 397,
	"./yo": 398,
	"./yo.js": 398,
	"./zh-cn": 399,
	"./zh-cn.js": 399,
	"./zh-hk": 400,
	"./zh-hk.js": 400,
	"./zh-tw": 401,
	"./zh-tw.js": 401
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 605;

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BookmarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarkPage');
    };
    BookmarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmark',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/bookmark/bookmark.html"*/'<!--\n  Generated template for the BookmarkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bookmark</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/bookmark/bookmark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], BookmarkPage);
    return BookmarkPage;
}());

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get("data"));
        this.data = navParams.get("data");
        this.place_name = this.data.name;
    }
    PlaceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceDetailPage');
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-detail',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-detail/place-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{place_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/place-detail/place-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapSearchPage = /** @class */ (function () {
    function MapSearchPage(navCtrl, navParams, loadingCtrl, geolocation, viewCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        platform.ready().then(function () {
            _this.mapInit()
                .then(function () {
                alert("Ok");
                _this.moveToMyLocation();
            }).catch(function (error) {
                console.log(error);
                alert(JSON.stringify(error));
            });
        });
    }
    MapSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapSearchPage');
        // this.mapInit()
        //   .then(() => {
        //     this.moveToMyLocation()
        //   }).catch((error) => {
        //     console.log(error)
        //   })
    };
    MapSearchPage.prototype.ngAfterViewInit = function () {
        console.log("init");
        // this.mapInit()
        //   .then(() => {
        //     alert("Ok")
        //     this.moveToMyLocation()
        //   }).catch((error) => {
        //     console.log(error)
        //     alert(JSON.stringify(error))
        //   })
    };
    MapSearchPage.prototype.mapInit = function () {
        var options = {
            controls: {
                // compass: true,
                myLocation: true,
                myLocationButton: true,
                indoorPicker: false,
                mapToolbar: false
            },
            camera: {
                target: {
                    lat: 37.5662994,
                    lng: 126.9757564
                },
                zoom: 18
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas2', options);
        return this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY);
    };
    MapSearchPage.prototype.mapEventBinding = function () {
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK).subscribe(function (params) {
            var latLng = params[0];
            var map = params[1]; // <-- You can get the target of MAP_CLICK event
        });
    };
    MapSearchPage.prototype.moveToMyLocation = function () {
        var _this = this;
        this.getMyLocation().then(function (myLocation) {
            _this.map && _this.map.moveCamera({
                target: myLocation.latLng,
                zoom: 18
            });
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    MapSearchPage.prototype.getMyLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LocationService */].getMyLocation();
    };
    MapSearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapSearchPage.prototype, "mapElement", void 0);
    MapSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-search',template:/*ion-inline-start:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/map-search/map-search.html"*/'<ion-content no-padding>\n  <div style="height: 100%;" id="map_canvas2"></div> \n  <ion-fab top left>\n    <button ion-fab mini (click)="dismiss()"><ion-icon name="ios-arrow-back-outline"></ion-icon></button>\n  </ion-fab>\n  <ion-fab center middle>\n    <button ion-fab mini><ion-icon name="ios-pin"></ion-icon></button>\n  </ion-fab>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-item text-center>\n    <h2>\n      <ion-icon name="ios-pin">서울 광진구 무슨동 1111</ion-icon>\n    </h2>\n  </ion-item>\n  <button ion-button full style="margin:0px; ">이 위치로 설정</button>\n</ion-footer>'/*ion-inline-end:"/Users/sobyeong-yun/Desktop/workspace/gongzone/app/src/pages/map-search/map-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], MapSearchPage);
    return MapSearchPage;
}());

//# sourceMappingURL=map-search.js.map

/***/ })

},[426]);
//# sourceMappingURL=main.js.map