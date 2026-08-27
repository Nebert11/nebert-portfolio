import React from "react";
const stats = [["06", "finished projects"], ["225", "working hours"], ["10", "online support"], ["05", "happy customers"]];
const Stats = () => <section className="stats section-wrap" aria-label="Selected numbers">{stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>;
export default Stats;
