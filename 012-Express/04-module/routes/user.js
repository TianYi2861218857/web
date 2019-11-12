const express = require('express')

//express.Router()实例化一个router对象
const router = express.Router()

//已经设置这个文件专门用来处理user的路由,不用写/user
router.get('/',(req,res) =>res.send('get...user')) 
router.post('/',(req, res) =>res.send('post...user'))
router.put('/',(req,res) =>res.send('put...user'))
router.delete('/',(req,res) =>res.send('delete...user'))

module.exports = router