// requires
const express = require( 'express' );
const app = express();

// uses
app.use( express.static( 'server/public') );

// globals
const port = 5000;
let counter = 0;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) //end server up

// routes
app.get( '/count', ( req, res )=>{
    incrementCounter();
    console.log( 'in /count GET' );
    // send response
    res.send( 'counter ' + counter );
}) // end /count GET

let incrementCounter = () =>{
    counter++;
} // end incrementCounter