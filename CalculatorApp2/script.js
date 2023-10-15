alert("Salam");
var display = document.querySelector(".display");
var buttons = document.querySelectorAll("button");
var specialChars = ["%", "*", "/", "-", "+", "="];
var output = "";
var calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
    alert("Are you sure..");
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
    }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});