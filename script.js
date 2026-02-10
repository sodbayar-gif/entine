const myMemories = [
    { src: "a.jpeg", caption: "Бидний анх танилцсан мөч... ✨" },
    { src: "img2.JPG", caption: "Бидний дуртай газар ☕" },
    { src: "img3.JPG", caption: "Чиний энэ инээмсэглэл хамгийн гоё нь 😍" },
    { src: "img4.JPG", caption: "Үүрд хамтдаа ♾️" }
];

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gallery = document.getElementById('gallery');
const grid = document.getElementById('grid');
const gameOverlay = document.getElementById('gameOverlay');
const puzzleBoard = document.getElementById('puzzleBoard');

let noClickCount = 0;
const noMessages = ["really? 🥺", "so you press it again", "zss", "araicde", "im so offended💔"];

noBtn.addEventListener('click', () => {
    if (noClickCount < 5) {
        noBtn.innerText = noMessages[noClickCount];
        noBtn.classList.add('shake');
        setTimeout(() => noBtn.classList.remove('shake'), 400);
        
        let currentScale = 1 + (noClickCount * 0.2);
        yesBtn.style.transform = `scale(${currentScale + 0.2})`;
        noClickCount++;
    } else {
        noBtn.innerText = "ugaasaa ci tatgalzaj cadku 💕";
        noBtn.style.background = "linear-gradient(135deg, #ff4d6d, #c9184a)";
        noBtn.style.color = "white";
        noBtn.onclick = handleYes; 
    }
});

function handleYes() {
    grid.innerHTML = "";
    myMemories.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'photo-item';
        div.innerHTML = `<img src="${item.src}"><p class="photo-caption">${item.caption}</p>`;
        grid.appendChild(div);
    });
    gallery.classList.remove('hidden');
}

yesBtn.addEventListener('click', handleYes);

// Puzzle Logic
let tiles = [];
function initGame() {
    tiles = [...Array(16).keys()];
    tiles.sort(() => Math.random() - 0.5);
    renderBoard();
}

function renderBoard() {
    puzzleBoard.innerHTML = '';
    tiles.forEach((tile, i) => {
        const div = document.createElement('div');
        div.className = 'tile' + (tile === 0 ? ' empty' : '');
        div.innerText = tile === 0 ? '' : tile;
        div.onclick = () => moveTile(i);
        puzzleBoard.appendChild(div);
    });
}

function moveTile(i) {
    const empty = tiles.indexOf(0);
    const isAdjacent = [i-1, i+1, i-4, i+4].includes(empty);
    if (isAdjacent) {
        [tiles[i], tiles[empty]] = [tiles[empty], tiles[i]];
        renderBoard();
        if (tiles.slice(0, 15).every((t, idx) => t === idx + 1)) {
            document.getElementById('winMessage').classList.remove('hidden');
        }
    }
}

document.getElementById('gameBtn').onclick = () => { gameOverlay.classList.remove('hidden'); initGame(); };
document.getElementById('closeX').onclick = () => gallery.classList.add('hidden');
document.getElementById('closeBtn').onclick = () => gallery.classList.add('hidden');
document.getElementById('closeGame').onclick = () => gameOverlay.classList.add('hidden');
