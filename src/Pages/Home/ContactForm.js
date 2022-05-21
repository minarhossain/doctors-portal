import React from 'react';
import appointment from '../../assets/images/appointment.png';
import CommonButton from '../Share/CommonButton';

const ContactForm = () => {
    return (
        <section className="my-5" style={{ background: `url(${appointment})` }}>
            <p></p>
            <br />
            <div className="text-center ">
                <h5 className="mt-5 text-white">Contact Us</h5>
                <h2 className="text-white font-bold text-xl my-4">Stay Connected with us</h2>

                <input type="text" placeholder="Email Address" class="input input-bordered input-sm w-full max-w-xs" />
                <p></p>
                <br />

                <input type="text" placeholder="Subject" class="input input-bordered input-md w-full max-w-xs" />
                <p></p>
                <br />
                <input type="textarea" placeholder="Your message" class="input input-bordered input-lg w-full max-w-xs" />
                    <p></p>
                <br />
                <CommonButton>Submit</CommonButton>
                <p></p>
                <br />

            </div>




        </section>
    );
};

export default ContactForm;