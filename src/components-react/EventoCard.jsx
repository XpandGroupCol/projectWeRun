import dayjs from 'dayjs';

export default function EventoCard({ id, nombre, id_estado, fecha_hora, ciudad, lugar, bandera }) {
    const srcBandera = "pais/" + bandera + ".webp"
    const filter = id_estado === 3 ? "grayscale" : ""
    const handleClick = () => {
        console.log(id)
    }

    return (
        <div className="relative">
            <div className={`grid grid-cols-7 gap-0 rounded overflow-hidden bg-dialog-input p-2
        items-center font-abc  cursor-pointer  ${filter}
        hover:drop-shadow-md hover:bg-dialog-input/80`} onClick={handleClick}>
                <img src={srcBandera} alt={nombre} title="Colombia" className="w-max-full object-contain" />
                <div className="col-span-6 px-2 py-2">
                    <div className="font-bold text-sm mb-2 leading-3">{nombre}</div>
                    <p className="text-gray-700 text-xs">{dayjs(fecha_hora).subtract(5, 'hour').format("YYYY/MM/DD hh:mm A")}</p>
                    <p className="text-gray-700 text-xs">{ciudad}, {lugar}</p>
                </div>
            </div>
            {
                id_estado === 3 && <div className="absolute top-0 right-0 bg-red-500 text-white rounded p-1 transform translate-y-[50%] rotate-45">
                    <p className="font-bold">Pronto</p>
                </div>
            }

        </div>
    );
};
