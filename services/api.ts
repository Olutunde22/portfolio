import Axios from 'axios'
const GITHUB_BASE_URL = 'https://api.github.com'

export const getGitHubRepos = async () => {
    try {
        const userRepos = await Axios.get(`${GITHUB_BASE_URL}/users/olutunde22/repos?per_page=4&page=1&sort=pushed`)
        return userRepos.data
    } catch (err) {
        console.log(err);
    }
}

export const getProjects = async () => {
    try {
        const userRepos = await Axios.get('/api/projects')
        return userRepos.data
    } catch (err) {
        console.log(err);
    }
}