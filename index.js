const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector("audio");

const songList = [
  {
    path: "./audios/Ao_Olhar_pra_Cruz.mp3",
    songName: "Ao Olhar pra Cruz",
  },
  {
    path: "./audios/ART'TRIO_O_FILHO_DO_HOMEM.mp3",
    songName: "ART'TRIO O FILHO DO HOMEM",
  },
  {
    path: "./audios/ART'TRIO_PROMESSAS.mp3",
    songName: "ART'TRIO PROMESSAS",
  },
  {
    path: "./audios/Novo_Clipe_Etiene_Pires_Descansarei.mp3",
    songName: "Novo Clipe Etiene Pires Descansarei",
  },
];

let song_Playing = false;

function playSong() {
  song_Playing = true;
  audio.play();
  playPause.classList.add("active");

  // change icon
  playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

function pauseSong() {
  song_Playing = false;
  audio.pause();
  playPause.classList.remove("active");

  // change icon
  playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// play or pause song on click
playPause.addEventListener("click", () =>
  song_Playing ? pauseSong() : playSong()
);

// load song
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

// current song
let i = 0;

// on load - select first song from song list
loadSong(songList[i]);

// previous song
function prevSong() {
  i--;
  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i]);
  playSong();
}

prev.addEventListener("click", prevSong);

// next song
function nextSong() {
  i++;
  if (i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i]);
  playSong();
}

next.addEventListener("click", nextSong);
