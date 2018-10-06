const searchForSeries = async (title, apiKey, app) => {
    const seriesResult = [];
    const repsonse = await app.search({ title: title }, { apiKey: apiKey });
    repsonse.results.forEach(result => {
        if (result.type == 'series') {
            seriesResult.push(result)
        }
    });
    return seriesResult
}

export default searchForSeries;