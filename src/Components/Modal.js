import React from 'react';
import styled from 'styled-components';


const Modal = ({children, estado, cambiarEstado, cambiarEstadoCityCurrent, cambiarEstadoCityLocation, cambiarEstadoCityForecast, cambiarEstadoError, cambiarEstadoIsDay}) => {
  return (
    <>
        {estado && 
            <Overlay>
                <ContenedorModal>
                    <div className="flex justify-end sticky top-[2px]">
                        <BotonCerrar onClick={() => [cambiarEstado(false), cambiarEstadoCityCurrent(null), cambiarEstadoCityLocation(null), cambiarEstadoCityForecast(null), cambiarEstadoError(null), cambiarEstadoIsDay(null)]}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </BotonCerrar>
                    </div>
                    {children}
                </ContenedorModal>
            </Overlay>
        }
    </>
  )
}

export default Modal

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 90%;
    height: auto;
    max-height: 350px;
    background: #fef9e7;
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
    padding: 10px;
    overflow-y: auto;    
`;

const BotonCerrar = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    brackground: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    display: flex;

    &:hover {
        background: #6d28d9;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #6d28d9;
    }

    svg:hover {
        fill: #f2f2f2;
    }
`;