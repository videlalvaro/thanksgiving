var express = require('express')
  , http = require('http')
  , path = require('path')
  , Instagram = require('instagram-node-lib')
  , broadcast = require('./lib/broadcast.js')();

Instagram.set('client_id', process.env.CLIENT_ID);
Instagram.set('client_secret', process.env.CLIENT_SECRET);

var app = express();

app.configure(function(){
  app.set('port', process.env.VCAP_APP_PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var max_tag_id = null;

app.get('/', function(req, res) {
    Instagram.tags.recent({
        name: 'thanksgiving',
        max_tag_id: max_tag_id,
        complete: function(data, pagination){
            max_tag_id = pagination.next_max_tag_id;
            res.render('layout', {
                data: data
            });
        }
    });
});

var server = http.createServer(app);

broadcast.installHandlers(server, {
    prefix: '/broadcast', 
    sockjs_url: '/javascripts/sockjs-0.3.js' 
});

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var interval =  setInterval(function () {
    Instagram.tags.recent({
        name: 'thanksgiving',
        max_tag_id: max_tag_id,
        complete: function(data, pagination){
            max_tag_id = pagination.next_max_tag_id;
            var images = data.slice(0, 2);
            broadcast.send(JSON.stringify(images));
        }
    });
}, 5000);
