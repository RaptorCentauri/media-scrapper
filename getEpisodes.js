const getEpisodes = async (id, apiKey, app) => {
   const series = await  app.getById(id, {apiKey: apiKey, timeout: 30000})
   const episodes = await series.episodes();
   return episodes;
}

export default getEpisodes;