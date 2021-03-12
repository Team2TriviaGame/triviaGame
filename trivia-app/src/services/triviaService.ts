import axios from 'axios';
import Question from '../questions/question';

class TriviaService {
    private URI: string
    constructor() {
        this.URI = 'https://opentdb.com/api.php?';
    }

    getQuestions(amount: number = 10, category: number = 18, difficulty: string = 'medium', type: string = 'multiple'): Promise<Question[]> {
        return axios.get(`${this.URI}amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`).then((response) => {
            let questions: Question[] = response.data.results;
            return questions;
        });
    }
}

export default new TriviaService();