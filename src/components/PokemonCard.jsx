import React from 'react';
import { Row, Col, Card, Tag, Typography } from 'antd';

import styles from 'styles';
import bg from 'styles/bg.png';

export default (props) => {
  const { details, openDetails } = props;
  const { Title, Text } = Typography;
  if (!details) return <Card loading />;

  const { types } = details;
  const primaryColor = styles.color(types[0].type.name);
  const name = details.name.charAt(0).toUpperCase() + details.name.slice(1);
  const id = String(details.id).padStart(3, '0');

  return (
    <Card
      onClick={() => openDetails(details.id)}
      hoverable
      style={{
        borderRadius: 20,
        background: `${primaryColor} url(${bg})`,
        backgroundSize: 'cover',
      }}
    >
      <Row>
        <Col span={12}>
          <Text
            style={{ color: primaryColor, filter: 'brightness(65%)', fontWeight: 'bold' }}
          >{`#${id}`}</Text>
          <Title style={{ marginTop: 0, color: 'white' }} level={4}>
            {name}
          </Title>
          {types.map((item) => (
            <Tag
              style={{
                borderRadius: 15,
                width: '50%',
                textAlign: 'center',
                filter: 'brightness(115%)',
                marginBottom: 5,
              }}
              color={styles.color(item.type.name)}
              key={item.type.name}
            >
              {item.type.name}
            </Tag>
          ))}
        </Col>
        <Col span={12}>
          <img
            style={{ width: '100%' }}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            alt={name}
          />
        </Col>
      </Row>
    </Card>
  );
};
