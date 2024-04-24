import React, { useState } from 'react'

const Login1 = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [allEntry, setAllEntry] = useState([])

    let submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
        console.log(newEntry)
        setEmail = ""
        setPassword = ""
    }

    return (
        <div>
            <div className="container">
                <form action=""  onSubmit={submitForm} >
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" className="btn btn-primary" >LOGIN</button>
                </form>
            </div>
            <div className="row">
                <table className="table border border-2">
                    {
                        allEntry.map((cValue, index)=>{
                            return
                            <>
                            <tr key={index}>
                                <td>Email: {cValue.email}</td>
                                <br />
                                <td>Password: {cValue.password}</td>
                            </tr>
                            </>
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Login1