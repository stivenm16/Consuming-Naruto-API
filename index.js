const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let narutoCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = narutoCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const response = await fetch('https://naruto-api.herokuapp.com/api/v1/characters');
        narutoCharacters = await response.json();
        displayCharacters(narutoCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>${character.info.Sexo}</p>
                <p>${character.info.Ocupação}</p>
                <p>${character.info.Afiliação}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();



















