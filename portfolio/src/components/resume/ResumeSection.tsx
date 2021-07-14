export default function ResumeSection() {

  return (
    <div className="accordion">

      {/* machine learning */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#machine-learning-section" aria-expanded="true">
            I'm a Machine Learning Enthusiast
          </button>
        </h2>
        <div id="machine-learning-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            Foo bar
          </div>
        </div>
      </div>

      {/* devops */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#devops-section" aria-expanded="true">
            I'm a Devops Enginer
          </button>
        </h2>
        <div id="devops-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            Foo bar
          </div>
        </div>
      </div>

      {/* backend */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#backend-section" aria-expanded="true">
            I'm a Backend Developer
          </button>
        </h2>
        <div id="backend-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            Foo bar
          </div>
        </div>
      </div>

    </div>
  )
}