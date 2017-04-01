import {Router} from 'express';
import {imdbApiClient} from '../clients/imdb-api-client';

const router = Router();
router.get('/:query', (req, res) => {
	imdbApiClient
		.fetchEpisodesForSeries(
			req.params.query,
			(err, result) => {
				if (err) {
					res.status(400).send(JSON.stringify(err));
				}
				else {
					res.send(JSON.stringify(result, null, '\t'));
				}
			}
		);
});

export {
	router
}