const gql  = require("graphql_tag")
const { Module } = require("module")

const typeDefs  =  gql`
 " We define Query type because we dont have end points like in rest api "
 "Query type are Entry points to the rest of the Schema "
 "Query to get Tracks array for the homepage grid "
  "Fetching the track list for the homepage"



 type Query {
  
  tracksForHome: [Track!]!
 }  



type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail:String
  length: Int
  modulesCount: Int


} 

 type Author {
  id: ID!
  name: String!
  photo:String
 }


`
Module.exports = typeDefs;