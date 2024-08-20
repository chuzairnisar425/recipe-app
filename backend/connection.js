import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (connection.connection.readyState === 1) {  // Check if connection is established
            console.log('MongoDB Connected');
        } else {
            console.log('MongoDB connection failed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
