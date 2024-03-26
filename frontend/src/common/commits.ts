import Api from './api';

class Commits {
    static async getAll() {
        return await Api.get('commits');
    }
}

export default Commits;
