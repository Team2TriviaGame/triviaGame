import axios from 'axios';

class dbService {

    private URI: string;

    constructor() {
        this.URI = 'https://localhost:5000/';
    }

    getScores(): Promise<any> {
        return axios.get(this.URI+'api/Game/scores').then(result => result.data);
    }

    getTopScore(range: number): Promise<any> {
        return axios.get(this.URI+'api/Game/scores/' + range).then(result => result.data);
    }

    postUserInfo(): Promise<any> {
        return axios.get(this.URI+'api/Game/score').then(result => result.data);
    }
}

export default new dbService();