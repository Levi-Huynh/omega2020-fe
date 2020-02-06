import axios from 'axios';

export const postImage = (formData, formConfig) => {
    const api = 'https://api.lambda-omega2020.com/demo_file';
    return axios.post(api, formData, formConfig)
        .then(res => {
        return res.data;
        })
        .catch(err => console.log(err.response));
};

