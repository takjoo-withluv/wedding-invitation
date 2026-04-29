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

      <LazyDiv className="card location-detail">
        {/* 대중교통 섹션 */}
        <div className="location-info">
          <div className="title-group">
            <BusIcon className="transportation-icon" />
            <span className="heading">대중교통</span>
          </div>
          
          <div className="info-section">
            <div className="sub-title">지하철</div>
            <div className="content">
              <p>
                <span className="line line-1">1호선</span> 
                <strong>범일역</strong> 2번, 8번 출구 (도보 7분)
              </p>
              <p>
                <span className="line line-2">2호선</span> 
                <strong>범일역</strong> 3번 출구 (시민회관 방면 도보 5분)
              </p>
            </div>
          </div>

          <div className="info-section">
            <div className="sub-title">버스</div>
            <div className="content bus-list">
              <dl>
                <dt>시민회관 / 자성대 / 국민은행 하차</dt>
                <dd>일반: 10, 22, 23, 26, 27, 40, 41, 42, 57, 68, 80, 83, 83-1, 99, 101, 108, 134, 138, 168</dd>
              </dl>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* 자가용 섹션 */}
        <div className="location-info">
          <div className="title-group">
            <CarIcon className="transportation-icon" />
            <span className="heading">자가용</span>
          </div>
          
          <div className="info-section">
            <div className="content">
              <p className="highlight">네비게이션에서 <strong>'디엘웨딩홀'</strong> 검색</p>
              <ul className="guide-list">
                <li>주차 요금은 <strong>무료</strong>입니다.</li>
                <li>주차장 이용 시 웨딩홀과 바로 연결됩니다.</li>
              </ul>
            </div>
          </div>

          <div className="notice-section">
            <p className="notice-title">※ 유의사항</p>
            <p className="notice-content">주말에는 웨딩홀 주변이 혼잡할 수 있으니 가급적 대중교통 이용을 권장드립니다.</p>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}