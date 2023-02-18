import * as React from "react";


function UsernameForm({onSubmitUsername}) {
    const usernameInputRef = React.useRef()

    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(usernameInputRef.current.value)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">Username:</label>
                <input type="text" ref={usernameInputRef}/>
                <button type="submit">Submit</button>
            </div>
        </form>
    )

}


function App(){
    const onSubmitUsername = username => alert (`you entered: "$(username)`)

    return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App