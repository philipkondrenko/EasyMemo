import { useEffect, useState } from "react"

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
                return <p key={note._id}>{note.title}</p>
            })}
        </div>
    </div>)
}

export default Home