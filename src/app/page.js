

import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LiaRocketSolid } from "react-icons/lia";
import { GiMeltingMetal } from "react-icons/gi";


const Page = () => (
  <div className='home'>

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

    <section className="ourPortafolio">

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

        <div className="imgBox"></div>


      </div>



    </section>

    <section className="mainSources">

      <div className="titBox">
        <h2>Main sources of supply</h2>
      </div>

    </section>

  </div>
)

export default Page;