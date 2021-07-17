import styles from "../../styles/NavBar.module.css"


interface NavBarProps {
  aboutId: string,
  resumeId: string,
  experienceId: string,
  educationId: string,
  achievementsId: string
  contactMe: string
}

export default function NavBar({ aboutId, resumeId, experienceId, educationId, achievementsId, contactMe }: NavBarProps) {
  return (
    <ul className={`${styles.horizontalNavbar} nav nav-pills nav-fill flex-nowrap py-3 no-wrap bg-white`} role="tablist">

      <li className="nav-item" role="presentation">
        <button className="nav-link active" data-bs-toggle="tab" data-bs-target={`#${aboutId}`} type="button" role="tab" aria-selected="true">
          <i className="bi bi-person-fill me-2"></i><span>About me</span>
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#${resumeId}`} type="button" role="tab" aria-selected="false">
          <i className="bi bi-cpu-fill me-2"></i><span>Resume</span>
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#${experienceId}`} type="button" role="tab" aria-selected="false">
          <i className="bi bi-briefcase-fill me-2"></i><span>Experience</span>
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#${educationId}`} type="button" role="tab" aria-selected="false">
          <i className="bi bi-journal-bookmark-fill me-2"></i><span>Education</span>
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#${achievementsId}`} type="button" role="tab" aria-selected="false">
          <i className="bi bi-award-fill me-2"></i><span>Achievements</span>
        </button>
      </li>

      <li className="nav-item" role="presentation">
        <button className="nav-link" data-bs-toggle="tab" data-bs-target={`#${contactMe}`} type="button" role="tab" aria-selected="false">
          <i className="bi bi-telephone-fill me-2"></i><span>Contact Me</span>
        </button>
      </li>

    </ul>
  )
}