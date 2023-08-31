import React from "react";
import "./TableDesignAward.scss";

const TableDesignAward = () => {
    const awardList = [
        { date: "2012年8月", text: ["JDC金賞受賞 居酒屋まる", "JDG審査委員特別賞 大湊都美術館 まなとぴあ"] },
        { date: "2012年8月", text: ["JDC金賞受賞 居酒屋まる", "JDG審査委員特別賞 大湊都美術館 まなとぴあ"] },
        { date: "2012年8月", text: ["JDC金賞受賞 居酒屋まる", "JDG審査委員特別賞 大湊都美術館 まなとぴあ"] },
    ];
    
    return (
        <table className="award">
            <tbody>
                {awardList.map((list, index) => (
                    <tr key={index}>
                        <td>{list.date}</td>
                        <td>
                            {list.text.map((list2, index) => (
                                <li key={index}>{list2}</li>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDesignAward;

