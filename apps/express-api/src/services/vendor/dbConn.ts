import mongoose, { ConnectOptions } from 'mongoose';

export default function connectToMongoDB(
  connectionString?: string,
  connOptions?: ConnectOptions
): void {
  if (connectionString) {
    mongoose
      .createConnection(connectionString, { ...connOptions })
      .on('connected', () => {
        console.log('Connected to MongoDB');
      })
      .on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
      });
  } else {
    console.log('missing mongo connection string');
  }
}
