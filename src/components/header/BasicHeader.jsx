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
    { title: "経営理念", to: "#" },
    { title: "事業理念", to: "#" },
    { title: "事業目的", to: "#" },
    { title: "お問い合わせ", to: "#" },
  ];

  // ハンバーガーメニューのオープン状態
  const [open, setStatus] = useState(false);
  const [ham, setIcon] = useState(faBars);

  // レスポンシブ：画面サイズ確認
  const TABLET_WIDTH = 959;

  const checkDesktopSize = () => {
    if (window.innerWidth > TABLET_WIDTH && open) {
      setStatus(false);
      setIcon(faBars);
    }
  };

  window.addEventListener("resize", checkDesktopSize);

  // ハンバーガーメニューの状態切り替え
  const toggleMenu = () => {
    // ハンバーガーメニューのアイコントグル
    setIcon(open ? faBars : faXmark);
    // 開閉状態の反転
    setStatus(!open);
  };

  return (
    <header>
      <div className="wrapper">
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
          <FontAwesomeIcon className="ham" icon={ham} onClick={toggleMenu} />
          {/* <FontAwesomeIcon class="ham" icon={{open} ? {faBars} : {faXmark}} onClick={toggleMenu}/> */}
        </div>
      </div>
      <nav className="menu" style={{ visibility: open ? "visible" : "hidden" }}>
        <ul className="sp">
          {headerList.map((list, index) => (
            <li key={index}>
              <a href={list.to}>{list.title}</a>
            </li>
          ))}
        </ul>
        <div className="urls">
          <a href="#a" className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#b" className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#c" className="icon">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default BasicHeader;
