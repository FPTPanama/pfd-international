

import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LiaRocketSolid, LiaIndustrySolid } from "react-icons/lia";
import { GiMeltingMetal } from "react-icons/gi";
import { TbWorldPin } from "react-icons/tb";
import { PiGearBold } from "react-icons/pi";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { PiBatteryFullBold } from "react-icons/pi";



import React from 'react'

const page = () => {

  const whyChooseUs = [
    {
      title: 'Global Network',
      info: '<span>Strong alliances</span> in major trade hubs worldwide',
      icon: <TbWorldPin size={70}/>
    },
    {
      title: 'Industry Expertise',
      info: '<span>Deep knowledge</span> in sourcing and distributing industrial raw materials',
      icon: <LiaIndustrySolid size={70}/>
    },
    {
      title: 'Efficient Logistics',
      info: 'Tailored solutions for <span>seamless international trade</span>',
      icon: <PiGearBold size={70}/>
    },
    {
      title: 'Quality & Compliance',
      info: 'Commitment to <span>high standards</span> and regulatory adherence.',
      icon: <LuLaptopMinimalCheck size={70}/>
    },
    {
      title: 'Reliable Supply Chains',
      info: '<span>Secure and consistent</span> product availability.',
      icon: <PiBatteryFullBold size={70}/>
    }
  ]

  return (
    <div className='home'>

      

    <section className="introWrapper">

      <div className="titBox">
        <h1>PFD International Group <span>Global Trade & Logistics Solutions</span></h1>
        <p className="pfd">We specialize in facilitating
          seamless global trade by providing <span>comprehensive
            logistics </span> and <span>supply chain solutions</span>.</p>
        <p className="subPfd">
          With a <span>strong network of partners</span> and a commitment to excellence, we
          ensure <span>efficient transportation</span> and reliable sourcing of
          raw materials across international markets
        </p>
      </div>

      <div className="infBox">

      <Image src={'/img/home/camion_roquero.webp'} width={1960} height={1379} alt="camion"/>

      </div>

    </section>

    <section id={'mision'} className="misionVision">

      <h2>Mision, vision and goals.</h2>

      <div className="gridMision">
        <div className="misBox">
          <div className="titBox">
            <TbTargetArrow size={100} />
            <h3>Mision</h3>
          </div>
          <p>To provide high-quality raw materials and logistics solutions to industries worldwide, optimizing supply chains through strategic partnerships, innovation, and a commitment to excellence.</p>
        </div>
        <div className="misBox">
          <div className="titBox">
            <MdOutlineRemoveRedEye size={100} />
            <h3>Vision</h3>
          </div>
          <p>To be a globally recognized
            leader in the trade and logistics
            of industrial raw materials,
            setting industry standards for
            reliability, sustainability, and
            efficiency.</p>
        </div>
        <div className="misBox">
          <div className="titBox">
            <LiaRocketSolid size={100} />
            <h3>Goals</h3>

          </div>
          <ul>
            <li>Expand our presence in key
              global markets by
              strengthening our strategic
              alliances.
            </li>
            <li>
              Ensure the consistent and
              efficient supply of high-
              quality raw materials to our
              clients.
            </li>
          </ul>
        </div>
      </div>

    </section>

    <section id={'products'} className="ourPortafolio">

      <div className="titBox">
        <h2>Our Product portafolio</h2>
        <p>We specialize in the trade and distribution
        of industrial raw materials.</p>
      </div>

      <div className="infBox">

        <div className="griProBox">

          <div className="griBox">
            <h3>Metal</h3>
            <ul>
              <li>Iron Ore</li>
              <li>Anthracite</li>
              <li>Pellets</li>
              <li>Pig Iron</li>
              <li>Steel</li>
              <li>Aluminum</li>
            </ul>
          </div>
          <div className="griBox">
            <h3>Chemicals</h3>
            <ul>
              <li>Caustic Soda</li>
              <li>Sulfuric Acid</li>
              <li>Hydrochloric Acid</li>
              <li>Sodium Hypochlorite</li>
              <li>Ammonium Nitrate</li>
            </ul>
          </div>

        </div>

        <div className="imgBox">
          <Image src={'/img/home/hierro.webp'} width={2165} height={2078} alt="hierro"/>
        </div>


      </div>



    </section>

    <section className="mainSources">

      <div className="titBox">
        <h2>Main sources of supply</h2>
      </div>

      <div className="imgBox">
        <Image src={'/img/home/world_map.svg'} width={300} height={200} alt="world"/>
      </div>

    </section>

    <section className="whyChooseUs">

      <div className="titBox">
        <h2>Why <br />choose us?</h2>
      </div>

      <div className="griWhyUs">

        {whyChooseUs.map((item, key) => {
          return (
            <div key={key} className="griBox">

              {item.icon}
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{__html: item.info}} />
            </div>
          )
        })}
      </div>

    </section>

  </div>
  )
}

export default page