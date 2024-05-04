import React ,{useState} from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
import Home from "./home1";
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Alert
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";

export const Admee = () => {

  //const history = useHistory();
  const navigate = useNavigate();

  const {register , handleSubmit} = useForm();

  const [alert,setAlert] = useState(false)
    
  const onSubmit = (data) => {
    
   setAlert(true);
    backendConnection(data);
    
  }

  const backendConnection = (data) => {
  
    let dataObj = {}
    dataObj.fullName = data.fullName;
    dataObj.email = data.email;
    dataObj.city = data.city;
    dataObj.state = data.state;
    dataObj.country = data.country;
    dataObj.mobileNumber = data.mobileNumber;
    dataObj.vehicleNumber = data.vehicleNumber;
    dataObj.vehicleType = data.vehicleType;
    dataObj.remarks = data.remarks;
    dataObj.pincode = data.pincode;
    console.log("Backend Data Object")
    console.log(dataObj)

    // React.useEffect(() => {


    //axios.post("http://localhost:3002/api/admee/addPartners", dataObj)
    axios.post("https://funeral-backend-git-main-ramragul.vercel.app/api/admee/addPartners", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    .then((res)=> console.log(res));
  
  }
    
    return(
        <>
              <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="Contact Us">
            Complete this form and we will get back to you in 5 minutes.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 flex gap-8">
              <Input {...register('fullName')} variant="standard" size="lg" label="Full Name" />
            </div>
            <div className="mb-8 flex">
            <Input {...register('mobileNumber')} variant="standard" size="lg" label="Mobile Number" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('email')} variant="standard" size="lg" label="Email Address" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('vehicleType')} variant="standard" size="lg" label="Vehicle Type" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('vehicleNumber')} variant="standard" size="lg" label="Vehicle Number" />
            </div>
            <Textarea {...register('Address')} variant="standard" size="lg" label="Address" rows={2} />
            <div className="mb-8 flex">
              <Input {...register('city')} variant="standard" size="lg" label="City" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('state')} variant="standard" size="lg" label="State" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('country')} variant="standard" size="lg" label="Country" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('pincode')} variant="standard" size="lg" label="Pincode" />
            </div>
            <div className="mb-8 flex">
              <Input {...register('expectedAmount')} variant="standard" size="lg" label="Expected Amount" />
            </div>
            <Textarea {...register('remarks')} variant="standard" size="lg" label="Remarks" rows={2} />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Add Mee Pls
            </Button>
            {/* <Button onClick={() => navigate('/home')}>
            Add Mee
            </Button> */}
            
            {alert &&  <Alert color="green">Your Deails has been submitted successfully.</Alert>} 
          </form>
        </div>
      </section>
        </>
    )
}

export default Admee;


// FuneralGroundSearch.js
//import '../../public/css/funeral.css';

// import React, { useState, useEffect } from 'react';

// export const Admee = () => {
//   const [funeralGrounds, setFuneralGrounds] = useState([
//     // Sample data for visual purposes
//     {
//       id: 1,
//       name: 'Sample Funeral Ground 1',
//       location: 'Sample Location 1',
//       contactInfo: 'Sample Contact Info 1',
//       operationalHours: 'Sample Operational Hours 1',
//       fees: 'Sample Fees 1',
//       city: 'Sample City 1',
//       postalCode: '123456',
//     },
//     {
//       id: 2,
//       name: 'Sample Funeral Ground 2',
//       location: 'Sample Location 2',
//       contactInfo: 'Sample Contact Info 2',
//       operationalHours: 'Sample Operational Hours 2',
//       fees: 'Sample Fees 2',
//       city: 'Sample City 2',
//       postalCode: '654321',
//     },
//     // Add more sample data as needed
//   ]);
//   const [filteredGrounds, setFilteredGrounds] = useState([]);
//   const [cityFilter, setCityFilter] = useState('');
//   const [postalCodeFilter, setPostalCodeFilter] = useState('');

//   useEffect(() => {
//     // Initialize filtered data with all funeral grounds
//     setFilteredGrounds(funeralGrounds);
//   }, [funeralGrounds]);

//   useEffect(() => {
//     // Filter funeral grounds based on city and postal code
//     let filteredData = funeralGrounds;

//     if (cityFilter) {
//       filteredData = filteredData.filter(
//         ground => ground.city.toLowerCase() === cityFilter.toLowerCase()
//       );
//     }

//     if (postalCodeFilter) {
//       filteredData = filteredData.filter(
//         ground => ground.postalCode === postalCodeFilter
//       );
//     }

//     setFilteredGrounds(filteredData);
//   }, [funeralGrounds, cityFilter, postalCodeFilter]);

//   const handleCityChange = event => {
//     setCityFilter(event.target.value);
//   };

//   const handlePostalCodeChange = event => {
//     setPostalCodeFilter(event.target.value);
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4" style={{ marginTop: '100px' }}>
//         <h1 className="text-2xl font-bold">Funeral Ground Directory</h1>
//       </div>
//       <div className="flex mb-4">
//         <select
//           value={cityFilter}
//           onChange={handleCityChange}
//           className="px-4 py-2 mr-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
//         >
//           <option value="">All City</option>
//           <option value="Sample City 1">Sample City 1</option>
//           <option value="Sample City 2">Sample City 2</option>
//           {/* Add more options as needed */}
//         </select>
//         <input
//           type="text"
//           placeholder="Search by postal code"
//           value={postalCodeFilter}
//           onChange={handlePostalCodeChange}
//           className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
//         {filteredGrounds.map(ground => (
//           <div key={ground.id} className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
//             <h2 className="text-lg text-pink-800 font-bold mb-2">{ground.name}</h2>
//             <p><span className="font-semibold">Location:</span> {ground.location}</p>
//             <p><span className="font-semibold">Contact Info:</span> {ground.contactInfo}</p>
//             <p><span className="font-semibold">Operational Hours:</span> {ground.operationalHours}</p>
//             <p><span className="font-semibold">Fees:</span> {ground.fees}</p>
//             <p><span className="font-semibold">City:</span> {ground.city}</p>
//             <p><span className="font-semibold">Postal Code:</span> {ground.postalCode}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admee;



