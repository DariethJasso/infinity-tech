import {sql} from "@vercel/postgres";
import { Products,Soons } from "./definitions";
export async function fetchProducts() {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const data = await sql<Products>`SELECT * FROM products`;
        return data.rows
    } catch (error) {
        console.error('Database Errror:',error);
        throw new Error('Failed to fetch Products');
    }
}

export async function fetchSoon(){
    try {
        const data = await sql<Soons>`SELECT * FROM soon`;	
        return data.rows
    }catch(error){
        console.error('Database Errror:',error);
        throw new Error('Failed to fetch Soons');
    }
}