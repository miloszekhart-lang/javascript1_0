function wypiszLiczby() {
  let str = "";

  for (let i = 0; i < 10; i++) {
    str += i;
    if (i < 9) {
      str += ', ';
    }
  }
  document.getElementById("ex1_content").innerHTML = str;
};

function validatePhoneNumber() {
  let number = document.getElementById("ex2_text").value;
  var regExp = /[a-zA-Z]/g;
  var specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (number.length != 9) {
    document.getElementById("ex2_content").innerHTML = "Długość numeru musi być równa 9";
  }
  else if (regExp.test(number)) {
    document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać liter";
  }
  else if (specialChar.test(number)) {
    document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać znaków specjalnych";
  }
  else {
    document.getElementById("ex2_content").innerHTML = "Numer telefonu jest poprawny";
  }
};