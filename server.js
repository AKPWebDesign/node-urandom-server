var e = require('express')
var a = e()
var p = process.env.PORT || 8080
var r = new (require('randbytes')).urandom.getInstance()

a.get('/', (req, res) => {
  r.getRandomBytes(5000, (b) => {
    res.header('Content-Type', 'text/html')
    res.send(b)
  })
})

a.listen(p, () => { console.log(`Listening on port ${p}.`) })
