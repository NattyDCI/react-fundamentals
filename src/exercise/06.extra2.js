import * as React from "react"

function UsernameForm({onSubmitUsername}){
 const [error, setError] = React.useState(null)
 
 function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
    console.log("event", event.target.elements)
 }

 function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : "Username must be lowercase")


 }

 return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="usernameInput">
                <input type="text" id="usernameInput" onChange={handleChange}/>
                <div role="alert" style={{color:"red"}}>{error}</div>
            </label>
        </div>
    </form>
 )
}




function App() {
    
    const onSubmitUsername = username => alert (`you entered ${username}`)

    return (
        <div style={{minWidth: 400}}>
            <UsernameForm onSubmitUsername={onSubmitUsername} />
        </div>
    )
}
export default App