fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        const characters = data.results;
        const tableBody = document.querySelector("#characterTable tbody");
        characters.forEach((character) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = character.name;
            row.appendChild(nameCell);

            const statusCell = document.createElement("td");
            statusCell.textContent = character.status;
            row.appendChild(statusCell);

            const speciesCell = document.createElement("td");
            speciesCell.textContent = character.species;
            row.appendChild(speciesCell);

            tableBody.appendChild(row);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
