import AboutSection from "../components/about/AboutSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import NavBar from "../components/navbar/NavBar";
import PersonalInfo from "../components/about/PersonalInfo";
import ResumeSection from "../components/resume/ResumeSection";
import EducationSection from "../components/education/EducationSession";
import AchievementsSection from "../components/achievements/AchievementsSection";


export default function Index() {
  return (
    <div className="container pb-3">

      {/* navbar */}
      <nav className="sticky-top">
        <NavBar
          aboutId="about"
          resumeId="resume"
          experienceId="experience"
          educationId="education"
          achievementsId="achievements"
          contactMe="contact"
        />
      </nav>

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
          </div>
        </section>

      </main>
    </div>
  )
}
