import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cI7qa9pdlqy3N3QK9jtpkzUEYO4Ulva77VFPjzvHXVk'
    }

});