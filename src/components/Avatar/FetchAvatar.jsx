import axios from "axios";

axios.defaults.baseURL = 'https://water-tracker.onrender.com/api/';

export const fetchAvatar = async () => { 
    const res = await axios.get('users/info');
    const { avatarURL } = res.data.user;
    return avatarURL;
}
