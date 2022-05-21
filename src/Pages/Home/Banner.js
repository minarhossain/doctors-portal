import React from 'react';
import chair from '../../assets/images/chair.png';
import CommonButton from '../Share/CommonButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <section style={{ background:`url(${bg})`}}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smiles Start Here!</h1>
                        <p className="py-6">A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments.</p>
                        <CommonButton>get started</CommonButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;