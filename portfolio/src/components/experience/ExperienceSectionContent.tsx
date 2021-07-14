import { ReactNode } from "react";

interface ExperienceSectionContentProps {
  imagePath?: string,
  title: string,
  startDate: string,
  endDate: string,
  subtitle: string,
  children: ReactNode
}

export default function ExperienceSectionContent({ imagePath, title, startDate, endDate, subtitle, children }: ExperienceSectionContentProps) {

  return (
    <div className="row">

      {/* brand */}
      <div className="col-2 text-center">
        {imagePath
          ? <img className="d-inline-block" src={imagePath} alt="serasa brand" width="50 rem" />
          : null
        }
      </div>


      {/* info */}
      <div className="col-10">
        <div className="row">

          {/* title */}
          <div className="col-12">
            <strong className="d-block fs-5">{title}</strong>
            <small><i>{startDate} - {endDate}</i></small>
          </div>

          {/* header */}
          <div className="col-12 mt-4 mb-2">
            {subtitle}
          </div>

          {/* description */}
          <div className="col-12">
            {children}
          </div>

        </div>
      </div>

    </div>
  )
}