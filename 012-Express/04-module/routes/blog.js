const express = require('express')

//express.Router()实例化一个router对象
const router = express.Router()

//已经设置这个文件专门用来处理user的路由,不用写/user
router.get('/',(req,res) =>res.send('get...blog')) 
router.post('/',(req, res) =>res.send('post...blog'))
router.put('/',(req,res) =>res.send('put...blog'))
router.delete('/',(req,res) =>res.send('delete...blog'))

module.exports = router