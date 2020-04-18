import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.css'

export default function SeeClients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        SeeAllClients();
    }, []);

    async function SeeAllClients() {
        const response = await api.get('/list');

        console.log(response.data);

        setClients(response.data);
    }
    
    return (
        <div className="principal-container">
            <table className="table-principal">
                <tbody>
                <tr className="initial-row">
                    <td>Name</td>
                    <td>Game ID</td>
                    <td>Value</td>
                    <td>Diamonds</td>
                </tr>
                {clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.id_game}</td>
                        <td>{Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(client.value)}
                        </td>
                        <td>{client.diamonds}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
