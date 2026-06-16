import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const container = document.body;

async function hentSaker() {

    const querySnapshot = await getDocs(collection(db, "hendelser"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        const div = document.createElement("div");

        div.classList.add("sak-kort")

        div.innerHTML = `
            <a href="detaljer.html?id=${doc.id}">Se sak</a>
            <hr>
            <p><b>Navn:</b> ${data.navn}</p>
            <p><b>Avdeling:</b> ${data.avdeling}</p>
            <p><b>Kategori:</b> ${data.kategori}</p>
            <p><b>Prioritet:</b> ${data.prioritet}</p>
            <p><b>Status:</b> ${data.status}</p>
            <p><b>Beskrivelse:</b> ${data.beskrivelse}</p>
        `;

        container.appendChild(div);
    });
}

hentSaker();