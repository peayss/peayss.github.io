/*화면 바꾸는 방법*/
const fs = require('fs');
const mariadb = require('./database/connect/mariadb');

const main_view = fs.readFileSync('./main.html');

function main(response){
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err,rows){
        console.log(rows);
    });

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();
}
function airplane(response){
    fs.readFile('./img/airplane.jpeg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}
function travel(response){
    fs.readFile('./img/travel.jpeg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}
function hotel(response){
    fs.readFile('./img/hotel.jpg', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    })
}
function mainCss(response){
    fs.readFile('./project.css', function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/css'});
        response.write(data);
        response.end();
    })
}

let handle = {}; // key:value 
handle['/'] = main;

/* image directory */
handle['/img/airplane.jpeg'] = airplane;
handle['/img/hotel.jpg'] = hotel;
handle['/img/travel.jpeg'] = travel;

handle['/project.css'] = mainCss;
exports.handle = handle;