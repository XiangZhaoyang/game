/**
 *图片预加载:帮我们下载图片
 */
function Preload() {
	//封装属性
	this.total = 0;

	//封装事件句柄
	this.onprogress;
	this.onload;

	//封装方法:添加图片地址
	this.init = function() {
		for(var key in window.resource) {
			this.total++;
		}
	}

	//下载图片
	this.load = function() {

		for(var key in window.resource) {
			var value = window.resource[key];
			var img = value.img = new Image();

			img.onload = fnCount;
			img.onerror = fnCount;

			img.src = value.src;
		}
	}

	//私有数据 me self This that
	var me = this;
	var count = 0;

	//计数与通知(事件)
	function fnCount(event) {
		count++;

		if(me.onprogress) {
			//触发事件
			me.onprogress(count, me.total, event.target);
		}

		if(count == me.total) {
			//触发事件
			me.onload && me.onload();

			// if(me.load){
			// 	me.onload()
			// }
		}
	}
	
	this.init();
}