// Definera array av namn
let people = ['Mia', 'Anna', 'Klas']


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const nameInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultDisplay = document.getElementById('resultDisplay')

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
  let name = nameInput.value;
    // 2. Skapa en boolean för found
  let found = false
    // 3. Loopa igenom people-arrayen
  for (let i = 0; i < people.length ; i++) {
    // 4. Jämför texten med varje namn i arrayen
    if (name === people[i]) { 
    found = true
    }
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    if (found === true) {
      resultDisplay.textContent = `Namn hittades: ${name}`}
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
      else {
        resultDisplay.textContent = "Namn hittades inte.";
       let found = false;
      }
    }
  }
    );
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});