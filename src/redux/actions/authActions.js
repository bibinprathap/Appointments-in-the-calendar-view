export function isLoading(bool){
  return{
    type:'LOGIN_ATTEMPT',
    isLoading:bool
  }
}

export function loginSuccess(userData){
  return{
    type:'LOGIN_SUCCESS',
    userData
  }
}

export function loginFailed(error){
  return{
    type:'LOGIN_FAILED',
    error
  }
}

export function login(data){
  return dispatch => {
    dispatch(isLoading(true));
    return fetch('https://buyngo-dev1.herokuapp.com/v1/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":data.email,
        "password":data.password
      })
    })
    .then((response) => {
      if(response.status < 300){
        dispatch(isLoading(false))
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          dispatch(loginSuccess(responseJSON))
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          dispatch(isLoading(false))
          dispatch(loginFailed(responseJSON.error))
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      dispatch(isLoading(false))
      dispatch(loginFailed(error))
    })
  }
}
