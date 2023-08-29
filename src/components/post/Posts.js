import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import CommentPage from "../../pages/CommentPage"
import { useStoreLocal } from "../../store";

export default function Posts({ topic_id }) {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])
    const setPostId = useStoreLocal((state) => state.setPostId)
    const setPostTitle = useStoreLocal((state) => state.setPostTitle)

    function handleClick(post) {
        console.log('fdjfhfbvhffuodfuod: ', post)
        setPostId(post.post_id);
        setPostTitle(post.post_title);

        navigate(`/comment`);
    }

    useEffect(() => {
        console.log("Topic:", topic_id)
        axios.get(`http://localhost:8083/api/forum/posts-topic/${topic_id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {
                posts.map((post, index) => (
                    <div key={index} >
                        {
                            console.log(post, index)
                        }

                        <div onClick={() => handleClick(post)}>
                            Post: {post.title}
                        </div>
                    </div >
                ))
            }
        </>
    )
}