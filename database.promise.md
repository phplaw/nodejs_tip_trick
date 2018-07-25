```javascript
// source: https://codeburst.io/node-js-mysql-and-promises-4c3be599909b


const mysql = require( 'mysql' );
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

// EXAMPLE HERE
let someRows, otherRows;
database.query( 'SELECT * FROM some_table' )
    .then( rows => {
        someRows = rows;
        return database.query( 'SELECT * FROM other_table' );
    } )
    .then( rows => {
        otherRows = rows;
        return database.close();
    }, err => {
        return database.close().then( () => { throw err; } )
    } )
    .then( () => {
        // do something with someRows and otherRows
    }
    .catch( err => {
        // handle the error
    } )
// END EXAMPLE

Database.execute = function( config, callback ) {
    const database = new Database( config );
    return callback( database ).then(
        result => database.close().then( () => result ),
        err => database.close().then( () => { throw err; } )
    );
};


Database.execute( config,
    database => database.query( 'SELECT * FROM some_table' )
    .then( rows => {
        someRows = rows;
        return database.query( 'SELECT * FROM other_table' )
    } )
    .then( rows => {
        otherRows = rows;
    } )
).then( () => {
    // do something with someRows and otherRows
} ).catch( err => {
    // handle the error
} );



let someRows, otherRows;
Database.execute( config,
    database => database.query( 'SELECT * FROM some_table' )
    .then( rows => {
        someRows = rows;
        return database.query( 'SELECT * FROM other_table' )
    } )
    .then( rows => {
        otherRows = rows;
    } )
).then( () => {
    // do something with someRows and otherRows
} ).catch( err => {
    // handle the error
} );

// You can use async/await to call the db.query() method, for example:
const db = new Database();
const rows = await db.query( 'select ...' );
//It’s not possible to use async/await in the Database class itself, 
// because the MySQL API uses callbacks and async/await is only designed to work with promises.
```
