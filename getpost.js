var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');


if (req.method == 'GET')
{


    querystring = require('querystring');  
    const obj=querystring.parse('name=sonoo & age= 20 & add= axyz');  
    console.log(obj)
    res.write(JSON.stringify(obj));
    res.end();
}

else if (req.method == 'POST')
{   
 querystring = require('querystring');  
    const obj1=querystring.parse('name=rahul & age= 20 & add= axyz');  
    console.log(obj1)
    res.write(JSON.stringify(obj1));
    res.end();
   
}
});
app.listen(8081);