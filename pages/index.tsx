import gql from 'graphql-tag';
import React, { type ReactNode } from 'react';
import { client } from './api/graphql/config';

const Dashboard = (): ReactNode => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = async (): Promise<any> => {
  const data = await client.query({
    query: gql`
      query Query {
        hello
      }
    `
  });

  console.log(data);
  return {
    props: {}
  };
};
