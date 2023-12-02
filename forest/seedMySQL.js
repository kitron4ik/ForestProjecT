var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE trees;'
var seedQuery = 'INSERT INTO trees (id,title, nick, avatar, about) VALUES (1,"Дубина", "Dubina", "/images/Dubina.png", "Древнерусское древо, оно могло застать людей в начале нашей эры, так как может жить до 2000 лет!"),  (2,"Ёлка", "Elochka", "/images/Elochka.png", "Дерево с приятным запахом, вечный гость в новогоднюю ночь!"),  (3,"Берёзка", "Berezka", "/images/Berezka.png", "Белое дерево в черное пятнышко с вкусным березовым соком");'

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : '1234',
    database: 'forest'
    });
    connection.connect()
    console.log("Running SQL seed...")
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })
    