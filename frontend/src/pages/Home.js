import { useEffect } from 'react'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'
import Footer from '../components/Footer'
import { useNotesContext } from '../hooks/useNotesContext'

const Home = () => {
    const { notes, dispatch } = useNotesContext()

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json })
            }
        }
        fetchNotes()
    }, [])

    return (<div className="container">
        <NoteForm />
        <h4>All Notes</h4>
        <div className="notes">
            {notes && notes.map((note) => {
                return <Note key={note._id} note={note} />
            })}
        </div>
        <Footer />
    </div>)
}

export default Home