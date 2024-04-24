import React, { useState } from 'react'

const AdmitionForm = () => {
    let [Ename, setEname] = useState("")
    let [EmpId, setEmpId] = useState("")
    let [Dept, setDept] = useState("")
    let [DOB, setDOB] = useState("")
    let [Gender, setGender] = useState("")
    let [Email, setEmail] = useState("")
    let [Contact, setContact] = useState("")
    let [Image, setImage] = useState("")
    let [AllEntrey, setAllEntrey] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntrey = { Ename: Ename, EmpId: EmpId, Dept: Dept, DOB: DOB, Gender: Gender, Email: Email, Contact: Contact, Image: Image }
        setAllEntrey([...AllEntrey, newEntrey])
        setEname("")
        setEmpId("")
        setDept("")
        setDOB("")
        setGender("")
        setEmail("")
        setContact("")
        setImage("")
    }

    return (
        <>
            <div className="container bg-primary rounded my-5 w-50">
                <div className="row">
                    <div className="col">
                        <form action='' onSubmit={submitForm}>
                            <label htmlFor='Ename'>Ename</label>
                            <input type='text' name='Ename' value={Ename} id='Ename' className="form-control" onChange={(e) => { setEname(e.target.value) }} />
                            <label htmlFor='EmpId'>EmpId</label>
                            <input type='text' name='EmpId' value={EmpId} id='EmpId' className="form-control" onChange={(e) => { setEmpId(e.target.value) }} />
                            <label htmlFor='Dept'>Dept</label>
                            <input type='text' name='Dept' value={Dept} id='Dept' className="form-control" onChange={(e) => { setDept(e.target.value) }} />
                            <label htmlFor='DOB'>DOB</label>
                            <input type='date' name='DOB' value={DOB} id='DOB' className="form-control" />
                            <label htmlFor='Gender'>Gender</label>
                            <input type='text' name='Gender' value={Gender} id='Gender' className="form-control" onChange={(e) => { setGender(e.target.value) }} />
                            <label htmlFor='Email'>Email</label>
                            <input type='email' name='email' id='Email' value={Email} className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor='Contact'>Contact</label>
                            <input type='number' name='Contact' value={Contact} id='Contact' className="form-control " onChange={(e) => { setContact(e.target.value) }} />
                            <label htmlFor='Img'>ChooseImg</label>
                            <input type='text' name='img' value={Image} id='Img' className="form-control" onChange={(e) => { setImage(e.target.value) }} />
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <br />
                    <table className='table table-bordered bg- text-light w-50 mx-auto' style={{ backgroundColor: "pink" }}>
                        <thead>
                            <tr>
                                <th>Photo Url</th>
                                <th>Ename</th>
                                <th>EmpId</th>
                                <th>Dept</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllEntrey.map((cValue, index) => {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>
                                                    {/* {
                                                        AllEntrey.Image && (<img src={AllEntrey.Image} alt='Employe' className='img-fluid' />)
                                                    } */}
                                                    <img src={cValue.Image} alt="Emp" height={100} width={100} />
                                                </td>
                                                <td>{cValue.Ename}</td>

                                                <td>{cValue.EmpId}</td>

                                                <td>{cValue.Dept}</td>

                                                <td>{cValue.DOB}</td>

                                                <td>{cValue.Gender}</td>

                                                <td>{cValue.Email}</td>

                                                <td>{cValue.Contact}</td>


                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )

}

export default AdmitionForm