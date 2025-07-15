const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res) =>{
    console.log(req.url,req.method);
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
            const Body=[];
            req.on('data',chunk=>{
                console.log(chunk);
                Body.push(chunk);

            });
            req.on('end',()=>{
                const parsebody=Buffer.concat(Body).toString();
                console.log(parsebody);
                const params=new URLSearchParams(parsebody);
                // const jsonObject={};
                // for(const[key,value] of params.entries()){
                //     jsonObject[key]=value;
                // }
                // console.log(jsonObject);
                const bodyObject=Object.fromEntries(params);
                console.log(bodyObject);
                 fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
            })
           
            res.statusCode=302;//redirection
            res.setHeader('Location','/');//homepage
    
        }
          res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Myntra</title></head>');
        res.write('<body><h1>Thanks for Shopping</h1><body>');
        res.write('</html>');
           return res.end();


})
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})