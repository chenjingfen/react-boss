const express = require('express')
const mongoose = require('mongoose')

//链接mongo,并且使用react语法
const DB_URL = 'mongodb://localhost:27017/react'
    mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongodb connect...')
})

//类似于mysql的表，mongo里有文档，字段的概念

const User = mongoose.model('user',new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
/*User.create({
    name:'xiaoming',
    age:17
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})*/




//新建app
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res){
    //查询数据
    User.findOne({name:'xiaoming'},function(err,doc){
        res.json(doc)
    })
    User.find({},function(err,doc){
        res.json(doc)
    })
    /*res.json({name:'mook'})*/
})

app.get('/delete',function(req,res){
    //删除数据
    User.remove({age:18},function(err,doc){
        res.json(doc)
    })
    /*res.json({name:'mook'})*/
})

app.get('/update',function(req,res){
    //更新数据
    User.update({name:'xiaoming'},{'$set':{age:26}},function(err,doc){
        res.json(doc)
    })
    /*res.json({name:'mook'})*/
})
app.listen(9093,function(){
    console.log('Node App start at port 9093')
})