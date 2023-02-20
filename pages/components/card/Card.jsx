import Image from 'next/image';
import React from 'react';

const Card = ({ title,description,image }) => {

    return (
        
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {description}
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;