import { FormEvent, useState, useEffect } from "react";
import axios from 'axios';

const EventoCard = ({ nombre, fecha_hora, lugar, imagenUrl }) => {
    return (
        <div className="grid grid-cols-5 gap-0 rounded overflow-hidden shadow-lg bg-dialog-input p-2
        items-center">
            <img src={imagenUrl} alt={nombre} className="w-max-full h-48 object-contain" />
            <div className="col-span-3 px-2 py-2">
                <div className="font-bold text-xl mb-2">{nombre}</div>
                <p className="text-gray-700 text-base mb-2">Fecha: {fecha_hora}</p>
                <p className="text-gray-700 text-base">Lugar: {lugar}</p>
            </div>
        </div>
    );
};

export default function Form() {
    const [responseMessage, setResponseMessage] = useState("");
    const [listTipoSangre, setListTipoSangre] = useState([]);
    const [listGenero, setListGenero] = useState([]);
    const [listPais, setLisPais] = useState([]);
    const [listEvento, setListEvento] = useState([]);
    const [formData, setFormData] = useState({
        cedula: "1000",
        nombre: "Juan Perez",
        correo: "juan.perez@example.com",
        telefono: "123-456-7890",
        fecha_nacimiento: "1990-01-01",
        id_genero: 2,
        id_tipo_sangre: 2,
        id_evento: 4,
        ciudad: "Ciudad Ejemplo",
        eps: "EPS Ejemplo",
        nombre_emergencia: "Maria Perez",
        telefono_emergencia: "987-654-3210"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormulario) => ({
            ...prevFormulario,
            [name]: value,
        }));
    };


    const submit = (event) => {
        event.preventDefault();
        console.log(event.target)
    }
    useEffect(() => {
        getListGenero()
        getListTipoSangre()
        getListPais()
        getListEventosActivos()
    }, [])

    const getListPais = async () => {
        await axios.get('http://localhost:3001/pais/activos')
            .then(response => {
                console.log(response.data)
                setLisPais(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const getListEventosActivos = async () => {
        await axios.get('http://localhost:3001/evento/activos')
            .then(response => {
                console.log(response.data)
                setListEvento(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const getListGenero = async () => {
        await axios.get('http://localhost:3001/genero')
            .then(response => {
                console.log(response.data)
                setListGenero(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const getListTipoSangre = async () => {
        await axios.get('http://localhost:3001/sangre')
            .then(response => {
                console.log(response.data)
                setListTipoSangre(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const evento = {
        nombre: 'Nombre del Evento',
        fecha_hora: '2024-01-23',
        lugar: 'Lugar del Evento',
        imagenUrl: 'pais/CO.webp',
    };

    return (
        <form onSubmit={submit}
            id="form_registro"
            className="min-w-[50%] mx-auto bg-dialog-back p-6 rounded-md shadow-md font-abc"
        >
            <EventoCard {...evento} />

            <div className="mb-4">
                <label htmlFor="cedula" className="block text-dialog-text font-semibold mb-2"
                >Cédula</label>
                <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.cedula}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="nombre" className="block text-dialog-text font-semibold mb-2"
                >Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="correo" className="block text-dialog-text font-semibold mb-2"
                >Correo</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.correo}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="telefono" className="block text-dialog-text font-semibold mb-2"
                >Teléfono</label>
                <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.telefono}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="fecha_nacimiento"
                    className="block text-dialog-text font-semibold mb-2"
                >Fecha de Nacimiento</label>
                <input
                    type="date"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="ciudad" className="block text-dialog-text font-semibold mb-2"
                >Ciudad</label>
                <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.ciudad}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="eps" className="block text-dialog-text font-semibold mb-2"
                >EPS</label>
                <input
                    type="text"
                    id="eps"
                    name="eps"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.eps}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="id_tipo_sangre" className="block text-dialog-text font-semibold mb-2"
                >Grupo Sanguíneo</label>
                <select
                    id="id_tipo_sangre"
                    name="id_tipo_sangre"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.eps}
                    onChange={handleChange}
                >
                    {listTipoSangre.map(tipo => {
                        return <option value={tipo.id}>{tipo.grupo}</option>
                    })}
                </select>
            </div>

            <div className="mb-4">
                <label
                    htmlFor="nombre_emergencia"
                    className="block text-dialog-text font-semibold mb-2"
                >Nombre del contacto de emergencia</label>
                <input
                    type="text"
                    id="nombre_emergencia"
                    name="nombre_emergencia"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.nombre_emergencia}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="telefono_emergencia"
                    className="block text-dialog-text font-semibold mb-2"
                >Teléfono del contacto de emergencia</label>
                <input
                    type="text"
                    id="telefono_emergencia"
                    name="telefono_emergencia"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                    value={formData.telefono_emergencia}
                    onChange={handleChange}
                />
            </div>

            <div className="mt-6">
                <button type="submit"
                    className="w-full bg-primary text-secondary rounded-full py-2 px-4 hover:bg-primary/80 focus:outline-none focus:bg-primary">
                    Enviar</button>
            </div>
        </form>

    );
}