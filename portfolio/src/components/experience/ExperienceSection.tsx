import ExperienceSectionContent from "./ExperienceSectionContent";

export default function ExperienceSection() {

  return (
    <div className="accordion" id="experience-section">

      {/* serasa */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#serasa-section" aria-expanded="true">
            Serasa
          </button>
        </h2>
        <div id="serasa-section" className="accordion-collapse collapse show" data-bs-parent="#experience-section">
          <div className="accordion-body">
            <ExperienceSectionContent
              imagePath="brands/serasa.jpeg"
              title="Senior Software Analyst"
              startDate="May, 2021"
              endDate="Present"
              subtitle="Software development so that we can decrease the number of people in debts in Brazil"
            >
              <ul className="text-justify">
                <li>
                  <strong>Allocated at: </strong>
                  <span>Serasa Limpa Nome (LNO).</span>
                </li>
                <li>
                  <strong>Activities: </strong>
                  <span>
                    Backend software development and software analysis; Monitoring.
                  </span>
                </li>
                <li>
                  <strong>Tools: </strong>
                  <span>
                  Tools: Python3; Go Lang; Flask; FastAPI; Docker, Docker Container, Jenkis, Kubernetes; 
                  Elastic Stack; Elastic APM; AWS; Redis; Splunk; Dynatrace and Grafana.
                  </span>
                </li>
              </ul>
            </ExperienceSectionContent>
          </div>
        </div>
      </div>

      {/* stefanini */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stefanini-section" aria-expanded="false">
            Stefanini
          </button>
        </h2>
        <div id="stefanini-section" className="accordion-collapse collapse" data-bs-parent="#experience-section">
          <div className="accordion-body">

            <div className="mb-2">
              <ExperienceSectionContent
                imagePath="brands/stefanini.png"
                title="Machine Learning Engineer"
                startDate="Oct, 2020"
                endDate="May, 2021"
                subtitle="Full machine learning projects development."
              >
                <ul className="text-justify">
                  <li>
                    <strong>Allocated at: </strong>
                    <span>Banco do Brasil.</span>
                  </li>
                  <li>
                    <strong>Activities: </strong>
                    <span>
                      Data analysis;
                      statistical and deep learning models development to validation, classification and data extraction;
                      REST microservice APIs development;
                      custom docker images;
                      application deploy in Jenkins CI/CD;
                      application monitoring.
                    </span>
                  </li>
                  <li>
                    <strong>Tools: </strong>
                    <span>
                      Python3, Numpy, Pandas, Matplotlib, Seaborn, Plotly, Flask, Flask-Restplus,
                      Flask-Restful, FastAPI, Swagger, Scikit-Learning, NLTK, Keras, Tensorflow 1.13,
                      PyTorch, OpenCV, Docker, Docker Container, Jenkis, Kubernetes, MongoDB, MySQL, Postgres,
                      SQLAlchemy, RabbitMQ, Celery, Prometheus, Grafana and Alertmanager.
                    </span>
                  </li>
                  <li>
                    <strong>Projects: </strong>
                    <span>
                      Alvarás and Guias document classification and extraction API;
                      web system that helps curate data to train machine learning model (centralizer and metadata maker);
                      Certidões Trabalhistas document extraction async API;
                      API monitoring and Machine Learning/Deep Learning models monitoring.
                    </span>
                  </li>
                </ul>
              </ExperienceSectionContent>
            </div>

            <div>
              <ExperienceSectionContent
                title="Junior Machine Learning Engineer"
                startDate="Aug 2019"
                endDate="Oct 2020"
                subtitle="Full machine learning projects development."
              >
                <ul className="text-justify">
                  <li>
                    <strong>Allocated at: </strong>
                    <span>Banco do Brasil.</span>
                  </li>
                  <li>
                    <strong>Activities: </strong>
                    <span>
                      Data analysis;
                      statistical and deep learning models development to validation, classification and data extraction;
                      REST microservice APIs development;
                      frontend application development;
                      custom docker images;
                      application deploy in Jenkins CI/CD.
                    </span>
                  </li>
                  <li>
                    <strong>Tools: </strong>
                    <span>
                      Python3, Numpy, Pandas, Matplotlib, Seaborn, Plotly,
                      Flask, Flask-Restplus, Flask-Restful, Swagger, Scikit-Learning, NLTK,
                      Keras, Tensorflow 1.13, OpenCV, Docker, Docker Container, Jenkis, Kubernetes and MongoDB.
                    </span>
                  </li>
                  <li>
                    <strong>Projects: </strong>
                    <span>
                      IPTU document classification and extraction API;
                      online machine learning education WEB system;
                      brazilian TJ documents classification, extraction and validation with web crawler API.
                    </span>
                  </li>
                </ul>
              </ExperienceSectionContent>
            </div>

          </div>
        </div>
      </div>

      {/* inep */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#inep-section" aria-expanded="false">
            INEP
          </button>
        </h2>
        <div id="inep-section" className="accordion-collapse collapse" data-bs-parent="#experience-section">
          <div className="accordion-body">

            <ExperienceSectionContent
              imagePath="brands/inep.jpeg"
              title="Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira - INEP"
              startDate="Jul 2018"
              endDate="Aug 2019"
              subtitle="Automation systems development, WEB data extraction, visualization and data analysis and SQL queries."
            >
              <ul className="text-justify">
                <li>
                  <strong>Activities: </strong>
                  <span>
                    Use cases validation, inspection and implementation;
                    unit testing interface;
                    SQL queries;
                    task automatization;
                    graphical interface application development (GUI).
                  </span>
                </li>
                <li>
                  <strong>Tools: </strong>
                  <span>
                    SQL, SQL Developer, Python3, Numpy, Pandas, Matpotlib, Seaborn, SMTPLib, Selenium and Tkinter.
                  </span>
                </li>
                <li>
                  <strong>Projects: </strong>
                  <span>
                    Email sender automatization, Graphical User Interface with Tkinter.
                  </span>
                </li>
              </ul>
            </ExperienceSectionContent>

          </div>
        </div>
      </div>

    </div>
  )
}