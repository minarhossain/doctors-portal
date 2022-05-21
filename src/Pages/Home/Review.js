import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex items-center my-2">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div className="ml-8">
                        <h2 className="text-xl">{review.name}</h2>
                        <p>{review.location}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Review;