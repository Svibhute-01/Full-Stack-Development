const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url=='/'){
  res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<h1>Welcome</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('Enter your Name:<input type="text" name="username" placeholder="first name middle name last name"><br><br>');
   
    res.write('Gender:<input type="radio" name="Gender" value="Female">Female<input type="radio" name="Gender" value="Male">Male<br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</html>');
    return res.end();
    }else if(req.url.toLocaleLowerCase()==="/submit-details" && req.method=="POST"){
        fs.writeFileSync('user.txt','snehal vibhute');
        res.statusCode=302;//redirection
        res.setHeader('Location','/');//homepage

    }
      res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body><h1>Thanks for Shopping</h1><body>');
    res.write('</html>');
       return res.end();
 

    
    
});

const port=3001;
server.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
});