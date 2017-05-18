function Bullet(owner) {
	var me = this;

	this.init = function() {
		this.plane = owner;
		this.game = this.plane.game;

		var resImg = window.resource.bullet.img;
		var img = this.el = new Image();
		img.src = resImg.src;
		img.style.top = '-1000px';
		img.style.left = '-1000px';

		this.width = resImg.width;
		this.height = resImg.height;
		this.x = this.plane.x + (this.plane.width - this.width) / 2;
		this.y = this.plane.y - this.height / 2;
		this.speed = 4;

		this.game.ui.appendChild(img);
	}

	//画界面
	this.paint = function() {
		this.el.style.left = this.x + "px";
		this.el.style.top = this.y + "px";
	}

	//改数据
	this.update = function() {
		this.y -= this.speed;

		// if(this.y < -this.height) {
		// 	// console.log("bullet over");
		// }
	}

	this.init();
}