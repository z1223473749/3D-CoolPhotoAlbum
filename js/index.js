~ function(){
	var table = [
		"QS", "牵手", "1.00794", 1, 1,
		"XS", "相守", "4.002602", 18, 1,
		"CN", "承诺","#6.941", 1, 2,
		"YL", "依赖","9.012182", 2, 2,
		"PB", "陪伴","#10.811", 13, 2,
		"GH", "关怀","#12.0107", 14, 2,
		"LM", "浪漫","#14.0067", 15, 2,
		"SY", "誓言","#15.9994", 16, 2,
		"XR", "信任","18.9984032", 17, 2,
		"ZA", "真爱","#20.1797", 18, 2,
		"ZC", "忠诚","22.98976...", 1, 3,
		"QB", "牵绊","#24.305", 2, 3,
		"QL", "亲密","26.9815386", 13, 3,
		"GN", "感恩","#28.0855", 14, 3,
		"JY", "家园","30.973762", 15, 3,
		"HW", "婚姻","#32.065", 16, 3,
		"BY", "包容","#35.453", 17, 3,
		"XY", "相依","#39.948", 18, 3,
		"SQ", "深爱","#39.948", 1, 4,
		"HF", "呵护","#40.078", 2, 4,
		"ZL", "祝福","44.955912", 3, 4,
		"MF", "美满","#47.867", 4, 4,
		"XY", "牵缘","#50.9415", 5, 4,
		"DX", "典礼", "#51.9961", 6, 4,
		"MY", "蜜月", "54.938045", 7, 4,
		"CL", "承礼","#55.845", 8, 4,
		"BX", "并肩","58.933195", 9, 4,
		"CY", "初遇","#58.6934", 10, 4,
		"JL", "久恋", "#63.546", 11, 4,
		"HY", "回忆", "#65.38", 12, 4,
		"FS", "福寿", "#69.723", 13, 4,
		"FX", "芳心", "#72.63", 14, 4,
		"HZ", "红妆","#74.9216", 15, 4,
		"NL", "诺言","#78.96", 16, 4,
		"QD", "情定","#79.904", 17, 4,
		"MR", "默然","#83.798", 18, 4,
		"RR", "荣荣","#85.4678", 1, 5,
		"TZ", "天作","#87.62", 2, 5,
		"YS", "缘深","88.90585", 3, 5,
		"YZ", "缘终","#91.224", 4, 5,
		"CY", "彩云","92.90628", 5, 5,
		"HL", "海量", "#95.96", 6, 5,
		"MF", "蜜芳","(98)", 7, 5,
		"XN", "相念","#101.07", 8, 5,
		"QN", "琴瑟","#102.9055", 9, 5,
		"JT", "佳甜", "#106.42", 10, 5,
		"XH", "星河","#107.8682", 11, 5,
		"YW", "伊望","#112.411", 12, 5,
		"XZ", "相祝","#114.818", 13, 5,
		"HB", "好伴", "#118.71", 14, 5,
		"DL", "典礼","#121.76", 15, 5,
		"SW", "相望","127.6", 16, 5,
		"LP", "礼品","126.90447", 17, 5,
		"TL", "同路","#131.293", 18, 5,
		"DL", "大礼", "#132.9054", 1, 6,
		"YZ", "仪祝","#132.9054", 2, 6,
		"CC", "长存","138.90547", 4, 9,
		"SH", "深怀","#140.116", 5, 9,
		"XY", "新愿","140.90765", 6, 9,
		"HW", "婚味","#144.242", 7, 9,
		"XY", "喜悦", "(145)", 8, 9,
		"BX", "百馨","#150.36", 9, 9,
		"GX", "共续","#151.964", 10, 9,
		"HZ", "红帐","#157.25", 11, 9,
		"XY", "心愿","158.92535", 12, 9,
		"HT", "合体", "162.5", 13, 9,
		"GW", "共望", "164.93032", 14, 9,
		"QS", "情深","#167.259", 15, 9,
		"LY", "良缘", "168.93421", 16, 9,
		"FW", "福望","#173.054", 17, 9,
		"FQ", "福庆","#174.9668", 18, 9,
		"LC", "郎才","#178.49", 4, 6,
		"HZ", "婚帐", "180.94788", 5, 6,
		"XY", "心愿","#183.84", 6, 6,
		"ZS", "珍视","#186.207", 7, 6,
		"TH", "甜蜜", "#190.23", 8, 6,
		"CQ", "成全", "#192.217", 9, 6,
		"QL", "情恋","#195.084", 10, 6,
		"GF", "共福","196.966569", 11, 6,
		"LG", "龙凤","#200.59", 12, 6,
		"NL", "难离","#204.3833", 13, 6,
		"YS", "永生","207.2", 14, 6,
		"YR", "永远","#208.9804", 15, 6,
		"GF", "共飞","(209)", 16, 6,
		"HWS", "婚事","(210)", 17, 6,
		"XY", "幸有", "(222)", 18, 6,
		"QZ", "求真","(223)", 1, 7,
		"ZR", "真容","(226)", 2, 7,
		"HZ", "合眷","(227)", 4, 10,
		"SS", "深思","232.03806", 5, 10,
		"ZY", "至永", "#231.0588", 6, 10,
		"DY", "点缘","238.02891", 7, 10,
		"MC", "美成", "(237)", 8, 10,
		"JN", "佳宁","(244)", 9, 10,
		"XJ", "心结", "(243)", 10, 10,
		"SH", "守护","(247)", 11, 10,
		"QZ", "情真", "(247)", 12, 10,
		"XY", "新月", "(251)", 13, 10,
		"XY", "香艳", "(252)", 14, 10,
		"ZS", "知心", "(257)", 15, 10,
		"GW", "光辉", "(258)", 16, 10,
		"HY", "合宜", "(259)", 17, 10,
		"XJ", "心静","(262)", 18, 10,
		"ZL", "真理","(267)", 4, 7,
		"LQ", "流泉","(268)", 5, 7,
		"XY", "幸福","(271)", 6, 7,
		"DQ", "定情","(272)", 7, 7,
		"CS", "传世","(270)", 8, 7,
		"SH", "深怀","(276)", 9, 7,
		"XY", "新愿","(281)", 10, 7,
		"HW", "婚味","(280)", 11, 7,
		"XY", "喜悦","(285)", 12, 7,
		"LM", "浪漫", "(284)", 13, 7,
		"SY", "誓言","(289)", 14, 7,
		"XR", "信任", "(288)", 15, 7,
		"ZA", "真爱","(293)", 16, 7,
		"ZC", "忠诚","(294)", 17, 7,
		"QB", "牵绊", "(294)", 18, 7
	];

	console.log(table.length)

	var camera, scene, renderer;
	var controls;


	var objects = [];
	var targets = { table: [], sphere: [], helix: [], grid: [] };

// 自动切换背景
	var currentIndex = 0; // 当前的索引
	var interval; // 定时器变量
	var isTransitioning = false; // 防止在过渡期间重复切换

// 过渡效果数组  "slideUp", "slideDown", "slideLeft",
	const transitionEffects = [
		"fade", "zoom", "slideRight", "blur", "zoomBlur", "rotate", "flipX", "flipY",
		"scaleUp", "scaleDown", "rotate360", "skewX", "skewY", "perspective", "pulse", "bounce", "shrink", "expand", "flash",
		"shake", "grow", "stretch", "twist", "bounceLeft", "bounceRight", "shakeX", "shakeY", "fadeIn", "fadeOut", "wobble",
		"glitch_infinite","Hypnotize","Rainbow_Glow","Shatter_Effect","Pixelate","Tilt_Shift","Ripple_Effect","Explosion_Effect","Swirl_Effect","Flicker_Effect"
	];



// 初始化背景切换
	function initBackgroundSwitch() {
		// 初始化时设置第一个背景
		setRandomBackground();

		// 每2秒切换一次背景
		interval = setInterval(setRandomBackground, 2000);

	}

// 设置随机背景
	function setRandomBackground() {
		if (isTransitioning) return; // 如果正在切换，直接返回
		isTransitioning = true;

		// 获取随机索引
		currentIndex = Math.floor(Math.random() * (table.length / 5));
		var imagePath = `images/small/${currentIndex + 1}.jpg`;

		// 获取背景容器
		var backgroundContainer = document.getElementById("background-container");

		// 随机选择一个过渡效果
		var randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];

		// 添加过渡效果
		applyTransitionEffect(backgroundContainer, randomEffect);

		// 在过渡完成后切换背景
		setTimeout(() => {
			backgroundContainer.style.backgroundImage = `url("${imagePath}")`;
			backgroundContainer.style.backgroundSize = "auto"; // 确保图片覆盖整个背景
			backgroundContainer.style.backgroundRepeat = "repeat"; // 背景平铺
			backgroundContainer.style.backgroundPosition = "center"; // 确保背景居中
			// 恢复背景透明度和过渡
			backgroundContainer.style.opacity = "1";

			// 恢复状态
			setTimeout(() => {
				isTransitioning = false;
			}, 300); // 等待渐显完成
		}, 300); // 等待渐隐完成
	}

