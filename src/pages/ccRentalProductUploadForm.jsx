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

export const CCRentalProductUploadForm = () => {
         
    const { register, handleSubmit } = useForm();
    const photoInputRef = useRef(null);

    var productPriceBand = ["A","B","C","D","E","F","G"];

    var productCategory = [
        {"id": 1 , "name" : "Blazzer"},
        {"id": 2 , "name" : "IndoWestern"},
        {"id": 3 , "name" : "Pyjama"},
        {"id": 4 , "name" : "Sharwani"},
        {"id": 5 , "name" : "Suits"},
    ]

    const productUsageOccasion = ["Party","Festival","Wedding","Celebrations","Casual", "Formal","Regular","Trendy","Tradational","Glamour","Bridal"];

    var countries = ["India", "Dubai", "UK"];

    const [alert, setAlert] = useState(false);
    const [responseData,setResponseData] = useState('');

    const [responseStatus , setResponseStatus] = useState('');

    const [selectedProductCategories, setSelectedProductCategories] = useState([]);

    const onSubmit = async (data) => {
        console.log("Data from Form: ", data);
       await backendConnection(data);
        setAlert(true);
    };

    const handleProductUsageOccasionCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setSelectedProductCategories([...selectedProductCategories, value]);
        } else {
          setSelectedProductCategories(selectedProductCategories.filter((category) => category !== value));
        }
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
            } catch (error) {
            console.error('Error uploading images to AWS S3:', error);
            setResponseData(error)
            }
            try {
            const concatImageURLS = s3Response.data.imageURLs

            let dataObj = {}
            dataObj.productImageURL = concatImageURLS;
            dataObj.productName = data.productName;
            dataObj.productUsageGender = data.productUsageGender;
            dataObj.productUsageOccasion = data.productUsageOccasion;
            dataObj.productOrigin = data.productOrigin;
            dataObj.productCategory = data.productCategory;
            //dataObj.productCategoryID = data.productCategory.id
            dataObj.productPriceBand = data.productPriceBand;
            dataObj.productPrice = data.productPrice;
            dataObj.productRentalPrice = data.productRentalPrice;
            dataObj.productAvailability = "Yes";
            dataObj.remarks = data.remarks;
           
            console.log("Full Data Created" +JSON.stringify(dataObj))
            const dbResponse = await axios.post("https://admee.in:3003/api/cc/rental/product/upload", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
            .then((res)=> {
                console.log(res)
                setResponseStatus(res.status === 200 ? true : false);
                setResponseData(res)
                
            });

        } catch (error) {
            console.error('Error uploading images to DB :' +error);
            setResponseData(error)
        }
    };

    return (
        <div>
            <div className="funeral-data-collection">
                <h2 style={{ marginTop: '70px' }} className="page-title">Design Catalogue Data Upload form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Product Photos:</label>
                        <input {...register('photos')} type="file" accept="image/*" multiple />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input {...register('productName')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Product Origin:</label>
                        <input {...register('productOrigin')} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <select {...register('productCategory')}>
                            <option value="">Select Product Category</option>
                            {productCategory.map((category, index) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>



                    <div className="form-group">
                        <label>Product Usage Gender:</label>
                        <input {...register('productUsageGender')} type="text"/>
                    </div>

                    <div className="form-group">
                    <label>Product Usage Occasion</label>
                    {productUsageOccasion.map((option, index) => (
                    <div key={index}>
                        <label>
                        <input
                            type="checkbox"
                            value={option}
                            onChange={handleProductUsageOccasionCheckboxChange}
                            {...register('productUsageOccasion')}
                        />
                        {option}
                        </label>
                    </div>
                    ))}
                   </div>

                    <div className="form-group">
                        <label>Type:</label>
                        <select {...register('productPriceBand')}>
                            <option value="">Select Product Category</option>
                            {productPriceBand.map((priceBand, index) => (
                                <option key={index} value={priceBand}>
                                    {priceBand}
                                </option>
                            ))}
                        </select>
                    </div>
   
                    <div className="form-group">
                        <label>Product Price:</label>
                        <input {...register('productPrice')} type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Product Rental Price:</label>
                        <input {...register('productRentalPrice')} type="text"/>
                    </div>
 
                  




                    <div className="form-group">
                        <label>Remarks:</label>
                        <Textarea {...register('remarks')}  size="lg" label="Message" rows={5} />
                    </div>
                    <Button variant="gradient" size="lg" className="mt-8" type="submit">
                        Upload Product
                    </Button>
                    {alert && responseStatus &&  <Alert color="green">Your Details have been submitted successfully.</Alert>}
                    {alert && !responseStatus &&  <Alert color="red"> {responseData.message}</Alert>}
                </form>
            </div>
        </div>
    );
};

export default CCRentalProductUploadForm;
               
