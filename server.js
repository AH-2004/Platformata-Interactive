import express from 'express';
import { readFileSync } from 'fs';

const app = express();
const port = 8080;

app.use(express.static('./'));
app.use(express.static('./render'));
app.use(express.static('./lib'));

app.get('/', (req, res) => { res.send(readFileSync('./render/index.html', 'utf8')); });


app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
