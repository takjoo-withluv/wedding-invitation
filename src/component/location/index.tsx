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
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 대신, 남포, 중앙동, 부산역 방면</span>
            <br />
            &nbsp;&nbsp;26, 41 (부산진성공원) / 22, 27, 40, 101, 134 (시민회관)
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 해운대, 센텀, 수영 방면</span>
            <br />
            &nbsp;&nbsp;40, 42 (부산진성공원)
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 민락, 광안, 대연, 용호동 방면</span>
            <br />
            &nbsp;&nbsp;40, 41, 42, 83, 108, 22, 27 (부산진성공원) / 83-1 (시민회관)
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 사상, 엄궁, 서면, 당감동 방면</span>
            <br />
            &nbsp;&nbsp;23, 108, 138 (국민은행) / 68, 168 (시민회관)
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 노포, 동래, 연산, 양정 방면</span>
            <br />
            &nbsp;&nbsp;10 (국민은행) / 57, 80, 99 (시민회관)
          </div>
        </div>

        {/* 주차 및 문의 섹션 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차 안내</div>
          <div />
          <div className="content">
            <b>동일타워 내 지하주차장 이용 가능</b>
            <br />
            - 예식 하객 기준 <b>2시간 무료 주차</b> 제공
            <br />
            - 넉넉한 주차 공간으로 편하게 방문하실 수 있습니다.
          </div>
          <div />
          <div className="content">
            <b>[문의 사항]</b>
            <br />
            디엘웨딩홀: 051-638-6100, 6200
          </div>
        </div>
      </LazyDiv>
    </>
  )
}