const {sumHandler}=require('./sum');

const requestHandler=(req,res)=>{
console.log(req.url,req.method);
if(req.url=='/'){
    res.setHeader('Content-type' ,"text/html");
    res.write('<html>');
    res.write('<h1>Welcome to Calculator</h1>');
    res.write( '<a href="/calculator">Calculator</a>');
    res.write('</html>');
return res.end();
}else if(req.url.toLowerCase()==='/calculator'){
    res.setHeader('Content-type' ,"text/html");
    res.write('<html>');
    res.write('<form action="calculate-result" method="POST">');
    res.write('<input type="text" name="num1"> <input type="text" name="num2">');
    res.write('<input type="submit" value="Addition">');
    res.write('</form>');
    res.write('</html>');
return res.end();
}else if(req.url.toLowerCase()==='/calculate-result'&& req.method=='POST'){

return sumHandler(req,res);
}

  res.statusCode = 404;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>404 - Page Not Found</h1>');
}


exports.requestHandler=requestHandler;