import axios from 'axios';
const url = "/api/post"

export default class API {
    // get all items
    static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
    }

      // get items by ID
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
        }

        // insert items in Database
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
        }

          // update items in Database
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
        } 

         // supprimer
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
        }
}