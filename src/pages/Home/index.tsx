import { useEffect, useState } from "react";
import { Body } from "../../component/atoms/body";
import axios from "axios";
import { Box } from "../../component/atoms/box";
import { PokemonCard } from "../../component/moleculas/pokemonCard";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { toast } from 'react-toastify';
import { ScrollToTopButton } from "../../component/moleculas/scrollToTop";

interface Pokemon {
  name: string;
  url: string;
}

export const Home: React.FC = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [chosenPokemon, setChosenPokemon] = useState('');
  const [itensPerPage, setItensPerPage] = useState(''); // itens por paginas
  const [searchPokemon, setSearchPokemon] = useState(''); // armazena pokemon filtrado

  const handleChange = (event: SelectChangeEvent) => {
    setItensPerPage(event.target.value as string);
  };

  const cleanFilter = () => {
    setChosenPokemon('');
    setItensPerPage('');
    setSearchPokemon('');
  };

  const catchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
      const paginationData = response.data;
      const { name } = paginationData;
      setChosenPokemon(name);
    } catch (error) {
      toast.error('Esse Pokemon não existe, ou você confudiu com Digimon');
    }
  };

  useEffect(() => {
    // Função assíncrona para fazer a requisição da API
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${itensPerPage}`);
        const paginationData = response.data;
        const { results } = paginationData;
        setPokemonList(results);
      } catch (error) {
        console.error('Erro ao buscar o Pokémon:', error);
      }
    };

    // Chama a função para fazer a requisição da API assim que o componente é montado
    fetchPokemon();
  }, [itensPerPage]);

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
        flexDirection="column"
      >
        <Box display="flex" flexDirection="row" justifyContent="center" mt="20px" width="100%">
          <Box
            display="flex"
            flexDirection="row"
            marginX="10px"
          >
            <Stack direction="row" spacing={2}>
              <TextField
                label="Procurar Pokemon"
                variant="outlined"
                value={searchPokemon}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchPokemon(event.currentTarget.value);
                }}
              />
              <Button variant="outlined" onClick={catchPokemon} >Buscar</Button>  
              <Button variant="outlined" onClick={cleanFilter} color="error">Limpar</Button>
            </Stack>
          </Box>
          <Box minWidth="160px">
            <FormControl fullWidth>
              <InputLabel id="quantidade-label">Quantidade</InputLabel>
              <Select
                labelId="quantidade-label"
                id="quantidade-label-select"
                value={itensPerPage}
                label="Quantidade"
                onChange={handleChange}
              >
                <MenuItem value={"?limit=20"}>20 por página</MenuItem>
                <MenuItem value={"?limit=40"}>40 por página</MenuItem>
                <MenuItem value={"?limit=60"}>60 por página</MenuItem>
                <MenuItem value={"?limit=80"}>80 por página</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box 
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          position="relative"
          width="80%"
          minHeight="100vh"
          marginY="50px"
        >
          <PokemonCard pokemonList={pokemonList} chosenPokemon={chosenPokemon} />
        </Box>

        <ScrollToTopButton />
      </Body>
    </>
  );
};