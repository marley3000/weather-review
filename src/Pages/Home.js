import React, { useState } from 'react'
import ConsultCity from '../Components/ConsultCity'
import Modal from '../Components/Modal'
import styled from 'styled-components';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';


const Home = () => {

  const [cityCurrent, setCityCurrent] = useState(null);
  const [cityLocation, setCityLocation] = useState(null);
  const [cityForecast, setCityForecast] = useState(null);
  const [isDay, setIsDay] = useState(null);
  const [errorCity, setErrorCity] = useState(null);

  const [estadoModal, cambiarEstadoModal] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (dataSearch) => {

    setIsLoading(true);

    try {
      const resCity = await axios({
        url: `http://api.weatherapi.com/v1/forecast.json?key=0600e0d5cd134fbba47181531222206&q=${dataSearch.campo}&days=3&lang=es`,
        method: 'GET'
      })

      console.log(resCity.data.current);
      setCityCurrent(resCity.data.current);
      console.log(resCity.data.location);
      setCityLocation(resCity.data.location);
      console.log(resCity.data.forecast);
      setCityForecast(resCity.data.forecast);
      console.log(resCity.data.current.is_day);
      setIsDay(resCity.data.current.is_day);
      setIsLoading(false);

    } catch (error) {
      setErrorCity(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-orange-700">Weather Review</h1>
        <p>Ingresa el nombre de una ciudad y consulta las condiciones climáticas actuales y el pronóstico para los próximos días.</p>
        <ConsultCity handleSubmit={handleSubmit} onClick={() => cambiarEstadoModal(!estadoModal)}/>
        <Modal
          estado={estadoModal}
          cambiarEstado={cambiarEstadoModal}
          cambiarEstadoCityCurrent={setCityCurrent}
          cambiarEstadoCityLocation={setCityLocation}
          cambiarEstadoCityForecast={setCityForecast}
          cambiarEstadoIsDay={setIsDay}
          cambiarEstadoError={setErrorCity}
        >
          <Contenido>
            {
              isLoading === true && <PacmanLoader color="#bd10e0"/>
            }
            {
              errorCity != null && <h2 className="text-2xl md:text-3xl pb-4 !text-rose-700">La ciudad no se encuentra en nuestra base de datos. Por favor prueba con una diferente.</h2>
            }
            {
              cityLocation != null && <div>
                {
                  cityLocation.map(({name, country}) =>
                     <div>
                      <h2 className="text-3xl md:text-4xl">{name}, {country}</h2>
                     </div>
                  )
                }
              </div>
            }
          </Contenido>
        </Modal>
    </div>
  )
}

export default Home

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  color: #E1F5FE;
  padding: 0 20px;
  min-height: 60px;

  h2 {
    font-weight: 700;
    color: #00ff33;
  }
`;
