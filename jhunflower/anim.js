// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "nal seuchineun geudae-ui yeoteun geu moksori", time: 1 },
  { text: "nae ireumeul han beonman deo bulleojuseyo", time: 7 },
  { text: "eoreobeorin noeul arae meomchwo seoitjiman", time: 12 },
  { text: "geudae hyanghae han georeumssik georeogallaeyo", time: 17 },
  { text: "Still with you", time: 23 },
  { text: "eoduun bang jomyeong hana eopsi", time: 46 },
  { text: "iksukaejimyeon an doeneunde", time: 51 },
  { text: "geuge tto iksukae", time: 54 },
  { text: "najimagi deullineun\ni e-eokeon sori", time: 56 },
  { text: "igeorado eopseumyeon\nna jeongmal muneojil geot gata", time: 61 },
  { text: "hamkke utgo hamkke ulgo", time: 67 },
  { text: "i dansunhan gamjeongdeuri\nnaegen jeonbuyeonna bwa", time: 73 },
  { text: "eonjejjeumilkka\ndasi geudael majuhandamyeon", time: 77 },
  { text: "nuneul bogo malhallaeyo\nbogo sipeosseoyo", time: 81 },
  { text: "hwangholhaetdeon gieok soge", time: 89 },
  { text: "na hollo chumeul chwodo biga naerijana", time: 93},
  { text: "i an-gaega geochil ttaejjeum", time: 99 },
  { text: "jeojeun ballo dallyeogal ge", time: 102 },
  { text: "geuttae nal anajwo", time: 105 },
  { text: "jeo dari oerowo boyeoseo", time: 122 },
  { text: "bamhaneure hwanhage ulgo inneun geot gataseo", time: 127 },
  { text: "eonjen-ga achimi oneun geol almyeonseodo", time: 133 },
  { text: "byeolcheoreom neoui haneure meomulgo sipeosseo", time: 138 },
  { text: "harureul geu sun-ganeul", time: 144 },
  { text: "ireoke doel geol aratdamyeon", time: 149 },
  { text: "deo damadwosseul tende", time: 152 },
  { text: "eonjejjeumilkka", time: 154 },
  { text: "dasi geudael majuhandamyeon", time: 157 },
  { text: "nuneul bogo malhallaeyo\nbogo sipeosseoyo", time: 160 },
  { text: "hwangholhaetdeon gieok soge", time: 165 },
  { text: "na hollo chumeul chwodo biga naerijana", time: 169 },
  { text: "i an-gaega geochil ttaejjeum", time: 175 },
  { text: "jeojeun ballo dallyeogal ge", time: 179 },
  { text: "geuttae nal jabajwo", time: 182 },
  { text: "nal baraboneun huimihan miso dwipyeone", time: 209 },
  { text: "areumdaun boratbicheul geuryeobollaeyo", time: 214 },
  { text: "seoro balgeoreumi an majeul sudo itjiman", time: 220 },
  { text: "geudaewa hamkke i gireul geotgo sipeoyo", time: 225 },
  { text: "Still with you", time: 231 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);