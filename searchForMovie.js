const searchForMovie = async (title, apiKey, app) => {
    const movieResult = [];
    const repsonse = await app.search({ title: title }, { apiKey: apiKey });
    repsonse.results.forEach(result => {
        if (result.type == 'movie') {
            movieResult.push(result)
        }
    });
    return movieResult
}

export default searchForMovie;