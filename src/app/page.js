

import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LiaRocketSolid } from "react-icons/lia";


const Page = () => (
  <div className='home'>
    <nav className='mainHeader'>
      <div className='imgBox'>
        <Image width={70} height={70} alt='logo' src={'/img/home/pfd_logo_color.svg'} />
        <p className="title">PDF</p>
        <p>INTERNATIONAL GROUP</p>
      </div>
    </nav>
    <section className="introWrapper">

      <div className="titBox">
        <h1>PFD International Group <span>Global Trade & Logistics Solutions</span></h1>
      </div>

      <div className="infBox">
        <p className="pfd">We specialize in facilitating
          seamless global trade by providing <span>comprehensive
            logistics </span> and <span>supply chain solutions</span>.</p>
        <p className="subPfd">
          With a <span>strong network of partners</span> and a commitment to excellence, we
          ensure <span>efficient transportation</span> and reliable sourcing of
          raw materials across international markets
        </p>
      </div>

    </section>

    <section className="misionVision">

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
  </div>
)

export default Page;