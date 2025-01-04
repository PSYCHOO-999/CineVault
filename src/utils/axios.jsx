import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjNkMDE4ZGU3YWNiYTViNDI4ZDQ4YWU5ZDYxMWZmMSIsIm5iZiI6MTczNTg0Njk2My43MzIsInN1YiI6IjY3NzZlYzMzODE2YjI4MTBkMTY2NzQ0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pXscJ7j5dZA58KE8NZAtcOWo8VQGPUMW4uGnbxRtOS0',
    },
});

export default instance;
