import { Box } from "../../atoms/box";
import { Grid, Modal } from "@mui/material";
import { Sprite } from "../sprite";
import { Text } from "../../atoms/text";
import { useState } from "react";
import { PokeInfo } from "../pokeInfo";

interface Pokemon {
  name: string;
  url: string;
}

interface IProps {
  pokemonList: Pokemon[];
  chosenPokemon?: string;
}

export const PokemonCard: React.FC<IProps> = (props) => {
  const [pokeModal, setPokeModal] = useState<string | undefined>();

  const [open, setOpen] = useState(false);
  const handleOpen = (pokeModalInfo?: string) => {
    setOpen(true);
    setPokeModal(pokeModalInfo);
  };
  const handleClose = () => setOpen(false);

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
          </Grid>
        ) : (
          props.pokemonList.map((pokemon, key) => (
            <Grid item xs={3} display="flex" justifyContent="center">
              <Box
                key={key}
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
