import { getAge, getExperience } from "../utils/date"


export default function PersonalInfo() {
  const [yearsOfExperience, monthsOfExperience] = getExperience()

  return (
    <div className="card">

      <img className="card-img-top" src="https://avatars.githubusercontent.com/u/49353949" alt="profile picture" />

      <div className="card-body">
        <h5 className="card-title">Matheus Sena</h5>
        <p className="card-text">
          Student of Information System.
          In love with programing languages, especially Python for data analysis, IA and WEB Scraping.
        </p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Age:</strong> <span>{getAge()} years old</span>
        </li>
        <li className="list-group-item">
          <strong>Location:</strong> <span>Brasília, Brazil</span>
        </li>
        <li className="list-group-item">
          <strong>Experience:</strong> <span>{yearsOfExperience} year{yearsOfExperience > 0 ? "s" : ""} and {monthsOfExperience} month{monthsOfExperience > 0 ? "s" : ""}</span>
        </li>
        <li className="list-group-item">
          <strong>Degree:</strong> <span>Higher education</span>
        </li>
      </ul>

      <div className="card-body">
        <a className="card-link text-dark" href="https://github.com/senavs"><i className="bi bi-github"></i></a>
        <a className="card-link text-dark" href="https://www.linkedin.com/in/senavs"><i className="bi bi-linkedin"></i></a>
        <a className="card-link text-dark" href="mailto:sena.matheus14@gmail.com"><i className="bi bi-envelope-fill"></i></a>
      </div>

    </div>
  )
}