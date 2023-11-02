import 'dotenv/config.js'

export const handleError = (err, req, res, next) => {
    console.log("Failed to get response")
    const statusCode = err.statusCode || 500
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message,
        stack: process.env.NODE_ENV === 'dev' ? err.stack: {}
    })

}