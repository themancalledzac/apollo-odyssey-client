import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: {
      trackId,
    },
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {/* here we use optional chaining since the data won't be available until the query is finished loading */}
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
