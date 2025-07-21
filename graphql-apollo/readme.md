## 
| Part           | Purpose                                   |
| -------------- | ----------------------------------------- |
| `typeDefs`     | Define **what data** can be queried       |
| `resolvers`    | Define **how to get the data**            |
| `ApolloServer` | Ties it all together                      |
| Sandbox        | Lets you test your GraphQL queries easily |


## Scalar Types (basic built-in types)
| Type      | Description                              |
| --------- | ---------------------------------------- |
| `Int`     | Integer                                  |
| `Float`   | Floating-point number                    |
| `String`  | UTF-8 string                             |
| `Boolean` | `true` or `false`                        |
| `ID`      | Unique identifier (serialized as string) |


## Layers Example (Node.js + TypeORM + Apollo)
[Client]
   ↓
[GraphQL API (Apollo Server)]
   ↓
[Resolvers → ORM]
   ↓
[Database (e.g., PostgreSQL)]
