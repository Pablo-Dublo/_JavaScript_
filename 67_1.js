document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("input[type='button']").onclick = function () {
    let imie = document.querySelector("input[name='imie']").value;
    document.querySelector("#imie").innerHTML = imie;
    document.querySelector("#error_imie").innerHTML = "";

    if (imie == "") {
      document.querySelector("#error_imie").innerHTML = "Błąd!";
    }

    let nazwisko = document.querySelector("input[name='nazwisko']").value;
    document.querySelector("#nazwisko").innerHTML = nazwisko;
    document.querySelector("#error_nazwisko").innerHTML = "";

    if (nazwisko == "") {
      document.querySelector("#error_nazwisko").innerHTML = "Błąd!";
    }

    let miasto = document.querySelector("select[name='miasto']").value;
    document.querySelector("#miasto").innerHTML = miasto;
    document.querySelector("#error_miasto").innerHTML = "";

    if (miasto == "") {
      document.querySelector("#error_miasto").innerHTML = "Błąd!";
    }

    let technologie = document.querySelectorAll("input[type='checkbox']");
    let tabZnaneTechnologie = [];
    let zaznaczono1 = false;
    for (let x of technologie) {
      if (x.checked) {
        tabZnaneTechnologie.push(x.value);
        zaznaczono1 = true;
      }
    }

    if (zaznaczono1 == false) {
      document.querySelector("#error_technologia").innerHTML = "Błąd!";
    } else {
      document.querySelector("#error_technologia").innerHTML = "";
      document.querySelector("#technologie").innerHTML = tabZnaneTechnologie;
    }

    let stanowisko = document.querySelectorAll("input[type='radio']");
    let wybraneStanowisko;
    let zaznaczono2 = false;
    for (let x of stanowisko) {
      if (x.checked) {
        wybraneStanowisko = x.value;
        zaznaczono2 = true;
      }
    }

    if (zaznaczono2 == false) {
      document.querySelector("#error_stanowisko").innerHTML = "Błąd!";
    } else {
      document.querySelector("#error_stanowisko").innerHTML = "";
      document.querySelector("#stanowisko").innerHTML = wybraneStanowisko;
    }

    let textarea = document.querySelector("textarea").value;
    document.querySelector("#uwagi").innerHTML = textarea;
  };
});
