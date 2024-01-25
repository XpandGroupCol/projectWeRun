
import ListEventos from "../components-react/ListEventos";
import Form from "../components-react/Form";
import { useState } from "react";

export default function DivDialog() {
    const [idEvento, setIdEvento] = useState(-1)
    const [nombreEvento, setNombreEvento] = useState("")

    const changeEvent = (id) => {
        setIdEvento(id)
    }

    const changeNombre = (nombre) => {
        setNombreEvento(nombre)
    }


    return (
        <>
            {idEvento === -1 ? <ListEventos changeEvent={changeEvent} changeNombre={changeNombre} />
                : <Form idEvento={idEvento} changeEvent={changeEvent} nombreEvento={nombreEvento} />}
        </>
    );
};
