import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import "./BasicFooter.scss";
import logo from "../../assets/img/logo-2.png";

const BasicFooter = () => {
  const footerList1 = [
    { title: "ホーム", to: "#" },
    { title: "私たちについて", to: "#" },
    { title: "選ばれる理由", to: "#" },
    { title: "ワークフロー", to: "#" },
    { title: "FAQ", to: "#" },
    { title: "事例紹介", to: "#" },
  ];
  const footerList2 = [
    { title: "会社概要", to: "#" },
    { title: "お問い合わせ・お見積", to: "#" },
    { title: "個人情報保護法について", to: "#" },
  ];

  return (
    <footer>
      <div className="footer-top" id="footer">
        <div className="footer_left">
            <img src={logo} alt="logo" className="logo" />
            <p>Interior design<br />&<br />Construction</p>
        </div>
        <div className="footer_middle">
          <ul>
            {footerList1.map((list, index) => (
              <li key={index}>
                <a href={list.to}>{list.title}</a>
              </li>
            ))}
          </ul>
          <ul>
            {footerList2.map((list, index) => (
              <li key={index}>
                <a href={list.to}>{list.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_right">
          <div className="info">
            <p>建築・建築デザイン・現状回復・内装解体・建物解体・アスペクト除去工事はSENTIAにお任せください！</p>
            <h3>株式会社SENTIA</h3>
            <p>〒454-0982<br />愛知県名古屋市高見1-20-2<br />TEL: 052-1212-2029</p>
          </div>
          <div className="urls">
            <a href="#a" className="link_icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#b" className="link_icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#c" className="link_icon">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright(c) 店舗設計・デザイン・施工CYPHER. AllRights Reserved
      </div>
    </footer>
  );
};

export default BasicFooter;
