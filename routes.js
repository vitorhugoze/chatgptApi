const { Configuration, OpenAIApi } = require('openai')
const express = require('express')
const router = express.Router()
require('dotenv').config()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello'
  })
})

router.get('/response', async function(req, res) {
  
  const config = new Configuration({
    apiKey: process.env.API_KEY
  })

  const api = new OpenAIApi(config)

  if(req.query.prompt != undefined){
    const response = await api.createCompletion({
      model: 'text-davinci-003',
      prompt: req.query.prompt,
      max_tokens: 64
    })

    res.json({
      text: response.data.choices[0].text
    })
  } else {
    res.json({
      text: 'Query without prompt'
    })
  }

})

module.exports = router