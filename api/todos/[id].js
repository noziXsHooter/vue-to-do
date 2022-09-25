export default function handler(req, res) {

    var pg = require('pg');
    var conString = "postgres://tmdfyodj:m5RipS-70x_0rCUB_Nndh_dJ7sAPP9fS@kesavan.db.elephantsql.com/tmdfyodj" //Can be found in the Details page
    var client = new pg.Client(conString);


    if(req.method === 'PUT'){
    
      var { id } = req.query;

         if(req.query){
          client.connect(function(err) {
            if(err) {
              return console.error('could not connect to postgres', err);
            }
            client.query(`UPDATE todos SET title='${req.body.title}', completed=${req.body.completed} WHERE id=${id};`, function(err, result) {
              if(err) {
                return console.error('error running query', err);
              }
              res.status(200).json(`The todo id=${id} was updated!`);
              console.log(req.query)
              console.log(req.body)
            client.end();
          });
        });
     }
      
    }else if(req.method === 'DELETE'){

          var { id } = req.query;


          client.connect(function(err) {
            if(err) {
              return console.error('could not connect to postgres', err);
            }
            client.query(`DELETE FROM todos WHERE id='${id}'`, function(err, result) {
              if(err) {
                return console.error('error running query', err);
              }
              res.status(200).json(`The todo id=${id} was deleted!`);
            client.end();
          });
        });
    }
}
