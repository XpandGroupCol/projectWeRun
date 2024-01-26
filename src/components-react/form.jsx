import { useState, useEffect } from "react";
import axios from 'axios';

export default function Form({ idEvento, changeEvent, nombreEvento, changeMensaje }) {
    const [listTipoSangre, setListTipoSangre] = useState([]);
    const [listGenero, setListGenero] = useState([]);
    // const [usuarioDB, setUsuarioDB] = useState(false);
    // const [usuarioCampana, setUsuarioCampana] = useState(false);
    const [formData, setFormData] = useState({
        cedula: "",
        nombre: "",
        correo: "",
        telefono: "",
        fecha_nacimiento: "",
        id_genero: 1,
        id_tipo_sangre: 1,
        id_evento: idEvento,
        ciudad: "",
        eps: "",
        nombre_emergencia: "",
        telefono_emergencia: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormulario) => ({
            ...prevFormulario,
            [name]: value,
        }));
    };


    const submit = async (event) => {
        event.preventDefault();
        const usuarioDB = await crearUsuarioDB()
        const usuarioCampana = await crearUsuarioCampana()

        if (usuarioDB && usuarioCampana) {
            changeMensaje("Registro exitoso")
        } else {
            changeMensaje("No se pudo realizar el registro, intenta más tarde")
            console.log(usuarioDB, usuarioCampana)
        }
        changeEvent(-2)
    }

    useEffect(() => {
        console.log(idEvento)
        getListGenero()
        getListTipoSangre()
    }, [])


    const getListGenero = async () => {
        await axios.get('http://localhost:3001/genero')
            .then(response => {
                setListGenero(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const getListTipoSangre = async () => {
        await axios.get('http://localhost:3001/sangre')
            .then(response => {
                setListTipoSangre(response.data)
            })
            .catch(error => {
                console.error('Error obteniendo la lista:', error)
            });
    }

    const crearUsuarioDB = async () => {
        try {
            const response = await axios.post('http://localhost:3001/usuario/', formData);
            console.log(response.data);
            return true
        } catch (error) {
            console.error('Error creando usuario:', error.response?.data?.error);
            return false
        }
    };

    const crearUsuarioCampana = async () => {
        try {
            const response = await axios.post('http://localhost:3001/active-campaign/crear', formData);
            console.log(response.data);
            return true
        } catch (error) {
            console.error('Error creando usuario:', error.response?.data?.error);
            return false
        }
    };

    const checkRegistroUsuario = () => {

    }

    return (
        <form onSubmit={submit}
            id="form_registro"
            className="min-w-[50%]  bg-dialog-back p-6 rounded-md font-abc"
        >
            <h1 className="text-center font-abc pt-2">
                Completa el formulario y tu inscripción estará lista para {nombreEvento}
            </h1>

            <button type="button" onClick={() => changeEvent(-1)}
                className="w-[50%] bg-dialog-input text-dialog-text text-xs rounded-full py-2 px-4 
                hover:bg-dialog-input/20 focus:outline-none focus:bg-dialog-input mb-4">
                Cambiar de evento</button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3">


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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_genero" className="block text-dialog-text font-semibold mb-2"
                    >Género</label>
                    <select
                        id="id_genero"
                        name="id_genero"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                        value={formData.id_genero}
                        onChange={handleChange}
                    >
                        {listGenero.map(genero => {
                            let valor = "Prefiero No Decirlo"
                            switch (genero.id) {
                                case 1:
                                    valor = "Masculino"
                                    break
                                case 2:
                                    valor = "Femenino"
                                    break
                                default:
                                    valor = "Prefiero No Decirlo"
                            }
                            return <option value={genero.id} key={genero.id}>{valor}</option>
                        })}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="id_tipo_sangre" className="block text-dialog-text font-semibold mb-2"
                    >Grupo Sanguíneo</label>
                    <select
                        id="id_tipo_sangre"
                        name="id_tipo_sangre"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none 
                    focus:border-third color-dialog-text bg-dialog-input"
                        value={formData.id_tipo_sangre}
                        onChange={handleChange}
                    >
                        {listTipoSangre.map(tipo => {
                            return <option value={tipo.id} key={tipo.id}>{tipo.grupo}</option>
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
                        required
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
                        required
                    />
                </div>
            </div>

            <div className="mt-6 text-center">
                <button type="submit"
                    className="w-full lg:w-[50%] bg-primary text-secondary rounded-full py-2 px-4 hover:bg-primary/80 focus:outline-none focus:bg-primary">
                    Enviar</button>
            </div>
        </form>

    );
}