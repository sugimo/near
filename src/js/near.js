// キャンパスの要素を取得する
var canvas = document.getElementById( 'map-canvas' ) ;

// 中心の位置座標を指定する
var latlng = new google.maps.LatLng( 35.6628734 , 139.7336052 );

// 地図のオプションを設定する
var mapOptions = {
	zoom: 15 ,				// ズーム値
	center: latlng ,		// 中心座標 [latlng]
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas , mapOptions ) ;


$(function(){
	var hoge = "";

//initialize
function init(){
}

init();

});

