import React from "react";
import "./GoveTimeline.scss";

const timeline = {
  "2019" : [
    {month: 12, name: "복막투석"}
  ],
  "2020" : [
    {month: 1, name: "1형 당뇨병"},
    {month: 5, name: "가정용 인공호흡기"},
    {month: 6, name: "분만취약지산모"},
    {month: 10, name: "심장질환"},
    {month: 12, name: "재활"},
  ],
  "2021" : [
    {month: 10, name: "결핵"},
    {month: 12, name: "암(장루)"}
  ],
  "2022" : [
    {month: 12, name: "암(요루)"},
    
  ],
  // "2022" : [
  //   // {month: null, name: "결핵"},
  //   {month: null, name: "암"}
  // ],
}
const GovTimeline = () => {
  const introTitle = "더 많은 분들이 \n편리함을 누리실 수 있도록";
  const timelineTitle = "보건복지부 재택의료 \n시범사업 타임라인"
  return (
    <div className="gov-timeline">
      <div className="section-intro">
        <h1>{introTitle}</h1>
        <p>정부의 재택관리 시범사업 확장에 따라,<br/>
          엠닥홈케어는 <strong>복막투석을 시작</strong>으로 점차 더 많은 분들께 서비스를 제공할 예정입니다</p>
      </div>
      <div className="section-timeline">
        <h2 className="title">{timelineTitle}</h2>
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
