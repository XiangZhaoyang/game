/**
 *图片预加载:帮我们下载图片
 */
function Preload() {
	//封装属性
	this.data = [];
	this.total = 0;

	//封装事件句柄
	this.onprogress;
	this.onload;

	//封装方法:添加图片地址
	this.add = function (src) {
		this.data.push(src);
		this.total++;
	}

	//下载图片
	this.load = function () {

		for (var i = 0; i < this.total; i++) {
			var addr = this.data[i];
			var img = new Image();

			img.onload = fnCount;
			img.onerror = fnCount;

			img.src = addr;
		}
	}

	//私有数据 me self This that
	var me = this;
	var count = 0;

	//计数与通知(事件)
	function fnCount() {
		count++;

		if (me.onprogress) {
			//触发事件
			me.onprogress(count, me.total);
		}

		if (count == me.total) {
			//触发事件
			me.onload && me.onload();

			// if(me.load){
			// 	me.onload()
			// }
		}
	}
}