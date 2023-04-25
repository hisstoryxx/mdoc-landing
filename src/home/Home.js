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
      // console.log('11',myRef.current.offsetHeight)
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

 //console.log(scrollPosition)

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

  const phone = document.querySelector('.contentsContainer')
  return (
    <div className="page home">
      <Intro/>
     
      
        <ProductSummary/>

        
       
        <div class = "maincontent1" ref={myRef}>
          <div class = "stickyContainer">
          <div class = "sticky">
            <div class = "container">
              <div class= "backTitle">
                  <div class = "innerContainer">
                    <div class = "titleText">
                        <span>Background</span>
                    </div>
                    <div class = "contentText">
                      <span>재택의료를 시행하면서</span>
                      <span><strong> 환자와 의료진</strong>이 겪고 있는 불편함을</span>
                      <span>어떻게 <blu>개선</blu>할 수 있을까요?</span>
                    </div>
                    
                  </div>
              </div>
              {/* <div class = "backContents">
                <div class = "exContainer">
                <span>현 시점, 팬데믹의 영향으로 다양한 분야에서 비대면 서비스를 제공하고 있습니다.</span>
                <span>의료분야도 예외는 아닌데요, 기존 내원이 곤란했던 환자를 포함한 다양한 환자들을 대상으로</span>
                <span>비대면 재택의료 시범사업을 확장하고 있습니다. 하지만 아직 첫 걸음 단계인 만큼</span>
                <span>이런저런 문제가 많이 발생하고 있는데요, 가장 큰 문제로는 의료진과 환자를 비대면으로</span>
                <span>이어줄 수 있는 인프라가 제대로 구축이 되어있지 않다는 점입니다. 이로 인해 의료진과 환자 사이의</span>
                <span>원활한 진료가 이루어지지 못해 양측의 고충이 심화되고 있는 상황입니다.</span>
                </div>
              </div> */}
            </div>
            <div class = "container1">
              22
            </div>
            {/* <div class="sticky-background">
              
            </div>
            */}
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
                    <span>수가 청구 <strong>업무량이 많고,</strong></span>
                  </div>
                  <span>  <strong>인력이 부족</strong>해요 </span>
                </div>
                 
                </div>
              </div>
              <div class = "card">
                <div class = "front">
                  <div className="description">
                  <img className="Img" src={Goal2Img} alt="printImg"/>
                    <div className="first-line">
                      <span>보안이 철저한 양방향 메신저를 개발해 <strong>의료진용 환자관리 앱을 제공하자</strong></span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                  <div className="description">
                  <img className="Img" src={callImg} alt="printImg"/>
                    <div className="first-line">
                      <span><strong>의료진 개인 연락처</strong>로 연락을 하는 환자가 있어요</span>
                    </div>          
                  </div>
                </div>
              </div>
              <div class = "card">
                <div class = "front">
                 <div className="description">
                  <img className="Img" src={Goal3Img} alt="printImg"/>
                    <div className="first-line">
                      <span>정기상담 <strong>일정을 예약</strong>하고, 알림 기능으로 <strong>상담시간을 리마인드</strong> 하자</span>
                    </div>
                  </div>
                </div>
                <div class = "back">
                  <div className="description">
                  <img className="Img" src={bookImg} alt="printImg"/>
                    <div className="first-line">
                      <span>상담일정을 <strong>예측할 수 없고</strong> 종종 <strong>잊어버려요</strong></span>
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
                      <span><strong>지속적인 정보제공</strong>이 이루어지지 않아요</span>
                    </div>          
                  </div>
                </div>
              </div>


            </div>
          
          </div>

          </div>
          
        </div>
        {/* 교육영상 */}
        <div class = "contentsContainer">
          <div class = "contentsBack" style={{opacity: (scrollPosition - phone?.offsetTop)/1000}}>
        
          </div>
          <div class = "thumnailBack" >

          </div>
        </div>
        
      <GovTimeline/>
    </div>
  )
}

export default Home;
