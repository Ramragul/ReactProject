import React, { useState, useRef } from 'react';
import {useForm} from "react-hook-form";
import Camera from 'react-html5-camera-photo';
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

    const {register , handleSubmit} = useForm();
    const photoInputRef = useRef(null);
    var states = ["Tamil Nadu","Kerala","Karnataka"]
    var cities = ["Chennai","Trichy","Coimbatore","Madurai","Tirunelveli"]
    var countires = ["India","Dubai","UK"]

    const [alert,setAlert] = useState(false)

    //   const [formData, setFormData] = useState({
    //     GroundName: '',
    //     GroundPhoneNumber: '',
    //     GroundWebsiteURL: '',
    //     ContactPersonName: '',
    //     ContactPersonDesignation: '',
    //     ContactPersonMobileNumber: '',
    //     Email: '',
    //     Address: '',
    //     City: '',
    //     State: '',
    //     Country: ''
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };
    

    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }

    
    const onSubmit = (data) => {
        console.log("Data from Form: ", data);

       // const formData = new FormData();

        // Append files to FormData object
        // if (data.photos) {
        //     for (let i = 0; i < data.photos.length; i++) {
        //         formData.append(`photos[${i}]`, data.photos[i]);
        //     }
        // }

        setAlert(true);
        backendConnection(data);
      };
      

      const backendConnection = (data) => {
  
        let dataObj = {}
        dataObj.groundName = data.groundName;
        dataObj.groundPhoneNumber = data.groundPhoneNumber;
        dataObj.groundWebsiteURL = data.groundWebsiteURL;
        dataObj.contactPersonName = data.contactPersonName;
        dataObj.contactPersonDesignation = data.contactPersonDesignation; 
        dataObj.ContactPersonMobileNumber = data.ContactPersonMobileNumber;
        dataObj.email = data.email;
        dataObj.city = data.city;
        dataObj.state = data.state;
        dataObj.country = data.country;
        dataObj.address = data.address;
        dataObj.photos = data.photos;
        console.log("Backend Data Object")
        console.log(dataObj)
    
        // React.useEffect(() => {
    
    
        //axios.post("http://localhost:3002/userQuery", dataObj)
        //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery",dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
        //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
        //axios.get("https://admee.in:3002/db/test",{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
       
        // axios.post("https://admee.in:3002/gb/bookings", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
        // .then((res)=> console.log(res));
      
      }
    
      return (
        <div>
        <div className="funeral-data-collection">
          <h2 style={{marginTop:'70px'}} className="page-title">Funeral Ground Data Collection</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="form-group">
                    <label htmlFor="photo">Photo:</label>
                    <input {...register('photo')} type="file" accept="image/*" />
          </div> */}
           <div className="form-group">
                    <label>Photos:</label>
                    <input {...register('photos')} type="file" accept="image/*" multiple />
           </div>
            <div className="form-group">
              <label htmlFor="GroundName">Ground Name:</label>
              <input {...register('groundName')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="GroundPhoneNumber">Ground Phone Number:</label>
              <input {...register('groundPhoneNumber')} type="text" />
            </div>
    
            <div className="form-group">
              <label htmlFor="GroundWebsiteURL">Ground Website URL:</label>
              <input {...register('groundWebsiteURL')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="ContactPersonName">Contact Person Name:</label>
              <input {...register('contactPersonName')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="ContactPersonDesignation">Contact Person Designation:</label>
              <input {...register('contactPersonDesignation')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="ContactPersonMobileNumber">Contact Person Mobile Number:</label>
              <input {...register('contactPersonMobileNumber')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input {...register('email')} type="email"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="Address">Address:</label>
              <input {...register('address')} type="text"/>
            </div>
    
            <div className="form-group">
              <label htmlFor="City">City:</label>
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
                <label htmlFor="State">State:</label>
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
              <label htmlFor="Country">Country:</label>
              <select {...register('country')}>
                <option value="">Select Country</option>
                {countires.map((country,index)=>(
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
              </select>
            </div>
    
            {/* <button type="submit" className="submit-button">Submit</button> */}
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Register
            </Button>

            {alert &&  <Alert color="green">Your Deails has been submitted successfully.</Alert>} 
          </form>
        </div>
        </div>
      );
    };
    
    export default FuneralGroundDataCollectionForm;
    