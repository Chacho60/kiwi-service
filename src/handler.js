const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

//Mongodb connection
const url = 'mongodb://localhost:27017/Notes_Cards';


exports.insertCards = function insertCards(cards, callback){
    
    connectDatabase( function(db){
        insertDocuments(db, cards, 'cards', 
            function(result, db){
                console.log('New cards inserted');
                callback();
            }
        )          
    });     
}

exports.updateCards = function updateCards(newCards, callback){
    
    connectDatabase( function(db){
        deleteDocuments(db, 'cards', 
            function(){
                console.log("Cards deleted")
                insertDocuments(db, newCards, 'cards', 
                    function(result, db){
                        console.log('New cards inserted');
                        callback();
                    }
                )
            }
        )           
    });     
}

exports.getCards = function getCards(callback){
    connectDatabase( function(db){
        
        getDocuments(db, 'cards', 
            function(result, db){
               callback(result);
            }
        )
    });
}
