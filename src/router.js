const Router = require('express').Router;

const router = new Router();

const {updateCards, getCards, insertCards} = require('./handler');

router.get('/', (req, res) => {
    res.send('Everything is fine');
})

router.post('/insert-cards', (req, res) => {
    console.log("POST /insert-cards");
    insertCards(req.body, function(){
        res.send({status: '200'});
    });
});

router.post('/update-cards', (req, res) => {
    console.log("POST /update-cards");
    updateCards(req.body, function(){
        res.send({status: '200'});
    });
});

router.get('/get-cards', (req, res) => {
    console.log("GET /get-cards");
    getCards(function(cards){
        res.send(cards);
    });
});

module.exports = router;