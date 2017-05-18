function Plane(owner) {
	var me = this;

	this.init = function() {
		this.game = owner;

		var img = this.el = new Image();
		img.src = "../image/plane.gif"

		this.width = 50;
		this.height = 60;
		this.x = 130;
		this.y = 568;

		this.game.ui.appendChild(img);
	}

	//画界面
	this.paint = function() {
		this.el.style.left = this.x + "px";
		this.el.style.top = this.y + "px";
	}

	//改数据
	this.update = function() {
		this.y--;

		if(this.y < -this.height) {
			this.y = 650;
		}
	}

	this.init();
}