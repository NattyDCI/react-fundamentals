import * as React from "react";

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = React.useState("")

    function handleSubmit (event) {
        event.preventDefault()
        onSubmitUsername(username)
    }

    function handleChange(event) {
        setUsername(event.target.value.toLowerCase())
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="usernameInput"> Username:
            <input 
            type="text"
            id="usernameInput"
            onChange={handleChange}
            value={username} />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    )



}



function App() {
    const onSubmitUsername = username => {
        alert(`you have entered: ${username}`)
    }
    return (
        <div style={{minWidth: 400}}>
            <UsernameForm onSubmitUsername={onSubmitUsername}/>
        </div>
    )
}

export default App