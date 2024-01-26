import { useState, useEffect } from "react";
import axios from 'axios';
import EventoCard from './EventoCard'

export default function ListEventos({ changeEvent, changeNombre }) {
    const [listPais, setLisPais] = useState([]);
    const [listEvento, setListEvento] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getListPais()
        await getListEventosActivos()
    }

    const getListPais = async () => {
        await axios.get('http://localhost:3001/pais/activos')
            .then(response => {
                setLisPais(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const getListEventosActivos = async () => {
        await axios.get('http://localhost:3001/evento/activos')
            .then(response => {
                setListEvento(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    return (
        <div className="min-w-[50%] bg-dialog-back p-6 rounded-md shadow-md font-abc grid gap-2">
            <h1 className="text-center font-abc pt-2">
                ESCOGE TU EVENTO
            </h1>
            <h3 className="text-center font-abc pt-2">
                Selecciona el evento al cual quieres asistir
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {listEvento.map(evento => {
                    const banderaPais = listPais.find(pais => pais.id === evento.id_pais)
                    evento.bandera = banderaPais.iniciales
                    return (
                        <div key={evento.id}
                            onClick={() => {
                                if (evento.id_estado === 1) {
                                    changeEvent(evento.id)
                                    changeNombre(evento.nombre)
                                }
                            }} >
                            <EventoCard {...evento} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}