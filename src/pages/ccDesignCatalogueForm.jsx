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

export const CCDesignCatalougeForm = () => {
    const { register, handleSubmit } = useForm();
    const photoInputRef = useRef(null);

    var userType = ["Owner","Driver","Rented Guest"];
    var advertisementType = ["Car", "Auto", "Lorry", "Bus", "Mini Door" , "Bike" , "Home", "Office"];
    var advertisementCategory = ["Own" , "Commercial"];
    var cities = ["Chennai", "Trichy", "Coimbatore", "Madurai", "Tirunelveli"];
    var states = ["Tamil Nadu", "Kerala", "Karnataka"];

    var countries = ["India", "Dubai", "UK"];

    const [alert, setAlert] = useState(false);
    const [responseData,setResponseData] = useState('');

    const [responseStatus , setResponseStatus] = useState('');

    const onSubmit = async (data) => {
        console.log("Data from Form: ", data);
        await backendConnection(data);
        setAlert(true);
    };

    const backendConnection = async (data) => {
        const formData = new FormData();

        for (let i = 0; i < data.photos.length; i++) {
            formData.append('photos', data.photos[i]);
        }

        console.log("Backend Data Object:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        try {
            const s3Response = await axios.post("https://admee.in:3003/aws/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"
                }
            });
            console.log(s3Response.data);
            const concatImageURLS = s3Response.data.imageURLs

            let dataObj = {}
            dataObj.partnerPhotos = concatImageURLS;
            dataObj.partnerName = data.partnerName;
            dataObj.partnerPhoneNumber = data.partnerPhoneNumber;
            dataObj.partnerType = data.partnerType;
            dataObj.partnerAdvertisementCategory = data.partnerAdvertisementCategory;
            dataObj.partnerAdvertisementType = data.partnerAdvertisementType;
            dataObj.partnerVehicleNumber = data.partnerVehicleNumber;
            dataObj.partnerAvailability = data.partnerAvailability;
            dataObj.email = data.email;
            dataObj.pincode = data.pincode;
            dataObj.city = data.city;
            dataObj.state = data.state;
            dataObj.country = data.country;
            dataObj.address = data.address;
            dataObj.areaCoverage = data.areaCoverage;
            dataObj.expectedAmount = data.expectedAmount;
            dataObj.landmark = data.landmark;
            dataObj.remarks = data.remarks;
            console.log("Full Data Created" +JSON.stringify(dataObj))
            const dbResponse = await axios.post("https://admee.in:3003/admee/partner/registration", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
            .then((res)=> {
                console.log(res)
                setResponseStatus(res.status === 200 ? true : false);
                setResponseData(res)
                
            });

        } catch (error) {
            console.error('Error uploading images to AWS S3:', error);
            setResponseData(error)
        }
    };

    return (
        <div>
            <div className="funeral-data-collection">
                <h2 style={{ marginTop: '70px' }} className="page-title">Admee Data Collection</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Photos:</label>
                        <input {...register('photos')} type="file" accept="image/*" multiple />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input {...register('partnerName')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input {...register('partnerPhoneNumber')} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <select {...register('partnerType')}>
                            <option value="">Select User Type</option>
                            {userType.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Type:</label>
                        <select {...register('partnerAdvertisementType')}>
                            <option value="">Select Type</option>
                            {advertisementType.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Advertisement Category:</label>
                        <select {...register('partnerAdvertisementCategory')}>
                            <option value="">Select Category</option>
                            {advertisementCategory.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Vehicle Number </label>
                        <input {...register('partnerVehicleNumber')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Partner Availability </label>
                        <input {...register('partnerAvailability')} type="text"/>
                    </div>

   
                    <div className="form-group">
                        <label>Email:</label>
                        <input {...register('email')} type="email"/>
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
                        <label>Pincode:</label>
                        <input {...register('pincode')} type="text"/>
                    </div>

                    <div className="form-group">
                        <label>Area Covered:</label>
                        <input {...register('areaCoverage')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Landmark:</label>
                        <input {...register('landmark')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Expected Amount</label>
                        <input {...register('expectedAmount')} type="text"/>
                    </div>


                    <div className="form-group">
                        <label>Remarks:</label>
                        <Textarea {...register('remarks')}  size="lg" label="Message" rows={5} />
                    </div>
                    <Button variant="gradient" size="lg" className="mt-8" type="submit">
                        Register
                    </Button>
                    {alert && responseStatus &&  <Alert color="green">Your Details have been submitted successfully.</Alert>}
                    {alert && !responseStatus &&  <Alert color="red"> {responseData.message}</Alert>}
                </form>
            </div>
        </div>
    );
};

export default CCDesignCatalogueForm;
