import React from "react";

function MembersSection({members})  {
    return (
        <div>
            <h3>Members:</h3>
            <ul>
                {members.map((member, index) => (<li key={index}>{member}</li>))}
            </ul>
        </div>
    );
}

export default MembersSection;