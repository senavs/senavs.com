import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";

export default function Index() {
  return (
    <div className="container">

      {/* nav bar */}
      <nav className="text-center">
        <NavBar
          aboutId="about"
          resumeId="resume"
          experienceId="experience"
          educationId="education"
          certificationsId="certification"
          contactMe="contact"
        />
      </nav>

      {/* content */}
      <main className="row">

        {/* personal information */}
        <div className="col-md-4 col-12">
          <PersonalInfo />
        </div>

        {/* sections */}
        <section className="col-md-8 col-12">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab">about</div>
            <div className="tab-pane fade" id="resume" role="tabpanel" aria-labelledby="profile-tab">resume</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">contact</div>
          </div>
        </section>

      </main>
    </div>
  )
}
