//全局变量
var pages = {};

function main() {
	pages.p0 = new LoadingPage();
	pages.p1 = new StartPage();
	pages.p2 = new GamePage();

	pages.p0.onover = enterStartPage;
	pages.p0.load();

}

function enterStartPage() {
	pages.p0.hide();
	pages.p1.show();

	pages.p1.onstart = startGame;
}

function startGame() {
	//创建游戏
	window.game = new Game();

	pages.p1.hide();
	pages.p2.show();

	//开始游戏
	game.start();
}

window.addEventListener("DOMContentLoaded", main);


//取消默认不需要的事件
function cancel(e){
	//取消默认操作
	e.preventDefault();
	
	//停止事件冒泡传递
	e.stopPropagation();
}
document.addEventListener("contextmenu", cancel);
document.addEventListener("selectstart", cancel);

