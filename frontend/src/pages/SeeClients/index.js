import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function SeeClients() {
    const [clients, setClients] = useState([]);
    const [clientToDelete, setDelete] = useState(0); 

    const id = localStorage.getItem('id_vendor');

    useEffect(() => {
        SeeAllClients();
    }, []);

    async function SeeAllClients() {
        const response = await api.get('/list');

        setClients(response.data);
    }

    async function deleteRegister(id) {
        try {
            const response = await api.delete(`/delete/${id}`);
        
            console.log(response.data);
        

            setClients(clients.filter(client => client.id !== id));
        } catch (err) {
            alert('deu ruim');
        }
        
    }

    return (
        <>
        <Link to={`/new-client/${id}`}>
            <FiArrowLeft size={30} color="#ff1a1a"/>
        </Link>
        <div className="principal-container">
           
            <table className="table-principal">
                <tbody>
                <tr className="initial-row">
                    <td>Name</td>
                    <td>Game ID</td>
                    <td>Value</td>
                    <td>Diamonds</td>
                    <td className="delete-column">Details</td>
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
                        <td>
                            <button onClick={() => deleteRegister(client.id)} type="button">
                                <FiTrash size={20} color="#000"/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
