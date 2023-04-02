let startButton = document.querySelector(".startButton");
let fruits = [
	"./fruits/pineapple.jpg",
	"./fruits/apple.jpg",
	"./fruits/Banana.jpg",
	"./fruits/DragonFruit.jpg",
	"./fruits/guava.jpg",
	"./fruits/jujube.jpg",
	"./fruits/Kiwi.jpg",
	"./fruits/longan.jpg",
	"./fruits/mulberry.jpg",
	"./fruits/orange.jpg",
	"./fruits/papaya.jpg",
	"./fruits/Plum.jpg",
	"./fruits/raspberry.jpeg",
	"./fruits/Soursoup.jpg",
	"./fruits/sugarcane.jpg",
	"./fruits/watermelon.png",
];
let tiles = [];
let counter = document.querySelector(".counter");
let count = 0;
counter.innerText = "0 move";
startButton.addEventListener("click", gameStart);
let board = document.querySelector(".board");
tileCreator();
function tileCreator() {
	for (let i = 0; i <= 15; i++) {
		let randomNumber = Math.floor(Math.random() * 15);
		let tile = document.createElement("div");
		let tileFront = document.createElement("div");
		let tileBack = document.createElement("div");
		tile.className = "tile";
		tile.id = `${randomNumber}`;
		tileFront.className = "tileFront";
		tileBack.className = "tileBack";
		let Image = document.createElement("img");
		Image.src = fruits[randomNumber];
		Image.alt = "fruitNotFound";
		tileBack.appendChild(Image);
		tile.appendChild(tileFront);
		tile.appendChild(tileBack);
		board.appendChild(tile);
		tiles[i] = tile;
		if (tile.classList.contains("flipped") == false) {
			tiles[i].onclick = function game() {
				if (board.classList.contains("click-disabled") == false) {
					tile.classList.add("flipped");
					if (
						tile.classList.contains("flipped") == true &&
						tile.classList.contains("moveMade") == false
					) {
						tile.classList.add("moveMade");
						count += 1;
						counter.innerText = count > 1 ? `${count} moves` : `${count} move`;
						comparator(tile);
					}
				}
			};
		}
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
console.log(tiles);
function comparator(tile) {
	for (i = 0; i < tiles.length; i++) {
		if (tiles[i].classList.contains("flipped")) {
			tile.classList.add("flipped");
			if (tile.id !== tiles[i].id) {
				if (tiles[i].classList.contains("flipLocked") == false) {
				}
				setTimeout(function () {
					tile.classList.remove("flipped");
					tile.classList.remove("moveMade");
				}, 500);
			} else {
				// tiles[i].classList.add("flipLocked");
			}
		}
	}
}
