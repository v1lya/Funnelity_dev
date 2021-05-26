export class YoutubeSearchResults {
  etag: string;
  items: [
    {
      etag: string,
      kind: string,
      id: {
        kind: string,
        videoId: string
      }
    }
  ];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  regionCode: string;
}
