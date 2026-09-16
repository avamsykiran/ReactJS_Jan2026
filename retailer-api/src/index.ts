import app from './app.js';

const PORT = 9999;

app.listen(PORT, () => {
  console.log(`Server executing at http://localhost:${PORT}`);
});