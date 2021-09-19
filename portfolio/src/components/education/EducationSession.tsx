import ExperienceSectionContent from "../experience/ExperienceSectionContent";


export default function EducationSection() {

  return (
    <div className="accordion" id="education-session">

      {/* upis */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#upis-section" aria-expanded="true">
            UPIS
          </button>
        </h2>
        <div id="upis-section" className="accordion-collapse collapse show" data-bs-parent="#education-session" >
          <div className="accordion-body">
            <ExperienceSectionContent
              imagePath="brands/upis.png"
              title="Bachelor's degree of Information System"
              startDate="Jan, 2018"
              endDate="Present"
              subtitle="">
            </ExperienceSectionContent>
          </div>
        </div>
      </div>

      {/* cooplem */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cooplem-idiomas-section" aria-expanded="false">
            Cooplem Idiomas
          </button>
        </h2>
        <div id="cooplem-idiomas-section" className="accordion-collapse collapse" data-bs-parent="#education-session" >
          <div className="accordion-body">
            <ExperienceSectionContent
              imagePath="brands/cooplem.jpeg"
              title="English as Foreign Language"
              startDate="Jan, 2014"
              endDate="Jul, 2019"
              subtitle=""
            >
            </ExperienceSectionContent>
          </div>
        </div>
      </div>

      {/* fundacao */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fundacao-bradesco-section" aria-expanded="false">
            Fundação Bradesco
          </button>
        </h2>
        <div id="fundacao-bradesco-section" className="accordion-collapse collapse" data-bs-parent="#education-session">
          <div className="accordion-body">
            <ExperienceSectionContent
              imagePath="brands/fundacao-bradesco.jpeg"
              title="Elementary, Junior and Senior School"
              startDate="Jan, 2010"
              endDate="Dez, 2017"
              subtitle=""
            >
            </ExperienceSectionContent>
          </div>
        </div>
      </div>

    </div>
  )
}

