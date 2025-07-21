import { gql, useQuery } from '@apollo/client';
import client from '../lib/apollo-client';
import { User } from '../types/User';

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.users.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
