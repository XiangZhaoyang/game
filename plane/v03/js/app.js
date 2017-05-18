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
	
	pages.p1.onstart=startGame;
}

function startGame(){
	pages.p1.hide();
	pages.p2.show();
}

window.addEventListener("DOMContentLoaded", main);