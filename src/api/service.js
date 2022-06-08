class APIService{
    static makeAPICall = (url) => {
        return fetch(url,{method: 'GET', mode: 'cors'}).then(res => {
            return res.json()
        }).then(data => {
            return data
        })
    }
}

export default APIService;