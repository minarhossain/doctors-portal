import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{ slots[0]}</span> : <span className="text-red-500">Try Another Day</span>
                    }
                </p>
                
                <p>{ slots.length } {slots.length > 1 ? 'space' : 'space'} available</p>
                <div class="card-actions justify-center">
                    
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm bg-gradient-to-r from-secondary to-primary btn-secondary text-white uppercase">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;