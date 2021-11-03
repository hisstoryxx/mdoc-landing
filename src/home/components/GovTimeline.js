import React from "react";
import "./GoveTimeline.scss";

const timeline = {
  "2019" : [
    {month: 12, name: "복막투석"}
  ],
  "2020" : [
    {month: 1, name: "1형 당뇨병"},
    {month: 5, name: "가정용인공호흡기"},
    {month: 6, name: "분만취약지산모"},
    {month: 10, name: "심장 질환"},
    {month: 12, name: "재활"},
  ],
  "2021" : [
    {month: 10, name: "결핵"}
  ],
  "예정" : [
    {month: null, name: "결핵"},
    {month: null, name: "암"}
  ],
}
const GovTimeline = () => {
  return (
    <div className="gov-timeline">
      <div className="section-intro">
        <h1>더 많은 분들이 편리함을 누리실 수 있도록</h1>
        <p>정부의 재택관리 시범사업 확장에 따라,<br/>
          mDoc은 <strong>복막투석을 시작</strong>으로 점차 더 많은 분들께 도움을 드리고자 합니다</p>
      </div>
      <div className="section-timeline">
        <h2 className="title">보건복지부 재택의료 시범 사업 타임라인</h2>
        <div className="container-timeline">
          {Object.keys(timeline).map((yearKey, i) => {
            return (
              <div className="container-year" key={i}>
                <div className="year-title">
                  <div className="bullet"/>
                  <span>{yearKey}</span>
                </div>
                <div className="timeline">
                  {timeline[yearKey].map( (topic, j) => {
                    return (
                      <div className="topic">
                        <div className="bullet"/>
                        {topic.month ? <span className="month">{topic.month}월</span> : "" }
                        <span className="name">{topic.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GovTimeline;
