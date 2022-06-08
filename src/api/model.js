import { GetEntries } from './controller'

class API{
    static getEntries = () => {
        let response;
        return GetEntries().then(res => {
            response = res
            return response
        })
    }
}

export default API;