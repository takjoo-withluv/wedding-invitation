import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />

      <div className="content">사랑은 마주 보는 것이 아니라</div>
      <div className="content">같은 방향을 바라보는 일이라고 했습니다.</div>
      <div className="break" />
      <div className="content">여덟 번의 여름을 함께 지나며</div>
      <div className="content">저희는 서로의 웃음이 되고, 쉼이 되고</div>
      <div className="content">하루의 안부가 되었습니다.</div>
      <div className="break" />
      <div className="content">이제는 연인이라는 이름을 넘어</div>
      <div className="content">평생을 함께할 한 사람으로</div>
      <div className="content">같은 길을 걸어가려 합니다.</div>
      <div className="break" />
      <div className="content">저희 두 사람의 새로운 시작에</div>
      <div className="content">따뜻한 마음으로 함께해 주세요.</div>

      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>

      <div className="break" />

      {/* 연락하기 버튼 주석 처리 시작
      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
      연락하기 버튼 주석 처리 끝 */}
    </LazyDiv>
  )
}