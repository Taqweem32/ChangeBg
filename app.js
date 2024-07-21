function changebg() {
  let colorCode = Math.floor(Math.random() * 17898213).toString(16);
  colorCode = colorCode.padStart(6, "0");
  let colorbg = `#${colorCode}`;

  console.log(colorCode);
  console.log(colorbg);
  document.body.style.backgroundColor = colorbg;
}
let Btn = document.getElementById("btn");
Btn.addEventListener("click", changebg);
