import React, { use } from 'react';
import Property from '../Property/Property';

const LatestProperties = ({ latestPropertiesPromise }) => {
    const properties = use(latestPropertiesPromise);
    console.log(properties);

    return (
        <div className='mt-20'>
            <div className="text-center mb-10">
                <h2 className="text-4xl text-violet-700 font-bold inline-block relative animate-[fadeIn_1s_ease_forwards]">
                    Latest Properties
                    <span className="absolute left-0  w-full h-[3px] bg-black scale-x-0 origin-left animate-[underline_0.8s_0.3s_ease_forwards]"></span>
                </h2>
            </div>









            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10'>
                {
                    properties.map(property => <Property
                        key={property._id}

                        property={property}
                    >

                    </Property>)
                }
            </div>

        </div>
    );
};

export default LatestProperties;



