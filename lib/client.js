import sanityClient from '@sanity/client';
// import { ImageUrlBuilder } from 'next-sanity-image';
// import {ImageUrlBuilder} from 'next-sanity-image';
import imageUrlBuilder from '@sanity/image-url';

// we invoke sanityClient function with @param obj containing the fields and export the client with which we have invoked it
export const client = sanityClient({
    projectId:"otur94we",
    dataset:"production",
    apiVersion:"2022-12-03",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client); //  sanity gives access to url which has images in store

export const urlFor = (source)=> builder.image(source);

