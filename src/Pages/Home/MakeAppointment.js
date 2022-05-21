import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';
import CommonButton from '../Share/CommonButton';


const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-120px]" src={doctor} alt="" />

            </div>
            <div className="flex-1 px-5">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
                <p className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi a omnis impedit, reiciendis voluptatibus. Soluta architecto ipsam accusamus doloremque dignissimos, eveniet minus quasi neque ut laborum, in consequuntur quaerat. Quasi autem aliquam nam accusantium optio magni, rem sequi recusandae possimus, doloribus facere nulla dolore repudiandae doloremque enim quidem expedita!</p>
                <CommonButton>Get Started</CommonButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;