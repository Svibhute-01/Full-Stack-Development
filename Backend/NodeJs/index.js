const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url=='/'){
  res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body><h1>Welcome to Fashion World!</h1><body>');
    res.write('</html>');
    return res.end();
    
    }else if(req.url=='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Checkout the Products</h1><body>');
    res.write('</html>');
    return res.end();
    
    }else{
      res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Thanks for Shopping</h1><body>');
    res.write('</html>');
       return res.end();
 

    }
    
});

const port=3001;
server.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
});