// Funeral Ground Version 2 Codes

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const Admee = () => {
//   const [funeralGrounds, setFuneralGrounds] = useState([]);
//   const [filteredGrounds, setFilteredGrounds] = useState([]);
//   const [cityFilter, setCityFilter] = useState('');
//   const [postalCodeFilter, setPostalCodeFilter] = useState('');
//   const [showEnterPostalCodeMsg, setShowEnterPostalCodeMsg] = useState(false);
//   const [showNoResultsMsg, setShowNoResultsMsg] = useState(false);
//   const [showSearchButton, setShowSearchButton] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://localhost:3002/gb/funeralground');
//         setFuneralGrounds(response.data.data);
//         setFilteredGrounds(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     let filteredData = funeralGrounds;
  
//     if (cityFilter) {
//       filteredData = filteredData.filter(
//         ground => ground.City.toLowerCase() === cityFilter.toLowerCase()
//       );
//     }
  
//     if (postalCodeFilter) {
//       filteredData = filteredData.filter(
//         ground => ground.Pincode === postalCodeFilter
//       );
//     }
  
//     console.log("Filtered Data:", filteredData); // Log filtered data
  
//     setFilteredGrounds(filteredData);
//   }, [funeralGrounds, cityFilter, postalCodeFilter,showSearchButton]);
  
  

//   const handleCityChange = event => {
//     setPostalCodeFilter('');
//     const value = event.target.value;
//     setCityFilter(value);
//     setShowNoResultsMsg(false);
//   };

//   const handlePostalCodeChange = event => {
//     const value = event.target.value;
//     setPostalCodeFilter(value);
//     setShowEnterPostalCodeMsg(value.trim().length === 0);
//     setShowNoResultsMsg(false);
//     setShowSearchButton(value.trim().length > 0); // Update showSearchButton state based on input value
//   };
  
//   // const handleSearchClick = () => {
//   //   setShowNoResultsMsg(false);
//   //   setShowSearchButton(false);
    
//   //   // Clear city filter
//   //   setCityFilter('');
    
//   //   // Check if the filters are applied and no results are found
//   //   console.log("Before Timeout outside If "+filteredGrounds.length)
//   //     if (filteredGrounds.length <1 ) {
//   //     console.log("Before Timeout inside If "+filteredGrounds.length)
//   //     setShowNoResultsMsg(true);
//   //     setTimeout(() => {
//   //       setShowNoResultsMsg(false);
//   //       setCityFilter('');
//   //       setPostalCodeFilter('');
//   //     }, 15000);
//   //   }
//   // };

//   const handleSearchClick = () => {
//     setShowNoResultsMsg(false);
//     setShowSearchButton(false);
    
//     // Clear city filter
//     setCityFilter('');
    
//     // Filter the funeral grounds based on postal code
//     const filteredData = funeralGrounds.filter(ground => {
//       const filteredPostalCode = String(postalCodeFilter).trim();
//       const groundPostalCode = String(ground.Pincode).trim();
//       return groundPostalCode === filteredPostalCode;
//     });
  
//     // Update filtered grounds state
//     setFilteredGrounds(filteredData);
  
//     // Show no results message if no matches found
//     if (filteredData.length === 0) {
//       setShowNoResultsMsg(true);
//       setTimeout(() => {
//         setShowNoResultsMsg(false);
//         setCityFilter('');
//         setPostalCodeFilter('');
//       }, 3000);
//     }
//   };
  
  
  
  

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center" style={{marginTop:'75px'}}>Funeral Ground Directory</h1>
//       <div className="flex flex-col md:flex-row mb-4">
//         <select
//           value={cityFilter}
//           onChange={handleCityChange}
//           className="md:mr-2 mb-2 md:mb-0 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
//         >
//           <option value="">All City</option>
//           {[...new Set(funeralGrounds.map(ground => ground.City))].map(city => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Search by postal code"
//           value={postalCodeFilter}
//           onChange={handlePostalCodeChange}
//           className="mb-2 md:mb-0 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
//         />
//         {showSearchButton && (
//           <button
//             onClick={handleSearchClick}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none self-start"
//           >
//             Search
//           </button>
//         )}
//       </div>
//       {showEnterPostalCodeMsg && (
//         <p className="text-gray-600">Enter Postal Code for searching.</p>
//       )}
//       {showNoResultsMsg && (
//         <p className="text-red-600">Apologies, but we couldn't find any funeral grounds matching the entered postal code. Please try again with a different postal code or search by city.</p>
//       )}
//       <div className="grid grid-cols-1 gap-4">
//         {filteredGrounds.map(ground => (
//           <div key={ground.GroundID} className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
//             <h2 className="text-lg text-pink-800 font-bold mb-2">{ground.GroundName}</h2>
//             <p><span className="font-semibold">Location:</span> {ground.City}</p>
//             <p><span className="font-semibold">Contact Info:</span> {ground.GroundPhoneNumber}</p>
//             <p><span className="font-semibold">Operational Hours:</span> {ground.OperationalHours}</p>
//             <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
//             <p><span className="font-semibold">City:</span> {ground.City}</p>
//             <p><span className="font-semibold">Postal Code:</span> {ground.Pincode}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };