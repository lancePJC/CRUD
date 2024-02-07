const express = require('express');
const router = express.Router(); // Add parentheses after express.Router
const Alien = require('../models/alien')
router.get('/', async(req, res) => { // Add req and res parameters to the get callback
 try{
       const aliens = await Alien.find()
       res.json(aliens)
 }catch(err){
    res.send('Error' + err)

 }
});

router.get('/:id', async(req, res) => { // Add req and res parameters to the get callback
    try{
          const alien = await Alien.findById(req.params.id)
          res.json(alien)
    }catch(err){
       res.send('Error' + err)
   
    }
   });

router.post('/',async(req,res) => {
    const alien =  new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
       const a1 = await alien.save()
       res.json(a1)
    }catch(err){
        res.send('Error')
    }

})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const al = await alien.save()
        res.json(al)

    }catch(err){
        res.send('Error' + err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
      const removedAlien = await Alien.findOneAndDelete({ _id: req.params.id });
      res.json(removedAlien);
    } catch (err) {
      res.status(500).send('Error: ' + err);
    }
  });
  
  module.exports = router;