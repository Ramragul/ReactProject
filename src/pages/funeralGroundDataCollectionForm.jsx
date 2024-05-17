// import React, { useState, useRef } from 'react';
// import {useForm} from "react-hook-form";
// import axios from 'axios';
// import Camera from 'react-html5-camera-photo';
// import '../../public/css/funeralGroundForm.css'; // Import the CSS file

// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Typography,
//     Button,
//     IconButton,
//     Input,
//     Textarea,
//     Alert
//   } from "@material-tailwind/react";

// export const FuneralGroundDataCollectionForm = () => {

//     const {register , handleSubmit} = useForm();
//     const photoInputRef = useRef(null);
//     var states = ["Tamil Nadu","Kerala","Karnataka"]
//     var cities = ["Chennai","Trichy","Coimbatore","Madurai","Tirunelveli"]
//     var countires = ["India","Dubai","UK"]

//     const [alert,setAlert] = useState(false)

  

    
//     const onSubmit = (data) => {
//         console.log("Data from Form: ", data);
//          setAlert(true);
//          backendConnection(data);
        
//       };
      


//       const backendConnection = (data) => {
  
//         let dataObj = {}
//         dataObj.groundName = data.groundName;
//         dataObj.groundPhoneNumber = data.groundPhoneNumber;
//         dataObj.groundWebsiteURL = data.groundWebsiteURL;
//         dataObj.contactPersonName = data.contactPersonName;
//         dataObj.contactPersonDesignation = data.contactPersonDesignation; 
//         dataObj.ContactPersonMobileNumber = data.ContactPersonMobileNumber;
//         dataObj.email = data.email;
//         dataObj.city = data.city;
//         dataObj.state = data.state;
//         dataObj.country = data.country;
//         dataObj.address = data.address;
//         dataObj.photos = data.photos;
//         console.log("Backend Data Object")
//         console.log(dataObj)
    
//         // React.useEffect(() => {
    
    
//         //axios.post("http://localhost:3002/userQuery", dataObj)
//         //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery",dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
//         //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
//         //axios.get("https://admee.in:3002/db/test",{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
       
//          axios.post("https://localhost:3002/aws/upload", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
//          .then((res)=> console.log(res));
      
//       }
    
//       return (
//         <div>
//         <div className="funeral-data-collection">
//           <h2 style={{marginTop:'70px'}} className="page-title">Funeral Ground Data Collection</h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//           {/* <div className="form-group">
//                     <label htmlFor="photo">Photo:</label>
//                     <input {...register('photo')} type="file" accept="image/*" />
//           </div> */}
//            <div className="form-group">
//                     <label>Photos:</label>
//                     <input {...register('photos')} type="file" accept="image/*" multiple />
//            </div>
//             <div className="form-group">
//               <label htmlFor="GroundName">Ground Name:</label>
//               <input {...register('groundName')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="GroundPhoneNumber">Ground Phone Number:</label>
//               <input {...register('groundPhoneNumber')} type="text" />
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="GroundWebsiteURL">Ground Website URL:</label>
//               <input {...register('groundWebsiteURL')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="ContactPersonName">Contact Person Name:</label>
//               <input {...register('contactPersonName')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="ContactPersonDesignation">Contact Person Designation:</label>
//               <input {...register('contactPersonDesignation')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="ContactPersonMobileNumber">Contact Person Mobile Number:</label>
//               <input {...register('contactPersonMobileNumber')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="Email">Email:</label>
//               <input {...register('email')} type="email"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="Address">Address:</label>
//               <input {...register('address')} type="text"/>
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="City">City:</label>
//               <select {...register('city')}>
//                 <option value="">Select City</option>
//                 {cities.map((city,index)=>(
//                     <option key={index} value={city}>
//                         {city}
//                     </option>
//                 ))}
//               </select>
//             </div>
    
//             <div className="form-group">
//                 <label htmlFor="State">State:</label>
//                 <select {...register('state')}>
//                     <option value="">Select State</option>
//                     {states.map((state, index) => (
//                     <option key={index} value={state}>
//                         {state}
//                     </option>
//                     ))}
//                 </select>
//             </div>

    
//             <div className="form-group">
//               <label htmlFor="Country">Country:</label>
//               <select {...register('country')}>
//                 <option value="">Select Country</option>
//                 {countires.map((country,index)=>(
//                     <option key={index} value={country}>
//                         {country}
//                     </option>
//                 ))}
//               </select>
//             </div>
    
//             {/* <button type="submit" className="submit-button">Submit</button> */}
//             <Button variant="gradient" size="lg" className="mt-8" type="submit">
//               Register
//             </Button>

//             {alert &&  <Alert color="green">Your Deails has been submitted successfully.</Alert>} 
//           </form>
//         </div>
//         </div>
//       );
//     };
    
//     export default FuneralGroundDataCollectionForm;



//Funeral Ground Form V2

import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../../public/css/funeralGroundForm.css'; // Import the CSS file

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

