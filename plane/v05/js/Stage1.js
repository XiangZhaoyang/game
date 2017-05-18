function Stage1(owner) {
	var me = this;

	//精灵数据
	var bgY = 0;
	var bgSpeed = 1;
	var game;

	this.init = function() {
		game = owner;
	}

	//画界面
	this.paint = function() {
		game.ui.style.backgroundPositionY = bgY + "px";
	}

	//改数据
	this.update = function() {
		bgY += bgSpeed;
	}

	this.init();
}