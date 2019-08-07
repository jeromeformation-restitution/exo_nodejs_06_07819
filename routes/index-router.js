const express = require('express');
const router = express.Router();

router.get('/produit', (req,res) =>
    {
        res.render('produit.pug');
    }
);
router.get('/contact', (req,res) =>
    {
        res.render('contact.pug');
    }
);

module.exports = router;