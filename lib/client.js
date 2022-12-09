import sanityClient from '@sanity/client';
import { ImageUrlBuilder } from 'next-sanity-image';;

// we invoke sanityClient function with @param obj containing the fields and export the client with which we have invoked it
export const client = sanityClient({
    projectId:"otur94we",
    dataset:"production",
    apiVersion:"2022-12-03",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

