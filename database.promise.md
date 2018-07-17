```javascript
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
```
