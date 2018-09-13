import axios from 'axios';
import qs from 'query-string';

const DEV_API_PATH = 'http://localhost:53950';

class Api {
    constructor() {
        this.client = axios.create({
            baseURL: DEV_API_PATH + '/api',
        });
    }

    request(url, options) {
        options.url = url;

        return new Promise((resolve, reject) => {
            this.client(options)
                .then((data) => resolve(data))
                .catch((error) => {
                    reject(error.response);
                });
        });
    }

    /**
     * Perform get request
     * @param url
     */
    get(url){
        return this.request(url, {method: 'GET'});
    }

    /**
     * Perform post request
     * @param url
     * @param data
     */
    post(url, data){
        return this.request(url, {data, method: 'POST'});
    }

    /**
     * Perform put request
     * @param url
     * @param data
     */
    put(url, data){
        return this.request(url, {data, method: 'PUT'});
    }

    /**
     * Perform delete request
     * @param url
     * @param data
     */
    delete(url, data){
        return this.request(url, {data, method: 'DELETE'});
    }

    /**
     * Get places by selected tags. Returns all places, if no tags selected
     * @param tagsIds
     * @returns {*}
     */
    getPlaces(tagsIds){
        let tagsQuery = "";
        tagsIds && tagsIds.forEach(t => tagsQuery+=`&tagsIds=${t}`);
        return this.get(`/places?${tagsQuery.substring(1)}`);
    }


    /**
     * Get most popular tags
     * @returns {*}
     */
    getTopTags(){
        return this.get('/tags/top');
    }
}

export default new Api();