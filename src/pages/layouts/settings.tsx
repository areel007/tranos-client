import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

type TUser = {
    _id: string;
    username: string;
    password: string;
}

export const CMSSettings = () => {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
    })

    const [users, setUsers] = useState<TUser[] | null>(null)

    const [msg, setMsg] = useState("")

    const [step, setStep] = useState(1)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const getUsers = async () => {
        const response = await axios.get("https://tranos-api.onrender.com/api/v1/auth/users")

        setUsers(response.data)
    }

    const handleDeleteUser = async (_: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {

        try {
            await axios.delete(`https://tranos-api.onrender.com/api/v1/auth/users/${id}`)
            getUsers()


        } catch (error) {
            console.log(error);

        }

    }

    const handleAddUser = async () => {
        try {
            const response = await axios.post("https://tranos-api.onrender.com/api/v1/auth/register", {
                username: form.username,
                password: form.password
            })

            if (response.status === 200) {
                setMsg("New user added successfully.")
                getUsers()
                setStep(1)
            }
        } catch (error) {
            console.log(error);
            setMsg("Error creating new user")
        }

        setForm({
            username: "",
            password: ""
        })

        setTimeout(() => {
            setMsg("")
        }, 5000)
    }

    const editPassword = () => {
        setStep(3)
    }

    const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }

    const submitNewPassword = async () => {
        await axios.post("https://tranos-api.onrender.com/api/v1/auth/change-password", {
            username: 'super_admin',
            currentPassword: password.currentPassword,
            newPassword: password.newPassword,
        })

        setPassword({
            currentPassword: '',
            newPassword: ''
        })

    }

    useEffect(() => {
        getUsers()

    }, [])

    return <div className="w-[calc(100vw_-_300px)] relative left-[300px] z-[0]">
        <div className="p-[40px]">
            {
                window.sessionStorage.getItem('role') === "super admin" ? <div className="max-w-[300px]">
                    <span className="text-zinc-700 text-[14px] block mb-[10px]">{msg}</span>

                    <div className="mb-[40px] flex flex-col gap-[10px] max-w-[400px]">
                        {
                            users?.map((user, i) => <div key={i} className="flex justify-between shadow-md border hover:shadow p-[10px]">
                                <span className="capitalize">
                                    {user.username === "super_admin" ? "super admin" : <span>
                                        <span>admin</span> - <span className="lowercase">({user.username})</span>
                                    </span>}
                                </span>

                                {
                                    user.username === "super_admin" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-zinc-800 cursor-pointer" onClick={editPassword}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                        : null
                                }

                                {user.username === "super_admin" ? null : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer text-red-500" onClick={(e) => handleDeleteUser(e, user._id)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>}

                            </div>)
                        }
                    </div>

                    <div className="flex gap-[10px] flex-col">
                        {
                            step === 1 ? <button className="p-[10px] bg-tranos-primary text-white" onClick={() => setStep(2)}>Add new user</button> : null
                        }
                        {
                            step === 1 ? null : step === 2 ? <div className="flex flex-col gap-[10px]">

                                <input type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange} className="p-[10px] shadow border w-full" />
                                <input type="password" name="password" value={form.password} placeholder="password" onChange={handleChange} className="p-[10px] shadow border w-full" />
                                <button className="p-[10px] bg-tranos-primary text-white" onClick={handleAddUser}>Submit</button>
                            </div> : <div className="flex flex-col gap-[10px]">
                                <input type="password" name="currentPassword" value={password.currentPassword} placeholder="Current Password" onChange={onchangePassword} className="p-[10px] shadow border w-full" />
                                <input type="password" name="newPassword" value={password.newPassword} placeholder="New Password" onChange={onchangePassword} className="p-[10px] shadow border w-full" />
                                <button className="p-[10px] bg-tranos-primary text-white" onClick={submitNewPassword}>Change Password</button>
                            </div>
                        }
                    </div>
                </div> : <div>
                    Only super admin is allowed to this route. Thanks for your understanding :)
                </div>
            }
        </div>
    </div>
}