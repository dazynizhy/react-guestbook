export function createPost(title,content){
    const _id = "" + Math.random();
    return {
        type: 'CREATE_POST',
        _id,
        title,
        content
    }
}

export function receivePost(posts) {
    return {
        type: 'RECEIVE_POST',
        posts: posts
    }
}

export function fetchPosts() {
    return (dispatch,getState) => {
        //fetch API
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(json => {
            dispatch(receivePost(json))
        }).catch(e =>{
            
        })
        //dispatch onFetch

        //dispatch receivePost
        //console.log(getState())
    }
}