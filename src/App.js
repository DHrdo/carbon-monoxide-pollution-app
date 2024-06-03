import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Results } from './components/Results/Results';
import { Routes, Route, useLocation } from 'react-router-dom';
import { fetchDataByState, fetchDataByCoordinates } from './Client_API';
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
  const [dateError, setDateError] = useState('');

  console.log('---------------------------------------------');
  console.log('formUserChoice', formUserChoice);
  console.log('longitude', longitude);
  console.log('latitude', latitude);
  console.log('beginDate', beginDate);
  console.log('endDate', endDate);
  console.log('isFetchLoading', isFetchLoading);
  console.log('dataCollection', dataCollection);
  console.log('isDateValid', isDateValid)
  console.log('---------------------------------------------');

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      longitude ? setLongitude(longitude => {setLongitude(longitude)}) : setLongitude('')
      latitude ? setLatitude(latitude => {setLatitude(latitude)}) : setLatitude('')
      beginDate ? setBeginDate(beginDate => {setBeginDate(beginDate)}) : setBeginDate('')
      endDate ? setEndDate(endDate => {setEndDate(endDate)}) : setEndDate('')
      setDataCollection([]);
    }
  }, [location]);



  //* Handle mouse hover info box 
  const handleMouseDownInfoBtn = () => {
    setIsHovered(true);
  };
  const handleMouseLeaveInfoBtn = () => {
    setIsHovered(false);
  };
  //----------------------------

  //* CHECK USER DATE INPUT DIFF.
  const checkUserDateInput = () => {
    if (!beginDate || !endDate) {
      setDateError('*Inserisci una data di inizio e una data di fine');
      return;
    }

    const startDateObj = new Date(beginDate);
    const endDateObj = new Date(endDate);
    const diffTime = Math.abs(endDateObj - startDateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (beginDate > endDate) {
      setIsDateValid(false);
      setDateError('*La data di inizio non può essere successiva alla data di fine');
      return;
    }
    if (diffDays > 100) {
      setDateError('*A causa di alcune limitazioni la differenza tra le date di inizio e fine non deve superare 100 giorni');
      setIsDateValid(false);
      return;
    }
    if (diffDays < 30) {
      setDateError('*A causa di alcune limitazioni la differenza tra le date di inizio e fine non deve essere inferiore ai 30 giorni');
      setIsDateValid(false);
      return;
    }

    setIsDateValid(true);
    setDateError('');
  };

  useEffect(() => {
    checkUserDateInput();
  }, [beginDate, endDate]);

  //* SEND DATA
  const sendData = (e) => {

      setSendBtnClicked(true);
      setIsFetchLoading(true);

      switch (formUserChoice) {
        case 'state_form':
          fetchDataByState(selectionState, beginDate, endDate, setIsFetchLoading)
            .then(data => {
              if (data) {
                setDataCollection(data);
              }
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setSendBtnClicked(false);
              setIsDateValid(false);
              setIsHovered(false);
              setIsFetchLoading(false);
            });
          break;

        case 'specific_place_form':
          fetchDataByCoordinates(longitude, latitude, beginDate, endDate, setIsFetchLoading)
            .then(data => {
              if (data) {
                setDataCollection(data);
              }
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setSendBtnClicked(false);
              setIsDateValid(false);
              setIsHovered(false);
              setIsFetchLoading(false);
            });
          break;

        default:
          setIsFetchLoading(false);
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
            dateError={dateError}
          />
        } />

        <Route path="/results" element={
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

        <Route path="/notfound" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
