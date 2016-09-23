var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article = {
        title: 'ARTICLE 1',
        name: 'ARTICLE ONE',
        date: 'SEPT 10',
        content: `
                    <p>
                        Hi this is shrinidhi s talpankar
                    </p>
                    <p>
                        Hi this is shrinidhi s talpankar
                    </p>
                    <p>
                        Hi this is shrinidhi s talpankar
                    </p>`
    };

function createTemplate(data){
   var title = data.title;
   var heading = data.name;
   var date = data.date;
   var content = data.content;
   var htmlTemplate=`<html>
    <head>
        <title>
            $(title)
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            <h3>
               $(heading)
            </h3>
            <div>
                $(date)
            </div>
            <div>
                $(content)
            </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}
app.get('/article1', function (req, res) {
  res.send(createTemplate(article)));
});

app.get('/article2', function (req, res) {
  res.send("article two requested");
});

app.get('/article3', function (req, res) {
  res.send("article two requested");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
