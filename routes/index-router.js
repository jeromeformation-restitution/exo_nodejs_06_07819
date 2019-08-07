const express = require('express');
const router = express.Router();
const queryString = require('querystring');
const url = require('url');


router.get('/produit', (req,res) =>
    {
        res.render('produit.pug');
    }
);
router.get('/blog', (req,res) =>
    {
        let parseUrl = url.parse((req.url)).query;
        console.log("Parsing de l'url");
        console.log(parseUrl);
        console.log("Query de l'url");
        console.log(queryString.parse(parseUrl));

        // let page = queryString.parse(parseUrl).page || 1;

        let page = queryString.parse(parseUrl).page;
        console.log(page);
        if(page) {
        res.render('produit.pug', {page:page});
        }else{
            res.render('produit.pug', {page:1});
        }
    }
);
router.get('/contact', (req,res) =>
    {
        res.render('contact.pug');
    }
);

module.exports = router;