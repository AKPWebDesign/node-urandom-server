var e = require('express')
var a = e()
var p = process.env.PORT || 8080
var r = new (require('randbytes')).urandom.getInstance()
var b = process.env.BYTES || 5000;
var u = process.env.MAX_BYTES || 500000

a.get('/', (req, res) => {
  r.getRandomBytes(b, (b) => {
    res.header('Content-Type', 'text/html')
    res.send(b)
  })
})

a.get('/:b', (req, res) => {
  let b2 = null;
  try {
    b2 = parseInt(req.params.b, 10);
    if(!b2) { b2 = b }
    b2 = Math.min(b2, u)
  } catch (e) {
    b2 = b
  }

  r.getRandomBytes(b2, (b) => {
    res.header('Content-Type', 'text/html')
    res.send(b)
  })
})

a.listen(p, () => { console.log(`Listening on port ${p}.`) })
