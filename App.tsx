import { useState } from "react";
import "./App.css";

const phrases = [
  "ไม่!!",
  "ม่ายยย",
  "ไม่จริงอ่อ",
  "ไม่รักจริงอ่อออ",
  "อายุเท่ากันแล้ว ไม่รักกันจริงดิ",
  "รักหน่อยยย",
  "นะ🥺",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = (noCount * 20) + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container"> {
      yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="yes-pic" />
          <div className="val-text">สุขสันต์วันเกิดจ้าา ขอให้เรียนเก่งๆ ไม่เครียด สุขภาพแข็งแรง จะเป็นหมูแข็งแรงหรือคนแข็งแรงก็ได้ ยังไงก็แข็งแรงเหมือนกัน หุหุ สุดท้ายๆ ขอให้เป็นทั้งเพื่อน น้อง ละก็แฟนที่น่ารักแบบนี้ไปเรื่อยๆ นะครับ😏😘</div>
        </>
      ) : (
        <>
          <img src="FernBirthday.gif" alt="Fern Hungry" />
          <div className="val-text">แฮปปี้เบิร์ดเดย์ครับนว้องเฟิร์นนนน รักพี่น้ำไหม เอ้ย!! อายุเท่ากันแล่วว</div>
          <div>
              <button className="button yes-button" style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}>
                รักจ้าา
              </button>
              <button onClick={() => setNoCount(noCount + 1)} className="button no-button">
                {getNoButtonText()}
              </button>
          </div>
        </>
      )}
      
    </div>
  );
};
export default App;
