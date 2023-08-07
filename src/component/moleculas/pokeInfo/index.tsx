import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "../../atoms/box";
import { Sprite } from "../sprite";
import { Text } from "../../atoms/text";

interface IProps {
  pokemon?: string;
}

interface PokemonDetalhes {
  front_default: string;
  types: { slot: number; type: { name: string; url: string } }[];
}

export const PokeInfo: React.FC<IProps> = (props) => {
  const [detailedPokemonList, setDetailedPokemonList] = useState<PokemonDetalhes>();

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
        <Sprite pokemon={props.pokemon}/>
        <Text marginBottom="10px">{props.pokemon}</Text>
      </Box>
    </>
  );
};
