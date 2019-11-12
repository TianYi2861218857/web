const express = require('express')
const app = express()
// const userRouter = require('./routes/user.js')
// const blogRouter = require('./routes/blog.js')

//处理静态资源
app.use(express.static('public')) 

// app.use('/user',userRouter)
// app.use('/blog',blogRouter)
//or
app.use('/user',require('./routes/user.js'))
app.use('/blog',require('./routes/blog.js'))

app.listen(3000,()=>console.log('Example app listening on port 3000!'))