import {Link} from 'react-router-dom'
import './index.css'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Testimonials = () => (
  <div>
    <Navbar />
    <div className="itemsTest">
      <Link to="/">
        <p className="home">Home</p>
      </Link>
      <p className="home">Testimonials</p>

      <h1 className="name">Amit Kr Singh</h1>

      <p className="review">
        My mother got her knee operation done from Dr Santosh Shetty. From the
        first meeting itself he was sweet and very clear. He told us all the
        details about the operation, the procedure, the materials he is going to
        use, the time it will take for healing etc very patiently. My mother had
        been delaying the surgery because she was scared of getting operated.
        After meeting him, she felt so comfortable that she instantly got ready
        to do the knee replacement with him. Post the operation he was always
        available on call. We had so many small concerns and I ended up calling
        him quite a few times, sometimes late in the night as well. He would
        always answer the call and solve all our queries patiently. It’s very
        rare that a surgeon at his level who is always so busy takes such kind
        of personal interest in the patients well being. He was very kind,
        empathetic and encouraging. My mom felt half her illness was gone just
        by talking to him. We had been to few doctors before we got to know
        about Dr Shetty. We feel doing the knee replacement surgery with him was
        the best decision we could have ever made! Such an excellent doctor and
        such a positive experience. Thank you Dr Shetty. Will always be
        grateful.
      </p>
      <h1 className="name">Hiren shah</h1>
      <p className="review">
        He is a great doctor Recently my mom had gone under an accident in which
        her hip ball got cracked her age is 76 dr Santosh Shetty did a great
        work and now my mom is feeling great He is a person who will give full
        attention to the patient and make sure that the patient recovers as fast
        as possible Infact he was in usa when my mom accident took place we are
        so thankful to him and we are grateful that specially for his patient he
        came all the way from us to make the operation possible and so that my
        mom could recover Rakhi Hiren Shah
      </p>
    </div>

    <Footer />
  </div>
)

export default Testimonials
