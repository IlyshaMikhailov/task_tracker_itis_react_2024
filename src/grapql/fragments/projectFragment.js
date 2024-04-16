import { gql } from "@apollo/client";

export default gql`
  fragment ProjectInfo on Project{
  query Projects{
  projects{
    descriptiom
    id
    name
    createdAt
  }
`;