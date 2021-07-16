import { getAge, getExperienceAsString } from "../../utils/date"


export default function AboutSection() {

  return (
    <div className="accordion">

      {/* about me */}
      <div className="accordion-item">

        <div id="about-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            <div className="row">
              <h2>About me</h2>

              <div className="col-md-6 col-12 mb-2">
                <strong>Name:</strong> <span>Matheus Sena Vasconcelos</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Age:</strong> <span>{getAge()} years old</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Location:</strong> <span>Brasília, Brazil</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Experience:</strong> <span>{getExperienceAsString()}</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Degree:</strong> <span>Higher education</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Career Level:</strong> <span>Senior</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Phone number:</strong> <span>+55 61 98341-1002</span>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <strong>Email:</strong> <span>sena.matheus14@gmail.com</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* little bit */}
      <div className="accordion-item">
        <div id="little-bit-section" className="accordion-collapse collapse show">
          <div className="accordion-body">
            <h2>A little about myself</h2>

            <span>
              Hi!! I'm Matheus Sena, a <strong>Machine Learning</strong> and <strong>Backend Software Engineer</strong> who loves
              develop services that helps people to decrease time and costs in a personal and professional environments.
              I have <strong>experience</strong> working <strong> from web service development</strong> (monolithics and APIs) <strong>to web scraper</strong>
              , <strong>devops</strong>, <strong>data scientist</strong> and <strong>machine learning engineer</strong>.
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}