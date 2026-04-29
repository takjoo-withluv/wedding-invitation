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
            1호선 <b>범일역 2번, 8번 출구</b> (도보 7분)
            <br />
            2호선 <b>범일역 3번 출구</b> (시민회관 방면)
          </div>
          <div />
          <div className="content">
            <b>[버스 이용 시]</b>
            <br />
            하차 정류장: <b>시민회관, 자성대, 범일동 국민은행</b>
            <br />
            <small style={{ fontSize: '0.85em', color: '#888' }}>
              22, 23, 26, 27, 40, 41, 42, 57, 68, 80, 83, 83-1, 99, 101, 108, 134, 138, 168
            </small>
          </div>
        </div>

        {/* 자가용 섹션 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <b>'디엘웨딩홀'</b> 검색
            <br />
            주차장 이용 시 웨딩홀과 바로 연결됩니다.
            <br />
            <span style={{ color: '#d9534f' }}><b>주차 요금은 무료입니다.</b></span>
          </div>
          <div />
          <div className="content">
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              backgroundColor: '#f8f8f8', 
              borderRadius: '5px',
              fontSize: '0.9em' 
            }}>
              <b>※ 유의사항</b>
              <br />
              범일역 인근은 교통이 혼잡할 수 있으니 
              <br />
              가급적 대중교통 이용을 권장드립니다.
            </div>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}