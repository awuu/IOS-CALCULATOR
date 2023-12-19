const buttons = document.querySelectorAll("button");
let wynik = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue === "AC") {
      document.getElementById("wynik").textContent = "00000000000";
      wynik = "";
    } else if (buttonValue === "=") {
      wynik = eval(wynik);
    } else {
      wynik += buttonValue;
    }

    document.getElementById("wynik").textContent = wynik;
  });
});