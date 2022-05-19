import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

import Service2 from './Service2';
import BookingModal2 from './BookingModal2';



const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-10'> Available appointment on {format(date, 'ppp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services.map(service => <Service2
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service2>)
                }
            </div>
            {treatment && <BookingModal2
                setTreatment={setTreatment}
                treatment={treatment}
                date={date}
            ></BookingModal2>}

        </div>
    );
};

export default AvailableAppointment;