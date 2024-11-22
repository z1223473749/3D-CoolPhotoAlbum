# 3D-CoolPhotoAlbum
很酷的3D相册展示（源码可共享，但图片禁止转载，谢谢）
本项目是由某大佬制作的元素周期表修改而来的

![相册预览GIF](./images/README_Img/output.gif)

### 1. 自动切换背景(带特效)
```bash
 \\过渡效果数组  "slideUp", "slideDown", "slideLeft", (这三个不建议加,会移除窗口)
	const transitionEffects = [
		"fade", "zoom", "slideRight", "blur", "zoomBlur", "rotate", "flipX", "flipY",
		"scaleUp", "scaleDown", "rotate360", "skewX", "skewY", "perspective", "pulse", "bounce", "shrink", "expand", "flash",
		"shake", "grow", "stretch", "twist", "bounceLeft", "bounceRight", "shakeX", "shakeY", "fadeIn", "fadeOut", "wobble",
		"glitch_infinite","Hypnotize","Rainbow_Glow","Shatter_Effect","Pixelate","Tilt_Shift","Ripple_Effect","Explosion_Effect","Swirl_Effect","Flicker_Effect"
	];
```

### 2. 注释掉 hideButtons 即可手动切换按钮
```bash
 hideButtons();
```
