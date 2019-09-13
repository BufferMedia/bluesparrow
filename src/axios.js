import axios from 'axios'

export const API_URL = window.location.protocol+"//bluesparrowapi.herokuapp.com/api/v1";

const headers = () => {
    let item = localStorage.getItem('jwt_token')

    if(item !== null){
        item = JSON.parse(item);

        if(item.access_token === null || item.token_type === null || item.refresh === null){
            return false
        }
        return {bearer: item.bearer, token_type: item.token_type, refresh: item.refresh, time_expire: item.time_expire};
    }
    return false
}

const auth_token = headers();
const loader = document.getElementById('loader')

const instance = axios.create({
    baseURL: API_URL,
    headers: auth_token ? {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + auth_token.bearer,
    } : {}
})


const requestSuccess = (config) => { 
    if(!loader.classList.contains('loading')) {
        loader.classList.add('loading')
    }
    return config
}

const responseSuccess = (response) => { 
    if(loader.classList.contains('loading')) {
        loader.classList.remove('loading')
    }
    return response
}

const axiosError = (error) => {
    if(loader.classList.contains('loading')) {
        loader.classList.remove('loading')
    }
    return Promise.reject(error)
}

instance.interceptors.request.use((config) => requestSuccess(config), (error) => axiosError(error))

instance.interceptors.response.use((response) => responseSuccess(response), (error) => axiosError(error))

class Request {
    get = (url, params) => instance.get(`${API_URL}/${url}`, params)
    post = (url, params) => instance.post(`${API_URL}/${url}`, params)
    put = (url, params) => instance.put(`${API_URL}/${url}`, params)
    patch = (url, params) => instance.patch(`${API_URL}/${url}`, params)
    delete = (url, params) => instance.delete(`${API_URL}/${url}`, params)


    getHeaders = () => headers()
	isLoggedIn = () => {
		const headers = this.getHeaders()
		//console.log(`Bearer:${Bearer}, token: ${token_type}, refresh:${refresh}, time_ex:${time_expire}`)
		if(!headers){
			return false
		}

		//console.log(`Got to this point time:${time_expire}`)
		if(parseInt(headers.time_expire) != NaN){
			
			// const today = new Date()
			// const todayStamp = today.getTime();
			// const expired = (todayStamp >= time_expire) ? true : false;
			// if(expired)return false;
			
		}
		return true;
	}
    setHeaders = (headers) => {
        if(headers !== null && headers.bearer !== undefined){
    
            try {
    
                localStorage.setItem('jwt_token', JSON.stringify(headers))
            } catch(e) {
                console.error(e)
            }
        }
    
        console.error('Invalid jwt token received.')
    }
    getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    getContentType = () => {
        const cookie = this.getCookie('content_types');
        return cookie ? JSON.parse(cookie) : null
    }
    getCategories = () => {
        const cookie = this.getCookie('content_category');
        return cookie ? JSON.parse(cookie) : null
    }
    getMetadata = () => {
        const cookie = this.getCookie('metadata');
        return cookie ? JSON.parse(cookie) : null
    }
    setCookie = (name, value) => {
        var d = new Date();
	    document.cookie = name + "=" + value + ";path=/";
    }
}

export default new Request()