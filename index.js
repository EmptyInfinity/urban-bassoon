import sql from'mssql';
import { config } from 'dotenv';
import {connectDb} from './db.js';
import {buildAPP} from './app.js';

(async () => {
    config();
    await connectDb();
    buildAPP();
})();

// // define the route
// app.get('/books', (req, res) => {

// //retrieve data from the database
// sql.connect(connectionString, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     // create request object
//     var request = new sql.Request();

//     // query to the database and get the records
//     request.query('select * from books, authors', (err, recordset) => {

//         if (err) {
//             console.log(err)
//         }

//         // send records as a response
//         res.send(recordset);
//     });
// });
// });

// start the server

