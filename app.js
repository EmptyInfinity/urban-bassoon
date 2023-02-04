import express from 'express';

export const buildAPP =  (db) => {
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('base')
  })
  
  app.get('/books',async (req, res) => {
    await db.query('select * from books', (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows)
    });
  })

  app.get('/books/:id',async (req, res) => {
    const {id} = req.params;
    await db.query(`select * from books where id = ${id}`, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows[0])
    });
  })
  
  app.get('/users', async (req, res) => {
    await db.query('select * from users', (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows)
    });
  })
  
  
  app.get('/users/:id',async (req, res) => {
    const {id} = req.params;
    await db.query(`select * from users where id = ${id}`, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows[0])
    });
  })

  const port = process.env.PORT ?? 2525;
  app.listen(port, () => console.log(`Server up and running on port ${port}!`));
  return app;
}