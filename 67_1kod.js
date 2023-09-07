document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("input[type='button']").onclick = function () {
    let imie = document.querySelector("input[name='imie']").value;

    document.querySelector("#error_imie").innerHTML = "";
    if (imie == "") {
      document.querySelector("#error_imie").innerHTML = "błąd!";
    }

    let tabTech = document.querySelectorAll("input[type='checkbox']");
    let zaznaczono = false;
    for (let x of tabTech) {
      if (x.checked == true) {
        zaznaczono = true;
      }
    }

    if (zaznaczono == false) {
      document.querySelector("#error_technologia").innerHTML = "Błąd!";
    } else {
      document.querySelector("#error_technologia").innerHTML = "";
    }
  };
});
