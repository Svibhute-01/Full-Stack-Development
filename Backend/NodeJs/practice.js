const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url=='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<a href="/home">Home</a>');
        res.write('<a href="/women">Women</a>');
        res.write('<a href="/men">Men</a>');
        res.write('<a href="/kids">Kids</a>');
        res.write('<a href="/cart">cart</a><br><br>');
         res.write('<body><h1>Welcome to Home Section</h1></body>');
         res.write('</html>');
         return res.end();
}else if(req.url.toLocaleLowerCase()=="/women"){
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to Women Section</h1></body>');
        res.write('</html>');
        return res.end();
}else if(req.url.toLocaleLowerCase()=="/men"){
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to men Section</h1></body>');
        res.write('</html>');
        return res.end();
}else if(req.url.toLocaleLowerCase()=="/kids"){
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to kids  Section</h1></body>');
        res.write('</html>');
        return res.end();
}else if(req.url.toLocaleLowerCase()=="/cart"){
    res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to cart</h1></body>');
        res.write('</html>');
        return res.end();
} 
});

const port=3001;
server.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
});