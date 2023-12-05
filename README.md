### 1. Rozdíl mezi `innerText` a `textContent`

Vaším úkolem je vytvořit jednoduchý experiment, aby jste porovnali rozdíly mezi `innerText` a `textContent` v JavaScriptu.

Co potřebujete:

Použijte následující HTML strukturu:

```jsx
<div id="testElement">
    Toto je <strong>testovací</strong> element.<br>
    <span>Má i nějaké <em>HTML značky</em> uvnitř.</span>
</div>

<div id="result">
    <!-- Zde se zobrazí výsledky -->
</div>
```

1. **Vytvořte Funkce v JavaScriptu:**
    - Naprogramujte dvě funkce - jednu pro získání a zobrazení **`innerText`** a druhou pro **`textContent`** elementu s ID **`testElement`**.
    - Tyto funkce by měly výsledek zobrazit v elementu s ID **`result`**.
2. **Porovnejte Výstupy:**
    - Spusťte obě funkce a pozorujte, jak se výstup liší. Zaměřte se na to, jak **`innerText`** a **`textContent`** zachází s HTML značkami a formátováním textu.

### 2. Přidávání elemetů do DOMU

**Vytvoření Struktury HTML:**

- Vytvořte základní HTML strukturu s jedním prázdným **`<div>`** elementem. Označte tento **`<div>`** pomocí ID "container".
- Přidejte **`<button>`** element, který bude sloužit k spuštění JavaScriptové funkce. Tlačítko označte textem "Přidej Element 🚀

```jsx
// Výběr prvku
const button = document.querySelector("vaše logika")

// Název funkce do eventu (tady bude vaše logika)
function funkcePoKliknuti() {
  document.write("ahoj")
}

// Přidání funkce do eventu
button.addEventListener("click", funkcePoKliknuti)
```

**JavaScript - Vytváření a Přidávání Elementů:**

- Ve vaší funkci vytvořte nový **`<div>`** element.
- Každému novému **`<div>`** elementu přiřaďte náhodnou barvu pozadí a text "Nový Element 🌈".
- Přidejte tento nový element do elementu  s "container" id.

**Stylizace**

- Použijte CSS pro zvýraznění nově přidaných elementů, například nastavením ohraničení nebo marginů.

**Bonus:**

- Přidejte funkci, která umožňuje uživatelům odstranit elementy z "container" kliknutím na ně.
