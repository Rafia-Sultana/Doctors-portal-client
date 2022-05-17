import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h4 className='text-xl text-primary text-center my-10'> Available appointment on {format(date, 'ppp')}</h4>
        </div>
    );
};

export default AvailableAppointment;