function GamePage() {
	this.init = function() {
		this.el = document.getElementById("p2");
	}

	this.show = function() {
		this.el.style.display = "block";
	}
	this.hide = function() {
		this.el.style.display = "none";
	}

	this.init();
}