export const FuneralGroundDataCollectionForm = () => {
    const { register, handleSubmit } = useForm();
    const photoInputRef = useRef(null);
    var states = ["Tamil Nadu", "Kerala", "Karnataka"];
    var cities = ["Chennai", "Trichy", "Coimbatore", "Madurai", "Tirunelveli"];
    var countries = ["India", "Dubai", "UK"];

    const [alert, setAlert] = useState(false);

    const onSubmit = async (data) => {
        console.log("Data from Form: ", data);
        setAlert(true);
        await backendConnection(data);
    };

    const backendConnection = async (data) => {
        const formData = new FormData();
        // formData.append('groundName', data.groundName);
        // formData.append('groundPhoneNumber', data.groundPhoneNumber);
        // formData.append('groundWebsiteURL', data.groundWebsiteURL);
        // formData.append('contactPersonName', data.contactPersonName);
        // formData.append('contactPersonDesignation', data.contactPersonDesignation);
        // formData.append('contactPersonMobileNumber', data.contactPersonMobileNumber);
        // formData.append('email', data.email);
        // formData.append('city', data.city);
        // formData.append('state', data.state);
        // formData.append('country', data.country);
        // formData.append('address', data.address);
        for (let i = 0; i < data.photos.length; i++) {
            formData.append('photos', data.photos[i]);
        }

        console.log("Backend Data Object:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        try {
            const s3Response = await axios.post("https://admee.in:3002/aws/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
                }
            });
            console.log(s3Response.data);
            const concatImageURLS = s3Response.data.imageURLs

            let dataObj = {}
            dataObj.groundPhotos = concatImageURLS;
            dataObj.groundName = data.groundName;
            dataObj.groundPhoneNumber = data.groundPhoneNumber;
            dataObj.groundWebsiteURL = data.groundWebsiteURL;
            dataObj.contactPersonName = data.contactPersonName;
            dataObj.contactPersonDesignation = data.contactPersonDesignation;
            dataObj.contactPersonMobileNumber = data.contactPersonMobileNumber;
            dataObj.email = data.email;
            dataObj.pincode = data.pincode;
            dataObj.city = data.city;
            dataObj.state = data.state;
            dataObj.country = data.country;
            dataObj.address = data.address;
            dataObj.taluk = data.taluk;
            dataObj.villageName = data.villageName;
            dataObj.operationalHours = data.operationalHours;
            dataObj.religionSupported = data.religionSupported;
            dataObj.facilities = data.facilities;
            dataObj.procedures = data.procedures;
            dataObj.requirements = data.requirements;
            dataObj.fees = data.fees;
            dataObj.services = data.services;
            console.log("DataOBJ Newly Created" +JSON.stringify(dataObj))
            const dbResponse = await axios.post("https://admee.in:3002/gb/funeralground", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
            .then((res)=> console.log(res));

        } catch (error) {
            console.error('Error uploading images to AWS S3:', error);
        }
    };

    return (
        <div>
            <div className="funeral-data-collection">
                <h2 style={{ marginTop: '70px' }} className="page-title">Funeral Ground Data Collection</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Photos:</label>
                        <input {...register('photos')} type="file" accept="image/*" multiple />
                    </div>
                    <div className="form-group">
                        <label>Ground Name:</label>
                        <input {...register('groundName')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Ground Phone Number:</label>
                        <input {...register('groundPhoneNumber')} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Ground Website URL:</label>
                        <input {...register('groundWebsiteURL')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Contact Person Name:</label>
                        <input {...register('contactPersonName')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Contact Person Designation:</label>
                        <input {...register('contactPersonDesignation')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Contact Person Mobile Number:</label>
                        <input {...register('contactPersonMobileNumber')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input {...register('email')} type="email"/>
                    </div>
                    <div className="form-group">
                        <label>Pincode:</label>
                        <input {...register('pincode')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input {...register('address')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <select {...register('city')}>
                            <option value="">Select City</option>
                            {cities.map((city,index)=>(
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>State:</label>
                        <select {...register('state')}>
                            <option value="">Select State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Country:</label>
                        <select {...register('country')}>
                            <option value="">Select Country</option>
                            {countries.map((country,index)=>(
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <label>Taluk:</label>
                        <input {...register('taluk')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Village:</label>
                        <input {...register('villageName')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>OperationalHours:</label>
                        <input {...register('operationalHours')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Fees:</label>
                        <input {...register('fees')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Religion Supported:</label>
                        <Textarea {...register('religionSupported')}  size="lg" label="Message" rows={2} />
                    </div>
                    <div className="form-group">
                        <label>Services:</label>
                        <Textarea {...register('services')}  size="lg" label="Message" rows={2} />
                    </div>
                    <div className="form-group">
                        <label>Facilities:</label>
                        <Textarea {...register('facilities')}  size="lg" label="Message" rows={5} />
                    </div>
                    <div className="form-group">
                        <label>Procedures:</label>
                        <Textarea {...register('procedures')}  size="lg" label="Message" rows={5} />
                    </div>
                    <div className="form-group">
                        <label>Requirements:</label>
                        <Textarea {...register('requirements')}  size="lg" label="Message" rows={5} />
                    </div>
                    <Button variant="gradient" size="lg" className="mt-8" type="submit">
                        Register
                    </Button>
                    {alert &&  <Alert color="green">Your Details have been submitted successfully.</Alert>}
                </form>
            </div>
        </div>
    );
};

export default FuneralGroundDataCollectionForm;
