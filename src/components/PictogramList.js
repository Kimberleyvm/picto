import React from 'react';

const PictogramList = () => {
    const pictograms = [
        { name: 'hondje', image: '/pictogram/hondje.jpg' },
        { name: 'hond', image: '/pictogram/hond.png'}
        // etc
    ];
    return (
        <div>
            <h2>Pictogrammen</h2>
            <div className='pictogram-container'>
                {pictograms.map((pictogram, index) => (
                    <div key={index} className='pictogram-item'>
                        <img src={process.env.PUBLIC_URL + pictogram.image} alt={pictogram.name} />
                        <span>{pictogram.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PictogramList;