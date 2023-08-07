import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "../../atoms/box";
import { Text } from "../../atoms/text";

interface IProps {
  pokemon?: string;
}

interface PokemonDetalhes {
  front_default: string;
  types: { slot: number; type: { name: string; url: string } }[];
}

export const Sprite: React.FC<IProps> = (props) => {
  const [detailedPokemonList, setDetailedPokemonList] = useState<PokemonDetalhes>();

  const typeColors: { [key: string]: string } = {
    bug: "#1c4b27",
    dark: "#131313",
    dragon: "#62cad9",
    electric: "#fafa72",
    fairy: "#e91368",
    fighting: "#ef6239",
    fire: "#fd4b5a",
    flying: "#94b2c7",
    ghost: "#906791",
    grass: "#27cb50",
    ground: "#6e491f",
    ice: "#d8f0fa",
    normal: "#ca98a6",
    poison: "#9b69da",
    psychic: "#f71d92",
    rock: "#8b3d21",
    steel: "#43bc94",
    water: "#85a8fb",
    // adicione mais tipos e suas cores aqui
  };

  const fontColor: { [key: string]: string } = {
    bug: "softpurple",
    dark: "softpurple",
    dragon: "black",
    eletric: "black",
    fairy: "softpurple",
    fighting: "black",
    fire: "softpurple",
    flying: "black",
    ghost: "softpurple",
    grass: "black",
    ground: "softpurple",
    ice: "black",
    normal: "black",
    poison: "softpurple",
    psychic: "softpurple",
    rock: "softpurple",
    steel: "softpurple",
    water: "softpurple",
    // adicione mais tipos e suas cores aqui
  };

  useEffect(() => {
    const fetchDetailedPokemon = async () => {
      try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`);
          const paginationData = response.data;
          const { sprites, types } = paginationData;
        
        setDetailedPokemonList({ front_default: sprites.front_default, types });
      } catch (error) {
        console.error('Erro ao buscar detalhes dos Pokémon:', error);
      }
    };
    fetchDetailedPokemon();
  }, [props.pokemon]);

  return (
    <>
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      flexDirection="column"
      >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {detailedPokemonList?.types.map((typeData, key) => (
          <Box
            key={key}
            minWidth="70px" 
            bg={typeColors[typeData.type.name]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            margin="0 3px"
            padding="3px 0"
            borderRadius="5px"
          >
            <Text color={fontColor[typeData.type.name]}>
              {typeData.type.name}
            </Text>
          </Box>
        ))}
      </Box>
      <img src={detailedPokemonList?.front_default} alt="" width="96px" height="96px"/>
    </Box>
    </>
  );
};
