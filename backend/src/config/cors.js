//middleware

module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origins, X-Requested-With, Content-Type, Accept')
    next()
}