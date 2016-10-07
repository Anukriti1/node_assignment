
		var express=require('express');
		var app=express();
		var MongoClient=require('mongodb').MongoClient;
		var url= 'mongodb://localhost/employeedb';
		str="";


		app.route('/').get(function(req,res)
	{

            
             console.log("hello");


		MongoClient.connect(url,function(err,db){

 		var cursor=db.collection('employee').find();
		cursor.each(function(err,item){

    	if(item!=null)
    {
      	str=str+ "employee" + item.employeeid+ "employeename" +item.employeename ;
    }
	});
		res.send(str);
	});
	});
		var server=app.listen(3000,function()
	{});























//     mongoClient.open(function(err, mongoClient) {

//     	console.log(students);
//         if(err){
//             console.log(err);
//             res.status(500).json({message : 'OMG, an error occurred'});
//         }else{
//         	console.log(students);
//            console.log('database connected',db);
//             var collectionInfo = db.collection("students");
//             // Here we will find all students
//             collectionInfo.find({}).toArray(function(err, students) {
//                // so now, we can return all students to the screen.
//                res.status(200).json({'myCollection' : students});
//             })
//         }
//     })
// })