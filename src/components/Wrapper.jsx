import React from 'react';
import { Layout, Row, Typography } from 'antd';

import styles from 'styles';

export default (props) => {
  const { Content, Header } = Layout;
  const { Title } = Typography;

  return (
    <Layout style={styles.container}>
      <Header style={styles.header}>
        <Title>Pokédex</Title>
      </Header>
      <Content style={styles.content}>
        <Row
          gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          style={{ justifyContent: 'center' }}
        >
          {props.children}
        </Row>
      </Content>
    </Layout>
  );
};
