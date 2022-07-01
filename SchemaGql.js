import {gql} from 'apollo-server'
const typeDefs =gql`
type Query{
   users:[User]
   user(id:ID):User
   quotes:[Quotes]
   iquote(by:ID!):[Quotes]
}
type User{
    id:ID!
    name:String
    username: String
    email:String
    phone:String
    quotes:[Quotes]
}
type Quotes{
    name:String
    by:ID
}
type Mutation{
    createUserDummy(userNew:UserInput!):User
}
input UserInput{
    name:String!,
    username: String!,
    email:String!,
    phone:String!
}
`
export default typeDefs