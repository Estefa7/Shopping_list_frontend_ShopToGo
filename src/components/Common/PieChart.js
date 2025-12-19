import React from "react";

function PieChart({ resolved, total, size = 240}) {
    if (total === 0)  {
        return <p>No items yet</p>;
    }

    const actualSize = size || Math.min(window.innerWidth * 0.3, 300);
    const radius = size / 2 -10 ;
    const circumference = 2*Math.PI*radius;
    const progress = resolved/total;
    const strokeDashoffset = circumference * (1-progress);

    const progressColor = progress === 1 ? "#4caf50" : "#5eaaa8";

    return(
        <div style={{ textAlign: "center", width: actualSize }}>
            <svg width={actualSize} height={actualSize}>
                {/* background circle */}
                <circle
                cx={actualSize/2}
                cy={actualSize/2}
                r={radius}
                stroke="#e5eeee"
                strokeWidth="10"
                fill="none"
                />
                {/* progress circle */}
                <circle
                cx={actualSize/2}
                cy={actualSize/2}
                r={radius}
                stroke={progressColor}
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                {/* percentage text */}
                <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize={actualSize * 0.15}
                fill="#333"
                >   
                 {Math.round(progress * 100)}%
                </text>

            </svg>
            <div style= {{ marginTop: 8, fontSize: 14}}>
            </div>
        </div>
    );
}

export default PieChart;