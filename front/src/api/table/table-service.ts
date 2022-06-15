import {API_URL} from "../../common/constants";
import axios from "axios";

class TableService {
    async getAllDataTable() {
        const response = await axios.get(`${API_URL}`);
        if(!response) {
            throw new Error();
        }
        const data = await response.data;
        return data;
    }
}

const tableService = new TableService();
export default tableService;