// 应用过渡效果
	function applyTransitionEffect(container, effect) {
		container.style.transition = "all 1s ease-in-out";
		switch (effect) {
			case "fade":
				container.style.opacity = "0";
				break;
			case "zoom":
				container.style.transform = "scale(0)";
				break;
			case "slideUp":
				container.style.transform = "translateY(-100%)";
				break;
			case "slideDown":
				container.style.transform = "translateY(100%)";
				break;
			case "slideLeft":
				container.style.transform = "translateX(-100%)";
				break;
			case "slideRight":
				container.style.transform = "translateX(50%)";
				break;
			case "blur":
				container.style.filter = "blur(1px)";
				break;
			case "zoomBlur":
				container.style.transform = "scale(0.8)";
				container.style.filter = "blur(1px)";
				break;
			case "rotate":
				container.style.transform = "rotate(90deg)";
				break;
			case "flipX":
				container.style.transform = "scaleX(-1)";
				break;
			case "flipY":
				container.style.transform = "scaleY(-1)";
				break;
			case "scaleUp":
				container.style.transform = "scale(1.2)";
				break;
			case "scaleDown":
				container.style.transform = "scale(0.8)";
				break;
			case "rotate360":
				container.style.transform = "rotate(360deg)";
				break;
			case "skewX":
				container.style.transform = "skewX(20deg)";
				break;
			case "skewY":
				container.style.transform = "skewY(20deg)";
				break;
			case "perspective":
				container.style.transform = "perspective(1000px) rotateY(45deg)";
				break;
			case "pulse":
				container.style.animation = "pulse 2s infinite";
				break;
			case "bounce":
				container.style.animation = "bounce 1s infinite";
				break;
			case "shrink":
				container.style.transform = "scale(0.5)";
				break;
			case "expand":
				container.style.transform = "scale(1.5)";
				break;
			case "flash":
				container.style.animation = "flash 0.5s linear infinite";
				break;
			case "shake":
				container.style.animation = "shake 0.5s infinite";
				break;
			case "grow":
				container.style.transform = "scale(1.5)";
				break;
			case "stretch":
				container.style.transform = "scaleX(1.5)";
				break;
			case "twist":
				container.style.transform = "rotate(45deg) scale(1.2)";
				break;
			case "bounceLeft":
				container.style.animation = "bounceLeft 1s infinite";
				break;
			case "bounceRight":
				container.style.animation = "bounceRight 1s infinite";
				break;
			case "shakeX":
				container.style.animation = "shakeX 0.5s infinite";
				break;
			case "shakeY":
				container.style.animation = "shakeY 0.5s infinite";
				break;
			case "fadeIn":
				container.style.opacity = "0";
				setTimeout(() => {
					container.style.opacity = "1";
				}, 500);
				break;
			case "fadeOut":
				container.style.opacity = "1";
				setTimeout(() => {
					container.style.opacity = "0";
				}, 500);
				break;
			case "wobble":
				container.style.animation = "wobble 1s infinite";
				break;
			case "glitch_infinite":
				container.style.animation = "glitch 1s infinite";
				break;
			case "Rainbow_Glow":
				container.style.boxShadow = "0 0 15px rgba(255, 192, 203, 0.7), 0 0 30px rgba(255, 192, 203, 0.7), 0 0 45px rgba(0, 0, 255, 0.7)";
				container.style.transition = "box-shadow 1s ease-in-out";
				break;
			case "Hypnotize":
				container.style.animation = "hypnotize 3s infinite linear";
				break;
			case "Shatter_Effect":
				container.style.transform = "scale(1.2) rotate(45deg)";
				container.style.opacity = "0";
				container.style.transition = "transform 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity 0.8s";
				break;
			case "Pixelate":
				container.style.filter = "blur(2px)";
				container.style.backgroundImage = "url('your-image.png')";
				container.style.backgroundSize = "10px 10px"; // 像素化效果
				break;
			case "Tilt_Shift":
				container.style.filter = "blur(2px)";
				container.style.transform = "perspective(500px) rotateX(15deg)";
				break;
			case "Ripple_Effect":
				container.style.backgroundSize = "110%";
				container.style.animation = "ripple 2s infinite";
				break;
			case "Explosion_Effect":
				container.style.transform = "scale(3)";
				container.style.opacity = "0";
				container.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";
				break;
			case "Swirl_Effect":
				container.style.transform = "rotate(360deg) scale(0.5)";
				container.style.transition = "all 0.8s ease-in-out";
				break;
			case "Flicker_Effect":
				container.style.animation = "flicker 1s infinite";

				break;
			default:
				break;
		}
	}



