import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Results } from './components/Results/Results';
import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchDataByState } from './Client_API'
import { fetchDataByCoordinates } from './Client_API';

function App() {

      //* STATES
  const [formUserChoice, setFormUserChoice] = useState('state_form'); //* state_form or specific_place_form
  const [selectionState, setSelectionState] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [fetchIsLoading, setIsFetchLoading] = useState(false);
  const [stateName, setStateName] = useState('');

  const [dataCollection, setDataCollection] = useState([]);


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDownInfoBtn = (event) => {
      setIsHovered(true);
      console.log('mouse down')
  };

  const handleMouseLeaveInfoBtn = () => {
    setIsHovered(false);
    console.log('hover leave');
  }


  //* SEND DATA

  const sendData = (e) => {

      setIsFetchLoading(true);

      if (formUserChoice === 'state_form') {
          fetchDataByState(selectionState, beginDate, endDate, setIsFetchLoading)
          .then(data => {
            setDataCollection(data);
            setSendBtnClicked(true);
          })
      } else {
          fetchDataByCoordinates(longitude, latitude, beginDate, endDate, setIsFetchLoading)
          .then(data => {
            setDataCollection(data);
            setSendBtnClicked(true);
          })
        };

  };



  return (
    <div className="App">
      <Header />

      <Routes>
            <Route path="/" element={
              <Main 
                formUserChoice={formUserChoice}
                setFormUserChoice={setFormUserChoice}
                selectionState={selectionState}
                setSelectionState={setSelectionState}
                beginDate={beginDate}
                setBeginDate={setBeginDate}
                endDate={endDate}
                setEndDate={setEndDate}
                longitude={longitude}
                setLongitude={setLongitude}
                latitude={latitude}
                setLatitude={setLatitude}
                sendBtnClicked={sendBtnClicked}
                sendData={sendData}
                fetchIsLoading={fetchIsLoading}

                stateName={stateName}
                setStateName={setStateName}
              />
            } />

            <Route path='/results' element={
              <Results 
                dataCollection={dataCollection} 
                selectionState={selectionState}
                stateName={stateName}

                isHovered={isHovered}
                handleMouseDownInfoBtn={handleMouseDownInfoBtn}
                handleMouseLeaveInfoBtn={handleMouseLeaveInfoBtn}
              />} 
            />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
