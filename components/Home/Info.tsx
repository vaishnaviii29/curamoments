import React from 'react';

const Info: React.FC = () => {

    
  return (
    <><div style={{
          backgroundImage: `radial-gradient(circle, #F0914B 0%, #F18267 13%, #EE84BC 33%, #C6A5EA 100%)`,

          backgroundPosition: 'center',

          textAlign: 'center', padding: '50px', backgroundColor: '#D4B0F9', height: '100vh'
      }}>


          <div className="pt-40 p-20" style={{ fontFamily: 'Ledger, serif', color: '#fff', paddingBottom: '20px' }}>
              <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>
                  Embrace vibrant energy, inner peace, and optimal health with evidence-based holistic practices for balance and well-being.
              </h1>
              <a href="/#test1">
                  <button style={{ backgroundColor: '#000', color: '#fff', padding: '20px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                      <h2 className="text-lg">Find My Holistic Path</h2>
                  </button>
              </a>
          </div>


          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '50px', width: '100%' }}>
              <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '30%' }}>
                  <p>"I used to feel constantly drained. Now, thanks to Spectrum Shift, I feel like I have a renewed sense of well-being. It's been life-changing!"</p>
                  <p style={{ fontWeight: 'bold' }}>- Michael B.</p>
              </div>
              <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '40%' }}>
                  <p>"I've noticed a shift in my aura - it feels brighter and more balanced. I feel more energized and at peace!"</p>
                  <p style={{ fontWeight: 'bold' }}>- David L.</p>
              </div>
              <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '30%' }}>
                  <p>"I've learned tools to manage stress, improve my sleep, and feel truly well-rounded."</p>
                  <p style={{ fontWeight: 'bold' }}>- Sarah M.</p>
              </div>
          </div>

      </div>
      <div className="flex flex-col items-center justify-center min-h-screen font-ledger" style={{ backgroundColor: '#C6A5EA' }}>
  <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-white mb-4 pt-20">
    Let's find you a wellness path for...
  </h1>
  <p className="text-xl md:text-2xl lg:text-3xl text-center text-white mb-8">
    Holistic health is an approach to life that considers multidimensional wellness of body, mind and soul
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-7xl">
    <div className="col-span-2 md:col-span-1 bg-white p-4 rounded-lg shadow-md border-4 border-dashed border-white flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Manage Chronic Condition/Symptoms</h2>
        <p className="text-sm text-gray-600">Address the Roots, Not Just the Symptoms</p>
      </div>
      <input type="checkbox" className="w-6 h-6 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500" checked readOnly />
    </div>
    <div className=" p-4 rounded-md border-2 border-dashed border-white">
      <h2 className="text-xl font-bold text-white">Exercise Well</h2>
      <p className="text-sm text-white">Regular physical activity that improves your overall fitness and health.</p>
    </div>
    <div className=" p-4 rounded-md border-2 border-dashed border-white">
      <h2 className="text-xl font-bold text-white">Nourish Well</h2>
      <p className="text-sm text-white">Eating a balanced and nutritious diet that fuels your body.</p>
    </div>
    <div className=" p-4 rounded-md border-2 border-dashed border-white">
      <h2 className="text-xl font-bold text-white">Sleep Well</h2>
      <p className="text-sm text-white">Getting enough quality sleep for optimal physical and mental function.</p>
    </div>
    <div className=" p-4 rounded-md border-2 border-dashed border-white">
      <h2 className="text-xl font-bold text-white">Manage Stress</h2>
      <p className="text-sm text-white">Techniques to cope with stress and maintain emotional well-being.</p>
    </div>
    <div className=" p-4 rounded-md border-2 border-dashed border-white">
      <h2 className="text-xl font-bold text-white">Spiritual Wellness</h2>
      <p className="text-sm text-white">Help me get something something (need help)</p>
    </div>
  </div>

  <button className="bg-black text-white text-lg font-semibold px-8 py-2 mt-8 rounded-lg shadow-md hover:bg-gray-700">
    Continue
  </button>
</div>

<section className="bg-gray-50 font-ledger py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Unveiling the Core of Holistic Wellness
        </h2>
        <p className="text-gray-500 mt-2">
          Emphasizes going beyond symptoms and finding a holistic approach.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            imgSrc: 'assets/image 81.png',
            title: 'Exercise Well',
            description:
              'Improves physical strength, cardiovascular health, and overall fitness through movement.',
          },
          {
            imgSrc: 'assets/image 82.png',
            title: 'Nourish Well',
            description:
              'Encourages a healthy diet that fuels your body and promotes optimal function.',
          },
          {
            imgSrc: 'assets/image 83.png',
            title: 'Sleep Well',
            description:
              'Prioritizes quality sleep for improved physical and mental well-being.',
          },
          {
            imgSrc: 'assets/image 89.png',
            title: 'Manage Stress',
            description:
              'Develops practices to manage stress effectively, promoting emotional balance.',
          },
          {
            imgSrc: 'assets/image 88.png',
            title: 'Spiritual Wellness',
            description:
              'Nurturing a sense of purpose, connection, and meaning in life.',
          },
          {
            imgSrc: 'assets/image 87.png',
            title: 'Manage Chronic Conditions',
            description:
              'Focuses on addressing existing health concerns and optimizing well-being despite them.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 mb-4">{item.description}</p>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
    <div className="w-screen h-screen p-40 flex justify-center items-center relative">
      <img src="assets/box.png" alt="Description" className="w-full pt-10 h-full object-cover rounded-3xl" />

      {/* Container for Boxes */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex pt-10 space-x-9">
          {/* Box 1 */}
          <div className="w-80 h-80 bg-[#EE84BC] opacity-[0.19] rounded-3xl"></div>

          {/* Box 2 */}
          <div className="w-80 h-80 bg-[#EE84BC] opacity-[0.19] rounded-3xl"></div>

          {/* Box 3 */}
          <div className="w-80 h-80 bg-[#EE84BC] opacity-[0.19] rounded-3xl"></div>
        </div>
      </div>
    </div>
</>    
    
  );
};

export default Info;
