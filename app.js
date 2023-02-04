import express from 'express';

export const buildAPP =  () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('base')
  })

  app.get('/books', (req, res) => {
    res.send('books')
  })

  app.get('/users', (req, res) => {
    res.send('users')
  })

  const port = process.env.PORT ?? 8080;
  app.listen(port, () => console.log(`Server up and running on port ${port}!`));
  return app;
}