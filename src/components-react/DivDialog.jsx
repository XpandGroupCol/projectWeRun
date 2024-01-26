
import ListEventos from "../components-react/ListEventos";
import Form from "../components-react/Form";
import MensajeForm from "../components-react/MensajeForm";
import { useState } from "react";

export default function DivDialog() {
    const [idEvento, setIdEvento] = useState(-1)
    const [nombreEvento, setNombreEvento] = useState("")
    const [mensaje, setMensaje] = useState("")

    const changeEvent = (id) => {
        setIdEvento(id)
    }

    const changeNombre = (nombre) => {
        setNombreEvento(nombre)
    }

    const changeMensaje = (msj) => {
        setMensaje(msj)
    }


    return (
        <>
            {idEvento === -1 ?
                <ListEventos changeEvent={changeEvent} changeNombre={changeNombre} />
                : idEvento === -2 ?
                    <MensajeForm mensaje={mensaje} changeEvent={changeEvent} />
                    : <Form idEvento={idEvento} changeEvent={changeEvent} nombreEvento={nombreEvento}
                        changeMensaje={changeMensaje} />}
        </>
    );
};
