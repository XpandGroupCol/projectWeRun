
import { useState } from "react";

export default function MensajeForm({ mensaje, changeEvent }) {

    return (
        <div className="text-center font-abc">
            <h1 className="p-8 text-2xl">
                {mensaje}
            </h1>
            <button type="button" onClick={() => changeEvent(-1)}
                className="w-full lg:w-[50%]  bg-primary text-secondary rounded-full py-2 px-4 
                hover:bg-primary/80 focus:outline-none focus:bg-primary">
                Hacer otra inscripción</button>
        </div>
    );
};
