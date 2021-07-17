export default function ContactSection() {

  return (
    <div className="accordion">

      {/* direct */}
      <div className="accordion-item">
        <div id="direct-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            <div className="row">
              <h2>Direct contact</h2>

              <div className="col-12 mb-1">
                <div className="d-inline-block">
                  <i className="bi bi-envelope ms-2"></i>
                  <strong className="ms-2">Email:</strong>
                </div>
                <span className="ms-2 text-primary">sena.matheus14@gmail.com</span>
              </div>

              <div className="col-12 mb-1">
                <div className="d-inline-block">
                  <i className="bi bi-telephone ms-2"></i>
                  <strong className="ms-2">Telephone:</strong>
                </div>
                <span className="ms-2 text-primary">+55 (61) 99952-2936</span>
              </div>

              <div className="col-12 mb-1">
                <div className="d-inline-block">
                  <i className="bi bi-whatsapp ms-2"></i>
                  <strong className="ms-2">WhatsApp:</strong>
                </div>
                <span className="ms-2 text-primary">+55 (61) 98341-1002</span>
              </div>

              <div className="col-12 mb-1">
                <div className="d-inline-block">
                  <i className="bi bi-telegram ms-2"></i>
                  <strong className="ms-2">Telegram:</strong>
                </div>
                <span className="ms-2 text-primary">@senavs</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* plataform */}
      <div className="accordion-item">
        <div id="plataform-section" className="accordion-collapse collapse show" >
          <div className="accordion-body">
            <div className="row">
              <h2>Plataforms</h2>

              <div className="col-12 d-flex justify-content-evenly">

                <a className="d-flex justify-content-center" href="https://www.linkedin.com/in/senavs" target="_blank" >
                  <img src="plataforms/linkedin.png" alt="linkedin profile link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://github.com/senavs" target="_blank" >
                  <img src="plataforms/github.png" alt="github repository link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://gitlab.com/senavs" target="_blank" >
                  <img src="plataforms/gitlab.png" alt="gitlab repository link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://pypi.org/user/senavs" target="_blank" >
                  <img src="plataforms/pypi.png" alt="pypi repository link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://stackoverflow.com/users/12996853/senavs" target="_blank" >
                  <img src="plataforms/stack-overflow.png" alt="stack overflow profile link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://medium.com/@senavs" target="_blank" >
                  <img src="plataforms/medium.png" alt="medium profile link" width="50%" />
                </a>

                <a className="d-flex justify-content-center" href="https://hub.docker.com/u/senavs" target="_blank" >
                  <img src="plataforms/docker-hub.png" alt="docker-hub profile link" width="50%" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}