import React, { useCallback, useState } from 'react'
import './UserProgress.css';
import 'charts.css';
import { CircleProgress } from 'react-gradient-progress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector } from 'recharts';

const pieChartData = [
    { name: "Protein", value: 544, text: 136 },
    { name: "Carbonhydrate", value: 704, text: 176 },
    { name: "Fat", value: 648, text: 72 }
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
        value,
        text
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
            >{`${text} gr`}</text>
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
            name: '9 Jun',
            goal: 2400,
            burned: 1693,
            amt: 2400,
        },
        {
            name: '10 Jun',
            goal: 2400,
            burned: 1724,
            amt: 2210,
        },
        {
            name: '11 Jun',
            goal: 2400,
            burned: 2103,
            amt: 2290,
        },
        {
            name: '12 Jun',
            goal: 2400,
            burned: 1974,
            amt: 2000,
        },
        {
            name: '13 Jun',
            goal: 2400,
            burned: 2045,
            amt: 2181,
        },
        {
            name: '14 Jun',
            goal: 2400,
            burned: 1749,
            amt: 2500,
        },
        {
            name: 'Today',
            goal: 2400,
            burned: 1894,
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
                <p> 15/06/2023 Progress</p>
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
                            <p>176</p>
                            <p>g</p>
                        </span>
                        <p>
                            CARBONHYDRATE
                        </p>
                    </div>
                    <div className="userProgress__box">
                        <span className="userProgress_innerbox">
                            <p>72</p>
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
                                <CircleProgress percentage={79} strokeWidth={10} primaryColor={['#04ac94', '#d0eee9']} width={225} fontSize={24} />
                            </div>
                            <div className="userProgress__endparagraph">
                                <p>You burned 1894 cal today</p>
                            </div>
                        </div>

                    </div>
                    <div className="userProgress__box1">
                        <div className="userProgress__paragraph">
                            <p>Goal-Burned Graph</p>
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
                                <Bar dataKey="burned" fill="#82ca9d" background={{ fill: "#eee" }} />
                                <Bar dataKey="goal" fill="#8884d8" background={{ fill: "#eee" }} />
                            </BarChart>

                        </div>
                    </div>
                </div>
                <div className="userProgress__row">
                    <div className="userProgress__box1 userProgress_2ndlastbox">
                        <span> Nutrient Percentage </span>
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
                    <div className="userProgress__box1 userProgress_lastbox">
                        <span> Today's List </span>
                        <table>
                            <tr>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Snacks</th>
                                <th>Dinner</th>
                                <th>Treat</th>
                                <th>Calories</th>
                            </tr>

                            <tr>
                                <td> 3 ingredient Banana Pancakes
                                     1 Fried egg</td>
                                <td> Power Pumpkin and Berry Smoothie
                                     1 Low-Fat Cottage Cheese Stick</td>
                                <td> 1 Cup Low-Fat Cottage Cheese
                                     1 Hard Boiled Egg </td>
                                <td> Penne alla Primavera</td>
                                <td> 1 oz dark chocolate</td>
                                <td> 1,941 Cal</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProgress;