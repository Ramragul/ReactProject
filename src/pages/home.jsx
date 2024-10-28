import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ContactUs from './contactus'

import { useNavigate } from 'react-router-dom';


export function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        {/* <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-[url('/img/funeralBackground.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                G &nbsp; O &nbsp; O &nbsp; D &nbsp; &nbsp; B &nbsp; Y &nbsp; E 
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
               Its Really Hard to Say Good Bye to the Loved Ones. Dont Worry We are with you to make your Toughest Time Lighter
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description ,navPage}) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                onClick={()=>(navPage)?navigate(navPage):console.log('No Navigation')}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Booking funeral with us is a big relief
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Our Funeral Director will be with you during the entire process.
                We take care of all the funeral activities starting from Death Registration,
                Cremation / Burial Ground Booking , Religion Specific Funeral Rituals and Pooja's 
                with Pandits, Last Drive to the funeral ground and Death Certificate Application.
                
                <br />
                <br />
                Book a service with us and stay relaxed.
              
              </Typography>
              <Button variant="outlined" onClick={()=>navigate('/contact')}>Book Now</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    // src="/img/teamwork.jpeg"
                    src="/img/support1.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  We offer Luxury , Moderate and Budgeted funeral packages.
                  You can select your convenient package and avail our service.
                  <br/>
                  <br/>
                  <Typography
                    variant="h5"
                    color="dark-purple"
                    className="mb-3"
                  >
                  1. Budget Package  - 9999 rs
                  <br/>
                  2. Classic Package - 19999 rs
                  <br/>
                  3. Elite Package   - 29999 rs
                  <br/>
                  </Typography>
                  <br/>

                  *We offer free service for Orphan and Kids.

                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Our Services">
            We Offer Wide Range of Servcies . Complete End to End Funeral Services and Also Individual Services
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
      </section>
      {/* <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto"> */}
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
          {/* <PageTitle heading="Contact Us">
            Complete this form and we will get back to you in 5 minutes.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Mobile Number" />
            </div>
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Email Address" />
              <Input variant="standard" size="lg" label="City" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section> */}
      <ContactUs />
      <div className="bg-blue-gray-50/50">
        
        <Footer />
      </div>
    </>
  );
}

export default Home;
