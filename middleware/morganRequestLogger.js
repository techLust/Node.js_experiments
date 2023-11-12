exports.sendData = (req, res) => {
    try {
        console.log('Send data called')
        console.log(req.body)
        return res.json({status: 'success'})
    } catch (e) {
        console.log(e)
    }
}