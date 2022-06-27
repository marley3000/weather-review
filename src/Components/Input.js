import React from 'react';
import { Label, Input, GrupoInput, LeyendaError, IconoValidacion } from './Form';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = ({estado, cambiarEstado, label, placeholder, tipo, name, leyendaError, expresionRegular}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular) {
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            } else {
                cambiarEstado({...estado, valido: 'false'});
            }
        }
    }
  
    return (
    <div>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>
             <Input 
                type={tipo} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
             />
            <IconoValidacion 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                valido={estado.valido}
            />
        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  )
}

export default ComponentInput;