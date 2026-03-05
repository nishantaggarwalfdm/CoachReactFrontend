import axios from 'axios';


const API_URL = "https://coach-backend-79505229087.northamerica-northeast1.run.app";

class CoachService {
    getAllCoaches() {
        return axios.get(API_URL);
    }

    getCoachById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createCoach(coach) {
        return axios.post(API_URL, coach);
    }
}

export default new CoachService();