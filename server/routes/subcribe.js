const express = require('express');
const router = express.Router();
const { Subcriber } = require('../models/Subcriber');

//구독자수 가져오기
router.post('/getVideoDetail', (req, res) => {
    Subcriber.find({'userTo' : req.body.userTo})
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true, subscribeNumber : subscribe.length})
    })
})



module.exports = router;