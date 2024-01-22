export const config = {
    node_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGO_URL || 'mongodb://localhost/',
}
