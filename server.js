let server = require('http');

//Routages sans express
 let url = require('url');



let CreateServer = server.createServer( function (req, res) {
    let route = url.parse(req.url).pathname;
    if (route ==='/accueil'){
        res.write('Bonjour ! ')
    }
    else if(route ==='/contact')
    {
        
        res.write('Contactez vous')
    }
    else{
        res.statusCode = 404;
        res.write('Page non disponible');
        console.log(route);
    }
    res.end();
})


CreateServer.listen(8000);