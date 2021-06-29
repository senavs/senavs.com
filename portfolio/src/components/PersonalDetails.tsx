import { getAge, getExperience } from "../utils/date";

export default function PersonalDetails() {
  const [yearsOfExperience, mothsOfExperience] = getExperience()

  return (
    <div className="container">

      <div className="shadow">

        <div className="row g-0">
          <div className="col-12 bg bg-white rounded-top">
            <h5 className="fw-bold text-center py-2">
              PERSONAL DETAILS
            </h5>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-12">
            <img src="https://avatars.githubusercontent.com/u/49353949" alt="profile picture" width="100%" />
          </div>
        </div>

        <div className="row g-0 bg bg-white py-4 px-2 rounded-bottom">
          <div className="col-12">

            <div className="row">
              <div className="col-6">
                <div><span className="fs-6 fw-bold">NAME</span></div>
              </div>
              <div className="col-6">
                <div><span>Matheus Sena</span></div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div><span className="fs-6 fw-bold">AGE</span></div>
              </div>
              <div className="col-6">
                <div><span>{getAge()}</span></div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div><span className="fs-6 fw-bold">LOCATION</span></div>
              </div>
              <div className="col-6">
                <div><span>Brasília, Brazil</span></div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div><span className="fs-6 fw-bold">EXPERIENCE</span></div>
              </div>
              <div className="col-6">
                <div><span>{yearsOfExperience},{mothsOfExperience} year{yearsOfExperience ? "s" : ""}</span></div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div><span className="fs-6 fw-bold">DEGREE</span></div>
              </div>
              <div className="col-6">
                <div><span>Bachelor</span></div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}