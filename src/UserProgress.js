import React, { useCallback, useState } from 'react'
import './UserProgress.css';
import 'charts.css';
import { CircleProgress } from 'react-gradient-progress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector } from 'recharts';

const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`PV ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};



function UserProgress() {
    const columnChartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );




    return (
        <div className="userProgress">
            <div className="userProgress__container">
                <p> dd/mm/yyyy Progress</p>
                <div className="userProgress__firstrow">
                    <div className="userProgress__box">
                        <span className="userProgress_innerbox">
                            <p>136</p>
                            <p>g</p>
                        </span>
                        <p>
                            PROTEIN
                        </p>
                    </div>
                    <div className="userProgress__box">
                        <span className="userProgress_innerbox">
                            <p>236</p>
                            <p>g</p>
                        </span>
                        <p>
                            CARBONHYDRATE
                        </p>
                    </div>
                    <div className="userProgress__box">
                        <span className="userProgress_innerbox">
                            <p>83</p>
                            <p>g</p>
                        </span>
                        <p>
                            FAT
                        </p>
                    </div>
                </div>
                <div className="userProgress__row">
                    <div className="userProgress__box1">
                        <div className="userProgress__circlechart">
                            <div className="userProgress__paragraph">
                                <p>Total Calories</p>
                                <p>Today</p>
                            </div>
                            <div className="userProgress__innercirclechart">
                                <CircleProgress percentage={75} strokeWidth={10} primaryColor={['#04ac94', '#d0eee9']} width={225} fontSize={24} />
                            </div>
                            <div className="userProgress__endparagraph">
                                <p>You burned 2000 cal today</p>
                            </div>
                        </div>

                    </div>
                    <div className="userProgress__box1">
                        <div className="userProgress__paragraphh">
                            <p>Target-Result Graph</p>
                            <BarChart
                                width={500}
                                height={300}
                                data={columnChartData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>

                        </div>
                    </div>
                </div>
                <div className="userProgress__row">
                    <div className="userProgress__box1">
                        <PieChart width={400} height={400}>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={pieChartData}
                                cx={200}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#88a4d8"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            />
                        </PieChart>
                    </div>
                    <div className="userProgress__box1">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProgress;