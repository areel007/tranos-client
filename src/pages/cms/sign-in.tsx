import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

export const CMSSignIn = () => {
    const usernameInputRef = useRef<HTMLInputElement | null>(null);
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const [err, setErr] = useState("")
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Focus on the username input field when the component mounts
        usernameInputRef?.current?.focus();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, _: string) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://tranos-api.onrender.com/api/v1/auth/login", {
                username: form.username,
                password: form.password
            })

            if (response.status === 200) {
                window.sessionStorage.setItem('token', response.data.token)
                window.sessionStorage.setItem('isLoggedIn', 'true')
                window.sessionStorage.setItem('role', response.data.role)
                login();
                navigate('/cms/news-and-insights');
            }

            console.log(response.data.role);


        } catch (error) {
            console.error(error);
            setErr('Incorrect credentials')
        }
    }

    useEffect(() => {
        setTimeout(() => setErr(''), 5000)
    }, [err])

    return <main className="w-screen h-screen bg-gray-50 py-[100px]">
        <div className="max-w-[350px] w-[90%] mx-auto shadow p-[20px] flex flex-col gap-[10px] bg-white">
            <span className="text-[22px] text-tranos-primary">Sign In</span>

            <span className="text-[14px] text-red-600">{err}</span>
            <div className="flex flex-col gap-[10px]">
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e, form.username)} ref={usernameInputRef} className="p-[10px] shadow border w-full" />

                <input type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e, form.username)} className="p-[10px] shadow border w-full" />

                <button className="text-white bg-tranos-primary p-[10px]" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </main>
}