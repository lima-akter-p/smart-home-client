import React from 'react';

const ChooseUs = () => {
    return (
        <section className="py-20 mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="max-w-6xl mx-auto text-center mb-16 ">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
                    Why Choose <span className="text-teal-400">Us</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    We deliver trusted real estate solutions with premium service, transparency & reliability.
                </p>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="
               p-8 rounded-2xl backdrop-blur-lg 
             bg-white/10 border border-white/20
             hover:bg-white/20 transition-all duration-500
               shadow-xl hover:shadow-teal-500/30
               ">
                    <div className="text-5xl mb-4 text-teal-400 animate-pulse">🏢</div>
                    <h3 className="text-2xl font-semibold mb-3">Verified Properties</h3>
                    <p className="text-gray-300">
                        Every listing is manually checked to ensure safety, authenticity and legal clarity.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="
                p-8 rounded-2xl backdrop-blur-lg 
              bg-white/10 border border-white/20
              hover:bg-white/20 transition-all duration-500
                 shadow-xl hover:shadow-teal-500/30
                  ">
                    <div className="text-5xl mb-4 text-teal-400 animate-pulse">🤝</div>
                    <h3 className="text-2xl font-semibold mb-3">Easy Buying & Selling</h3>
                    <p className="text-gray-300">
                        We provide full assistance—from selecting a property to final documentation.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="
                 p-8 rounded-2xl backdrop-blur-lg 
               bg-white/10 border border-white/20
               hover:bg-white/20 transition-all duration-500
                  shadow-xl hover:shadow-teal-500/30
                 ">
                    <div className="text-5xl mb-4 text-teal-400 animate-pulse">⚡</div>
                    <h3 className="text-2xl font-semibold mb-3">Fast & Secure Process</h3>
                    <p className="text-gray-300">
                        Quick property approvals, secure transactions & 24/7 support for all clients.
                    </p>
                </div>

            </div>
        </section>


    );
};

export default ChooseUs;