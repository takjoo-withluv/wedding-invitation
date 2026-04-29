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
            1호선 <b>범일역 하차</b> - 2번 출구 (도보 7분)
            <br />
            2호선 <b>문현역 하차</b> - 3번 출구 (도보 5분)
          </div>
          <div />
          <div className="content">
            <b>[버스 이용 시]</b>
            <br />
            <span style={{ fontWeight: 'bold' }}>• 대신·남포·중앙동·부산역 방면</span>
            <br />
            &nbsp;&nbsp;26, 41 (부산진성공원) / 22, 27, 40, 101, 134 (시민회관)
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
            <span style={{ fontWeight: 'bold' }}>• 당감동 방면</span>
            <br />
            &nbsp;&nbsp;23 (범일동 국민은행)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 노포·금정·부산대 방면</span>
            <br />
            &nbsp;&nbsp;80 (시민회관)
            <br />
            <span style={{ fontWeight: 'bold' }}>• 사직·동래·연산·양정 방면</span>
            <br />
            &nbsp;&nbsp;10 (범일동 국민은행) / 57, 80, 99 (시민회관)
          </div>
        </div>

        {/* 주차 및 문의 섹션 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차 및 문의</div>
          <div />
          <div className="content">
            <b>동일타워 내 지하주차장 이용 가능</b>
            <br />
            (예식 하객 기준 2시간 무료주차 제공)
            <br />
            <br />
            <b>[문의처]</b>
            <br />
            디엘웨딩홀 ☎ 638-6100, 6200
            <br />
            <small style={{ color: '#888' }}>부산 동구 조방로 14 동일타워 3층</small>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}