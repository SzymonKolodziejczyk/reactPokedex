import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import axios from 'axios';

import PokemonCard from 'components/PokemonCard';

export default (props) => {
  const { poke, openDetails } = props;
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchPoke = async () => {
      const { data } = await axios.get(poke.url);
      setResult(data);
    };
    fetchPoke();
  }, [poke.url]);

  return (
    <Col xs={20} sm={16} md={12} lg={8} xl={6}>
      <PokemonCard details={result} openDetails={openDetails} />
    </Col>
  );
};
