var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	port = process.env.PORT || 5000;

http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	var html = '';

	var filePath = '.' + req.url;
	if (filePath == './') {
		filePath = './index.html';
	}

	var contentType = 'text/html';
    var extname = path.extname(filePath);
    switch (extname) {
    	case '.jpg':
    		contentType = 'image/jpeg';
    		break;
    	case '.png':
    		contentType = 'image/png';
    		break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, function(err, data) {
    	if(err) {
    		res.writeHead(500); 
            res.end();
    	} else {
		    res.writeHead(200, { 'Content-Type': contentType });
		    res.end(data, 'utf-8');
    	}
    });
}).listen(port, function() {
	console.log('Listening on 54345....');
})