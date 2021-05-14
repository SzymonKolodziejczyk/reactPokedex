import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

import { Wrapper, PokemonList, PokemonDetails } from 'components';

export default () => {
  const [details, setDetails] = useState(false);
  const [id, setId] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [next, setNext] = useState();

  const fetchData = async () => {
    const url = next ? next : 'https://pokeapi.co/api/v2/pokemon/';
    const { data } = await axios.get(url);
    setPokemons([...pokemons, data.results].flat());
    if (data.next) {
      setNext(data.next);
    } else {
      setHasMoreItems(false);
    }
  };

  const openDetails = (id) => {
    setDetails(true);
    setId(id);
  };

  if (!details)
    return (
      <InfiniteScroll pageStart={0} loadMore={fetchData} hasMore={hasMoreItems}>
        <Wrapper>
          {pokemons &&
            pokemons.map((poke) => (
              <PokemonList key={poke.name} poke={poke} openDetails={openDetails} />
            ))}
        </Wrapper>
      </InfiniteScroll>
    );
  else
    return (
      <PokemonDetails
        id={id}
        closeDetails={() => setDetails(false)}
        next={() => setId(id + 1)}
        prev={() => setId(id - 1)}
        handleCancel={() => setDetails(false)}
      />
    );
};
