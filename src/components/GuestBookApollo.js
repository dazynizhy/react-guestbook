import React from 'react'
import gql from 'graphql-tag'
import { Query , graphql } from 'react-apollo'
import PostList from './PostList'
import NewPostFrom from './NewPostFrom'
import { Mutation  } from 'react-apollo'

const postsQuery = gql`
    query listPost {
    posts {
        id
        title
        tags {
        name
        }
        content
       
    }
    }
`
const createPostMutation = gql`
    mutation createPost($postData: PostData! ){
       post: createPost(data:$postData){
        id
        title
        content
        tags {
            name
        }
        }
    }
`

// class GuestBookApollo extends React.Component {
//     render() {
//         return (
//             <Query query={postsQuery}> 
//                 {({ data, loading, error }) =>{
//                     //console.log(data)
//                     if(loading) {
//                         return <div>Loading...</div>
//                     }
//                     return <PostList posts={data.posts} />
//                 }}
//             </Query>
//         )
//     }
// }


class GuestBookApollo extends React.Component {
    render() {
        //console.log(this.props)
        if(this.props.loading) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>  
            <Mutation 
            mutation={createPostMutation} 
            update={(cache,result) => {
                const {posts} = cache.readQuery({  query : postsQuery});
                const newPosts = [...posts , result.data.post ]
                cache.writeQuery({
                    query: postsQuery,
                    data: {posts: newPosts }
                })
            }}

            // ต้องไป qeury มาอีกรอบนึง ไม่ค่อยดี
            // refetchQueries={[
            //    {
            //     query :postsQuery
            //    } 
            // ]}
            >     
                {(createPostMutate) => {
                    return (
                        <NewPostFrom
                        onCreatePost={({title, content}) => {
                            const postData = {
                                title,
                                content
                            }
                            const variables = { postData }
                            createPostMutate({
                                variables
                            })
                        }} 
                        /> 
                    )
                }}
            </Mutation>   
            <PostList posts={this.props.posts} />
            </React.Fragment>
        )
    }
}


export default graphql(postsQuery, {
    props: (result) => {
        return {
            posts: result.data.posts,
            loading: result.data.loading

        }
    }
})(GuestBookApollo)