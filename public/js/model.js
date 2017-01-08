/*
 * model.js
 */
'use strict';
$(function() {

    // 表示領域の幅、高さ
    var width  = 640;
    var height = 480;

    // 画角
    var fov    = 4;

    // アスペクト比
    var aspect = width / height;

    // クリッピング手前
    var near   = 1;

    // クリッピング億
    var far    = 2000;

    // カメラ生成
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    // カメラ位置調整
    camera.position.set( 364, 200, 630 );

    var controls = new THREE.OrbitControls(camera);
  //①ズーム
    controls.userZoom = true;    //true:ズーム操作可能,false:ズーム操作不可
    controls.userZoomSpeed = 1.0;   // ズーム速度

    //②回転
    controls.userRotate = true;    //true:回転操作可能,false:回転操作不可
    controls.userRotateSpeed = 1.0;   //回転速度

    //③パン
    controls.userPan = true;     //true:パン操作可能,false:パン操作不可
    controls.userPanSpeed = 2.0;   //パン速度

    //④自動回転
    controls.autoRotate = false;     //true:自動回転する,false:自動回転しない
    controls.autoRotateSpeed = 2.0;    //自動回転する時の速度

    //⑤
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    //⑥
    controls.minDistance = 0;   //近づける距離の最小値
    controls.maxDistance = Infinity;   //遠ざかれる距離の最大値

    // シーン（空間）用意
    var scene = new THREE.Scene();

    var dataMesh;
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'public/res/' );
    mtlLoader.load( 'bolkabe.mtl', function( materials ) {
    	materials.preload();

        var loader = new THREE.OBJLoader();
        loader.setPath( 'public/res/' );
        loader.setMaterials( materials );
        loader.load( 'bolkabe.obj' , function ( object ) {
            camera.lookAt(new THREE.Vector3(0, 1000, 0));
            scene.add(object);
        });
    });

    // ライト生成
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.x = 3;
    directionalLight.position.y = 3;
    directionalLight.position.z = 3;
    scene.add( directionalLight );

    // レンダラ生成（WebGLレンダラ以外にもcanvas, svg, CSS3レンダラ等がある）
    var renderer = new THREE.WebGLRenderer();
    // var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.getElementById('viewArea').appendChild( renderer.domElement );

    $(renderer.domElement).css("backgroundColor","#000");

    // アニメーション
    function rendering(){
        controls.update();
        renderer.render( scene, camera );
        setTimeout(rendering, 1000/30);
    }
    rendering();
});
