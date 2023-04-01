let startButton = document.querySelector(".startButton");
let counter = document.querySelector(".counter");
let count = 0;
counter.innerText = "0 moves";
startButton.addEventListener("click", gameStart);
let board = document.querySelector(".board");
tileCreator();
function tileCreator() {
	for (let i = 1; i <= 16; i++) {
		let tile = document.createElement("div");
		let tileFront = document.createElement("div");
		let tileBack = document.createElement("div");
		tile.className = "tile";
		tileFront.className = "tileFront";
		tileBack.className = "tileBack";
		let Image = document.createElement("img");
		Image.src = "./pineapple.jpg";
		Image.alt = "fruit";
		tileBack.appendChild(Image);
		tile.appendChild(tileFront);
		tile.appendChild(tileBack);
		board.appendChild(tile);
		tile.onclick = function () {
			if (board.classList.contains("click-disabled") == false) {
				tile.classList.toggle("flipped");
				count += 1;
				counter.innerText = count > 1 ? `${count} moves` : `${count} move`;
			}
		};
	}
}
function gameStart() {
	board.className = "board";
	startButton.style = "background-color:darkgrey; color: grey";
	startButton.removeEventListener("click", gameStart);
	let timer = document.querySelector("#elapsed-time");
	let startTime = 0;
	startTime = new Date().getTime();
	setInterval(function () {
		const currentTime = new Date().getTime();
		const elapsedTime = (currentTime - startTime) / 1000;
		timer.innerText = Math.round(elapsedTime);
	}, 1000);
}
