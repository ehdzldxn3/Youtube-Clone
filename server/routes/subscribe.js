const express = require('express');
const router = express.Router();
const { Subscriber } = require('../models/Subscriber');

//구독자수 가져오기
router.post('/subscribeNumber', (req, res) => {

    Subscriber.find({'userTo' : req.body.userTo})
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true, subscribeNumber : subscribe.length})
    })
})

router.post('/subcribed', (req, res) => {
    
    // Subcriber.find({'userTo' : req.body.userTo, 'userFrom': req.body.userFrom})
    // .exec((err, subscribe) => {
    //     if(err) return res.status(400).send(err)
    //     let result = false;
    //     if(subscribe.length !== 0) {
    //         result = true
    //     }
    //     res.status(200).json({ success: true, subcribed : result})
    // })
})

router.post('/unSubcribe', (req, res) => {
    

})

router.post('/subcribe', (req, res) => {
    

})


module.exports = router;