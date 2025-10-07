function wypiszLiczby() {
  let str = "";

  for (let i = 0; i < 10; i++) {
    str += i;
    if (i < 9) {
      str += ', ';
    }
  }
  document.getElementById("liczby").innerHTML = str;
};