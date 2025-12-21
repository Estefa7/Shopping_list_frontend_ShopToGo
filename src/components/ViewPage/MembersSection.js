import React from "react";
import { useLanguage } from "../../context/LanguageContext";

function MembersSection({members})  {
    const { t } = useLanguage();

    return (
        <div>
            <h3>{t("members")}:</h3>
            <ul>
                {members.map((member, index) => (<li key={index}>{member}</li>))}
            </ul>
        </div>
    );
}

export default MembersSection;