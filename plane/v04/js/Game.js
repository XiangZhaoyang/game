function Game() {
	var me = this;
	//计时器
	var timer;

	var frames = 0;

	//精灵数据
	var bgY = 0;
	var bgSpeed = 1;

	this.start = function() {
		console.log("start");
		tick();
	}
	this.stop = function() {
		console.log("stop");
		clearTimeout(timer);
	}
	this.init = function() {
		this.ui = document.getElementById("p2");
	}

	//画界面
	function paint() {
		me.ui.innerText = frames;

		//画精灵界面
		me.ui.style.backgroundPositionY = bgY + "px";
	}

	//改数据
	function update() {
		frames++;

		//修改精灵数据
		bgY += bgSpeed;
	}

	//线程方法
	function tick() {
		paint();
		update();

		timer = setTimeout(tick, 1000 / 60);
	}

	this.init();
}