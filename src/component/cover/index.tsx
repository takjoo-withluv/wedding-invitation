import {
  BRIDE_FULLNAME,
  BRIDE_FIRSTNAME,
  GROOM_FULLNAME,
  GROOM_FIRSTNAME,
  LOCATION,
  LOCATION_HALL,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "일요일",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="wedding-date">
        {WEDDING_DATE.format("YYYY")}
        <div className="divider" />
        {WEDDING_DATE.format("MM")}
        <div className="divider" />
        {WEDDING_DATE.format("DD")}
      </div>
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[WEDDING_DATE.day()]} 1시
      </div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">Save the date for the wedding of</div>
      {/*<div className="subtitle">소중한 날, 초대합니다</div>*/}
      <div className="names">
        {GROOM_FIRSTNAME}
        <div className="divider" />
        {BRIDE_FIRSTNAME}
      </div>
      {/*<div className="content">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>*/}
      <div className="content">{LOCATION}</div>
      <div className="content">{LOCATION_HALL}</div>
    </LazyDiv>
  )
}
