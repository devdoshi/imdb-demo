import express from 'express';
import cors from 'cors';
import {router as searchService} from './services/search-service';

const server = express();
server.use(cors());
server.use('/search', searchService);

const port = 4000;

server.listen(port, () => {
	console.log(`api server running on port ${port}.`);
});