window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let painting = false;

  function startingPosition(e) {
    painting = true;
    draw(e)
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (painting) return;
    ctx.lineWidth = parseFloat(document.getElementById("input2").value);
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = document.getElementById("input").value;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  canvas.addEventListener("mousedown", startingPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
