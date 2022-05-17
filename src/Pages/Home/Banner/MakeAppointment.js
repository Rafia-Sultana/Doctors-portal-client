import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex justify-center items-center" >
            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className="flex-1 py-5">
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment today!</h2>
                <p className='text-white  mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ad nesciunt eveniet dicta dolor labore quaerat repellat consequuntur ea earum voluptate corporis tempore, expedita placeat? Voluptate soluta dolore consequuntur ratione, voluptatibus eum officia omnis tenetur rerum eligendi corrupti doloremque veritatis ea, vel quisquam nostrum amet doloribus vero provident nulla porro.</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;