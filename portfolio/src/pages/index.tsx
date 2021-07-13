import AboutSection from "../components/AboutSection";
import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";

export default function Index() {
  return (
    <div className="container pb-3">

      {/* nav bar 1/2 */}
      <nav className="d-none d-md-inline">
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
        <div className="col-md-4 col-12 mt-3 mt-md-0">
          <PersonalInfo />
        </div>

        {/* nav bar 2/2 */}
        <nav className="d-sm-none">
          <NavBar
            aboutId="about"
            resumeId="resume"
            experienceId="experience"
            educationId="education"
            certificationsId="certification"
            contactMe="contact"
          />
        </nav>

        {/* sections */}
        <section className="col-md-8 col-12">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="about" role="tabpanel"><AboutSection /></div>
          </div>
        </section>

      </main>
    </div>
  )
}
