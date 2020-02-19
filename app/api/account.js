const {Router} = require('express');

const router = new Router();

router.get('/', (req, res, next) => {
    res.json({"O": "K"})
})

module.exports = router;