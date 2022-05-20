import React from 'react';

const Service2 = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  items-center">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>


                <p>{slots.length}  {slots.length > 1 ? 'spaces' : 'space'}  available</p>

                <div className="card-actions justify-center">

                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service2;




