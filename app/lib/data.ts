import {sql} from "@vercel/postgres";
import { Products,Soons,Comments } from "./definitions";

export async function fetchProducts() {
    try {
        sql.connect();
        const data = await sql<Products>`SELECT * FROM products`;
        console.log(data.rows)
        return data.rows
    } catch (error) {
        console.error('Database Errror:',error);
        throw new Error('Failed to fetch Products;');
    }
}

export async function fetchSoon(){
    try {
        const data = await sql<Soons>`SELECT * FROM soon;`;	
        return data.rows
    }catch(error){
        console.error('Database Errror:',error);
        throw new Error('Failed to fetch Soons');
    }
}

export async function fetchComments(){
    try {
        
        const data = await sql<Comments>`SELECT * FROM comments;`;
        console.log(data.rows)
        return data.rows
    }
    catch(error){
        console.error('Database Errror:',error);
        throw new Error('Failed to fetch Comments');
    }
}