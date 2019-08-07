const express = require('express');
const router = express.Router();

router.put('/produit', (req,res) =>
    {
        res.json('Le produit a été modifié');
    }
);


module.exports = router;