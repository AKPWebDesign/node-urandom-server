# node-urandom-server  
Just a quick and dirty [express.js](https://expressjs.com/) server that sends bytes from `/dev/urandom`.  

## Quickstart  
1. `git clone https://github.com/AKPWebDesign/node-urandom-server`  
2. `node server.js`  
3. Open `localhost:8080` in your web browser.  

### Options  
There are only a few options you can set for `node-urandom-server`, and they're set by creating environment variables.  

`PORT`: The port to listen for requests on. Default: 8080.  
`BYTES`: The number of bytes to send per request, when the request doesn't specify how many to send. Default: 5000.  
`MAX_BYTES`: The maximum number of bytes a user can request. Default: 500000.  

### Endpoints  
There are currently two endpoints that you can access on node-urandom-server. Both of them return bytes from `/dev/urandom`.  

`/`: Returns the default number of bytes, specified using the `BYTES` environment variable (or fallback default value).  
`/:number`: Returns `Math.min(:number, MAX_BYTES)` bytes, where `:number` is the number specified in the URL, and `MAX_BYTES` is the environment variable (or fallback default value).  

### Docker  
This repository comes with a `Dockerfile`. You can use this to create a Docker image for node-urandom-server, or use the one located on the [Docker Hub](https://hub.docker.com/r/akpwebdesign/node-urandom-server/).  

#### Docker quickstart  
1. `docker run -d -p 8080:8080 akpwebdesign/node-urandom-server`  
2. Open `localhost:8080` in your web browser.  
