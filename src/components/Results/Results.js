import React, { useState } from 'react';
import { Loader } from '../Loader/Loader';
import { NotFound } from '../NotFound/NotFound';

export const Results = ({
    isFetchLoading,
    formUserChoice,
    longitude,
    latitude,
    dataCollection,
    stateName,
    handleMouseDownInfoBtn,
    handleMouseLeaveInfoBtn,
    isHovered,
}) => {
    const [clickedSpan, setClickedSpan] = useState(null);

    const createInfoBox = () => {
        if (isHovered) {
            switch (clickedSpan) {
                case 'data-begin':
                    return (
                        <div className='info-box'>
                            <p className='info-box-description'>Questa è la (migliore e possibile) data iniziale delle rilevazioni dei dati</p>
                        </div>
                    );
                case 'data-end':
                    return (
                        <div className='info-box'>
                            <p className='info-box-description'>Questa è la (migliore e possibile) data finale delle rilevazioni dei dati</p>
                        </div>
                    );
                case 'detection-min':
                    return (
                        <div className='info-box'>
                            <p className='info-box-description'>Questa è la rilevazione MINIMA di CO2 presente.</p>
                        </div>
                    );
                case 'detection-average':
                    return (
                        <div className='info-box'>
                            <p className='info-box-description'>Questa è la rilevazione MEDIA di CO2 presente.</p>
                        </div>
                    );
                case 'detection-max':
                    return (
                        <div className='info-box'>
                            <p className='info-box-description'>Questa è la rilevazione MASSIMA di CO2 presente.</p>
                        </div>
                    );
                default:
                    return null;
            }
        }
    };

    return (
        <div className='results'>
            {isFetchLoading ? (
                <Loader />
            ) : !dataCollection || dataCollection.length === 0 ? (
                <NotFound />
            ) : (
                <>
                    <h1 className='results-main-title'>Risultati per:</h1>
                    {formUserChoice === 'state_form' ? (
                        <h2 className='location green-color'>{stateName}</h2>
                    ) : (
                        <h2 className='location green-color'>
                            Latitudine / Longitudine: <br /> {latitude} / {longitude}
                        </h2>
                    )}
                    <div className='results-content'>
                        <div className='wrap-dates-content'>
                            <h2 className='detections'>RILEVAZIONI</h2>
                            <h3 className='begin-date-title'>
                                DATA INIZIO RILEVAZIONE
                                <span
                                    className='info-box-overlay'
                                    onMouseEnter={() => setClickedSpan('data-begin')}
                                    onMouseDown={handleMouseDownInfoBtn}
                                    onMouseLeave={handleMouseLeaveInfoBtn}
                                >
                                    i
                                    {clickedSpan === 'data-begin' && createInfoBox()}
                                </span>
                            </h3>
                            <p className='begin-date'>{dataCollection.data_resume.begin_date}</p>
                            <h3 className='end-date-title'>
                                DATA FINE RILEVAZIONE
                                <span
                                    className='info-box-overlay'
                                    onMouseEnter={() => setClickedSpan('data-end')}
                                    onMouseDown={handleMouseDownInfoBtn}
                                    onMouseLeave={handleMouseLeaveInfoBtn}
                                >
                                    i
                                    {clickedSpan === 'data-end' && createInfoBox()}
                                </span>
                            </h3>
                            <p className='end-date'>{dataCollection.data_resume.end_date}</p>
                        </div>
                        <div className='wrap-co2-data-content'>
                            <h2 className='detections'>DATI CO2</h2>
                            <h3 className='min-detection-title'>
                                RILEVAZIONE MINIMA
                                <span
                                    className='info-box-overlay'
                                    onMouseEnter={() => setClickedSpan('detection-min')}
                                    onMouseDown={handleMouseDownInfoBtn}
                                    onMouseLeave={handleMouseLeaveInfoBtn}
                                >
                                    i
                                    {clickedSpan === 'detection-min' && createInfoBox()}
                                </span>
                            </h3>
                            <p className='min-detection'>{dataCollection.data_resume.co2_min}</p>
                            <h3 className='average-detection-title'>
                                RILEVAZIONE MEDIA
                                <span
                                    className='info-box-overlay'
                                    onMouseEnter={() => setClickedSpan('detection-average')}
                                    onMouseDown={handleMouseDownInfoBtn}
                                    onMouseLeave={handleMouseLeaveInfoBtn}
                                >
                                    i
                                    {clickedSpan === 'detection-average' && createInfoBox()}
                                </span>
                            </h3>
                            <p className='average-detection'>{dataCollection.data_resume.co2_average}</p>
                            <h3 className='max-detection-title'>
                                RILEVAZIONE MASSIMA
                                <span
                                    className='info-box-overlay'
                                    onMouseEnter={() => setClickedSpan('detection-max')}
                                    onMouseDown={handleMouseDownInfoBtn}
                                    onMouseLeave={handleMouseLeaveInfoBtn}
                                >
                                    i
                                    {clickedSpan === 'detection-max' && createInfoBox()}
                                </span>
                            </h3>
                            <p className='max-detection'>{dataCollection.data_resume.co2_max}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
