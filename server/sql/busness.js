
var sqlite3 = require('sqlite3').verbose();
var {getDataBase} = require('./base')
/*
CREATE TABLE IF NOT EXISTS USERS (
    ID INTEGER PRIMARY KEY ,
    EMAIL TEXT NOT NULL,    
    NAME TEXT NOT NULL,   
    LAST_NAME TEXT NULL,
    REGISTER_REFERAL TEXT NOT NULL,
    REFERAL TEXT NOT NULL,      
    BALANCE INTEGER NOT NULL,
    CURRENT_TOKEN TEXT NULL       
);


CREATE TABLE IF NOT EXISTS PRODUCT (
    ID INTEGER PRIMARY KEY ,
    NAME TEXT NOT NULL,    
    PRICE INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS PRODUCT_ORDER (
    ID INTEGER PRIMARY KEY ,
    USER_ID INTEGER NOT NULL,    
    PRODUCT_ID INTEGER NOT NULL,
    FOREIGN KEY(USER_ID) REFERENCES USERS(ID),
    FOREIGN KEY(PRODUCT_ID) REFERENCES PRODUCT(ID)

);


*/

/*
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
db.close();

 */
/*
 //USER 
 id
 email 
 name 
 last_name
 referal
 balance
 current_token
 //PRODUCT
 id
 name
 price

  //ORDER 
  id 
  date
  product_id
  user_id
 // 

 */

 // вставить пользователся
 // read пользователя (и по email и или по id referal )
 // получить продукты 
 // получить  заказы ( по пользователю )
 // добавить пользователю баллов
 // удалить current access_token
function registerUser(user,cb){
    let  { name,last_name,email,pass,referal }  = user;
    getDataBase((db)=>{
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
        cb()
    })
}
function loginUser(user,cb){
    let  { email,pass }  = user
    getDataBase((db)=>{
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
        cb()
    })
}
function logout(current_token,cb){
    getDataBase((db)=>{
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
        cb()
    })
}
function products(db){
    getDataBase((db)=>{
        var res = []
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log(row.id + ": " + row.info);
        },(err,count)=>{
            cb(res)
        });
        
    })
}

function order(current_token){
    getDataBase((db)=>{
        var res = []
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log(row.id + ": " + row.info);
        },(err,count)=>{
            cb(res)
        });
        
    })
}
function info(current_token){
    getDataBase((db)=>{
        var res = []
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log(row.id + ": " + row.info);
        },(err,count)=>{
            cb(res)
        });
        
    })
}
function buy(){
    getDataBase((db)=>{
        var res = []
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log(row.id + ": " + row.info);
        },(err,count)=>{
            cb(res)
        });
        
    })
}
export default  {
    loginUser,
    registerUser,
    logout,
    products,
    order,
    info,
    buy
}
