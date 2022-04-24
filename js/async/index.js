function fetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log('+++++++++++++++++++++++++++++++++++++++++++++');
            console.log("fetchData('https://pokeapi.co/api/v2/pokemon/42');");
            console.log(data);
            console.log('');
        })
        .catch((err) => {
            console.error('fetch failed', err);
        });
}
fetchData('https://pokeapi.co/api/v2/pokemon/42');

const fetchPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();
        console.log('+++++++++++++++++++++++++++++++++++++++++++++');
        console.log('fetchPokemon(36);');
        console.log(pokemonData);
        console.log('');
    } catch (error) {
        console.log('ERROR');
        console.log(error);
    }
};
fetchPokemon(36);

const fetchPokemonUrlId = async (url, id) => {
    try {
        const response = await fetch(url + id);
        const pokemonData = await response.json();
        console.log('+++++++++++++++++++++++++++++++++++++++++++++');
        console.log("fetchPokemonUrlId('https://pokeapi.co/api/v2/pokemon/', 20);");
        console.log(pokemonData);
        console.log('');
    } catch (error) {
        console.log('ERROR');
        console.log(error);
    }
};
fetchPokemonUrlId('https://pokeapi.co/api/v2/pokemon/', 20);
