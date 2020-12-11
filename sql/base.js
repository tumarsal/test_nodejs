
var sqlite3 = require('sqlite3').verbose();

function getDataBase(cb){
  let db =   new sqlite3.Database(':memory:');
  var db = new sqlite3.Database(':memory:');
 
    db.serialize(function() {
        db.run(`CREATE TABLE IF NOT EXISTS USERS (
            ID INTEGER PRIMARY KEY ,
            EMAIL TEXT NOT NULL,    
            NAME TEXT NOT NULL,   
            LAST_NAME TEXT NULL,
            REGISTER_REFERAL TEXT NOT NULL,
            REFERAL TEXT NOT NULL,      
            BALANCE INTEGER NOT NULL,
            CURRENT_TOKEN TEXT NULL       
        );`)
        
        
        db.run(`CREATE TABLE IF NOT EXISTS PRODUCT (
            ID INTEGER PRIMARY KEY ,
            NAME TEXT NOT NULL,    
            PRICE INTEGER NOT NULL
        );`)
        
        db.run(`CREATE TABLE IF NOT EXISTS PRODUCT_ORDER (
            ID INTEGER PRIMARY KEY ,
            USER_ID INTEGER NOT NULL,    
            PRODUCT_ID INTEGER NOT NULL,
            FOREIGN KEY(USER_ID) REFERENCES USERS(ID),
            FOREIGN KEY(PRODUCT_ID) REFERENCES PRODUCT(ID)
        );`);
        cb(db)
        /*
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
        
        db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
            console.log(row.id + ": " + row.info);
        });
        */
        db.close();
    });
    
}

export {
    getDataBase
}