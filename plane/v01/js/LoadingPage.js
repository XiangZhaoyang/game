function LoadingPage() {
	var me = this;
	var pre = "../image/";
	var address = [
		"bg_game.png", "bg_start.png", "bullet.png", "enemy1.png",
		"enemy1_2.gif", "enemy2.png", "enemy2_2.gif", "enemy3.png",
		"enemy3_2.gif", "plane.gif", "plane_1.gif"
	];

	this.init = function() {
		this.el = document.getElementById("p0");
		this.elLoading = document.getElementById("loading");
	}

	this.load = function() {
		//构建预加载插件
		var preload = new Preload();

		//添加图片地址
		for(var i = 0; i < address.length; i++) {
			preload.add(pre + address[i]);
		}

		//关注加载进度
		preload.onprogress = function(num, total) {
			me.elLoading.innerText = Math.round(100 * num / total) + "%";
			console.log(num,total);
		}

		//关注加载完成
		preload.onload = function() {
			console.log("over");
		}

		//开始加载数据
		preload.load();
	}

	this.init();
}