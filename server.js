const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Suwanun Chaaumket (Nook)</h2>
    <h3 style="text-align: center;">ID: 65130208</h3>
    <img src="https://ibb.co/M5r467Z" style="width: 100%"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>การพัฒนาระบบสกาดาร่วมกับดิจิทัลทวินเพื่อเพิ่มประสิทธิภาพการทำงานของปลั๊กไฟในระบบอัตโนมัติ
    ในยุคที่เทคโนโลยีเข้าสู่ทุกๆ ด้านของชีวิตประจำวัน   การพัฒนาและปรับปรุงระบบทางอุตสาหกรรมมีความสำคัญที่จะทำให้เกิดการทำงานที่มีประสิทธิภาพ  ปลอดภัย และยั่งยืน                     หนึ่งในองค์ประกอบที่สำคัญของการพัฒนาและปรับปรุงระบบทางอุตสาหกรรมคือการป้องกันไฟฟ้า Automation, SCADA (Supervisory Control and Data Acquisition) และ Digital Twin  จึงมีส่วนสำคัญในกระบวนการป้องกันไฟฟ้า
การป้องกันไฟฟ้าไม่เพียงแค่เกี่ยวข้องกับการป้องกันไม่ให้เกิดภัยไฟฟ้า   แต่ยังเกี่ยวข้องกับการจัดการและควบคุมการไหลของกระแสไฟฟ้า   เพื่อประกันความปลอดภัยและประสิทธิภาพในการใช้พลังงาน   การวิจัยในส่วนนี้มุ่งเน้นการพัฒนาเทคโนโลยีและวิธีการในการป้องกันและควบคุมไฟฟ้าที่มีผลต่อการดำเนินงานของระบบไฟฟ้าในทุกสาขาอุตสาหกรรม   โดยการพัฒนาระบบการใช้งานของ Automation, SCADA, และ Digital Twin ในอุตสาหกรรม   เพื่อเข้ามาเพิ่มประสิทธิภาพและยังช่วยลดความเสี่ยงของความผิดพลาดที่อาจเกิดขึ้น   ซึ่ง SCADA เข้ามาช่วยในการตรวจสอบและควบคุม          ทำให้สามารถตอบสนองต่อเหตุการณ์และปัญหาที่เกิดขึ้นได้ทันท่วงที   ส่วน Digital twin ที่เป็นการจำลองอย่างที่เข้าใจได้ของระบบจริงเป็นเครื่องมือที่มีศักยภาพในการทดสอบและพัฒนากระบวนการโดยไม่ต้องมีผลกระทบต่อระบบจริงการนำเข้า Digital Twin ในงานวิจัยช่วยให้สามารถวิเคราะห์   จำลองและตรวจสอบประสิทธิภาพของระบบไฟฟ้าก่อนที่จะให้การดำเนินการจริง
การศึกษาและวิเคราะห์วิธีการป้องกันไฟฟ้าในระบบอัตโนมัติ   โดยในที่นี้เราจะสำรวจการใช้งานของคอมพิวเตอร์แบบโปรแกรมลิงค์ควบคุม (PLC) และการใช้รีเลย์ (Relay) เพื่อควบคุมและป้องกันไฟฟ้าในระบบ   รวมถึงการนำเทคโนโลยี SCADA เข้ามาช่วยในการควบคุมระบบไฟฟ้าอย่างปลอดภัย   เพื่อให้ผู้ใช้งานระบบมีความมั่นใจในการใช้งานและปฏิบัติงานในสภาพแวดล้อมที่ปลอดภัย

    </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>1.สำรวจปัญหาต่างๆที่เกี่ยวข้องในงานที่สนใจ</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2.ศึกษาทฤษฎีและงานวิจัยที่เกี่ยวข้อง</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>แ</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>4.เปรียบเทียบระหว่างก่อนและหลังการพัฒนา</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5.สรุปผลการวิจัย</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>6.กำหนดเป็นมาตรฐาน</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "1.สำรวจปัญหาต่างๆที่เกี่ยวข้องในงานที่สนใจ",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "2.ศึกษาทฤษฎีและงานวิจัยที่เกี่ยวข้อง",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "3.ดำเนินการปรับปรุงพัฒนา",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "4.เปรียบเทียบระหว่างก่อนและหลังการพัฒนา",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "5.สรุปผลการวิจัย",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "6.กำหนดเป็นมาตรฐาน",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
  ];

  res.json(researchPlan);
});

app.listen(3000);
