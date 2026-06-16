import { db } from "./firebase.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.body;

async function hentSak() {

    const docRef = doc(db, "hendelser", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const data = docSnap.data();

        container.innerHTML = `
            <a href="index.html?id=${doc.id}">tilbake</a>
            <h2>Sak detaljer</h2>
            <p>${data.beskrivelse}</p>
            <p>Status: <span id="statusText">${data.status}</span></p>

            <select id="statusSelect">
                <option>Åpen</option>
                <option>Under behandling</option>
                <option>Løst</option>
                <option>Lukket</option>
            </select>

            <button id="updateBtn">Oppdater status</button>
        `;

        document.getElementById("updateBtn").addEventListener("click", async () => {

            const nyStatus = document.getElementById("statusSelect").value;

            await updateDoc(docRef, {
                status: nyStatus
            });

            document.getElementById("statusText").innerText = nyStatus;

            alert("Oppdatert!");
        });

    } else {
        container.innerHTML = "Fant ikke sak";
    }
}

hentSak();