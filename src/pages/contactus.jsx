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
    dataObj.category = data.category
    console.log("Backend Data Object")
    console.log(dataObj)

    // React.useEffect(() => {


    //axios.post("http://localhost:3002/userQuery", dataObj)
    //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery",dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    //axios.post("https://funeral-backend-git-main-ramragul.vercel.app/userQuery", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    //axios.get("https://admee.in:3002/db/test",{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
    axios.post("https://admee.in:3002/gb/bookings", dataObj,{headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "PUT,POST,PATCH,DELETE,GET"}})
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
            <div className="mb-8 flex gap-8" >
            <label style ={{color:'dark-grey'}} variant="standard" size="lg">Category</label>
            {/* <select {...register('category')} variant="standard" size="lg">
               <option value="budget">Budget Package</option>
               <option value="classic">Classic Package</option>
               <option value="elite">Elite Package</option>
            </select> */}
             <select {...register('category')}
      style={{
        backgroundColor: '#f3f4f6', // Set background color
        border: '1px solid #e5e7eb', // Set border
        borderRadius: '0.25rem', // Add border radius for rounded corners
       // padding: '0.5rem', // Add padding for better spacing
        color: 'purple',
      }}
    >
      <option value="budget">Budget Package</option>
      <option value="classic">Classic Package</option>
      <option value="elite">Elite Package</option>
    </select>
            </div>
            <Textarea {...register('message')}  size="lg" label="Message" rows={2} />
            <Button variant="gradient" size="lg" className="mt-8" type="submit">
              Book
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