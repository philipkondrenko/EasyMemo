import { useEffect, useState } from "react"
import Note from '../components/Note'

const Home = () => {
    const [notes, setNotes] = useState(null)
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes')
            const json = await response.json()
            if (response.ok) {
                setNotes(json)
            }
        }
        fetchNotes()
    }, [])

    return (<div>
        <div className="notes">
            {notes && notes.map((note) => {
                return <Note key={note._id} note={note} />
            })}
        </div>
    </div>)
}

export default Home