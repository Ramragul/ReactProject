import React from 'react'
import { featuresData, teamData, contactData } from "@/data";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { Navbar } from "@/widgets/layout";
// import routes from "@/routes";

export const Services = () => {

  // New Code Colour Packages Begins

  const classicStyle = {
    backgroundColor: '#f9a8d4', // Baby Pink Color
    color: '#4A5568', // Grayish Text Color
  };

  const silverStyle = {
    backgroundColor: '#CBD5E0', // Silver Color
    color: '#4A5568', // Grayish Text Color
  };

  const goldStyle = {
    backgroundColor: '#fcd34d', // Golden Color
    color: '#4A5568', // Grayish Text Color
  };



  // New Code Colour Packages Ends

    return(
       <>

        {/* New Code Begins */}

        {/* <section className="px-4 pt-24 md:pt-32 pb-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6" style={classicStyle}>
            <h3 className="text-xl font-bold mb-3 text-center">Classic Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹10,000 INR</span></p>
            <ul className="text-center mb-6">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <button className="bg-pink-600 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6" style={silverStyle}>
            <h3 className="text-xl font-bold mb-3 text-center">Silver Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹20,000 INR</span></p>
            <ul className="text-center mb-6">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6" style={goldStyle}>
            <h3 className="text-xl font-bold mb-3 text-center">Gold Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹30,000 INR</span></p>
            <ul className="text-center mb-6">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <button className="bg-amber-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
        </div>
      </div>
    </section> */}

<section className="px-4 pt-24 md:pt-32 pb-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6 bg-pink-200">
            <h3 className="text-xl font-bold mb-3 text-center">Classic Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹9999</span></p>
            <ul className="text-left mb-6">
              <li className="list-disc list-inside">Freezer Box</li>
              <li className="list-disc list-inside">Simple Floral Decorations</li>
              <li className="list-disc list-inside">Funeral Ground Bookings</li>
              <li className="list-disc list-inside">Funeral Rituals</li>
              <li className="list-disc list-inside">Funeral Van</li>
              <li className="list-disc list-inside">Cremation</li>
              <li className="list-disc list-inside">Death Certificate Registration and Support</li>
            </ul>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6 bg-grey-200">
            <h3 className="text-xl font-bold mb-3 text-center">Silver Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹19,999</span></p>
            <ul className="text-left mb-6">
            <li className="list-disc list-inside">Freezer Box</li>
              <li className="list-disc list-inside">Moderate Floral Decorations</li>
              <li className="list-disc list-inside">Funeral Ground Bookings</li>
              <li className="list-disc list-inside">Funeral Rituals</li>
              <li className="list-disc list-inside">Funeral Van</li>
              <li className="list-disc list-inside">Cremation</li>
              <li className="list-disc list-inside">Drinking Water </li>
              <li className="list-disc list-inside">Pandal and Chair Arrangements </li>
              <li className="list-disc list-inside">Funeral Music Arrangements</li>
              <li className="list-disc list-inside">Death Certificate Registration and Support</li>
              <li className="list-disc list-inside">One Complimentary Doctor-Led Counseling Session for Family Healing and Support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
          <div className="service-package md:w-1/3 rounded-lg shadow-lg p-6 bg-amber-200">
            <h3 className="text-xl font-bold mb-3 text-center">Gold Package</h3>
            <p className="text-center mb-3"><span className="font-bold text-lg">Price: ₹29,999</span></p>
            <ul className="text-left mb-6">
            <li className="list-disc list-inside">Freezer Box</li>
              <li className="list-disc list-inside">Grand Floral Decorations</li>
              <li className="list-disc list-inside">Funeral Ground Bookings</li>
              <li className="list-disc list-inside">Funeral Rituals</li>
              <li className="list-disc list-inside">Funeral Van</li>
              <li className="list-disc list-inside">Cremation</li>
              <li className="list-disc list-inside">Drinking Water </li>
              <li className="list-disc list-inside">Pandal and Chair Arrangements </li>
              <li className="list-disc list-inside">Funeral Music Arrangements</li>
              <li className="list-disc list-inside">Cracker Firings</li>
              <li className="list-disc list-inside">Coffee/Tea for 50 people</li>
              <li className="list-disc list-inside">Breakfast for 50 people</li>
              <li className="list-disc list-inside">Death Certificate Registration and Support</li>
              <li className="list-disc list-inside">One Complimentary Doctor-Led Counseling Session for Family Healing and Support</li>

            </ul>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full block mx-auto">Select</button>
          </div>
        </div>
      </div>
    </section>

        
        {/* New Code Ends */}


       {/* <Navbar routes={routes} /> */}

       {/* Working Code Commented for testing purpose Begins */}
       
        {/* <section className="px-4 pt-20 pb-48" >

        <div className="container mx-auto">
          <PageTitle heading="Our Services">
          We offer Luxury , Moderate and Budgeted funeral packages. We cover all the activities.
                  You can select your convenient package and avail our service. Call us for More Details. Contact no : +1 12345678
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-lg fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Working Code Commented for Testing Purpose Ends */}
      </>
    )
}

export default Services;