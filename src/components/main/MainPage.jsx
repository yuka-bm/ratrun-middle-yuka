import React from "react";
import "./MainPage.scss";
import top from "../../assets/img/cyber-g15cd33eba_1920.png";
import room from "../../assets/img/room.png";
import phone from "../../assets/img/phone.png";
import kitchen from "../../assets/img/kitchen-g48679c8a0_1280.png";
import calendar from "../../assets/img/calendar.png";
import TablePhilosophy from '../atoms/Table/TablePhilosophy';
import TableDesignOverview from '../atoms/Table/TableDesignOverview';
import TableDesignAward from '../atoms/Table/TableDesignAward';
import ButtonNavy from '../atoms/Button/ButtonNavy';
import CircleNumber from '../atoms/Number/CircleNumber';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
    const visionList = [
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
      ];
    
    const missionList = [
        { title: "技術確認", img: calendar, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "技術確認", img: calendar, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "技術確認", img: calendar, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "技術確認", img: calendar, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
      ];

    const techList = [
        { title: "①情報技術", img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "②情報技術", img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "③情報技術", img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "④情報技術", img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { title: "⑤情報技術", img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
      ];

  return (
    <div className="main">
        <div className="top" style={{ backgroundImage: `url(${top})` }}>
            <h1>理念の文章が入ります</h1>
            <p>母体が内装解体専門会社であるからこそ、一般的な施工会社よりも解体費用を抑えることができます。つまり、解体費用を抑えることで、余力のある資金が生まれ、使い道を広げることができるということです。<br />選択のできる予算の使途も併せてご提案いたします。</p>
        </div>
        <div className="content">
            <div className="main-title">
                <h2>メインタイトルが</h2>
                <p>タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。</p>
            </div>

            <h2 id="philosophy">経営理念 PHILOSOPHY</h2>
            <div className="philosophy">
                <div className="phil-1">
                    <img src={room} alt="room" />
                    <div>
                        <h3>テキストが入ります。テキストが入ります。</h3>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                </div>
                <div className="phil-2">
                    <div>
                        <h3>テキストが入ります。テキストが入ります。</h3>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br />
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                    <img src={room} alt="room" />
                </div>
                <div className="phil-3">
                    <div>
                        <img src={room} alt="room" />
                        <h3>テキストが入ります。テキストが入ります。</h3>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                    <div>
                        <img src={room} alt="room" />
                        <h3>テキストが入ります。テキストが入ります。</h3>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                </div>
                <div className="phil-3">
                    <div>
                        <h3>テキストが入ります。テキストが入ります。</h3>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </div>
                    <div>
                        <TablePhilosophy />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="content">
            <h2 id="vision">事業目的 VISION</h2>
            <div className="vision">
                {visionList.map((list, index) => (
                    <div className="vision_content" key={index} >
                        <img src={list.img} alt="" />
                        <p>{list.text}</p>
                        <ButtonNavy text="詳しく見る" size="medium" to={list.to} />
                    </div>
                ))}

            </div>
        </div>
        <hr />
        <div className="content">
            <h2>事業使命 MISSION</h2>
            <div className="mission">
                {missionList.map((list, index) => (
                    <div className="vision_content" key={index} >
                        <div className="title">
                            <CircleNumber text={index + 1} />
                            <h3>{list.title}</h3>
                        </div>
                        <img src={list.img} alt="" />
                        <p>{list.text}</p>
                    </div>
                ))}
            </div>
       </div>
        <hr />
        <div className="content">
            <h2>情報技術とデザインと思想</h2>
            <div className="technology">
                {techList.map((list, index) => (
                    <div className="tech_content" key={index} >
                        <img src={list.img} alt="" />
                        <h3>{list.title}</h3>
                        <p>{list.text}</p>
                    </div>
                ))}
            </div>
       </div>
        <hr />
        <div className="content">
            <h2>デザインの概要</h2>
            <TableDesignOverview />
       </div>
       <hr />
       <div className="content">
            <div className="main-title">
                <h2>デザイン受賞歴</h2>
                <p>タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。</p>
            </div>
            <TableDesignAward />
       </div>
       <hr />
       <div className="content">
            <h2>代表デザイン事例</h2>
            <div className="examples">
                <div className="example">店舗</div>
                <div className="example">テナント</div>
                <div className="example">オフィス</div>
                <div className="example">インテリア</div>
                <div className="example">什器</div>
            </div>
       </div>
       <div className="content">
            <h2>バーチャルオフィス</h2>
            <div className="office">
                <img src={kitchen} alt="kitchen" />
            </div>
            <div className="imgs">
                <img src={kitchen} alt="kitchen" />
                <img src={kitchen} alt="kitchen" />
                <img src={kitchen} alt="kitchen" />
            </div>
            <div className="detail">
                昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
            </div>
       </div>
       <div className="content">
            <h3>制作時のポイント</h3>
            <hr />
            <div className="accordions">
                <div className="accordion-head">
                    <p className="accordion-title">アコーディオン</p>
                    <p className="accordion-button"><FontAwesomeIcon icon={faPlus} /></p>
                </div>
                <div className="accordion-body">
                    昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。
                </div>
            </div>
       </div>
       <div className="content">
            <div className="main-title">
                <h2>未来の展望</h2>
                <p>タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。</p><br /><br />
                <ButtonNavy text="お問合せ・お見積り" size="24px" to="#" />
            </div>
       </div>
    </div>
  );
};

export default MainPage;
