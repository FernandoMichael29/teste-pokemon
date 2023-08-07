import { Box } from "../../atoms/box";
import { Grid, Modal } from "@mui/material";
import { Sprite } from "../sprite";
import { Text } from "../../atoms/text";
import { useEffect, useState } from "react";
import { PokeInfo } from "../pokeInfo";
import { StarFillIcon, StarIcon } from "../../../css/icons";

interface Pokemon {
  name: string;
  url: string;
}

interface IProps {
  pokemonList: Pokemon[];
  chosenPokemon: string;
  showFavoritos: boolean;
}

interface Favoritos {
  [key: string]: boolean;
}

export const PokemonCard: React.FC<IProps> = (props) => {
  const [pokeModal, setPokeModal] = useState<string | undefined>();
  const [favoritos, setFavoritos] = useState<Favoritos>(() => {
    // Recuperar a lista de favoritos do Local Storage ao carregar a página
    const storedFavoritos = localStorage.getItem('favoritos');
    return storedFavoritos ? JSON.parse(storedFavoritos) : {};
  });

  const [open, setOpen] = useState(false);
  const handleOpen = (pokeModalInfo?: string) => {
    setOpen(true);
    setPokeModal(pokeModalInfo);
  };
  const handleClose = () => setOpen(false);

  const pokemonStar = (pokemonName: string) =>{
    setFavoritos((prevState) => {
      const updatedFavoritos = { ...prevState };
      if (prevState[pokemonName]) {
        delete updatedFavoritos[pokemonName];
      } else {
        updatedFavoritos[pokemonName] = true;
      }
      return updatedFavoritos;
    });
  };

  const filteredPokemonList = props.showFavoritos
    ? props.pokemonList.filter((pokemon: Pokemon) => favoritos[pokemon.name])
    : props.pokemonList;

  useEffect(() => {
    // Salvar a lista de favoritos no Local Storage sempre que ela for atualizada
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <>
      <Grid container spacing={1} marginBottom="20px" justifyContent="center">
        {props.chosenPokemon ? (
          <Grid item xs={3} display="flex" justifyContent="center">
            <Box
              bg="neutral2"
              width="200px"
              height="220px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              marginX="10px"
              flexDirection="column"
              marginBottom="20px"
              borderRadius="10px"
              onClick={() => handleOpen(props.chosenPokemon)}
            >
              <Sprite pokemon={props.chosenPokemon} />
              <Text marginBottom="10px">{props.chosenPokemon}</Text>
            </Box>
            <Box cursor="pointer" onClick={() => pokemonStar(props.chosenPokemon)}>
                {favoritos[props.chosenPokemon] ? <StarFillIcon color="#ffa500" /> : <StarIcon />}
              </Box>
          </Grid>
        ) : (
          filteredPokemonList.map((pokemon: Pokemon, key: number) => (
            <Grid item xs={3} display="flex" justifyContent="center" key={key}>
              <Box
                cursor="pointer"
                bg="neutral2"
                width="200px"
                height="220px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                marginX="10px"
                flexDirection="column"
                marginBottom="20px"
                borderRadius="10px"
                onClick={() => handleOpen(pokemon.name)}
              >
                <Sprite pokemon={pokemon.name} />
                <Text marginBottom="10px">{pokemon.name}</Text>
              </Box>
              <Box cursor="pointer" onClick={() => pokemonStar(pokemon.name)}>
                {favoritos[pokemon.name] ? <StarFillIcon color="#ffa500" /> : <StarIcon />}
              </Box>
            </Grid>
          ))
        )}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          padding="20px"
          top="50%"
          left="50%"
          display="flex"
          borderRadius="5px"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          bg="white"
          width="800px"
          height="600px"
          transform="translate(-50%, -50%)"
          boxShadow="0 4px 4px rgba(0, 0, 0, 0.25);"
        >
          <PokeInfo pokemon={pokeModal} />
        </Box>
      </Modal>
    </>
  );
};
