import { useNotesContext } from '../hooks/useNotesContext'

const Note = ({ note }) => {
    const { dispatch } = useNotesContext()

    const handleClick = async () => {
        const response = await fetch('/api/notes/' + note._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: json })
        }
    }
    return (
        <div className="note">
            <h4>{note.title}</h4>
            <p>{note.description}</p>
            <p>{note.createdAt}</p>
            <span onClick={handleClick} className='delete-btn'>delete</span>
        </div>
    )
}

export default Note