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