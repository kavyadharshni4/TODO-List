const mongoose=require("mongoose")
const schema=mongoose.Schema({
    tasks:{type:String, require:true},
    date:{type:Date, require:true}
})
const taskModel=mongoose.model("tasks",schema)
module.exports=taskModel