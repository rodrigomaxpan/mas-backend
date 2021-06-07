export default{
    jwt: {
        secret: process.env.APP_SECRET || 'default',
        privateKey: process.env.APP_PRIVATE_KEY || 'default',
        publicKey: process.env.APP_PUBLIC_KEY || 'default',
        expiresIn  : '1d'
    }
}