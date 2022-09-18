export default function handler(req, res) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10520414",
    password: "1rdp8nDqZw",
    database: "sql10520414"
    });

    if(req.method === 'GET'){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
                con.query("SELECT * FROM todos", function (err, result) {
                  if (err) throw err;
                  res.json(result)
                });
              });
    }else{

    }
}

/* import fetch from 'node-fetch';

export default async function handler(request, response) {
  const res = await fetch('https://...', {
    method: 'POST',
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  return response.status(200).json({ data });
} */
/* export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
 */


/* export default function handler(req, res) {

    var pg = require('pg');
    
    var conString = "postgres://lwqyuhtv:EzE5KaKPGJd7aP7NfylHC_PLLzVOxVGM@kesavan.db.elephantsql.com/lwqyuhtv"
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT * from gestores', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        res.status(200).send(result.rows)
        client.end();
      });
    });  
    } */