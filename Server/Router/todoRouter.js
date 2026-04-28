const router=require('express').Router()
const controller=require('../Controller/todoController')

router.post("/create",controller.createTask);
router.get("/getall",controller.getAllTasks);
router.get("/getbyid/:id",controller.getTaskById);
router.put("/update/:id",controller.updateTask);
router.delete("/delete/:id",controller.deleteTask);

module.exports=router