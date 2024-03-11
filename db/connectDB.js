import mongoose from 'mongoose';
import 'dotenv/config'

const DBUrl = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(DBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'TimesIn',
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};
export default connectDB;