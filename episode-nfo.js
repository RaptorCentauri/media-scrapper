
const writeNFO = (title, season, episode, plot) => {

 let file = `<episodedetails>
    <title>${title}</title>
    <season>${season}</season>
    <episode>${episode}</episode>
    <plot>${plot}</plot>
</episodedetails>
`

    return file
}


export default writeNFO;