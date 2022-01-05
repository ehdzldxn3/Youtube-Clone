const express = require('express');
const router = express.Router();
const { Subcriber } = require('../models/Subcriber');

//구독자수 가져오기
router.post('/subcribeNumber', (req, res) => {
    console.log('asdf')
    Subcriber.find({'userTo' : req.body.userTo})
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true, subscribeNumber : subscribe.length})
    })
})

router.post('/subcribed', (req, res) => {
    
    Subcriber.find({'userTo' : req.body.userTo, 'userFrom': req.body.userFrom})
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err)
        let result = false;
        if(subscribe.length !== 0) {
            result = true
        }
        res.status(200).json({ success: true, subcribed : result})
    })
})


module.exports = router;