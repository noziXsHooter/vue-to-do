export default function handler(req, res) {

      var pg = require('pg');
      //or native libpq bindings
      //var pg = require('pg').native

      var conString = "postgres://tmdfyodj:m5RipS-70x_0rCUB_Nndh_dJ7sAPP9fS@kesavan.db.elephantsql.com/tmdfyodj" //Can be found in the Details page
      var client = new pg.Client(conString);
      var getTodos = {
        "todos": [
          {
            "title": "Toma café",
            "completed": true,
            "id": 1
          },]}

      if(req.method === 'GET'){

         client.connect(function(err) {
          if(err) {
            return console.error('could not connect to postgres', err);
          }
          client.query('SELECT * from todos', function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
             // res.status(200).send(JSON. stringify({todos:result.rows}))
            res.status(200).send(result.rows)
            client.end();
          });
        });
      }else if(req.method === 'POST'){
  
  
      }else if(req.method === 'PUT'){
  
      }else if(req.method === 'DELETE'){
  
      }
  }
 