import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'http://localhost:9000/graphql'
const client = new GraphQLClient(endpoint);

export async function getJobs() {
  const query = gql`
    query {
    jobs {
      id
      date
      title
      company {
        id
        name
      }
    }
  }
  `;
  const { jobs } = await client.request(query);
  return jobs;

}

