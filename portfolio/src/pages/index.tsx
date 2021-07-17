import AboutSection from "../components/about/AboutSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import NavBar from "../components/navbar/NavBar";
import PersonalInfo from "../components/about/PersonalInfo";
import ResumeSection from "../components/resume/ResumeSection";
import EducationSection from "../components/education/EducationSession";
import AchievementsSection from "../components/achievements/AchievementsSection";
import ContactSection from "../components/contact/ContactSection";


export default function Index() {

  // Client-side-only code
  if (process.browser) {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');

      let css: {}
      if (window.pageYOffset > 0) {
        css = { boxShadow: '1px 1px 15px #888888' }
      } else {
        css = { boxShadow: '0px 0px 0px #888888' }
      }

      Object.assign(nav.style, css);
    })
  }

  return (
    <>
      {/* navbar */}
      <nav className="sticky-top">
        <div className="container p-0 p-md-2">
          <NavBar
            aboutId="about"
            // resumeId="resume"
            experienceId="experience"
            educationId="education"
            achievementsId="achievements"
            contactMe="contact"
          />
        </div>
      </nav>

      <div className="container pb-3">

        {/* content */}
        <main className="row">

          {/* personal information */}
          <div className="col-md-4 col-12 mt-3 mt-md-0">
            <PersonalInfo />
          </div>

          {/* sections */}
          <section className="col-md-8 col-12 mt-3 mt-md-0">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="about" role="tabpanel"><AboutSection /></div>
              <div className="tab-pane fade show" id="resume" role="tabpanel"><ResumeSection /></div>
              <div className="tab-pane fade show" id="experience" role="tabpanel"><ExperienceSection /></div>
              <div className="tab-pane fade show" id="education" role="tabpanel"><EducationSection /></div>
              <div className="tab-pane fade show" id="achievements" role="tabpanel"><AchievementsSection /></div>
              <div className="tab-pane fade show" id="contact" role="tabpanel"><ContactSection /></div>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
