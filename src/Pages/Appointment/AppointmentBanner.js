import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bgChair from '../../assets/images/bg.png'
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bgChair})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" class="max-w-sm rounded-lg shadow-2xl ml-10" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;