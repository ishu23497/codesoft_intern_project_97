let disp = document.getElementById("display");

function addToDisplay(val) {
  disp.value += val;
}

function clr() {
  disp.value = "";
}

function del() {
  disp.value = disp.value.slice(0, -1);
}

function calculate() {
  try {
    disp.value = eval(disp.value);
  } catch {
    disp.value = "Error";
  }
}