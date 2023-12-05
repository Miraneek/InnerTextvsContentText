function getInnerText(element) {
    return element.innerText;
}

function getwTextContent(element) {
    return element.textContent;
}

// Výběr prvku
const button = document.querySelector("#button")
const result = document.querySelector("#result2")
const element = document.querySelector("#testElement")

function funkcePoKliknuti() {
    result.appendChild(vytvorElementsInnerText())
    result.appendChild(vytvorElementsContentText())
}

function vytvorElementsInnerText() {
    const div = document.createElement("div")
    div.classList.add("div")
    const innerText = document.createElement("h4")
    innerText.classList.add("inner")
    innerText.innerText = getInnerText(element)

    const h1 = document.createElement("h1")
    h1.innerText = "Nový Element 🌈"
    div.appendChild(h1)
    div.appendChild(innerText)
    return div
}

function vytvorElementsContentText() {
    const div = document.createElement("div")
    div.classList.add("div")
    const textContent = document.createElement("h4")
    textContent.textContent = getwTextContent(element)
    const h1 = document.createElement("h1")
    h1.innerText = "Nový Element 🌈"
    div.appendChild(h1)
    div.appendChild(textContent)
    return div
}

// Přidání funkce do eventu
button.addEventListener("click", funkcePoKliknuti)