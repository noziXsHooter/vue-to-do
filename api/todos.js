export default function handler(req, res, id) {

      var pg = require('pg');
      var conString = "postgres://tmdfyodj:m5RipS-70x_0rCUB_Nndh_dJ7sAPP9fS@kesavan.db.elephantsql.com/tmdfyodj" //Can be found in the Details page
      var client = new pg.Client(conString);

      if(req.method === 'GET'){

         client.connect(function(err) {
          if(err) {
            return console.error('could not connect to postgres', err);
          }
          client.query('SELECT * from todos', function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            res.status(200).send(result.rows)
            client.end();
          });
        });


      }else if(req.method === 'POST'){
          client.connect(function(err) {
          if(err) {
            return console.error('could not connect to postgres', err);
          }
          client.query(`INSERT INTO todos (title, completed) VALUES ('${req.body.title}',${req.body.completed})`, function(err, result) {
            if(err) {
              return console.error('error running query', err);
            }
            res.status(200).json(req.body);
            console.log(req.body)
          client.end();
        });
      });


      }else if(req.method === 'PUT'){
  


      }else if(req.method === 'DELETE'){

          /* let todo = [];
          const { id, what } = req.body;
          id = todo;
          res.status(200).json(todo); */
     //     res.status(200).json(req.body);

          //todo = todo.filter((_, i) => i !== id)
      }
  }
 