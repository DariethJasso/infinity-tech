require('dotenv').config();

const {db} = require('@vercel/postgres');
const {products, soon, comments} = require('../app/lib/dataholder.js');
async function seedProducts(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS products (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            image VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            category VARCHAR(255) NOT NULL           
          )
        `;
    
        console.log(`Created "products" table`);
    
        // Insert data into the "users" table
        const insertedProducts = await Promise.all(
         products.map(async (product) => {
            
            return client.sql`
            INSERT INTO products (id, name, description,quantity, image, price, category)
            VALUES (${product.id}, ${product.name}, ${product.description},${product.quantity}, ${product.image}, ${product.price}, ${product.category})
            ON CONFLICT (id) DO NOTHING;
          `;
          }),
        );
    
        console.log(`Seeded ${insertedProducts.length} products`);
    
        return {
          createTable,
          products: insertedProducts,
        };
      } catch (error) {
        console.error('Error seeding products:', error);
        throw error;
      }  
}

async function seedSoon(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS soon (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL        
      )
    `;

    console.log(`Created "soon" table`);

    // Insert data into the "users" table
    const insertedSoon = await Promise.all(
     soon.map(async (soon) => {
        
        return client.sql`
        INSERT INTO soon (id, name,image)
        VALUES (${soon.id}, ${soon.name},${soon.image})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedSoon.length} soons`);

    return {
      createTable,
      soon: insertedSoon,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw err
}
}

async function seedComments(client){
  
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        comment VARCHAR(255) NOT NULL       
      )
    `;

    const insertedComments = await Promise.all(
      comments.map(async (comment) => {
        return client.sql`INSERT INTO comments (id, name, date, email, image, comment) VALUES (${comment.id}, ${comment.name}, ${comment.date}, ${comment.email}, ${comment.image}, ${comment.comment}) ON CONFLICT (id) DO NOTHING;`
      })
    );
    return {
      createTable,
      comments: insertedComments
    };

  }catch(error){
    console.error('Error seeding comments:',error);
    console.log(error)

  }
}
async function main() {
    const client = await db.connect();
  
    await seedProducts(client);
    await seedSoon(client);
    await seedComments(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
