(function () {

    'use strict'
    
    let express = require('express'),
        app = express()

    app.get('/app', (req, res) => {
        res.send("")
    })
    
    let server = app.listen(3000, () => {
        console.log('Express server listening on port ' + server.address().port)
    })
    
    module.exports = app

}())