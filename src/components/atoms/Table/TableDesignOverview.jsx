import React from "react";
import "./TableDesignOverview.scss";
import room from "../../../assets/img/room.png";

const TableDesignOverview = () => {
    const overviewList = [
        { title: "空間を和らげ、安らぎを感じる", img: room, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。" },
        { title: "空間を和らげ、安らぎを感じる", img: room, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。" },
        { title: "空間を和らげ、安らぎを感じる", img: room, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。" },
        { title: "空間を和らげ、安らぎを感じる", img: room, text: "昨今、情報技術は目まぐるしい勢いで進化を続け、インターネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる情報量は江戸時代の1年分とも言われています。" },
      ];
    
    return (
        <table className="overview">
            <tbody>
                <tr>
                    <th>空間に与える印象</th>
                    <th>写真</th>
                    <th>使用のポイント</th>
                </tr>
                {overviewList.map((list, index) => (
                    <tr key={index}>
                        <td className="sub">{list.title}</td>
                        <td><img src={list.img} alt="" /></td>
                        <td>{list.text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDesignOverview;

