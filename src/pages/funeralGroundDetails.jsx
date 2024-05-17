// import React from 'react';
// import {useLocation} from 'react-router-dom';
// export const FuneralGroundDetails = (props) => {
//     const location= useLocation();
//     console.log("Location Stringify" + JSON.stringify(location));
//     //const { state } = this.props.location || {};
//     const {state} = location;
//     console.log("State Stringify" + JSON.stringify(state));
//     const { ground } = state || {};
    
//     if (!ground) {
//         console.log("Inside No Ground If ")
//       return <div>No data available</div>;
//     }
  
//     // Render funeral ground details using the passed data
//     return (
//      <div className="p-4">
//         <h1 style = {{marginTop:'75px'}}>{ground.GroundName}</h1>
//         <p>Location: {ground.City}</p>
//         {/* Render other details here */}
//       </div>
//     );
//   };


//Funeral Details V2 Code

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export const FuneralGroundDetails = () => {
//   const location = useLocation();

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const { state } = location;
//   const { ground } = state || {};

//   if (!ground) {
//     return <div>No data available</div>;
//   }

//   return (
//      <div className="p-4">
//         <div style = {{marginTop: '70px'}}>
        
//       <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Go Back
//       </button>
//       {/* <button 
//         onClick={handleGoBack} 
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//         //style={{ width: '100%' }}
//       >
//         Go Back
//       </button> */}
//       <h1 className="text-3xl font-bold mt-8 mb-4">{ground.GroundName}</h1>
//       {/* <div className="mb-8 flex">
//         <img src={"https://picsum.photos/seed/picsum/200/300"} alt={ground.GroundName} className="rounded-lg shadow-lg w-full" />
//       </div> */}
//     <div className="mb-8 flex justify-center">
//          <img 
//           src={"https://picsum.photos/seed/picsum/200/300"} 
//          alt={ground.GroundName} 
//          className="w-90vw h-300 rounded-lg shadow-lg border border-gray-300"
//          style={{ maxHeight: '300px' }} // Set inline style for maximum height
//         />
// </div>






//       <div className="grid grid-cols-2 gap-4 mb-8">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
//           <p><span className="font-semibold">Phone:</span> {ground.GroundPhoneNumber}</p>
//           <p><span className="font-semibold">Website:</span> <a href={ground.GroundWebsiteURL} target="_blank" rel="noopener noreferrer">{ground.GroundWebsiteURL}</a></p>
//           <p><span className="font-semibold">Contact Person:</span> {ground.ContactPersonName}</p>
//           <p><span className="font-semibold">Designation:</span> {ground.ContactPersonDesignation}</p>
//           <p><span className="font-semibold">Mobile:</span> {ground.ContactPersonMobileNumber}</p>
//           <p><span className="font-semibold">Email:</span> {ground.Email}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Location Details</h2>
//           <p><span className="font-semibold">Address:</span> {ground.Address}, {ground.City}, {ground.State}, {ground.Country}, {ground.Pincode}</p>
//           <p><span className="font-semibold">Taluk:</span> {ground.Taluk}</p>
//           <p><span className="font-semibold">Village:</span> {ground.VillageName}</p>
//         </div>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Operational Information</h2>
//         <p><span className="font-semibold">Hours:</span> {ground.OperationalHours}</p>
//         <p><span className="font-semibold">Religion Supported:</span> {ground.ReligionSupported}</p>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Services and Facilities</h2>
//         <p><span className="font-semibold">Services:</span> {ground.Services}</p>
//         <p><span className="font-semibold">Facilities:</span> {ground.Facilities}</p>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Fees and Procedures</h2>
//         <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
//         <p><span className="font-semibold">Procedures:</span> {ground.Procedures}</p>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Requirements and Reviews</h2>
//         <p><span className="font-semibold">Requirements:</span> {ground.Requirements}</p>
//         <p><span className="font-semibold">User Review:</span> {ground.UserReview}</p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default FuneralGroundDetails;


// Funeral Details V3 code

// FuneralGroundDetails.jsx

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../public/css/funeral.css'; // Import the CSS file

// export const FuneralGroundDetails = () => {
//   const location = useLocation();

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const { state } = location;
//   const { ground } = state || {};

//   if (!ground) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="p-4">
//       <div style={{ marginTop: '70px' }}>
//         <button onClick={handleGoBack} className="go-back-button">
//           Go Back
//         </button>
//         <h1 className="text-3xl font-bold mt-8 mb-4">{ground.GroundName}</h1>
//         <div className="mb-8 flex justify-center">
//           <img
//             src={"https://picsum.photos/seed/picsum/200/300"}
//             alt={ground.GroundName}
//             className="ground-image"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <div>
//             <h2 className="section-heading">Contact Information</h2>
//             <div className="details">
//               <p><span className="font-semibold">Phone:</span> {ground.GroundPhoneNumber}</p>
//               <p><span className="font-semibold">Website:</span> <a href={ground.GroundWebsiteURL} target="_blank" rel="noopener noreferrer">{ground.GroundWebsiteURL}</a></p>
//               <p><span className="font-semibold">Contact Person:</span> {ground.ContactPersonName}</p>
//               <p><span className="font-semibold">Designation:</span> {ground.ContactPersonDesignation}</p>
//               <p><span className="font-semibold">Mobile:</span> {ground.ContactPersonMobileNumber}</p>
//               <p><span className="font-semibold">Email:</span> {ground.Email}</p>
//             </div>
//           </div>
//           <div>
//             <h2 className="section-heading">Location Details</h2>
//             <div className="details">
//               <p><span className="font-semibold">Address:</span> {ground.Address}, {ground.City}, {ground.State}, {ground.Country}, {ground.Pincode}</p>
//               <p><span className="font-semibold">Taluk:</span> {ground.Taluk}</p>
//               <p><span className="font-semibold">Village:</span> {ground.VillageName}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Operational Information</h2>
//           <div className="details">
//             <p><span className="font-semibold">Hours:</span> {ground.OperationalHours}</p>
//             <p><span className="font-semibold">Religion Supported:</span> {ground.ReligionSupported}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Services and Facilities</h2>
//           <div className="details">
//             <p><span className="font-semibold">Services:</span> {ground.Services}</p>
//             <p><span className="font-semibold">Facilities:</span> {ground.Facilities}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Fees and Procedures</h2>
//           <div className="details">
//             <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
//             <p><span className="font-semibold">Procedures:</span> {ground.Procedures}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Requirements and Reviews</h2>
//           <div className="details">
//             <p><span className="font-semibold">Requirements:</span> {ground.Requirements}</p>
//             <p><span className="font-semibold">User Review:</span> {ground.UserReview}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FuneralGroundDetails;



// Funeral Details V4 Code

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../public/css/funeral.css'; // Import the CSS file

// export const FuneralGroundDetails = () => {
//   const location = useLocation();

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const { state } = location;
//   const { ground } = state || {};

//   if (!ground) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="p-4">
//       <div style={{ marginTop: '70px' }}>
//         <button onClick={handleGoBack} className="go-back-button">
//           Go Back
//         </button>
//         <h1 className="text-3xl font-bold mt-8 mb-4">{ground.GroundName}</h1>
//         <div className="mb-8 flex justify-center">
//           <img
//             src={"https://picsum.photos/seed/picsum/200/300"}
//             alt={ground.GroundName}
//             className="ground-image"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <div>
//             <h2 className="section-heading">Contact Information</h2>
//             <div className="details">
//               <p><span className="font-semibold">Phone:</span> {ground.GroundPhoneNumber}</p>
//               <p><span className="font-semibold">Website:</span> <a href={ground.GroundWebsiteURL} target="_blank" rel="noopener noreferrer">{ground.GroundWebsiteURL}</a></p>
//               <p><span className="font-semibold">Contact Person:</span> {ground.ContactPersonName}</p>
//               <p><span className="font-semibold">Designation:</span> {ground.ContactPersonDesignation}</p>
//               <p><span className="font-semibold">Mobile:</span> {ground.ContactPersonMobileNumber}</p>
//               <p><span className="font-semibold">Email:</span> {ground.Email}</p>
//             </div>
//           </div>
//           <div>
//             <h2 className="section-heading">Location Details</h2>
//             <div className="details">
//               <p><span className="font-semibold">Address:</span> {ground.Address}, {ground.City}, {ground.State}, {ground.Country}, {ground.Pincode}</p>
//               <p><span className="font-semibold">Taluk:</span> {ground.Taluk}</p>
//               <p><span className="font-semibold">Village:</span> {ground.VillageName}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Operational Information</h2>
//           <div className="details">
//             <p><span className="font-semibold">Hours:</span> {ground.OperationalHours}</p>
//             <p><span className="font-semibold">Religion Supported:</span> {ground.ReligionSupported}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Services and Facilities</h2>
//           <div className="details">
//             <p><span className="font-semibold">Services:</span> {ground.Services}</p>
//             <p><span className="font-semibold">Facilities:</span> {ground.Facilities}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Fees and Procedures</h2>
//           <div className="details">
//             <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
//             <p><span className="font-semibold">Procedures:</span> {ground.Procedures}</p>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="section-heading">Requirements and Reviews</h2>
//           <div className="details">
//             <p><span className="font-semibold">Requirements:</span> {ground.Requirements}</p>
//             <p><span className="font-semibold">User Review:</span> {ground.UserReview}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FuneralGroundDetails;


// Funeral Details v5 Code

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../../public/css/funeral.css'; // Import the CSS file
// import ImageSlider from '../components/imageslider';

// export const FuneralGroundDetails = () => {
//   const location = useLocation();
//   var sampleUrls  = "https://picsum.photos/seed/picsum/200/300,https://picsum.photos/id/237/200/300,https://picsum.photos/200/300?grayscale"

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const { state } = location;
//   const { ground } = state || {};

//   if (!ground) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="p-4">
//       <div style={{ marginTop: '70px' }}>
//         <button onClick={handleGoBack} className="go-back-button">
//           Go Back
//         </button>
//         <h1 className="text-3xl font-bold mt-8 mb-4">{ground.GroundName}</h1>
//         <div className="mb-8 flex justify-center">
//           {/* Replace the img tag with ImageSlider component */}
//           <ImageSlider imageUrls={sampleUrls.split(',')} />
//         </div>
//         <div className="funeral-details">
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Contact Information</h2>
//             <div className="details">
//               <p><span className="font-semibold">Phone:</span> {ground.GroundPhoneNumber}</p>
//               <p><span className="font-semibold">Website:</span> <a href={ground.GroundWebsiteURL} target="_blank" rel="noopener noreferrer">{ground.GroundWebsiteURL}</a></p>
//               <p><span className="font-semibold">Contact Person:</span> {ground.ContactPersonName}</p>
//               <p><span className="font-semibold">Designation:</span> {ground.ContactPersonDesignation}</p>
//               <p><span className="font-semibold">Mobile:</span> {ground.ContactPersonMobileNumber}</p>
//               <p><span className="font-semibold">Email:</span> {ground.Email}</p>
//             </div>
//           </div>
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Location Details</h2>
//             <div className="details">
//               <p><span className="font-semibold">Address:</span> {ground.Address}, {ground.City}, {ground.State}, {ground.Country}, {ground.Pincode}</p>
//               <p><span className="font-semibold">Taluk:</span> {ground.Taluk}</p>
//               <p><span className="font-semibold">Village:</span> {ground.VillageName}</p>
//             </div>
//           </div>
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Operational Information</h2>
//             <div className="details">
//               <p><span className="font-semibold">Hours:</span> {ground.OperationalHours}</p>
//               <p><span className="font-semibold">Religion Supported:</span> {ground.ReligionSupported}</p>
//             </div>
//           </div>
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Services and Facilities</h2>
//             <div className="details">
//               <p><span className="font-semibold">Services:</span> {ground.Services}</p>
//               <p><span className="font-semibold">Facilities:</span> {ground.Facilities}</p>
//             </div>
//           </div>
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Fees and Procedures</h2>
//             <div className="details">
//               <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
//               <p><span className="font-semibold">Procedures:</span> {ground.Procedures}</p>
//             </div>
//           </div>
//           <div className="funeral-details-card">
//             <h2 className="section-heading">Requirements and Reviews</h2>
//             <div className="details">
//               <p><span className="font-semibold">Requirements:</span> {ground.Requirements}</p>
//               <p><span className="font-semibold">User Review:</span> {ground.UserReview}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FuneralGroundDetails;



// Funeral Details V6 Code 

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../public/css/funeral.css'; // Import the CSS file
import '../../public/css/imageslider.css'; 
import ImageSlider from '../components/imageslider';

export const FuneralGroundDetails = () => {
  const location = useLocation();
  var sampleUrls  = "https://picsum.photos/seed/picsum/200/300,https://picsum.photos/id/237/200/300,https://picsum.photos/200/300?grayscale,http://img.youtube.com/vi/EqWRZrupLrI/0.jpg"

  const handleGoBack = () => {
    window.history.back();
  };

  const { state } = location;
  const { ground } = state || {};

  if (!ground) {
    return <div>No data available</div>;
  }

  return (
    <div className="p-4">
      <div style={{ marginTop: '70px' }}>
        <button onClick={handleGoBack} className="go-back-button">
          Go Back
        </button>
        <h1 className="text-3xl font-bold mt-8 mb-4">{ground.GroundName}</h1>
        <div className="mb-8 flex justify-center">
          {/* Replace the img tag with ImageSlider component */}
          {/* <ImageSlider imageUrls={sampleUrls.split(',')} /> */}
         {ground.GroundImageURL != "undefined" && <ImageSlider imageUrls={ground.GroundImageURL.split(',')}  /> }
        </div>
        <div className="funeral-details">
          <div className="funeral-details-card">
            <h2 className="section-heading">Contact Information</h2>
            <div className="details">
              <p><span className="font-semibold">Phone:</span> {ground.GroundPhoneNumber}</p>
              <p><span className="font-semibold">Website:</span> <a href={ground.GroundWebsiteURL} target="_blank" rel="noopener noreferrer">{ground.GroundWebsiteURL}</a></p>
              <p><span className="font-semibold">Contact Person:</span> {ground.ContactPersonName}</p>
              <p><span className="font-semibold">Designation:</span> {ground.ContactPersonDesignation}</p>
              <p><span className="font-semibold">Mobile:</span> {ground.ContactPersonMobileNumber}</p>
              <p><span className="font-semibold">Email:</span> {ground.Email}</p>
            </div>
          </div>
          <div className="funeral-details-card">
            <h2 className="section-heading">Location Details</h2>
            <div className="details">
              <p><span className="font-semibold">Address:</span> {ground.Address}, {ground.City}, {ground.State}, {ground.Country}, {ground.Pincode}</p>
              <p><span className="font-semibold">Taluk:</span> {ground.Taluk}</p>
              <p><span className="font-semibold">Village:</span> {ground.VillageName}</p>
            </div>
          </div>
          <div className="funeral-details-card">
            <h2 className="section-heading">Operational Information</h2>
            <div className="details">
              <p><span className="font-semibold">Hours:</span> {ground.OperationalHours}</p>
              <p><span className="font-semibold">Religion Supported:</span> {ground.ReligionSupported}</p>
            </div>
          </div>
          <div className="funeral-details-card">
            <h2 className="section-heading">Services and Facilities</h2>
            <div className="details">
              <p><span className="font-semibold">Services:</span> {ground.Services}</p>
              <p><span className="font-semibold">Facilities:</span> {ground.Facilities}</p>
            </div>
          </div>
          <div className="funeral-details-card">
            <h2 className="section-heading">Fees and Procedures</h2>
            <div className="details">
              <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
              <p><span className="font-semibold">Procedures:</span> {ground.Procedures}</p>
            </div>
          </div>
          <div className="funeral-details-card">
            <h2 className="section-heading">Requirements and Reviews</h2>
            <div className="details">
              <p><span className="font-semibold">Requirements:</span> {ground.Requirements}</p>
              <p><span className="font-semibold">User Review:</span> {ground.UserReview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralGroundDetails;

