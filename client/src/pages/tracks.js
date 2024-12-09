import React from 'react';
import { Layout } from '../components';
import {gql , useQuery} from "@apollo/client"
import TrackCard from "../containers/track-card";
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
  const {  loading,error,data  } = useQuery(TRACKS);
  if(loading) return 'Loading . . .'; 

  if(error) return `ERROR ${error.message}`


   return <Layout grid>{data?.tracksForHome?.map((track) => (
    <TrackCard  key={track.id} track={track} />
   ))} </Layout>;
};

export default Tracks;
