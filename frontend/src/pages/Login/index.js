import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    async function toLogin(e) {
        e.preventDefault();

        const data = { name, pass };

        try {
            const response = await api.post('/', data);

            if(!response.data.id) {
                alert('Seller do not exists');
                return;
            }

            history.push(`/new-client/${response.data.id}`)
        
        } catch(err){
            alert('User not exists');
        }
    }
    
    return (
        <div className="login-container">
            <form className="formulary" onSubmit={toLogin}>
                User:
                <input 
                    type="text" 
                    className="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                Password:
                <input 
                    type="password" 
                    className="pass" 
                    value={pass} 
                    onChange={e => setPass(e.target.value)}
                />
                <button type="submit" className="btn-login">Login</button>
            </form>
        </div>
    );
}
