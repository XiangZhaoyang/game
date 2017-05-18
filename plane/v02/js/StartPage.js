function StartPage() {
	this.init = function() {
		this.el = document.getElementById("p1");
		this.elBtn = document.getElementById("btnStart");

		//关注点击按钮
		this.elBtn.onclick = function() {
			console.log(2);
		}
	}

	this.show = function() {
		this.el.style.display = "block";
	}
	this.hide = function() {
		this.el.style.display = "none";
	}

	this.init();
}