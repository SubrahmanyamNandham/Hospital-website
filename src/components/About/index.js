import {Link} from 'react-router-dom'
import Footer from '../Footer'

import './index.css'

const About = () => (
  <div className="about">
    <Link to="/">
      <img
        className="logo"
        alt="website logo"
        src="https://res.cloudinary.com/dvco5xnoe/image/upload/v1680787604/hospital-low-resolution-color-logo_h46jeu.png"
      />
    </Link>
    <center>
      <h1 className="title">
        Orthopedics and Bone Health at Medicover Hospital
      </h1>
      <p className="description">
        Medicover Hospitals is a leading multi-speciality hospital, providing
        excellent healthcare facilities for bone health and is considered the
        best orthopedic hospitals in hyderabad. All orthopedic disorders, such
        as abnormalities of the joints, muscles, bones, ligaments, and tendons,
        are treated here. We have excellent infrastructure and technology for
        detecting micro bone tumours as well as various types of tissue and
        ligament malignancies. With the help of our expert ortho-oncologists, we
        design the most feasible treatment plan for such patients. Medicovers
        orthopedics division is equipped with top ortho doctors, surgeons,
        ortho-oncologists, and physiotherapists who effectively evaluate and
        treat bone illnesses and disorders of various kinds. We specialize in
        treating bone disorders ranging from moderate to severe conditions like
        bruises, sprains, knee pain, fatal accidents, bone fractures, bone
        cancer, and arthritis. To provide superior therapy, we use cutting-edge
        equipment and technology that offers a seamless treatment experience
        along with a high success rate.
      </p>
      <div className="mahmut">
        <h1 className="enes">Mahmut Enes Kayaalp</h1>
        <p className="doctor">
          I am doctor who specializes in the diagnosis, treatment, and
          prevention of conditions and injuries affecting the musculoskeletal
          system. This includes the bones, joints, ligaments, tendons, and
          muscles. Orthopedic doctors undergo extensive education and training,
          including a bachelors degree, four years of medical school, and a
          five-year residency program in orthopedic surgery. During their
          residency, they gain hands-on experience in diagnosing and treating
          various musculoskeletal conditions. Orthopedic doctors may work in
          hospitals, clinics, private practices, and sports medicine centers.
          They may specialize in specific areas of orthopedics, such as hand
          surgery, sports medicine, joint replacement, or pediatric orthopedics.
          Orthopedic doctors use a range of treatment options, including
          surgery, medication, physical therapy, and lifestyle modifications, to
          help their patients manage and recover from musculoskeletal conditions
          and injuries. Overall, i am helping patients regain mobility, reduce
          pain, and improve their quality of life.
        </p>
      </div>
    </center>
    <Footer />
  </div>
)

export default About
