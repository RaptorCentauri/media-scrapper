const getEpisodeInfo = async (id, apiKey, app) => {
    const episodeInfo = await app.getById(id, { apiKey: apiKey, timeout: 30000 })
    return episodeInfo;
}

export default getEpisodeInfo;