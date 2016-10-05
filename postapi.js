var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');


if (req.method == 'POST')
{


    querystring = require('querystring');  
    const obj1=querystring.parse('name=sonoo & age= 20 & add= axyz');  
    console.log(obj1)
    res.write(JSON.stringify(obj1));
    res.end();
}
else
{
   res.write("not geeting right command");

 res.end();
}
});
app.listen(8081);