import { Box } from "../../atoms/box";
import { Grid } from "@mui/material";
import { Sprite } from "../sprite";
import { Text } from "../../atoms/text";

interface Pokemon {
    name: string;
    url: string;
}

interface IProps {
    pokemonList: Pokemon[];
}

export const PokemonCard: React.FC<IProps> = (props) => {

  return (
    <>
        <Grid container spacing={1} marginBottom="20px">
            {props.pokemonList.map((pokemon, key) =>     
                <Grid 
                    item xs={3}
                    display="flex"
                    justifyContent="center"
                >
                    <Box 
                        key={key}
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
                    >
                        <Sprite pokemon={pokemon.name} />
                        <Text marginBottom="10px">
                            {pokemon.name}
                        </Text>
                    </Box>
                </Grid>
            )}
        </Grid>
    </>
  );
};
