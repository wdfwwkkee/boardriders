import axios from "axios";

export const boardService = {
    async getPromo() {
        const responce = await axios.get("http://localhost:8000/promo");
        return responce.data;
    },
    async getNewsItem() {
        const responce = await axios.get("http://localhost:8000/news");
        return responce.data;
    }
}