// 初始化背景切换功能
	initBackgroundSwitch();

	init();
	animate();


	function init() {

		camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 3000;
		scene = new THREE.Scene();


		// table

		for ( var i = 0; i < table.length; i += 5 ) {

			var element = document.createElement( 'div' );
			element.className = 'element';
			element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
			element.style.backgroundImage = 'url("images/small/'+ (i/5 + 1) +'.jpg")';
			 element.style.backgroundSize = 'cover';
			element.style.backgroundPosition = 'center'; // 保持图片居中
			element.title =  (i/5) +'/'+ (table.length/5);
			element.setAttribute('href', 'images/small/'+ (i/5 + 1)+'.jpg');

			element.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
			element.style.transform = 'scale(1)';  // 使用 transform 进行动画
			element.style.opacity = 1;             // 过渡到完全不透明




			// 元素周期表显示
			 var number = document.createElement( 'div' );
			number.className = 'number';
			 number.textContent = (i/5) + 1;
			element.appendChild( number );

			 var symbol = document.createElement( 'div' );
			 symbol.className = 'symbol';
			 symbol.textContent = table[ i  + 1];
			 element.appendChild( symbol );

			 var details = document.createElement( 'div' );
			 details.className = 'details';
			 details.innerHTML = table[ i ] + '<br>' + table[ i + 2 ];
			 element.appendChild( details );

			var object = new THREE.CSS3DObject( element );
			object.position.x = Math.random() * 4000 - 2000;
			object.position.y = Math.random() * 4000 - 2000;
			object.position.z = Math.random() * 4000 - 2000;
			scene.add( object );

			objects.push( object );

			//

			var object = new THREE.Object3D();
			object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
			object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

			targets.table.push( object );

		}

		// sphere

		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = Math.acos( -1 + ( 2 * i ) / l );
			var theta = Math.sqrt( l * Math.PI ) * phi;

			var object = new THREE.Object3D();

			object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
			object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
			object.position.z = 800 * Math.cos( phi );

			vector.copy( object.position ).multiplyScalar( 2 );

			object.lookAt( vector );

			targets.sphere.push( object );

		}

		// helix

		var vector = new THREE.Vector3();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			var phi = i * 0.175 + Math.PI;

			var object = new THREE.Object3D();

			object.position.x = 900 * Math.sin( phi );
			object.position.y = - ( i * 8 ) + 450;
			object.position.z = 900 * Math.cos( phi );

			vector.x = object.position.x * 2;
			vector.y = object.position.y;
			vector.z = object.position.z * 2;

			object.lookAt( vector );

			targets.helix.push( object );

		}

		// grid

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = new THREE.Object3D();

			object.position.x = ( ( i % 5 ) * 400 ) - 800;
			object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
			object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

			targets.grid.push( object );

		}

		//

		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';


		// 确保父容器的 transform-style 和 perspective 设置正确
		document.getElementById('container').style.transformStyle = 'preserve-3d';
		document.getElementById('container').style.perspective = '1000px';
		const container = document.getElementById( 'container' ).appendChild( renderer.domElement );


		//

		controls = new THREE.TrackballControls( camera, renderer.domElement );
		controls.rotateSpeed = 0.5;
		controls.minDistance = 500;
		controls.maxDistance = 6000;
		controls.addEventListener( 'change', render );

		var button = document.getElementById( 'table' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.table, 2000 );

		}, false );

		var button = document.getElementById( 'sphere' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.sphere, 2000 );

		}, false );

		var button = document.getElementById( 'helix' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.helix, 2000 );

		}, false );

		var button = document.getElementById( 'grid' );
		button.addEventListener( 'click', function ( event ) {

			transform( targets.grid, 2000 );

		}, false );

		transform( targets.sphere, 3000 );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function transform( targets, duration ) {

		TWEEN.removeAll();

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = objects[ i ];
			var target = targets[ i ];

			new TWEEN.Tween( object.position )
				.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

			new TWEEN.Tween( object.rotation )
				.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();

		}

		new TWEEN.Tween( this )
			.to( {}, duration * 2 )
			.onUpdate( render )
			.start();

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		render();

	}

	function animate() {

		requestAnimationFrame( animate );
		renderer.render(scene, camera);

		TWEEN.update();

		controls.update();

	}

	function render() {

		renderer.render( scene, camera );

	}


}();

$(function(){
	$('div.element').imgbox({
		'speedIn'		: 0,
		'speedOut'		: 0,
		// 'allowMultiple'	: false,
		'overlayShow'	: true,
		'zoomOpacity'	: true,
		'alignment'		: 'center'
	});

	var $buttons = $('#menu > button');
	$buttons.bind('click.btns', function(e){
		$buttons.removeClass('hover');
		$(e.target).addClass('hover');
	});
});



