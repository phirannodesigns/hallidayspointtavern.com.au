// import { graphql, useStaticQuery } from 'gatsby';
// import { IGatsbyImageData } from 'gatsby-plugin-image';

// interface Gig {
//   _key: string;
//   overview: string;
//   _rawDescription: [];
// }

// interface MainImage {
//   asset: {
//     gatsbyImageData: IGatsbyImageData;
//   };
// }

// interface SanityLiveMusic {
//   heading: string;
//   gigs: Array<Gig>;
//   mainImage: MainImage;
// }

// interface LiveMusicQueryResponse {
//   sanityLiveMusic: SanityLiveMusic;
// }

// function useLiveMusic(): SanityLiveMusic {
//   const { sanityLiveMusic } = useStaticQuery<LiveMusicQueryResponse>(
//     graphql`
//       query LiveMusicQuery {
//         sanityLiveMusic(_id: { eq: "liveMusic" }) {
//           _id
//           heading
//           gigs {
//             _key
//             overview
//             _rawDescription
//           }
//           mainImage {
//             asset {
//               gatsbyImageData(width: 1920)
//             }
//           }
//         }
//       }
//     `
//   );
//   return sanityLiveMusic;
// }

// export { useLiveMusic };
// export type { Gig, LiveMusicQueryResponse, MainImage, SanityLiveMusic };
