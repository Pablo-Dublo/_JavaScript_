document.addEventListener("DOMContentLoaded", function () {
  wyswietl();
  document.querySelector("#dodaj").onclick = function () {
    dodaj();
  };
  // document.querySelector("dodaj").addEventListener("click", funkcion(){
  //     alert("kliknięto");
  // }
});

class Kontakt {
  constructor(imie, nazwisko, telefon) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.telefon = telefon;
  }
}

dodaj = () => {
  let imie = document.querySelector("#imie").value;
  let nazwisko = document.querySelector("#nazwisko").value;
  let telefon = document.querySelector("#telefon").value;

  //   let kontakt = new Kontakt(imie, nazwisko, telefon);
  //   let kontaktStr = JSON.stringify(kontakt);
  //   localStorage.setItem("KT", kontaktStr);

  let tab;
  if (localStorage.getItem("KT") == null) {
    tab = [];
  } else {
    let tabStr = localStorage.getItem("KT");
    tab = JSON.parse(tabStr);
  }

  let kontakt = new Kontakt(imie, nazwisko, telefon);
  tab.push(kontakt);

  let tabStr = JSON.stringify(tab);
  localStorage.setItem("KT", tabStr);

  wyswietl();
};

wyswietl = () => {
  let html = "";

  let tabStr = localStorage.getItem("KT");
  let tab = JSON.parse(tabStr);
  if (tab != null) {
    tab.forEach((x, i) => {
      html += "<p>";
      html += `Imię: ${x.imie} Nazwisko: ${x.nazwisko} Telefon: ${x.telefon}`;
      html += `<a href="#" onClick="usun(${i})">usun</a>`;
      html += "</p>";
    });
  }
  document.querySelector("#listaKontaktow").innerHTML = html;
};

usun = (index) => {
  // console.log(index);
  let tabStr = localStorage.getItem("KT");
  let tab = JSON.parse(tabStr);
  tab.splice(index, 1);

  tabStr = JSON.stringify(tab);
  localStorage.setItem("KT", tabStr);
  wyswietl();
};
