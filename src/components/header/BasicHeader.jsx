import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import "./BasicHeader.scss";

const BasicHeader = () => {
  // javascript
  // ヘッダメニュー
  const headerList = [
    { title: "ホーム", to: "#" },
    { title: "経営理念", to: "#philosophy" },
    { title: "事業理念", to: "#" },
    { title: "事業目的", to: "#vision" },
    { title: "お問い合わせ", to: "#footer" },
  ];

  // ハンバーガーメニューのオープン状態
  const [openFlag, setOpenFlag] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);

  // ハンバーガーメニューの状態切り替え
  const toggleMenu = () => {
    // ハンバーガーメニューのアイコントグル
    setMenuIcon(openFlag ? faBars : faXmark);
    // 開閉状態の反転
    setOpenFlag(!openFlag);
  };

  return (
    <header>
      <nav className="pc_header">
        <ul className="pc">
          {headerList.map((list, index) => (
            <li key={index}>
              <a href={list.to}>{list.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sp_header">
        <div>
          <FontAwesomeIcon className="menu_icon" icon={menuIcon} onClick={toggleMenu} />
        </div>
        <nav className="menu" style={{ display: openFlag ? "flex" : "none" }}>
          <ul className="sp">
            {headerList.map((list, index) => (
              <li key={index}>
                <a href={list.to}>{list.title}</a>
              </li>
            ))}
          </ul>
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
        </nav>
      </div>
    </header>
  );
};

export default BasicHeader;
