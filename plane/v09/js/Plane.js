function Plane(owner) {
	var me = this;
	var lastFrame = -1000;
	var count = 0;
	var moveTo = function(x, y) {
		me.x = x - me.width / 2;
		me.y = y - me.height / 2;
	};

	this.init = function() {
		this.game = owner;

		var resImg = window.resource.plane.img;
		var img = this.el = new Image();
		img.src = resImg.src;

		this.width = resImg.width;
		this.height = resImg.height;
		this.startx = (this.game.width - this.width) / 2;
		this.starty = this.game.height - this.height;
		this.speed = 0;
		this.x = this.startx;
		this.y = this.starty;
		
		//子弹集合
		this.bullets=[];

		this.game.ui.appendChild(img);

		//鼠标控制飞机移动
		this.game.ui2.onmousemove = function(e) {
			e.stopPropagation();
			moveTo(e.layerX, e.layerY);
			console.log(e.target);
		};
	}

	//画界面
	this.paint = function() {
		this.el.style.left = this.x + "px";
		this.el.style.top = this.y + "px";
		this.bullets.forEach(function(element, index) {
			element.paint();
		}, this);
	}
	
	//改数据
	this.update = function(frames) {
		this.y -= this.speed;

		if(this.y < -this.height) {
			this.y = this.game.height;
		}

		//制造子弹
		if (count % 60 == 0) {
			var bullet = new Bullet(this);
			this.bullets.push(bullet);
		}
		count++;
		this.bullets.forEach(function(element, index) {
			element.update();
		});
		// if(frames - lastFrame > 60) {
		// 	var bullet = new Bullet(this);
		// 	this.bullets.push(bullet);
		// }
	}

	this.init();
}