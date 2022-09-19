//import todosdb from './database.json';
import { readFileSync, writeFileSync, writeFile } from 'fs';

export default function handler(req, res) {
/*     var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10520414",
    password: "1rdp8nDqZw",
    database: "sql10520414"
    }); */
    if(req.method === 'GET'){
        try{
            const jsonString = readFileSync('./api/todolist.json', 'utf-8');
            let jsonTodos = JSON.parse(jsonString);
            console.log("File read successfully\n");
            res.status(200).json(jsonTodos);
          } catch(err) {
                console.log(err);
          }
        /* con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
                con.query("SELECT * FROM todos", function (err, result) {
                  if (err) throw err;
                  res.json(result)
                });
              }); */
    }else if(req.method === 'POST'){

           try{
            const jsonString = readFileSync('./api/todolist.json', 'utf-8');
            let jsonTodos = JSON.parse(jsonString);

            let keyTitle = JSON.stringify(req.body);
            let newKeyTitle = keyTitle.slice(1, -1);
            console.log(newKeyTitle);
            let fixedTodo = {"completed": false, "id": 6};
            let novo = fixedTodo.insert(2, "newKeyTitle");
            console.log(novo);
         //   let completedTitle = jsonTodos.unshift(newKeyTitle);

           // console.log(jsonTodos);
          //  let newKeyTitle = keyTitle.replace(/ { /g, '');


            //console.log(newKeyTitle);
            //const newkeyTitle = keyTitle.split({});

           // console.log(newkeyTitle);
 //           let fixedTodo = {keyTitle,"completed": false, "id": 6};
  //          console.log(fixedTodo);

 //           jsonTodos.todos.push(req.body);
 //           console.log(jsonTodos);
 //           res.status(200).json(jsonTodos);
            /* writeFile('./newdatabase.json', JSON.stringify(jsonTodos, null,2), err => {
              if (err)
                console.log(err);
              else {
                console.log("File written successfully\n");
                console.log(readFileSync("newdatabase.json", "utf8"));
              }
            }); */
            } catch(err) {
                console.log(err);
            }

    }else if(req.method === 'PUT'){

    }else if(req.method === 'DELETE'){

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