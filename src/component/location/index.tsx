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
            1호선 <b>범일역 2번, 8번 출구</b>
            <br />
            2호선 <b>문현역 3번 출구</b>
          </div>
          <div />
          <div className="content">
            <b>[버스 이용 시]</b>
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 대신, 남포, 부산역 방면 (자성대/시민회관 하차)</span>
            <br />
            &nbsp;&nbsp;22, 26, 27, 40, 41, 101, 134
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 해운대, 광안, 대연 방면 (자성대/시민회관 하차)</span>
            <br />
            &nbsp;&nbsp;40, 41, 42, 83, 83-1, 108
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 사상, 서면, 당감 방면 (국민은행/시민회관 하차)</span>
            <br />
            &nbsp;&nbsp;23, 68, 108, 138, 168
            <br />
            <span style={{ color: '#888', fontSize: '0.9em' }}>• 노포, 동래, 양정 방면 (시민회관/국민은행 하차)</span>
            <br />
            &nbsp;&nbsp;10, 57, 80, 99
          </div>
        </div>

        {/* 자가용 및 주차 섹션 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용 및 주차</div>
          <div />
          <div className="content">
            <b>내비게이션 검색: '디엘웨딩홀'</b>
            <br />
            (부산 동구 조방로 14 동일타워 3층)
          </div>
          <div />
          <div className="content">
            <b>동일타워 내 지하주차장 이용</b>
            <br />
            - 하객 여러분께는 <b>무료 주차</b>를 제공합니다.
            <br />
            - 주차장 이용 시 웨딩홀과 바로 연결됩니다.
          </div>
          <div />
          <div className="content">
            <span style={{ color: '#888', fontSize: '0.9em' }}>
              ※ 주말에는 예식홀 주변이 혼잡할 수 있으니 가급적 대중교통 이용을 권장드립니다.
            </span>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}