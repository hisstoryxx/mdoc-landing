import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import "./Contact.scss";

const Contact = () => {
  const [form, setForm] = useState({
    title: " ",
    description: " ",
    userContact: " ",
  })
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [userContact, setUserContact] = useState("");

  const serviceID = "service_o2fa0rh";
  const templateID = "template_1bsoxza";
  const publicKey = "1It9RYOqQ3DypEBuM";

  const sendEmail = (e) => {
    //need to send a inquiry mail with title, description, userContact
    window.alert(`접수되었습니다`);
    setForm("");
    // setTitle("");
    // setDescription("");
    // setUserContact("");

    e.preventDefault();

    emailjs.send("service_o2fa0rh", "template_1bsoxza", form, publicKey)
        .then((result) => {
          console.log(result.text, result.status);
      }, (error) => {
          console.log(error.text);
      });

  }
  return (
    <div className="page contact">
      <div className="contact-intro">
        <h1>무엇을 도와드릴까요?</h1>
        <p>문의 사항을 남겨주시면 최대한 빠르게 회신드리겠습니다</p>
      </div>
      <div className="contact-form">
        <div className="form-header">
          <h1>문의하기</h1>
          <p>제휴, 제품 사용, 채용 등 궁금하신 점들을 편하게 문의해주세요</p>
        </div>
        <div className="form-body">
          <div className="input-item">
            <span>제목</span>
            <input type="text" placeholder={"제목을 입력해주세요"}
                   value={form.title}
                   onChange={(e) => {
                     setForm({...form, title : e.target.value})
                     }}/>
          </div>
          <div className="input-item">
            <span>문의 내용</span>
            <textarea type="text" placeholder={"문의하실 내용을 입력해주세요"}
                      value={form.description}
                      onChange={(e) => {
                        setForm({...form, description : e.target.value})
                      }}/>
          </div>
          <div className="input-item">
            <span>연락처</span>
            <input type="text" placeholder={"회신 받을 이메일 혹은 연락처를 입력해주세요"}
                   value={form.userContact}
                   onChange={(e) => {
                     setForm({...form, userContact : e.target.value})
                     }}/>
          </div>
          <button className="btn-submit"
                  disabled={!form.title || !form.description || !form.userContact}
                  onClick={sendEmail}>문의 사항 접수 완료</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact;
