import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const btn = document.getElementById("saveBtn");

btn.addEventListener("click", async () => {

    const navn = document.getElementById("navnInput").value;
    const avdeling = document.getElementById("AvdelingInput").value;
    const kategori = document.getElementById("KategoriInput").value;
    const prioritet = document.getElementById("PrioritetInput").value;
    const beskrivelse = document.getElementById("BeskrivelseInput").value;

    if (!navn || !avdeling || !kategori || !prioritet || !beskrivelse) {
        alert("Fyll ut alle feltene");
        return;
    }

    await addDoc(collection(db, "hendelser"), {
        navn,
        avdeling,
        kategori,
        prioritet,
        beskrivelse,
        status: "Åpen",
        opprettet: new Date()
    });

    alert("Sak registrert!");
});