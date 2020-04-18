import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Logged() {
    const [name, setName] = useState('');
    const [id_game, setGame_id] = useState('');
    const [value, setValue] = useState('');
    const [diamonds, setDiamonds] = useState('');
    const history = useHistory();

    async function persistData(e) {
        e.preventDefault();

        const data = {
            name, 
            id_game,
            value,
            diamonds
        };

        try {
            await api.post('/new-client', data);

            eraseFields();

        } catch (error) {
            alert('Deu erro');
        }
    }

    function eraseFields() {
        setName('');
        setValue('');
        setGame_id('');
        setDiamonds('');
    }

    function goToSeeClients() {
        history.push('/list-clients');
    }

    return (
        <>
        <div className="logged-container">
            <form onSubmit={persistData}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input 
                    type="text" 
                    placeholder="Game id" 
                    className="game_id"
                    onChange={e => setGame_id(e.target.value)}
                    value={id_game}
                />
                <div className="input-group">
                    <input 
                        type="number" 
                        placeholder="Cost value"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                    <input 
                        type="number" 
                        placeholder="Diamonds"
                        onChange={e => setDiamonds(e.target.value)}
                        value={diamonds}
                    />
                </div>
                <button type="submit" className="btn-save">Save</button>
            </form>
        </div>
        <div className="footer">
            <button className="btn-see-clients" onClick={goToSeeClients}>See your clients</button>
            <button className="btn-back-home" onClick={() => history.push('/')}>Back to Home</button>
        </div>
        </>
    )
}
