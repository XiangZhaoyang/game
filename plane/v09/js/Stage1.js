function Stage1(owner) {
	var me = this;

	this.init = function() {
		this.game = owner;

		var img = window.resource.bg_game.img
		this.game.setSize(img.width, img.height);

		this.bgY = 0;
		this.bgSpeed = 1;

		this.plane = new Plane(owner);
	}

	//画界面
	this.paint = function() {
		this.game.ui.style.backgroundPositionY = this.bgY + "px";

		this.plane.paint();
	}

	//改数据
	this.update = function(frames) {
		this.bgY += this.bgSpeed;

		this.plane.update(frames);
	}

	this.init();
}