import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeError } from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponentInput from './Input';

const ConsultCity = ({ handleSubmit, onClick }) => {

    const [city, setCity] = useState({campo: '', valido: null});
    const [formValido, setFormValido] = useState(null);

    const expresiones = {city: /^[a-zA-ZÀ-ÿ\s]{3,35}$/}

    const onSubmit = (e) => {
        e.preventDefault();

        if (city.valido === 'true') {
            setFormValido(true);
            handleSubmit({...city});
            setCity({campo: '', valido: null});
        } else {
            setFormValido(false);
        }

    }


  return (
    <Formulario onSubmit={onSubmit} className="sm:!w-auto !w-72 !flex !flex-col z-0">
        <ComponentInput
            estado={city}
            cambiarEstado={setCity}
            tipo="text"
            label="Búsqueda de ciudad"
            placeholder="Escriba una ubicación"
            name="city"
            leyendaError="La ubicación debe contener entre 4 y 35 dígitos (solo letras y espacios)."
            expresionRegular={expresiones.city}
        />
        
        {formValido === false && <MensajeError className="!text-xs !pt-2">
            <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor indica una ciudad.
            </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
            <Boton onClick={onClick} type="submit">Enviar</Boton>
        </ContenedorBotonCentrado>
    </Formulario>
  )
}

export default ConsultCity