import { useEffect, useState } from "react";

function Pokemon() {
    const [pokeData, setPokeData] = useState([]);

    const fetchPokemon = async () => {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPokeData(data.results);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <>
            <h1>Pokemon</h1>
            {pokeData &&
                pokeData.map((pokemon) => (
                    <div key={pokemon.name}>
                        <p>{pokemon.name}</p>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
                            alt={`Pokemon ${pokemon.name}`}
                        />
                    </div>
                ))}
        </>
    );
}

export default Pokemon;