function Game() {
	var me = this;
	//计时器
	var timer;
	var frames = 0;

	//精灵对象
	this.stage;

	//游戏方法
	this.init = function() {
		this.ui = document.getElementById("p2");
		this.container = document.getElementsByClassName("container")[0];
		this.elFrames = document.getElementById("frames");

		this.stage = new Stage1(this);
	}

	this.setSize = function(width, height) {
		this.width = width;
		this.height = height;
		this.container.style.width = width + "px";
		this.container.style.height = height + "px";
	}

	this.start = function() {
		console.log("start");
		tick();
	}

	this.stop = function() {
		console.log("stop");
		clearTimeout(timer);
	}

	//画界面
	function paint() {
		me.elFrames.innerText = frames;

		me.stage.paint();
	}

	//改数据
	function update() {
		frames++;

		me.stage.update(frames);
	}

	//线程方法
	function tick() {
		paint();
		update();

		timer = setTimeout(tick, 1000 / 60);
	}

	this.init();
}