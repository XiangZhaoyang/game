function LoadingPage() {
	var me = this;

	//加载结束事件
	this.onover;

	this.init = function() {
		this.el = document.getElementById("p0");
		this.elLoading = document.getElementById("loading");
	}

	this.load = function() {
		//构建预加载插件
		var preload = new Preload();

		//关注加载进度
		preload.onprogress = function(num, total) {
			me.elLoading.innerText = Math.round(100 * num / total) + "%";
			console.log(num, total, me.elLoading.innerText);
		}

		//关注加载完成
		preload.onload = function() {
			console.log("over");

			me.onover && me.onover();
		}

		//开始加载数据
		preload.load();
	}

	this.show = function() {
		this.el.style.display = "block";
	}
	this.hide = function() {
		this.el.style.display = "none";
	}

	this.init();
}