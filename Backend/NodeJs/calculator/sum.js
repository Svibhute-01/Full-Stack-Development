const sumHandler=(req,res)=>{
console.log("In sum request handler",req.url);
let body=[];
req.on('data',chunk=>{
    body.push(chunk);
});


req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params);
    const result=Number(bodyObj.num1)+Number(bodyObj.num2);
    console.log(result);

     res.setHeader('Content-type' ,"text/html");
    res.write('<html>');
    res.write(`<h1>Your Sum is${result}</h1>`);
    
    res.write('</html>');
    res.end();
})
}
exports.sumHandler=sumHandler;