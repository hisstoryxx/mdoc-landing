import React, {useRef, useState, useEffect} from "react";
import "./Home.scss";
import Intro from "./components/Intro";
import ProductSummary from "./components/ProductSummary";
import GovTimeline from "./components/GovTimeline";
import printImg from "../general/img/print.png";
import Goal1Img from "../general/img/Goal1.png";
import Goal2Img from "../general/img/Goal2.png";
import Goal3Img from "../general/img/Goal3.png";
import Goal4Img from "../general/img/Goal4.png";
import callImg from "../general/img/call.png";
import bookImg from "../general/img/book.png";
import eduImg from "../general/img/edu.png";
const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const myRef = useRef();

  const [y, setY] = useState();
  const [h, setH] = useState();

    
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);


  // This function calculate X and Y
  const getPosition = () => {
    if(myRef.current.offsetHeight){
      const h = myRef.current.offsetHeight;
      console.log('11',myRef.current.offsetHeight)
      setH(h);

    }
  

    const y = myRef.current.offsetTop;
    setY(y);


  };
  
  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);
   
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

 console.log(scrollPosition)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  class CardFlipOnScroll {
    constructor(wrapper, sticky, cards) {
      this.wrapper = wrapper
      this.sticky = sticky
      this.cards = cards
      this.length = cards.length

      this.start = 0
      this.end = 0
      this.step = 0
    }

    init() {
      this.start = y - 100
      this.end = y + h  - windowSize[1] * 1.2
      this.step = (this.end - this.start) / (this.length * 2)
    }

    animate() {
      this.cards.forEach((card, i) => {
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)

        if (scrollPosition <= s) {
          card.style.transform = `
            perspective(100vw)
            translateX(100vw) 
            rotateY(180deg)
          `
        } else if (scrollPosition > s && scrollPosition <= e - this.step) {
          card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollPosition - s) / (e - s) * -100}vw)
            rotateY(180deg)
          `
        } else if (scrollPosition > e - this.step && scrollPosition <= e) {
          card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollPosition - s) / (e - s) * -100}vw)
            rotateY(${180 + -(scrollPosition - (e - this.step)) / this.step * 180}deg)
          `
        } else if (scrollPosition > e) {
          card.style.transform = `
            perspective(100vw)
            translateX(0vw) 
            rotateY(0deg)
          `
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      cardFlipOnScroll.animate()
    })
  }, [scrollPosition])
 
  useEffect(() => {
    window.addEventListener('resize', () => {
      cardFlipOnScroll.init()
    })
  }, [windowSize[1]])

  const mainContent1 = document.querySelector('.maincontent1')
  const sticky = document.querySelector('.sticky')
  const cards = document.querySelectorAll('.card')
  
  const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky, cards)
  cardFlipOnScroll.init()
  return (
    <div className="page home">
      <Intro/>
     
      
        <ProductSummary/>
       
        <div class = "maincontent1" ref={myRef}>
          <div class = "sticky">
            <div class="sticky-background">
              {/* MY LIFE GOALs */}
            </div>
            <div class = "card-frame">
              <div class = "card">
                <div class = "front">
                  <div className="description">
                  <img className="Img" src={Goal1Img} alt="printImg"/>
                    <div className="first-line">
                      <span>반복적인 패턴의 질문을 사전에 환자가 입력하게 하여 <strong>의료진 업무효율을 높이자</strong></span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                
                <div className="description">
                <img className="Img" src={printImg} alt="printImg"/>
                  <div className="first-line">
                    <span><strong>수가 청구</strong>업무량이  <strong>부담</strong>되고,</span>
                  </div>
                  <span>  <strong>인력이</strong> 부족해요 </span>
                </div>
                 
                </div>
              </div>
              <div class = "card">
                <div class = "front">
                  <div className="description">
                  <img className="Img" src={Goal2Img} alt="printImg"/>
                    <div className="first-line">
                      <span>보안이 철저한 의료진 양방향 메신저를 개발해 <strong>환자관리 목적의 앱을 제공하자</strong></span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                  <div className="description">
                  <img className="Img" src={callImg} alt="printImg"/>
                    <div className="first-line">
                      <span>의료진 <strong>개인 연락처</strong>로 연락을 하는 환자가 있어요</span>
                    </div>          
                  </div>
                </div>
              </div>
              <div class = "card">
                <div class = "front">
                 <div className="description">
                  <img className="Img" src={Goal3Img} alt="printImg"/>
                    <div className="first-line">
                      <span>주마다 반복되는 정기상담 일정을 예약해 <strong>상담시간을 사전에 약속하게 하자</strong></span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                  <div className="description">
                  <img className="Img" src={bookImg} alt="printImg"/>
                    <div className="first-line">
                      <span>환자분이 <strong>상담일정</strong>을 종종 잊어버리세요</span>
                    </div>          
                  </div>
                </div>
              </div>
              <div class = "card">
                <div class = "front">
                  <div className="description">
                  <img className="Img" src={Goal4Img} alt="printImg"/>
                    <div className="first-line">
                      <span><strong>표준화된 교육자료를 개발</strong>하고 주기적으로 환자가 학습할 수 있게 하자</span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                  <div className="description">
                  <img className="Img" src={eduImg} alt="printImg"/>
                    <div className="first-line">
                      <span>지속적인 <strong>정보제공</strong>이 이루어지지 않아요</span>
                    </div>          
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* 교육영상 */}
        <div class = "contentsContainer">
          <div class = "contentsBack" style={{opacity: (scrollPosition - 9400)/1000}}>
        
          </div>
          <div class = "thumnailBack" >

          </div>
        </div>
        
      <GovTimeline/>
    </div>
  )
}

export default Home;
