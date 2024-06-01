import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Results } from './components/Results/Results';
import { Routes, Route } from 'react-router-dom';
import { fetchDataByState } from './Client_API'
import { fetchDataByCoordinates } from './Client_API';
import { NotFound } from './components/NotFound/NotFound';
import { Helmet } from 'react-helmet';

function App() {

  //* STATES
  const [formUserChoice, setFormUserChoice] = useState('state_form'); //* state_form or specific_place_form
  const [selectionState, setSelectionState] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [stateName, setStateName] = useState('');
  const [dataCollection, setDataCollection] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);

  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')
  console.log('Initial formUserChoice:', formUserChoice);
  console.log('Initial selectionState:', selectionState);
  console.log('Initial longitude:', longitude);
  console.log('Initial latitude:', latitude);
  console.log('Initial beginDate:', beginDate);
  console.log('Initial endDate:', endDate);
  console.log('Initial sendBtnClicked:', sendBtnClicked);
  console.log('Initial isFetchLoading:', isFetchLoading);
  console.log('Initial stateName:', stateName);
  console.log('Initial dataCollection:', dataCollection);
  console.log('Initial isHovered:', isHovered);
  console.log('Initial isDateValid:', isDateValid);
  console.log('------------------------------------------------------------')
  console.log('------------------------------------------------------------')

  //* Handle mouse hover info box 
  const handleMouseDownInfoBtn = () => {
    setIsHovered(true);
  };
  const handleMouseLeaveInfoBtn = () => {
    setIsHovered(false);
  }
  //----------------------------



  //* CHECK USER DATE INPUT DIFF.
  const checkUserDateInput = (event) => {
    if (!beginDate || !endDate) {
      console.log('Inserisci una data di inizio e una data di fine');
      return;
    }

    const startDateObj = new Date(beginDate);
    const endDateObj = new Date(endDate);
    const diffTime = Math.abs(endDateObj - startDateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (beginDate > endDate) {
      setIsDateValid(false);
      console.log('La data di inizio non può essere successiva alla data di fine')
    }
    if (diffDays > 100) {
      console.log('A causa di alcune limitazioni la differenza tra le date di inizio e fine non deve superare 100 giorni');
      setIsDateValid(false);
      return;
    }
    if (diffDays < 30) {
      console.log('A causa di alcune limitazioni la differenza tra le date di inizio e fine non deve essere inferiore ai 30 giorni');
      setIsDateValid(false);
      return;
    }

    console.log(isDateValid);
    setIsDateValid(true);
  };

  useEffect(() => {
    checkUserDateInput();
  }, [beginDate, endDate]);


  //* SEND DATA

  const sendData = () => {
    checkUserDateInput();
    setSendBtnClicked(true);
  
    setIsFetchLoading(true);
    if (isDateValid) {
      switch (formUserChoice) {

        case 'state_form':
          fetchDataByState(selectionState, beginDate, endDate, setIsFetchLoading)
            .then(data => {
              setDataCollection(data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setSendBtnClicked(false);
              setIsDateValid(false);
              setIsDateValid(false);
              setIsHovered(false);
            });
          break;

        case 'coordinates_form':
          fetchDataByCoordinates(longitude, latitude, beginDate, endDate, setIsFetchLoading)
            .then(data => {
              setDataCollection(data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setSendBtnClicked(false);
              setIsDateValid(false);
              setIsDateValid(false);
              setIsHovered(false);
            });
          break;
        default:
          setIsFetchLoading(false);
      }
    }
  };


  return (
    <div className="App">
      <Helmet>
        <title>Carbon Monoxide Pollution</title>
      </Helmet>

      <Header
        setDataCollection={setDataCollection}
        setIsDateValid={setIsDateValid}
      />

      <Routes>
        <Route path="/" element={
          <Main
            dataCollection={dataCollection}
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
            isFetchLoading={isFetchLoading}

            stateName={stateName}
            setStateName={setStateName}

            setIsDateValid={setIsDateValid}
            isDateValid={isDateValid}
            checkUserDateInput={checkUserDateInput}
          />
        } />

        <Route path='/results' element={
          <Results
            isFetchLoading={isFetchLoading}
            formUserChoice={formUserChoice}
            longitude={longitude}
            latitude={latitude}

            dataCollection={dataCollection}
            selectionState={selectionState}
            stateName={stateName}

            isHovered={isHovered}
            handleMouseDownInfoBtn={handleMouseDownInfoBtn}
            handleMouseLeaveInfoBtn={handleMouseLeaveInfoBtn}
          />}
        />

        <Route path='/notfound' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
