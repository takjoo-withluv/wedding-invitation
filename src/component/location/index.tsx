import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>        
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      <LazyDiv className="card location">
        {/* 대중교통 섹션 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>[지하철 이용 시]</b>
            <br />
            1호선 <b>범일역 하차</b> - 2번 출구 이용 (도보 7분)
            <br />
            2호선 <b>문현역 하차</b> - 3번 출구 이용 (시민회관 방면 도보 5분)
          </div>
          <div />
          <div className="content">
            <b>[버스 이용 시]</b>
            <br />
            <span style={{ fontWeight: 'bold' }}>• 대신·남포·중앙동·부산역 방면</span>
            <br />
            &nbsp;&nbsp;26, 41 (부산진성공원) / 22, 27, 40, 101[영도발], 134 (시민회관)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 해운대·센텀·수영 방면</span>
            <br />
            &nbsp;&nbsp;40, 42 (부산진성공원)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 민락·광안·대연동 / 용호동 방면</span>
            <br />
            &nbsp;&nbsp;40, 41, 42, 83, 108, 22, 27 (부산진성공원) / 83-1 (시민회관)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 사상·엄궁·주례·개금·서면 방면</span>
            <br />
            &nbsp;&nbsp;108, 138 (범일동 국민은행) / 68, 168 (시민회관)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 당감동 / 노포·금정 / 사직·동래 방면</span>
            <br />
            &nbsp;&nbsp;10, 23, 57, 80, 99
          </div>
        </div>

        {/* 주차 안내 섹션 (캡처본 내용 반영) */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차 안내</div>
          <div />
          <div className="content">
            <b>동일타워 내 지하주차장 이용 가능</b>
            <br />
            (예식 하객 기준 2시간 무료주차 제공)
            <br />
            <br />
            - 주차장 이용 시 웨딩홀과 바로 연결되어 편리합니다.
            <br />
            - 넉넉한 주차 공간이 완비되어 있으니 안심하고 방문해 주세요.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}