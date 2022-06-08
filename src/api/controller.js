import APIService from "./service"

export const GetEntries = () => {
    let url = 'https://api.publicapis.org/entries'
    return APIService.makeAPICall(url).then(res => {
        return res
    })
}