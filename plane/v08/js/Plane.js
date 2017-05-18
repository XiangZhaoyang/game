function Plane(owner) {
	var me = this;

	this.init = function() {
		this.game = owner;

		var resImg = window.resource.plane.img;
		var img = this.el = new Image();
		img.src = resImg.src;

		this.width = resImg.width;
		this.height = resImg.height;
		this.x = (this.game.width - this.width) / 2;
		this.y = this.game.height - this.height;
		this.speed = 1;

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

		if(this.y < -this.height) {
			this.y = this.game.height;
		}
	}

	this.init();
}