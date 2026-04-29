import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        {/*<h2 className="english">안내</h2>*/}
        <h2 className="english">Location</h2>        
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 1호선 <b>범일역 2번, 8번 출구 (도보7분)</b>
            <br />
            지하철 2호선 <b>범일역 3번출구 (시민회관 방면 도보5분)</b>
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            대신·남포·부산역·중앙동 방면 <br />
             - 26, 41(자성대) / 22, 27, 40, 101[영도발], 134(시민회관)
            <br />
            해운대·센텀·수영 방면 <br />
             - 40, 42
            <br />
            민락·광안·대연동/용호동 방면 <br /> 
             - 40, 41, 42, 83, 108, 22, 27(자성대) / 83-1(시민회관)
            <br />
            사상·엄궁·주례·개금·서면 방면 <br />
             - 108, 138(범일동 국민은행) / 68, 168(시민회관)
            <br />
            당감동 방면 <br />
             - 23(범일동 국민은행)
            <br />
            노포·금정·부산대 방면 <br />
             - 80(시민회관)
            <br />
            동래·사직·양정 방면 <br />
             - 10(범일동 국민은행) / 57, 80, 99(시민회관)
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>디엘웨딩홀</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 유의사항
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
