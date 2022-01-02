import { useState, useEffect } from 'react'
import { auth, db } from '../firebase-config'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

import { Button } from 'react-bootstrap'
import '../../scss/main.scss'
import { updateCurrentUser } from '@firebase/auth'

const Home = ({ isAuth }) => {

    const [postLists, setPostList] = useState([])
    const postsCollectionRef = collection(db, 'posts')


    useEffect(() => { 
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id, }))) 
        }
        getPosts()
    })

    const deletePost = async (id) => { 
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc)
    }

    return (
        <section>
            <div className="wrapper">

                <div className="bg bg-white"
                style={{ height: '100vh', width: '100vw'}}
                >

                  <div className="d-flex justify-content-center align-items-center">
                    {postLists.map((post) => {
                        return(
                            <div className="post">
                                <div className="post-title"><h3>{post.title}</h3></div>
                                <div className="post-author"><h5>{post.createdBy}</h5></div>
                                <div className="post-description"><p>{post.postText}</p></div>
                                <div className="delete-post">
                                    {isAuth && post.author.id === auth.currentUser.uid &&
                                    <Button className="btn btn-danger" onClick={() => {deletePost(post.id)}}>Delete post</Button>
                                    }
                                </div>
                            </div>
                        )
                    })}

                  </div>

                </div>

            </div>
        </section>
    )
}

export default Home