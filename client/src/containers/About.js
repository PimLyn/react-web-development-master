import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return(
        <div>
            <Header />
            <div className="container col-md-5">
            <h3>สวัสดีค่ะ</h3>
            <p className="title text-justify mt-4 mb-4"> 
                เราคือร้านอาหาร ที่เน้นคุณภาพอาหาร 
                คัดสรรวัสดุอย่างดี เพื่อให้ลูกค้าได้รับประทานอาหารอย่างมั่นใจ
                และมีความสุขกับอาหารที่ถูกปาก
            </p>
            <h4 className="text-success">ด้วยความห่วงใย พี่เอวา และ น้องริชชี่</h4>
            </div>

           <Footer company="AvaRichy" email="PimChi@gmail.com" />
        </div>
    )
}

export default About;