import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h2>This is the index page</h2>
    </Layout>
  );
};

export default IndexPage;
