function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja() {
  const clients = ["Mango", "Poly", "Ajax"];
  const clientNameToFind = "Poly";
  let message;

  for (const client of clients) {
    if (client === clientNameToFind) {
      message = "Klient z takim imieniem jest w bazie danych!";
    }

    message = "Nie znaleźliśmy klienta w bazie danych!";
  }
  console.log(message);
}
