import React ,{useState} from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
import Home from "./home1";
//import { Link} from 'react-router-dom'
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

export const ContactUs = () => {

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
    dataObj.mobileNumber = data.mobileNumber;
    dataObj.message = data.message;
    dataObj.category = data.category;
    dataObj.religion = data.religion;
    dataObj.caste = data.caste;
    console.log("Backend Data Object")
    console.log(JSON.stringify(dataObj))

    // React.useEffect(() => {


    //axios.post("http://localhost:3002/userQuery", dataObj)
    //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery",dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    //axios.get("https://admee.in:3002/db/test",{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    axios.post("https://admee.in:3003/gb/bookings", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
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
              <Input {...register('fullName')} size="lg" label="Full Name" />
            </div>
            <div className="mb-8 flex gap-8">
              <Input {...register('mobileNumber')} size="lg" label="Mobile Number" />
            </div>
            <div className="mb-8 flex gap-8">
              <Input {...register('email')} size="lg" label="Email Address" />
            </div>
            <div className="mb-8 flex gap-8">
              <Input {...register('city')}  size="lg" label="City" />
            </div>
            {/* <div className="mb-8 flex gap-8" >
            <label style ={{color:'dark-grey'}} variant="standard" size="lg">Religion</label>
 
             <select {...register('religion')}
      style={{
        backgroundColor: '#f3f4f6', // Set background color
        border: '1px solid #e5e7eb', // Set border
        borderRadius: '0.25rem', // Add border radius for rounded corners
       // padding: '0.5rem', // Add padding for better spacing
        color: 'green',
      }}
    >
      <option value="hindu"> Hindu </option>
      <option value="christian">Christian</option>
      <option value="muslim">Muslim</option>
      <option value="buddhist">Buddhist</option>
      <option value="others">Others</option>
    </select>
            </div> */}

<div className="mb-8 flex items-center gap-8">
  <label 
    style={{ 
      color: '#4B5563', 
      fontSize: '1rem', 
      fontWeight: '600', 
      lineHeight: '1.5', // Ensuring the label has a consistent height
      marginRight: '8px', // Slight margin to separate label from select box
    }} 
    htmlFor="religion"
  >
    Religion
  </label>
  
  <select
    {...register('religion')}
    style={{
      backgroundColor: '#f9fafb', // Soft background color
      border: '1px solid #D1D5DB', // Subtle border
      borderRadius: '8px', // Rounded corners
      color: '#5f5279', // Text color
      padding: '0.5rem 1rem', // Comfortable padding
      fontSize: '1rem', 
      fontWeight: '500',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Depth effect
      transition: 'all 0.3s ease',
      height: '40px', // Set a fixed height to match the label height
    }}
    onFocus={(e) => e.target.style.boxShadow = '0 2px 10px rgba(37, 99, 235, 0.4)'} // Focus effect
    onBlur={(e) => e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'} // Reset focus effect
  >
    <option value="hindu">Hindu</option>
    <option value="christian">Christian</option>
    <option value="muslim">Muslim</option>
    <option value="buddhist">Buddhist</option>
    <option value="others">Others</option>
  </select>
</div>


            <div className="mb-8 flex gap-8">
              <Input {...register('caste')}  size="lg" label="Caste" />
            </div>

            <div className="mb-8 flex items-center gap-8">
            {/* <label style ={{color:'dark-grey'}} variant="standard" size="lg">Category</label> */}
            <label 
    style={{ 
      color: '#4B5563', 
      fontSize: '0.85rem', 
      fontWeight: '600', 
      lineHeight: '1.5', // Ensuring the label has a consistent height
      marginRight: '8px', // Slight margin to separate label from select box
    }} 
    htmlFor="category"
  >
    Category
  </label>

             {/* <select {...register('category')}
      style={{
        backgroundColor: '#f3f4f6', // Set background color
        border: '1px solid #e5e7eb', // Set border
        borderRadius: '0.25rem', // Add border radius for rounded corners
       // padding: '0.5rem', // Add padding for better spacing
        color: 'purple',
      }}
    > */}
      <select
    {...register('category')}
    style={{
      backgroundColor: '#f9fafb', // Soft background color
      border: '1px solid #D1D5DB', // Subtle border
      borderRadius: '8px', // Rounded corners
      color: '#5f5279', // Text color
      padding: '0.5rem 1rem', // Comfortable padding
      fontSize: '1rem', 
      fontWeight: '500',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Depth effect
      transition: 'all 0.3s ease',
      height: '40px', // Set a fixed height to match the label height
    }}
    onFocus={(e) => e.target.style.boxShadow = '0 2px 10px rgba(37, 99, 235, 0.4)'} // Focus effect
    onBlur={(e) => e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'} // Reset focus effect
  >
      <option value="budget">Budget Package  ₹9999 </option>
      <option value="classic">Classic Package  ₹19999</option>
      <option value="elite">Elite Package  ₹29999</option>
    </select>
            </div>
            <Textarea {...register('message')}  size="lg" label="Message" rows={2} />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Book Funeral
            </Button>
            {/* <Button onClick={() => navigate('/home')}>
            POSTNAVII
            </Button> */}
            
            {alert &&  <Alert color="green">Your Deails has been submitted successfully.</Alert>} 
          </form>
        </div>
      </section>
        </>
    )
}

export default ContactUs;