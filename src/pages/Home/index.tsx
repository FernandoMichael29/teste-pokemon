import { useEffect, useState } from "react";
import { Body } from "../../component/atoms/body";
import axios from "axios";
import { Box } from "../../component/atoms/box";
import { PokemonCard } from "../../component/moleculas/pokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export const Home: React.FC = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Função assíncrona para fazer a requisição da API
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const paginationData = response.data;
        const { results } = paginationData;
        setPokemonList(results);
      } catch (error) {
        console.error('Erro ao buscar o Pokémon:', error);
      }
    };

    // Chama a função para fazer a requisição da API assim que o componente é montado
    fetchPokemon();
  }, []);

  return (
    <>
      <Body
        bg="softpurple"
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box 
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="80%"
          minHeight="100vh"
          marginY="50px"
        >
          <PokemonCard pokemonList={pokemonList}/>
        </Box>
        
      </Body>
    </>
  );
};