var e = require('express')
var a = e()
var p = process.env.PORT || 8080
var r = new (require('randbytes')).urandom.getInstance()
var b = process.env.BYTES || 5000;

a.get('/', (req, res) => {
  r.getRandomBytes(b, (b) => {
    res.header('Content-Type', 'text/html')
    res.send(b)
  })
})

a.listen(p, () => { console.log(`Listening on port ${p}.`) })
