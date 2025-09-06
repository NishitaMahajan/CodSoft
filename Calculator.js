let expr = "";
const display = document.getElementById("display");
document.querySelectorAll(".button, .buttonone").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const key = e.target.textContent;

    if (key === "=") {
      try {
        expr = String(eval(expr));
        display.value = expr;
      } catch {
        display.value = "Error";
        expr = "";
      }
    } else if (key === "C") {
      expr = "";
      display.value = "";
    } else {
      expr += key;
      display.value = expr;
    }
  });
});
