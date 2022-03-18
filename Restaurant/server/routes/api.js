const express = require('express')
const router = express.Router()

const axios = require('axios')

const PostAPI = 'https://jsonplaceholder.typicode.com'

// GET API
router.get('/', (req,res)=>{
    axios.get(`${PostAPI}/posts`).then(posts=>{
        console.log(posts.data);
    }).catch((err)=>{
        console.log('deu erro pois: '+ err)
    })
})

module.exports = router;
