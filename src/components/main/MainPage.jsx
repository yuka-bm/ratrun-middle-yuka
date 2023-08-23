import React from "react";
import "./MainPage.scss";
import top from "../../assets/img/cyber-g15cd33eba_1920.png";
import room from "../../assets/img/room.png";
import phone from "../../assets/img/phone.png";
import TablePhilosophy from '../atoms/Table/TablePhilosophy';
import ButtonNavy from '../atoms/Button/ButtonNavy';

const MainPage = () => {
    const visionList = [
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
        { img: phone, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。", to: "#" },
      ];
    
  return (
    <div className="main">
        <div className="top" style={{ backgroundImage: `url(${top})` }}>
            <h1>理念の文章が入ります</h1>
            <p>母体が内装解体専門会社であるからこそ、一般的な施工会社よりも解体費用を抑えることができます。つまり、解体費用を抑えることで、余力のある資金が生まれ、使い道を広げることができるということです。<br />選択のできる予算の使途も併せてご提案いたします。</p>
        </div>
        <div className="contents">
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
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
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
        <div className="contents">
            <h2 id="vision">事業目的 VISION</h2>
            <div className="vision">
                {visionList.map((list, index) => (
                    <div className="vision_content">
                        <img src={list.img} alt="" />
                        <p>{list.text}</p>
                        <ButtonNavy text="詳しく見る" size="medium" to={list.to} />
                    </div>
                ))}

            </div>
        </div>
        <hr />
        <div className="contents">
       </div>
    </div>
  );
};

export default MainPage;
