const zeljeniBroj = Math.floor((Math.random() * 10) + 1);
const poruka = document.getElementById("message");
let brojPokusaja = 3;
localStorage.setItem("brojPokusaja", "3");
const unosBroja = document.getElementById("guess");
const preostaliBrPokusaja = document.getElementById("brPokusaja");
const submitButton = document.getElementById("submitButton");
const ukupanBrojNeuspelihPokusaja = localStorage.getItem("brNeuspelihPokusaja");
/*
localStorage.removeItem("brojPokusaja");
localStorage.removeItem("brNeuspelihPokusaja");
*/

function prikaziPoruku(poruka) {
    document.getElementById("message").textContent = poruka;
}

function ucitajPonovo() {
    setTimeout(function () {
        location.reload();
    }, 2000);
}

unosBroja.addEventListener("input", (e) => {
	const value = +e.target.value;

	if (!Number.isInteger(value)) {
        console.log(value);
        prikaziPoruku("Molim te unesi ceo broj!");
        poruka.style.color = "red";
        submitButton.disabled = true;
    } else {
        if (value < 1 || value > 10) {
            prikaziPoruku("Molim te unesi broj od 1 do 10!");
            poruka.style.color = "red";
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
            prikaziPoruku("");
        }
    }
});

function proveraBroja() {
    const unetiBroj = parseFloat(document.getElementById("guess").value);
            if (unetiBroj === zeljeniBroj) {
                prikaziPoruku("Bravo, pogodio si.");
                poruka.style.color = "grey";
                ucitajPonovo();
            } else {
                brojPokusaja--;
                localStorage.setItem("brojPokusaja",brojPokusaja);
                preostaliBrPokusaja.style.color="red";
                preostaliBrPokusaja.textContent=`Preostali broj pokusaja: ${brojPokusaja}`;
                if (brojPokusaja > 0) {
                    prikaziPoruku(`Nisi pogodio.`);
                    poruka.style.color = "red";
                } else {
                    prikaziPoruku(`Potrošio si sve pokušaje. Traženi broj je bio ${zeljeniBroj}.`);
                    localStorage.setItem("brNeuspelihPokusaja",+ukupanBrojNeuspelihPokusaja+1);
                    poruka.style.color = "red";
                    ucitajPonovo();
                }
            }
}
