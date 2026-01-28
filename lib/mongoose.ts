import mongoose, { Mongoose } from 'mongoose';
// mongoose is a mongodb object modeling tool designed to work in an asynchronous environment
// Mongoose is the main class we will use it is a constructor function

// first we need to connect to the database

// we need to declare the interface for the connection 4
const MONGODB_URI = process.env.MONGODB_URI || ""; // add your mongodb connection string here

if(!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside process.env.MONGODB_URI"
    )
}


interface MongooseCache {
    conn: Mongoose | null; // conn standfor connection
    promise: Promise<Mongoose> | null;
}


// then cached the connection  to prevent form the unnecessary connections then lead to limit connection requests
declare global {
    var mongooseCache: MongooseCache | undefined;
}

// this we need to check if the global mongoose is already defined and cached
let cached = globalThis.mongooseCache;
if (!cached) {
     cached = { conn: null, promise: null };
    globalThis.mongooseCache = cached;
}

const dbConnect = async (): Promise<Mongoose> => {
    // we need to check if the connection is already established
    if (cached.conn) {
        return cached.conn;
    }
    // if not we need to create a new connection
    if (!cached.promise) {
        
        cached.promise = mongoose.connect(MONGODB_URI
        )
        .then((result) => {
            console.log("Database connected successfully");
            return result;
        }).catch((error) => {
            console.log("Mongoose connection error:", error);
            throw error;
        }); 
    }

    // this we can await the promise and set the connection to the conn property
    cached.conn = await cached.promise;
    return cached.conn;
};

export default dbConnect;