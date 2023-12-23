import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://build-task-manserver.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;