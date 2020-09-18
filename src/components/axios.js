import axios from "axios";

const instance = axios.create({
  baseURL: "https://mernolithv2.herokuapp.com/",
});

export default instance;
