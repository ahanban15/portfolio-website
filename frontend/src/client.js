// import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client'

// export const client = sanityClient({
//     projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: process.env.REACT_APP_SANITY_TOKEN,
// });
export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-03-28', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
