import axios from "axios";

const API_KEY = '4c0121cef1178aa7f2a2808deb361a8a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;


export class MoviesService {

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

}