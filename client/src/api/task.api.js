import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/task/api/v1/task/",
});

export const getAllTasks = () => {
    return api.get("/");
};

export const getTask = (id) => {
    return api.get(`/${id}/`);
};

export const createTask = (data) => {
    return api.post("/", data);
};

export const updateTask = (id, data) => {
    return api.put(`/${id}/`, data);
}

export const deleteTask = (id) => {
    return api.delete(`/${id}`);
}
