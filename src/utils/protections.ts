import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { cookie } from "../services/cookies";

// export const delay = ( amount = 750 ) => new Promise(resolve => setTimeout(resolve, amount));

export const protections = {

    keepInAuth: (fn: GetServerSideProps) => {
        return async ( context: GetServerSidePropsContext ) => {
        
            const token = cookie.get(context)
    
            if(!token) {
                return {
                    redirect: {
                        destination: '/auth/signIn',
                        permanent: true
                    }
                }
            }
    
            return await fn(context);
    
        }
    },

    keepInApp: (fn: GetServerSideProps) => {
        return async ( context: GetServerSidePropsContext ) => {
        
            const token = cookie.get(context)
    
            if(token) {
                return {
                    redirect: {
                        destination: '/app',
                        permanent: true
                    }
                }
            }
    
            return await fn(context);
    
        }
    }
}