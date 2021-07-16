export default function AchievementsSection() {

  return (
    <div className="accordion">

      {/* about me */}
      <div className="accordion-item">

        <div id="about-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            <div className="row">
              <div className="col-12">
                <h2>Certifications</h2>

                <div className="ms-5">
                  <i className="bi bi-star-fill me-3"></i>
                  <span>Udacity - Machine Learning Enginee Nanodegree</span>
                </div>
                <div className="ms-5">
                  <i className="bi bi-star-fill me-3"></i>
                  <span>Stefanini - Hackathon of Artificial Intelligence and Big Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}