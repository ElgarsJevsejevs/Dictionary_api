const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search_button");
const synonym_id = document.getElementById("synonyms_container")

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input_word").value;
    fetch(`${url}${inpWord}`)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `<div class="heading">
        <h1>${inpWord}</h1>
        <button id="go" onclick="playSound()"><img src="Go.png" id="go_img"></button>
    </div>
    <div class="details">
        <p id="rephrase">${data[0].phonetics[1]?.text || data[0].phonetics[0]?.text || ""}</p>
        <h3>${data[0].meanings[0]?.partOfSpeech}</h3>
        <p id="meaning">Meaning</p>
        <ul>
                ${data[0].meanings[0]?.definitions[0]?.definition ? `<li>${data[0].meanings[0]?.definitions[0]?.definition}</li>` : ""}
                ${data[0].meanings[0]?.definitions[1]?.definition ? `<li>${data[0].meanings[0]?.definitions[1]?.definition}</li>` : ""}
                ${data[0].meanings[0]?.definitions[2]?.definition ? `<li>${data[0].meanings[0]?.definitions[2]?.definition}</li>` : ""}
          </ul>
            <div id="synonyms_container" style="${data[0].meanings[0].synonyms[0] ? "" : "display: none;"}">
            <p id="synonym_id">Synonyms</p>
            <p id="synonym_id2">${data[0].meanings[0].synonyms[0] || ""}</p>
            </div>
        </div>
        <div class="details2">
            <h3>${data[0].meanings[1]?.partOfSpeech || ""}</h3>
            ${data[0].meanings[1]?.definitions[0].definition ? `<p id="meaning">Meaning</p>` : ""}
            <ul>
            ${data[0].meanings[1]?.definitions[0].definition ? `<li>${data[0].meanings[1]?.definitions[0].definition}</li>` : ""}
            ${data[0].meanings[1]?.definitions[0]?.example ? `<p id="expmple_p">"${data[0].meanings[1]?.definitions[0]?.example || ""}"</p>` : ""}
            </ul>
            <div class="source_container">
            ${data[0].sourceUrls[0] ? `<p id="source_id">Source</p>` : ""}
            <a href="" id="source_link">${data[0].sourceUrls[0]}</a>
            </div>`;
            sound.setAttribute("src", `${data[0].phonetics[2]?.audio || data[0].phonetics[1]?.audio || data[0].phonetics[0]?.audio || data[0].phonetics[4]?.audio || data[0].phonetics[5]?.audio || data[0].phonetics[6]?.audio || data[0].phonetics[7]?.audio || ""}`);
        })
        .catch( () => {
            result.innerHTML = `<h3>Cant find!</h3>`
        })
})
function playSound(){
    sound.play();
}
function darkMode() {
    const body = document.body;
    const mainContainer = document.querySelector(".main_container")
    const mainContainer2 = document.querySelector(".main_container2")
    const inputContainer = document.querySelector(".font_name")
    const inputWord = document.getElementById("input_word")

    
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
    mainContainer.classList.toggle("light-mode");
    mainContainer.classList.toggle("dark-mode");
    mainContainer2.classList.toggle("light-mode");
    mainContainer2.classList.toggle("dark-mode");
    inputContainer.classList.toggle("light-mode");
    inputContainer.classList.toggle("dark-mode");
    inputWord.classList.toggle("light-mode")
    inputWord.classList.toggle("dark-mode")


}
function changeText() {
    const selectEle = document.getElementsByClassName("font_name");
    const selectFont = selectEle[0].value;

    document.body.style.fontFamily = selectFont;

}