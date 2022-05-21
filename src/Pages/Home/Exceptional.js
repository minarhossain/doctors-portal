import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-8">
                    <h1 class="text-5xl font-bold">Exceptional Dental Care On Your Tearms</h1>
                    <p class="py-6">Provident Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, debitis! cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;