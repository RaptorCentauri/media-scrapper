import fs from 'fs-extra';
import writeNFO from './episode-nfo';

const imdb = require('imdb-api');
const apiKey = '40e9cece';


const getEpisodeInfo = (id, apiKey) => {
    imdb.getReq({ id: id, opts: { apiKey: apiKey } }).then(result => {
        console.log('===============================================================');
        console.log(`Season #: ${result.season}`);
        console.log(`Episode #: ${result.episode}`);
        console.log(`Name: ${result.name}`);
        console.log(`Plot: ${result.plot}`);
        console.log(result);
        
        console.log('===============================================================');

        fs.outputFile(`./Episodes/${result.name}.nfo`, writeNFO(result.name, result.season, result.episode, result.plot))
    })
}

const getSeriesInfo = (id, apiKey) => {
    imdb.getReq({ id: id, opts: { apiKey: apiKey } }).then(result => {
        result.episodes().then(eps => {
            eps.forEach(ep => {
                getEpisodeInfo(ep.imdbid, apiKey);
                

                // console.log(`Season: ${ep.season}\n Episode: ${ep.episode}\n Name: ${ep.name}`);
                // epIDs.push(ep.imdbid);
            });
            // console.log(epIDs);

        });
    });


}

getSeriesInfo('tt0115082', apiKey);

// console.log(epIDs);


