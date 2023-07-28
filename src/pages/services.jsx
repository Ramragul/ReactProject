import React from 'react'
import { featuresData, teamData, contactData } from "@/data";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
// import { Navbar } from "@/widgets/layout";
// import routes from "@/routes";

export const Services = () => {

    return(
       <>
       {/* <Navbar routes={routes} /> */}
       
        <section className="px-4 pt-20 pb-48" >
        <div className="container mx-auto">
          <PageTitle heading="Our Services">
          We offer Luxury , Moderate and Budgeted funeral packages. We cover all the activities.
                  You can select your convenient package and avail our service. Call us for More Details. Contact no : +1 12345678
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
      </>
    )
}

export default Services;