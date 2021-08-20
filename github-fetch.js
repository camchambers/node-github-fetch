const fetch = require('node-fetch')

const githubRequest = async (username) => {
    let response = await (fetch(
        `https://api.github.com/users/${username}`
    ));
    let json = await response.json();
    let summary = `Name: ${json.name}, URL: ${json.html_url}`
    console.log(summary);
}

githubRequest("camchambers");