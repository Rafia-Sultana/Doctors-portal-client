import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service2 from './Service2';
import BookingModal2 from './BookingModal2';
import Loading from '../Home/Shared/Loading';



const AvailableAppointment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-10'> Available appointment on {format(date, 'ppp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services?.map(service => <Service2
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service2>)
                }
            </div>
            {treatment && <BookingModal2
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}

            ></BookingModal2>}

        </div>
    );
};

export default AvailableAppointment;