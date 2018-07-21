import Cookies from 'universal-cookie';


export function loginSuccess(token) {
    return (dispatch) => {
        const cookies = new Cookies();
        cookies.set('token',token,{path:'/'})
        dispatch({
            type: 'LOGIN_SUCCESS',
            token
        })
    }
}

export function logout() {
    return (dispatch) => {
        const cookies = new Cookies();
        cookies.remove('token')
        dispatch({
            type: 'LOGOUT'
        })
    }
}