import { useState } from "react"

const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const note = { title, description }
        const response = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setError(null)
            console.log('new note added', json)
        }
    }

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h4>Create New Note</h4>
            <label>Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Description</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button>Create</button>
            <div className="error">{error}</div>
        </form>
    )
}

export default NoteForm