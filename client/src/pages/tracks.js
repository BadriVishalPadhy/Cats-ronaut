import React from 'react';
import { Layout } from '../components';
import {gql} from "@apollo/client"

const TRACKS = gql`

query TracksForHome {
  tracksForHome {
    title
    thumbnail
    modulesCount
    length
    id
    author {
      photo
      name
      id
    }
  }
}

`

const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
