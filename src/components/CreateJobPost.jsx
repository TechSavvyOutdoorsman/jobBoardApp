import { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




export default function CreateJobPost({ isAuth }) {

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')

    const postsCollectionRef = collection(db, 'posts')
    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            createdBy: auth.currentUser.displayName,
            author: {
                name: auth.currentUser.displayName, 
                id: auth.currentUser.uid  } 
        })
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        } 
    }, [])

    return (
        <div 
        className="d-flex align-items-center justify-content-center"
        style={{width: '100vw', height: '100vh'}}
        >
            <Form>
                <Form.Group>
                    <Form.Label>Job Title:</Form.Label>
                    <Form.Control type="text" placeholder="ex: Paralegal" onChange={(e) => {setTitle(e.target.value)}}></Form.Control>
                    <Form.Text className='text-muted'>Try to be as specific as possible</Form.Text>
                    
                </Form.Group >
                <Form.Group className="mt-3">
                    <Form.Label>Job Description:</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="ex: You will be shoveling hay 80 hours a week..." onChange={(event) => {setPostText(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className="mt-3">
                    <Button onClick={createPost} className="btn btn-primary">Create New Job Post</Button>
                </Form.Group>
            </Form>
        </div>
    )
}


