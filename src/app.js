import "bootstrap";
import "./style.css";

const excuses = [
  "Mi gato Oreo organizó una fiesta privada en mi teclado.",
  "Mi vecino del 6º contrató un ninja que borró todos mis archivos.",
  "Thanos utilizó la gema de la realidad contra mí y desvió mi concentración.",
  "Mi venus atrapamoscas se comió mi USB con todos los archivos.",
  "El anarquista de mi gato aprendió a teclear y reescribió todo el proyecto.",
  "Mi fibra entró en huelga indefinida y me dejó sin internet.",
  "Whiss me lanzó un hechizo de procrastinación.",
  "La Fuerza me habló y me dijo que descansara todo el día.",
  "Un grupo de hormigas inteligentes liderado por el Monarca de las Sombras robó mi código fuente.",
  "Me ofrecieron la varita de saúco a cambio de mis commits.",
  "El botón de guardar se enamoró de otro proyecto y no guardó el mío.",
  "Un pingüino me pidió ayuda con su startup (anti-Batman)."
];

function generateExcuse() {
  const idx = Math.floor(Math.random() * excuses.length);
  return excuses[idx];
}

function renderExcuse() {
  const el = document.getElementById("excuse");
  if (el) el.innerText = generateExcuse();
}

window.onload = () => {
  renderExcuse();
  const btn = document.getElementById("new-excuse");
  if (btn) btn.addEventListener("click", renderExcuse);
};
