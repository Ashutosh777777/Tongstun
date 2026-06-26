                                              // The first Draft of the Map

// import { useState, useEffect } from "react";

// const SCENARIOS = [
//   { slug: "coffee-shop", label: "Coffee Shop", category: "casual", x: 80, y: 120, color: { fill: "#D4A26A", roof: "#8B4513", wall: "#F5DEB3", accent: "#A0522D" } },
//   { slug: "break-room", label: "Break Room", category: "casual", x: 220, y: 60, color: { fill: "#B8C4D0", roof: "#5A6E80", wall: "#D6E4EE", accent: "#7A9AB5" } },
//   { slug: "street-corner", label: "Street Corner", category: "casual", x: 420, y: 90, color: { fill: "#C8B89A", roof: "#6B5B45", wall: "#E8D8C0", accent: "#8B7355" } },
//   { slug: "office-building", label: "Office Building", category: "formal", x: 560, y: 70, color: { fill: "#8BA5C0", roof: "#3A5470", wall: "#C5D8EC", accent: "#5A7A9A" } },
//   { slug: "interview-room", label: "Interview Room", category: "formal", x: 580, y: 230, color: { fill: "#9A8FB0", roof: "#4A3F60", wall: "#D5CCE8", accent: "#6A5F80" } },
//   { slug: "conference-hall", label: "Conference Hall", category: "formal", x: 440, y: 300, color: { fill: "#7098B0", roof: "#2A4860", wall: "#B8D4E8", accent: "#4A7090" } },
//   { slug: "park", label: "Park", category: "friendly", x: 100, y: 300, color: { fill: "#7AAB6A", roof: "#3A6A2A", wall: "#B8D8A0", accent: "#5A8A4A" } },
//   { slug: "library", label: "Library", category: "friendly", x: 240, y: 240, color: { fill: "#C8A06A", roof: "#6B4A20", wall: "#E8C898", accent: "#A07840" } },
//   { slug: "friends-living-room", label: "Friend's Living Room", category: "friendly", x: 320, y: 160, color: { fill: "#D4907A", roof: "#7A3020", wall: "#F0C4B0", accent: "#A05040" } },
//   { slug: "bookstore", label: "Bookstore", category: "flirty", x: 80, y: 460, color: { fill: "#C87878", roof: "#7A2828", wall: "#F0B8B8", accent: "#A04848" } },
//   { slug: "rooftop-bar", label: "Rooftop Bar", category: "flirty", x: 260, y: 400, color: { fill: "#B878C8", roof: "#5A2878", wall: "#E8B8F0", accent: "#8848A8" } },
//   { slug: "coffee-shop-evening", label: "Coffee Shop (evening)", category: "flirty", x: 440, y: 460, color: { fill: "#8878C8", roof: "#2A2878", wall: "#C8B8F0", accent: "#5848A8" } },
//   { slug: "debate-stage", label: "Debate Stage", category: "argument", x: 100, y: 600, color: { fill: "#C85050", roof: "#781020", wall: "#F0A8A8", accent: "#A03030" } },
//   { slug: "customer-service-desk", label: "Customer Service", category: "argument", x: 320, y: 560, color: { fill: "#C87840", roof: "#783020", wall: "#F0C898", accent: "#A05020" } },
//   { slug: "friends-kitchen", label: "Friend's Kitchen", category: "argument", x: 540, y: 500, color: { fill: "#B8A050", roof: "#685810", wall: "#E8D898", accent: "#907030" } },
// ];

// function CoffeeShop({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-30} y={-12} width={60} height={10} rx={2} fill={color.accent} opacity={0.9} />
//       <rect x={-28} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={-10} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={8} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={-30} y={-2} width={60} height={38} rx={3} fill={color.wall} />
//       <rect x={-30} y={-2} width={60} height={38} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
//       <rect x={-24} y={6} width={16} height={14} rx={2} fill={active ? "#FFF8E7" : "#E8E8E8"} />
//       <line x1={-16} y1={6} x2={-16} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <line x1={-24} y1={13} x2={-8} y2={13} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <rect x={8} y={6} width={16} height={14} rx={2} fill={active ? "#FFF8E7" : "#E8E8E8"} />
//       <line x1={16} y1={6} x2={16} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <line x1={8} y1={13} x2={24} y2={13} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <rect x={-6} y={22} width={12} height={14} rx={2} fill={color.accent} opacity={0.8} />
//       <circle cx={4} cy={30} r={1.5} fill={color.wall} />
//       {active && (<><path d="M-8 -16 Q-10 -22 -8 -28" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.6} /><path d="M0 -18 Q2 -25 0 -32" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.5} /><path d="M8 -16 Q10 -22 8 -28" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.6} /></>)}
//       <rect x={-32} y={-18} width={64} height={8} rx={2} fill={color.roof} opacity={0.9} />
//     </g>
//   );
// }

// function OfficeBuilding({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-25} y={-40} width={50} height={72} rx={2} fill={color.wall} />
//       <rect x={-25} y={-40} width={50} height={72} rx={2} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
//       {[-28, -16, -4, 8, 20].map((row: number, ri: number) =>
//         [-18, -6, 6, 18].map((col: number, ci: number) => (
//           <rect key={`w${ri}-${ci}`} x={col - 4} y={row} width={8} height={8} rx={1} fill={active ? "#E8F4FF" : "#D0D8E0"} opacity={0.9} />
//         ))
//       )}
//       <rect x={-10} y={22} width={20} height={10} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={-27} y={-46} width={54} height={8} rx={1} fill={color.roof} />
//       <line x1={0} y1={-46} x2={0} y2={-58} stroke={color.roof} strokeWidth={1.5} />
//       <circle cx={0} cy={-59} r={2} fill={color.accent} />
//     </g>
//   );
// }

// function Park({ color, active }: any) {
//   return (
//     <g>
//       <ellipse cx={0} cy={10} rx={38} ry={24} fill={color.wall} opacity={0.8} />
//       <path d="M0 30 Q0 10 0 -8" stroke="#C8A878" strokeWidth={4} fill="none" opacity={0.6} strokeLinecap="round" />
//       <path d="M-30 12 Q-10 10 0 10 Q10 10 28 8" stroke="#C8A878" strokeWidth={3} fill="none" opacity={0.5} strokeLinecap="round" />
//       {[[-22, -8], [-10, -15], [12, -10], [24, -5], [-5, 5]].map(([tx, ty]: number[], i: number) => (
//         <g key={i} transform={`translate(${tx},${ty})`}>
//           <circle cx={0} cy={0} r={active ? 8 : 7} fill={color.fill} opacity={0.9} />
//           <circle cx={-3} cy={-3} r={5} fill={color.accent} opacity={0.5} />
//           <rect x={-1.5} y={6} width={3} height={6} rx={1} fill={color.roof} />
//         </g>
//       ))}
//       <rect x={14} y={12} width={14} height={5} rx={2} fill={color.roof} opacity={0.8} />
//       <rect x={15} y={17} width={3} height={5} rx={1} fill={color.roof} opacity={0.6} />
//       <rect x={24} y={17} width={3} height={5} rx={1} fill={color.roof} opacity={0.6} />
//       {active && [[-25, 15], [20, -2], [-8, 22]].map(([fx, fy]: number[], i: number) => (
//         <circle key={i} cx={fx} cy={fy} r={2.5} fill={["#FFB3BA", "#B3D9FF", "#FFFFB3"][i]} opacity={0.9} />
//       ))}
//     </g>
//   );
// }

// function Library({ color, active }: any) {
//   return (
//     <g>
//       {[-18, -6, 6, 18].map((cx: number, i: number) => (
//         <rect key={i} x={cx - 2} y={-30} width={4} height={40} rx={1} fill={color.accent} opacity={0.7} />
//       ))}
//       <rect x={-28} y={-30} width={56} height={42} rx={2} fill={color.wall} />
//       <polygon points="-32,-30 0,-50 32,-30" fill={color.roof} opacity={0.9} />
//       <rect x={-8} y={2} width={16} height={10} rx={2} fill={color.fill} opacity={0.8} />
//       <rect x={-22} y={-20} width={12} height={18} rx={2} fill={active ? "#FFF8E0" : "#E4DCCC"} opacity={0.9} />
//       <rect x={10} y={-20} width={12} height={18} rx={2} fill={active ? "#FFF8E0" : "#E4DCCC"} opacity={0.9} />
//       <rect x={-24} y={12} width={48} height={4} rx={1} fill={color.accent} opacity={0.5} />
//       <rect x={-20} y={14} width={40} height={3} rx={1} fill={color.accent} opacity={0.3} />
//     </g>
//   );
// }

// function BreakRoom({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-28} y={-20} width={56} height={46} rx={3} fill={color.wall} />
//       <rect x={-28} y={-20} width={56} height={46} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
//       <rect x={-30} y={-26} width={60} height={8} rx={2} fill={color.roof} opacity={0.9} />
//       <rect x={12} y={-24} width={14} height={6} rx={1} fill={color.accent} opacity={0.7} />
//       <ellipse cx={0} cy={6} rx={18} ry={10} fill={color.fill} opacity={0.7} />
//       {[[-22, 6], [22, 6], [0, -12], [0, 22]].map(([cx, cy]: number[], i: number) => (
//         <circle key={i} cx={cx} cy={cy} r={5} fill={color.accent} opacity={0.6} />
//       ))}
//       {active && <rect x={16} y={-10} width={8} height={14} rx={1} fill={color.accent} opacity={0.8} />}
//       <rect x={-8} y={16} width={16} height={10} rx={2} fill={color.roof} opacity={0.8} />
//     </g>
//   );
// }

// function StreetCorner({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-38} y={-4} width={76} height={16} rx={2} fill="#B0A898" opacity={0.6} />
//       <rect x={-4} y={-24} width={16} height={56} rx={2} fill="#B0A898" opacity={0.6} />
//       {[-2, 4, 10].map((lx: number, i: number) => (
//         <rect key={i} x={lx - 30} y={-1} width={8} height={3} rx={1} fill="white" opacity={0.7} />
//       ))}
//       <rect x={4} y={-36} width={3} height={32} rx={1} fill={color.roof} opacity={0.9} />
//       <ellipse cx={5.5} cy={-36} rx={6} ry={3} fill={color.accent} opacity={0.8} />
//       {active && <circle cx={5.5} cy={-36} r={4} fill="#FFF8D0" opacity={0.6} />}
//       <rect x={10} y={-28} width={28} height={22} rx={2} fill={color.wall} opacity={0.9} />
//       <rect x={10} y={-32} width={28} height={6} rx={1} fill={color.roof} opacity={0.9} />
//       <rect x={-24} y={-20} width={20} height={10} rx={2} fill={color.accent} opacity={0.8} />
//       <rect x={-14} y={-10} width={2} height={12} rx={1} fill={color.roof} opacity={0.7} />
//     </g>
//   );
// }

// function ConferenceHall({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-36} y={-18} width={72} height={48} rx={2} fill={color.wall} />
//       <rect x={-40} y={-26} width={80} height={10} rx={2} fill={color.roof} opacity={0.9} />
//       {[[-30, -10], [-10, -10], [10, -10]].map(([wx, wy]: number[], i: number) => (
//         <rect key={i} x={wx} y={wy} width={16} height={20} rx={2} fill={active ? "#E0EEFF" : "#C8D0DC"} opacity={0.9} />
//       ))}
//       <rect x={-10} y={18} width={20} height={12} rx={2} fill={color.accent} opacity={0.8} />
//       <line x1={0} y1={18} x2={0} y2={30} stroke={color.wall} strokeWidth={1} opacity={0.6} />
//       {active && <rect x={-20} y={-36} width={40} height={8} rx={2} fill={color.fill} opacity={0.9} />}
//       <line x1={-34} y1={-18} x2={-34} y2={-40} stroke={color.roof} strokeWidth={1.5} />
//       <rect x={-34} y={-40} width={12} height={7} rx={1} fill={color.fill} opacity={0.8} />
//       <line x1={34} y1={-18} x2={34} y2={-40} stroke={color.roof} strokeWidth={1.5} />
//       <rect x={22} y={-40} width={12} height={7} rx={1} fill={color.accent} opacity={0.8} />
//     </g>
//   );
// }

// function InterviewRoom({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-26} y={-22} width={52} height={50} rx={3} fill={color.wall} />
//       <rect x={-26} y={-22} width={52} height={50} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
//       <rect x={-18} y={-14} width={36} height={22} rx={2} fill={active ? "#D8E8FF" : "#C0C8D8"} opacity={0.9} />
//       {active && [[-16, -12], [-16, -8], [-16, -4], [-16, 0], [-16, 4]].map(([lx, ly]: number[], i: number) => (
//         <line key={i} x1={lx} y1={ly} x2={lx + 32} y2={ly} stroke={color.fill} strokeWidth={0.8} opacity={0.4} />
//       ))}
//       {active && <rect x={-10} y={-6} width={20} height={4} rx={1} fill={color.roof} opacity={0.5} />}
//       <rect x={-12} y={-26} width={24} height={6} rx={1} fill={color.roof} opacity={0.9} />
//       <rect x={-7} y={18} width={14} height={10} rx={2} fill={color.accent} opacity={0.8} />
//       <circle cx={5} cy={23} r={1.5} fill={color.wall} />
//     </g>
//   );
// }

// function FriendsLivingRoom({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-28} y={-8} width={56} height={44} rx={3} fill={color.wall} />
//       <polygon points="-32,-8 0,-36 32,-8" fill={color.roof} opacity={0.9} />
//       <rect x={14} y={-34} width={8} height={18} rx={1} fill={color.accent} opacity={0.8} />
//       {active && <path d="M18 -35 Q16 -42 18 -48" stroke="#888" strokeWidth={2} fill="none" opacity={0.5} />}
//       <rect x={-18} y={2} width={24} height={18} rx={2} fill={active ? "#FFF0D0" : "#E8DCC8"} opacity={0.9} />
//       {active && <rect x={-18} y={2} width={24} height={18} rx={2} fill="#FFD070" opacity={0.15} />}
//       <line x1={-6} y1={2} x2={-6} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <line x1={-18} y1={11} x2={6} y2={11} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <rect x={10} y={20} width={12} height={16} rx={2} fill={color.roof} opacity={0.8} />
//       <circle cx={20} cy={29} r={1.5} fill={color.wall} />
//       {active && <rect x={-20} y={20} width={26} height={4} rx={2} fill={color.fill} opacity={0.8} />}
//       <rect x={-30} y={26} width={6} height={5} rx={1} fill={color.accent} opacity={0.7} />
//     </g>
//   );
// }

// function Bookstore({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-28} y={-16} width={56} height={48} rx={2} fill={color.wall} />
//       <rect x={-30} y={-22} width={60} height={8} rx={2} fill={color.roof} opacity={0.9} />
//       <rect x={-22} y={-8} width={44} height={22} rx={2} fill={active ? "#FFE8E8" : "#E8D8D8"} opacity={0.9} />
//       {active && [-16, -10, -4, 2, 8, 14].map((bx: number, i: number) => (
//         <rect key={i} x={bx} y={-4} width={5} height={14} rx={0.5} fill={["#E87", "#7B8", "#88D", "#EB5", "#6CE", "#D75"][i]} opacity={0.85} />
//       ))}
//       <rect x={-14} y={-28} width={28} height={8} rx={2} fill={color.fill} opacity={0.9} />
//       <line x1={-8} y1={-22} x2={-8} y2={-16} stroke={color.accent} strokeWidth={0.8} />
//       <line x1={8} y1={-22} x2={8} y2={-16} stroke={color.accent} strokeWidth={0.8} />
//       <rect x={-6} y={22} width={12} height={10} rx={2} fill={color.accent} opacity={0.8} />
//     </g>
//   );
// }

// function RooftopBar({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-30} y={0} width={60} height={36} rx={2} fill={color.wall} opacity={0.8} />
//       <rect x={-32} y={-30} width={64} height={32} rx={3} fill={color.fill} opacity={0.85} />
//       <rect x={-32} y={-30} width={64} height={32} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
//       {[-28, -14, 0, 14, 28].map((rx2: number, i: number) => (
//         <line key={i} x1={rx2} y1={-30} x2={rx2} y2={-42} stroke={color.accent} strokeWidth={1} opacity={0.7} />
//       ))}
//       <line x1={-30} y1={-42} x2={30} y2={-42} stroke={color.accent} strokeWidth={1.5} opacity={0.8} />
//       {active && (<>
//         <circle cx={-14} cy={-18} r={5} fill={color.roof} opacity={0.7} />
//         <circle cx={14} cy={-18} r={5} fill={color.roof} opacity={0.7} />
//         <circle cx={-14} cy={-48} r={3} fill="#FFFBB0" opacity={0.9} />
//         <circle cx={0} cy={-50} r={3} fill="#FFFBB0" opacity={0.9} />
//         <circle cx={14} cy={-48} r={3} fill="#FFFBB0" opacity={0.9} />
//         <line x1={-14} y1={-42} x2={-14} y2={-46} stroke={color.accent} strokeWidth={0.8} />
//         <line x1={0} y1={-42} x2={0} y2={-48} stroke={color.accent} strokeWidth={0.8} />
//         <line x1={14} y1={-42} x2={14} y2={-46} stroke={color.accent} strokeWidth={0.8} />
//       </>)}
//       <rect x={-6} y={0} width={12} height={6} rx={1} fill={color.accent} opacity={0.6} />
//     </g>
//   );
// }

// function CoffeeShopEvening({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-30} y={-12} width={60} height={10} rx={2} fill={color.accent} opacity={0.9} />
//       <rect x={-28} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={-10} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={8} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
//       <rect x={-30} y={-2} width={60} height={38} rx={3} fill={color.wall} />
//       <rect x={-30} y={-2} width={60} height={38} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
//       <rect x={-24} y={6} width={16} height={14} rx={2} fill={active ? "#FFD080" : "#C0B8A8"} />
//       {active && <rect x={-24} y={6} width={16} height={14} rx={2} fill="#FFD080" opacity={0.3} />}
//       <rect x={8} y={6} width={16} height={14} rx={2} fill={active ? "#FFD080" : "#C0B8A8"} />
//       {active && <rect x={8} y={6} width={16} height={14} rx={2} fill="#FFD080" opacity={0.3} />}
//       {active && <path d="M18 -26 A8 8 0 1 1 18 -10 A5 5 0 1 0 18 -26" fill="#FFFBB0" opacity={0.8} />}
//       {active && [[-20, -28], [-10, -32], [5, -30], [24, -25]].map(([sx, sy]: number[], i: number) => (
//         <circle key={i} cx={sx} cy={sy} r={1} fill="white" opacity={0.7} />
//       ))}
//       <rect x={-32} y={-18} width={64} height={8} rx={2} fill={color.roof} opacity={0.9} />
//       <rect x={-6} y={22} width={12} height={14} rx={2} fill={color.accent} opacity={0.8} />
//     </g>
//   );
// }

// function DebateStage({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-36} y={4} width={72} height={28} rx={2} fill={color.wall} />
//       <rect x={-36} y={4} width={72} height={6} rx={1} fill={color.accent} opacity={0.5} />
//       <rect x={-28} y={-14} width={16} height={20} rx={2} fill={color.fill} opacity={0.9} />
//       <rect x={12} y={-14} width={16} height={20} rx={2} fill={color.fill} opacity={0.9} />
//       <line x1={-20} y1={-14} x2={-20} y2={-24} stroke={color.roof} strokeWidth={1.5} />
//       <ellipse cx={-20} cy={-26} rx={3} ry={4} fill={color.roof} opacity={0.8} />
//       <line x1={20} y1={-14} x2={20} y2={-24} stroke={color.roof} strokeWidth={1.5} />
//       <ellipse cx={20} cy={-26} rx={3} ry={4} fill={color.roof} opacity={0.8} />
//       <rect x={-36} y={-36} width={72} height={24} rx={2} fill={color.roof} opacity={0.7} />
//       {active && (<>
//         <polygon points="-30,-12 -20,-12 -16,4 -34,4" fill="#FFE060" opacity={0.15} />
//         <polygon points="30,-12 20,-12 16,4 34,4" fill="#FFE060" opacity={0.15} />
//         {[-28, -20, -12, -4, 4, 12, 20, 28].map((ax: number, i: number) => (
//           <circle key={i} cx={ax} cy={22} r={3} fill={color.accent} opacity={0.5} />
//         ))}
//       </>)}
//     </g>
//   );
// }

// function CustomerServiceDesk({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-32} y={-16} width={64} height={48} rx={2} fill={color.wall} />
//       <rect x={-34} y={-22} width={68} height={8} rx={2} fill={color.roof} opacity={0.9} />
//       <rect x={-24} y={-6} width={48} height={10} rx={2} fill={color.fill} opacity={0.85} />
//       <rect x={-24} y={-6} width={48} height={4} rx={2} fill={color.accent} opacity={0.5} />
//       {active && (<>
//         <line x1={-18} y1={18} x2={-18} y2={26} stroke={color.roof} strokeWidth={1.5} />
//         <line x1={0} y1={18} x2={0} y2={26} stroke={color.roof} strokeWidth={1.5} />
//         <path d="M-18 22 Q-9 19 0 22" stroke={color.accent} strokeWidth={1} fill="none" opacity={0.8} />
//         {[-10, 6, 22].map((qx: number, i: number) => (
//           <g key={i}>
//             <circle cx={qx} cy={30} r={3} fill={color.fill} opacity={0.8} />
//             <rect x={qx - 2} y={33} width={4} height={6} rx={1} fill={color.accent} opacity={0.6} />
//           </g>
//         ))}
//       </>)}
//       <rect x={6} y={-14} width={18} height={10} rx={1} fill={active ? "#FFF8E0" : "#E0D8C8"} />
//       <rect x={-16} y={-28} width={32} height={8} rx={2} fill={color.fill} opacity={0.9} />
//     </g>
//   );
// }

// function FriendsKitchen({ color, active }: any) {
//   return (
//     <g>
//       <rect x={-28} y={-8} width={56} height={44} rx={3} fill={color.wall} />
//       <polygon points="-32,-8 0,-34 32,-8" fill={color.roof} opacity={0.9} />
//       <rect x={-20} y={2} width={28} height={20} rx={2} fill={active ? "#FFFCD0" : "#EAE0C0"} opacity={0.9} />
//       <line x1={-6} y1={2} x2={-6} y2={22} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       <line x1={-20} y1={12} x2={8} y2={12} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
//       {active && (<>
//         <circle cx={-14} cy={8} r={3} fill={color.fill} opacity={0.8} />
//         <circle cx={-4} cy={10} r={3.5} fill={color.accent} opacity={0.7} />
//         <path d="M-14 4 Q-12 -2 -14 -8" stroke="#AAA" strokeWidth={1} fill="none" opacity={0.5} />
//         <path d="M-4 5 Q-2 -2 -4 -9" stroke="#AAA" strokeWidth={1} fill="none" opacity={0.5} />
//       </>)}
//       <rect x={10} y={20} width={12} height={16} rx={2} fill={color.roof} opacity={0.8} />
//       <rect x={8} y={35} width={16} height={3} rx={1} fill={color.accent} opacity={0.5} />
//     </g>
//   );
// }

// const BUILDING_COMPONENTS: Record<string, any> = {
//   "coffee-shop": CoffeeShop,
//   "break-room": BreakRoom,
//   "street-corner": StreetCorner,
//   "office-building": OfficeBuilding,
//   "interview-room": InterviewRoom,
//   "conference-hall": ConferenceHall,
//   "park": Park,
//   "library": Library,
//   "friends-living-room": FriendsLivingRoom,
//   "bookstore": Bookstore,
//   "rooftop-bar": RooftopBar,
//   "coffee-shop-evening": CoffeeShopEvening,
//   "debate-stage": DebateStage,
//   "customer-service-desk": CustomerServiceDesk,
//   "friends-kitchen": FriendsKitchen,
// };

// function MapDecorations() {
//   return (
//     <g opacity={0.35}>
//       <line x1={0} y1={0} x2={700} y2={0} stroke="#C8C0A8" strokeWidth={18} />
//       <line x1={0} y1={380} x2={700} y2={380} stroke="#C8C0A8" strokeWidth={18} />
//       <line x1={180} y1={0} x2={180} y2={700} stroke="#C8C0A8" strokeWidth={14} />
//       <line x1={400} y1={0} x2={400} y2={700} stroke="#C8C0A8" strokeWidth={14} />
//       {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660].map((d: number, i: number) => (
//         <line key={i} x1={d} y1={0} x2={d + 40} y2={0} stroke="white" strokeWidth={2} opacity={0.7} />
//       ))}
//       <ellipse cx={300} cy={200} rx={70} ry={50} fill="#A8C888" opacity={0.5} />
//       <ellipse cx={530} cy={400} rx={60} ry={45} fill="#A8C888" opacity={0.4} />
//       <ellipse cx={500} cy={180} rx={40} ry={28} fill="#88B4D8" opacity={0.5} />
//       <ellipse cx={505} cy={183} rx={30} ry={20} fill="#A0C4E0" opacity={0.4} />
//     </g>
//   );
// }

// interface TownMapProps {
//   activeCategories: string[];
//   onSelectScenario: (slug: string) => void;
// }

// export default function TownMap({ activeCategories = [], onSelectScenario = () => {} }: TownMapProps) {
//   const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
//   const [pulsePhase, setPulsePhase] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setPulsePhase(p => (p + 1) % 360), 50);
//     return () => clearInterval(id);
//   }, []);

//   const isActive = (scenario: typeof SCENARIOS[0]) => activeCategories.includes(scenario.category);

//   const glowR = (slug: string) => {
//     const base = 36;
//     const amp = 3;
//     const offset = SCENARIOS.findIndex(s => s.slug === slug) * 30;
//     return base + amp * Math.sin((pulsePhase + offset) * Math.PI / 180);
//   };

//   return (
//     <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
//       <svg width="100%" height="100%" viewBox="0 0 700 700" style={{ display: "block", background: "transparent" }}>
//         <defs>
//           <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
//             <stop offset="0%" stopColor="#F5EDD8" />
//             <stop offset="100%" stopColor="#E8D8B8" />
//           </radialGradient>
//         </defs>
//         <rect x={0} y={0} width={700} height={700} fill="url(#bgGrad)" />
//         {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map((y: number, i: number) => (
//           <line key={i} x1={0} y1={y} x2={700} y2={y} stroke="#D4C4A0" strokeWidth={0.5} opacity={0.3} />
//         ))}
//         <MapDecorations />
//         {[
//           { label: "Town Square", x: 340, y: 18, color: "#7A6840" },
//           { label: "The Garden District", x: 130, y: 348, color: "#4A7A30" },
//           { label: "The Heights", x: 540, y: 128, color: "#2A5080" },
//           { label: "Night Quarter", x: 260, y: 430, color: "#5A3880" },
//           { label: "Civic Row", x: 420, y: 348, color: "#6A3020" },
//         ].map((zone, i) => (
//           <text key={i} x={zone.x} y={zone.y} textAnchor="middle" fontSize={9} fontFamily="serif"
//             fill={zone.color} opacity={0.5} letterSpacing={2} style={{ userSelect: "none" }}>
//             {zone.label}
//           </text>
//         ))}
//         {SCENARIOS.map((scenario) => {
//           const active = isActive(scenario);
//           const hovered = hoveredSlug === scenario.slug;
//           const Building = BUILDING_COMPONENTS[scenario.slug];
//           const cx = scenario.x + 48;
//           const cy = scenario.y + 40;
//           return (
//             <g key={scenario.slug} transform={`translate(${cx}, ${cy})`}
//               style={{ cursor: active ? "pointer" : "default", filter: active && hovered ? `drop-shadow(0 0 8px ${scenario.color.fill}88)` : "none", transition: "filter 0.2s ease" }}
//               onClick={() => active && onSelectScenario(scenario.slug)}
//               onMouseEnter={() => active && setHoveredSlug(scenario.slug)}
//               onMouseLeave={() => setHoveredSlug(null)}>
//               {active && (
//                 <circle cx={0} cy={10} r={glowR(scenario.slug)} fill={scenario.color.fill}
//                   opacity={0.08 + (hovered ? 0.06 : 0)} style={{ transition: "opacity 0.2s" }} />
//               )}
//               <ellipse cx={0} cy={38} rx={28} ry={8} fill="#4A3A20" opacity={active ? 0.12 : 0.06} />
//               <g opacity={active ? 1 : 0.15} style={{ transition: "opacity 0.3s" }}>
//                 <Building color={active ? scenario.color : { fill: "#A0A0A0", roof: "#606060", wall: "#D0D0D0", accent: "#808080" }} active={active && hovered} />
//               </g>
//               {active && hovered && (
//                 <circle cx={0} cy={10} r={34} fill="none" stroke={scenario.color.fill}
//                   strokeWidth={1.5} opacity={0.4} strokeDasharray="4 3" />
//               )}
//               <text x={0} y={52} textAnchor="middle" fontSize={active ? 8.5 : 8} fontFamily="'Georgia', serif"
//                 fill={active ? scenario.color.roof : "#B0A898"} fontWeight={active ? "600" : "400"}
//                 style={{ userSelect: "none", transition: "fill 0.3s", paintOrder: "stroke", stroke: active ? "#F5EDD8" : "none", strokeWidth: 3, strokeLinejoin: "round" }}>
//                 {scenario.label}
//               </text>
//               <circle cx={0} cy={58} r={3} fill={active ? scenario.color.fill : "#C0C0C0"} opacity={0.8} style={{ transition: "fill 0.3s" }} />
//             </g>
//           );
//         })}
//         <g transform="translate(660, 640)" opacity={0.5}>
//           <circle cx={0} cy={0} r={16} fill="#F0E8D0" stroke="#B0A070" strokeWidth={0.5} />
//           <text x={0} y={-20} textAnchor="middle" fontSize={8} fill="#6B4A20" fontFamily="serif" fontWeight="bold">N</text>
//           <polygon points="0,-14 -3,-4 0,-8 3,-4" fill="#C84040" opacity={0.8} />
//           <polygon points="0,14 -3,4 0,8 3,4" fill="#404040" opacity={0.6} />
//           <polygon points="-14,0 -4,-3 -8,0 -4,3" fill="#404040" opacity={0.6} />
//           <polygon points="14,0 4,-3 8,0 4,3" fill="#404040" opacity={0.6} />
//           <circle cx={0} cy={0} r={2} fill="#B0A070" />
//         </g>
//         <text x={350} y={686} textAnchor="middle" fontSize={10} fontFamily="'Georgia', serif"
//           fill="#7A6840" opacity={0.6} letterSpacing={3}>CONVERSATION TOWN</text>
//       </svg>
//     </div>
//   );
// }


import { useRef, useEffect, useState, useCallback } from "react";

// ─── Palette ───────────────────────────────────────────────────────────────
const PAL = {
  grass:["#7a9e6e","#789b6c","#7ca070","#74956a"],
  road:"#8a8278", roadMid:"rgba(200,196,186,0.6)", roadEdge:"#9a9690",
  sidewalk:"#c8c4b8",
  water:"#7090a8", water2:"#88a8c0",
  shadow:"rgba(20,15,5,0.25)",
  treeTrunks:["#6b5a3a","#7a6848","#5e5030"],
  treeTops:[["#4a7a3a","#3a6a2a","#5a8a4a"],["#3d6e30","#2d5e20","#4d7e40"],["#527a40","#426a30","#627a50"]],
  lamp:"#6a6258", lampLit:"#e8e0c0",
  bench:"#7a6848",
  carColors:["#8a7260","#6a7a8a","#7a6a50","#5a6870","#806050","#608060","#604870"],
};

const CAT_COLORS = {
  casual:  {top:"#c8b890",front:"#b8a880",side:"#a89870",roof:"#8a7868",door:"#7a5a38",win:"#e8d8a0"},
  formal:  {top:"#9ab0c8",front:"#8aa0b8",side:"#7a90a8",roof:"#5a7090",door:"#3a5070",win:"#c8d8f0"},
  friendly:{top:"#b8c8a0",front:"#a8b890",side:"#98a880",roof:"#6a8a58",door:"#4a7038",win:"#d8e8c0"},
  flirty:  {top:"#c0a8c0",front:"#b098b0",side:"#a088a0",roof:"#785878",door:"#583858",win:"#e0c8e0"},
  argument:{top:"#c8a890",front:"#b89880",side:"#a88870",roof:"#8a5848",door:"#683830",win:"#f0d0b8"},
};

// ─── Scenario layout ────────────────────────────────────────────────────────
const SCENARIOS = [
  {slug:"coffee-shop",          label:"Coffee Shop",          category:"casual",    bx:62,  by:130},
  {slug:"break-room",           label:"Break Room",           category:"casual",    bx:195, by:72},
  {slug:"street-corner",        label:"Street Corner",        category:"casual",    bx:395, by:95},
  {slug:"office-building",      label:"Office Building",      category:"formal",    bx:530, by:75},
  {slug:"interview-room",       label:"Interview Room",       category:"formal",    bx:555, by:230},
  {slug:"conference-hall",      label:"Conference Hall",      category:"formal",    bx:415, by:295},
  {slug:"park",                 label:"Park",                 category:"friendly",  bx:90,  by:295},
  {slug:"library",              label:"Library",              category:"friendly",  bx:220, by:248},
  {slug:"friends-living-room",  label:"Friend's House",       category:"friendly",  bx:305, by:168},
  {slug:"bookstore",            label:"Bookstore",            category:"flirty",    bx:72,  by:445},
  {slug:"rooftop-bar",          label:"Rooftop Bar",          category:"flirty",    bx:248, by:390},
  {slug:"coffee-shop-evening",  label:"Café (evening)",       category:"flirty",    bx:420, by:448},
  {slug:"debate-stage",         label:"Debate Stage",         category:"argument",  bx:90,  by:578},
  {slug:"customer-service-desk",label:"Customer Service",     category:"argument",  bx:305, by:545},
  {slug:"friends-kitchen",      label:"Friend's Kitchen",     category:"argument",  bx:530, by:488},
];

// ─── Canvas draw helpers ────────────────────────────────────────────────────
function grassTile(ctx, x, y, w, h, variant) {
  ctx.fillStyle = PAL.grass[variant % PAL.grass.length];
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgba(0,0,0,0.03)";
  for (let i = 0; i < 5; i++) {
    ctx.fillRect(x + Math.sin(x * 0.3 + i * 7) * w * 0.4 + w * 0.3, y + Math.cos(y * 0.2 + i * 5) * h * 0.3 + h * 0.4, 2, 1);
  }
}

function drawRoad(ctx, x, y, w, h, dir) {
  ctx.fillStyle = PAL.road;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = PAL.roadEdge;
  if (dir === "h") {
    ctx.fillRect(x, y, w, 3);
    ctx.fillRect(x, y + h - 3, w, 3);
    ctx.fillStyle = PAL.roadMid;
    for (let i = x + 20; i < x + w - 20; i += 30) ctx.fillRect(i, y + Math.floor(h / 2) - 1, 16, 2);
  } else {
    ctx.fillRect(x, y, 3, h);
    ctx.fillRect(x + w - 3, y, 3, h);
    ctx.fillStyle = PAL.roadMid;
    for (let j = y + 20; j < y + h - 20; j += 30) ctx.fillRect(x + Math.floor(w / 2) - 1, j, 2, 16);
  }
}

function drawSidewalk(ctx, x, y, w, h) {
  ctx.fillStyle = PAL.sidewalk;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  if (w > h) { for (let i = x; i < x + w; i += 18) ctx.fillRect(i, y, 1, h); }
  else { for (let j = y; j < y + h; j += 18) ctx.fillRect(x, j, w, 1); }
}

function isoBuilding(ctx, {x,y,w,d,h, topFill,sideFill,frontFill, windows,door,chimney,active,label,labelColor}) {
  // drop shadow
  ctx.fillStyle = PAL.shadow;
  ctx.fillRect(x + 5, y + h + 2, w + 3, d + 4);

  // front face
  ctx.fillStyle = frontFill || "#b8b0a0";
  ctx.fillRect(x, y + h, w, d);
  ctx.fillStyle = "rgba(0,0,0,0.04)";
  ctx.fillRect(x, y + h, 2, d);

  // side face (SE)
  ctx.fillStyle = sideFill || "#a8a098";
  ctx.fillRect(x + w, y + h, 8, d);
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(x + w + 6, y + h, 2, d);

  // top / roof face
  ctx.fillStyle = topFill || "#d4cfc0";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  ctx.fillRect(x, y, w, 2);
  ctx.fillRect(x, y, 2, h);

  ctx.strokeStyle = "rgba(60,50,40,0.18)";
  ctx.lineWidth = 0.5;
  ctx.strokeRect(x + 0.5, y + 0.5, w - 1, d + h - 1);

  if (chimney) {
    ctx.fillStyle = chimney.fill || "#8a8278";
    ctx.fillRect(x + chimney.ox, y - chimney.h, chimney.w || 6, chimney.h || 12);
  }

  if (windows) {
    windows.forEach(wn => {
      const wx = x + wn.ox, wy = y + h + wn.oy;
      ctx.fillStyle = active ? (wn.lit || "#e8d8a0") : "#a0a098";
      ctx.fillRect(wx, wy, wn.w || 10, wn.h || 12);
      ctx.strokeStyle = "rgba(60,50,40,0.28)"; ctx.lineWidth = 0.5;
      ctx.strokeRect(wx + 0.5, wy + 0.5, (wn.w || 10) - 1, (wn.h || 12) - 1);
    });
  }

  if (door) {
    ctx.fillStyle = active ? door.fill : "#888880";
    ctx.fillRect(x + door.ox, y + h + door.oy, door.w || 12, door.h || 16);
    ctx.strokeStyle = "rgba(60,50,40,0.3)"; ctx.lineWidth = 0.5;
    ctx.strokeRect(x + door.ox + 0.5, y + h + door.oy + 0.5, (door.w || 12) - 1, (door.h || 16) - 1);
  }

  if (label) {
    ctx.save();
    ctx.font = "bold 8px Georgia,serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(30,20,10,0.45)";
    ctx.fillText(label, x + w / 2 + 1, y + h + d + 14);
    ctx.fillStyle = labelColor || "#3a3028";
    ctx.fillText(label, x + w / 2, y + h + d + 13);
    ctx.restore();
  }
}

function isoRoof(ctx, x, y, w, rh, fill, fill2) {
  ctx.fillStyle = fill2 || "#8a7a6a";
  ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + w / 2, y - rh);
  ctx.lineTo(x + w / 2 + 8, y - rh + 4); ctx.lineTo(x + 8, y + 4);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = fill || "#9a8a7a";
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y - rh); ctx.lineTo(x + w, y);
  ctx.lineTo(x + w + 8, y + 4); ctx.lineTo(x + w / 2 + 8, y - rh + 4);
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = "rgba(60,50,40,0.18)"; ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + w / 2, y - rh); ctx.lineTo(x + w, y); ctx.stroke();
}

function tree(ctx, x, y, sz, variant) {
  const v = variant % 3;
  ctx.fillStyle = "rgba(20,40,10,0.22)";
  ctx.beginPath(); ctx.ellipse(x + sz * 0.3, y + sz * 0.2, sz * 0.8, sz * 0.3, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = PAL.treeTrunks[v];
  ctx.fillRect(x - 2, y - 2, 4, sz * 0.4);
  const tops = PAL.treeTops[v];
  ctx.fillStyle = tops[1]; ctx.beginPath(); ctx.arc(x, y - sz * 0.3, sz * 0.55, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = tops[0]; ctx.beginPath(); ctx.arc(x - sz * 0.1, y - sz * 0.4, sz * 0.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = tops[2]; ctx.beginPath(); ctx.arc(x + sz * 0.15, y - sz * 0.25, sz * 0.38, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  ctx.beginPath(); ctx.arc(x - sz * 0.15, y - sz * 0.5, sz * 0.2, 0, Math.PI * 2); ctx.fill();
}

function bush(ctx, x, y) {
  ctx.fillStyle = "rgba(20,40,10,0.18)";
  ctx.beginPath(); ctx.ellipse(x + 5, y + 4, 12, 5, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#4a6e38"; ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#5a7e48"; ctx.beginPath(); ctx.arc(x + 7, y - 2, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#3e6030"; ctx.beginPath(); ctx.arc(x + 3, y + 3, 5, 0, Math.PI * 2); ctx.fill();
}

function lampPost(ctx, x, y) {
  ctx.fillStyle = PAL.lamp;
  ctx.fillRect(x - 1, y - 20, 2, 20);
  ctx.fillRect(x - 1, y - 20, 4, 3);
  ctx.fillStyle = PAL.lampLit;
  ctx.beginPath(); ctx.arc(x + 2, y - 22, 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(255,240,180,0.28)";
  ctx.beginPath(); ctx.arc(x + 2, y - 22, 6, 0, Math.PI * 2); ctx.fill();
}

function bench(ctx, x, y) {
  ctx.fillStyle = PAL.bench;
  ctx.fillRect(x, y - 4, 16, 3);
  ctx.fillRect(x + 2, y - 1, 3, 5);
  ctx.fillRect(x + 11, y - 1, 3, 5);
}

function car(ctx, x, y, color, dir) {
  if (dir === "h") {
    ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(x + 2, y + 8, 30, 6);
    ctx.fillStyle = color; ctx.fillRect(x, y, 30, 10);
    ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fillRect(x, y + 2, 6, 6); ctx.fillRect(x + 22, y + 2, 6, 6);
    ctx.fillStyle = "#2a2018"; ctx.fillRect(x + 4, y + 8, 5, 2); ctx.fillRect(x + 21, y + 8, 5, 2);
    ctx.fillStyle = "rgba(200,220,240,0.75)"; ctx.fillRect(x + 8, y + 1, 14, 6);
  } else {
    ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(x + 6, y + 2, 6, 28);
    ctx.fillStyle = color; ctx.fillRect(x, y, 10, 28);
    ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fillRect(x + 2, y, 6, 5); ctx.fillRect(x + 2, y + 21, 6, 5);
    ctx.fillStyle = "#2a2018"; ctx.fillRect(x + 8, y + 4, 2, 4); ctx.fillRect(x + 8, y + 20, 2, 4);
    ctx.fillStyle = "rgba(200,220,240,0.75)"; ctx.fillRect(x + 1, y + 8, 6, 12);
  }
}

function pond(ctx, x, y, rx, ry) {
  ctx.fillStyle = "rgba(20,30,50,0.14)";
  ctx.beginPath(); ctx.ellipse(x + 5, y + 5, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = PAL.water;
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = PAL.water2;
  ctx.beginPath(); ctx.ellipse(x - rx * 0.3, y - ry * 0.3, rx * 0.5, ry * 0.5, 0, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "rgba(100,140,180,0.35)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
}

function flowerBed(ctx, x, y, w, h) {
  ctx.fillStyle = "#6a8840"; ctx.fillRect(x, y, w, h);
  const fc = ["#c84848","#e8a030","#c848c0","#4888d8","#e0e040"];
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = fc[i % fc.length];
    ctx.beginPath(); ctx.arc(x + 4 + (i % 4) * (w / 4), y + 2 + Math.floor(i / 4) * (h / 2), 2.5, 0, Math.PI * 2); ctx.fill();
  }
}

function drawCompass(ctx, x, y, r) {
  ctx.fillStyle = "rgba(240,232,212,0.88)";
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#a09070"; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = "#c84040";
  ctx.beginPath(); ctx.moveTo(x, y - r + 4); ctx.lineTo(x - 4, y); ctx.lineTo(x, y - 4); ctx.lineTo(x + 4, y); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#6a6050";
  ctx.beginPath(); ctx.moveTo(x, y + r - 4); ctx.lineTo(x - 4, y); ctx.lineTo(x, y + 4); ctx.lineTo(x + 4, y); ctx.closePath(); ctx.fill();
  ctx.font = "bold 8px serif"; ctx.textAlign = "center";
  ctx.fillStyle = "#c84040"; ctx.fillText("N", x, y - r - 4);
  ctx.fillStyle = "#6a6050"; ctx.fillText("S", x, y + r + 9); ctx.fillText("E", x + r + 8, y + 3); ctx.fillText("W", x - r - 5, y + 3);
  ctx.fillStyle = "#c0a870"; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
}

// ─── Per-scenario building draw ─────────────────────────────────────────────
function drawScenario(ctx, s, active, hover) {
  const cc = active ? CAT_COLORS[s.category] : {top:"#b0aea8",front:"#a0a098",side:"#909088",roof:"#808078",door:"#888880",win:"#909090"};
  const lc = active ? "#3a2a18" : "#808078";
  const wlit = active ? (hover ? "#ffeea8" : "#e8d8a0") : "#888";
  const {bx:x, by:y, label, slug} = s;

  if (hover && active) {
    ctx.save(); ctx.shadowColor = "rgba(180,150,80,0.45)"; ctx.shadowBlur = 14;
  }

  switch (slug) {
    case "coffee-shop":
      isoBuilding(ctx, {x,y,w:68,d:28,h:22,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:8,oy:6,w:14,h:12,lit:wlit},{ox:28,oy:6,w:14,h:12,lit:wlit}],
        door:{ox:46,oy:8,w:12,h:18,fill:cc.door}});
      ctx.fillStyle=active?"#a08060":"#888"; ctx.fillRect(x,y+22,68,5);
      ctx.fillStyle=active?"#b89068":"#999"; ctx.fillRect(x-4,y+18,76,5);
      break;
    case "break-room":
      isoBuilding(ctx, {x,y,w:72,d:26,h:18,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:6,oy:4,w:18,h:12,lit:wlit},{ox:30,oy:4,w:18,h:12,lit:wlit},{ox:54,oy:4,w:12,h:12,lit:wlit}],
        door:{ox:28,oy:8,w:16,h:16,fill:cc.door}});
      ctx.fillStyle=active?cc.top:"#888"; ctx.fillRect(x+8,y-8,56,10);
      break;
    case "street-corner":
      isoBuilding(ctx, {x,y,w:56,d:22,h:16,topFill:"#c8c0b0",sideFill:"#b0a898",frontFill:"#b8b0a0",label,labelColor:lc,active,
        windows:[{ox:6,oy:4,w:10,h:10,lit:active?"#e8f0f8":"#888"},{ox:22,oy:4,w:10,h:10,lit:active?"#e8f0f8":"#888"}],
        door:{ox:38,oy:4,w:12,h:16,fill:"#6a6058"}});
      if (active) { tree(ctx,x+64,y+10,9,0); lampPost(ctx,x+66,y+24); }
      break;
    case "office-building":
      isoBuilding(ctx, {x,y,w:80,d:32,h:60,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[
          {ox:6,oy:6,w:14,h:10,lit:wlit},{ox:24,oy:6,w:14,h:10,lit:wlit},{ox:42,oy:6,w:14,h:10,lit:wlit},{ox:60,oy:6,w:14,h:10,lit:wlit},
          {ox:6,oy:20,w:14,h:10,lit:active?"#c8e8ff":"#888"},{ox:24,oy:20,w:14,h:10,lit:wlit},{ox:42,oy:20,w:14,h:10,lit:wlit},{ox:60,oy:20,w:14,h:10,lit:wlit},
          {ox:6,oy:40,w:14,h:10,lit:wlit},{ox:24,oy:40,w:14,h:10,lit:active?"#ffe8c0":"#888"},{ox:42,oy:40,w:14,h:10,lit:wlit},{ox:60,oy:40,w:14,h:10,lit:wlit},
        ],
        door:{ox:30,oy:20,w:20,h:10,fill:cc.door}});
      ctx.fillStyle=active?cc.roof:"#888"; ctx.fillRect(x,y-6,80,8); ctx.fillRect(x+34,y-18,12,14);
      break;
    case "interview-room":
      isoBuilding(ctx, {x,y,w:62,d:26,h:24,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:6,oy:5,w:22,h:14,lit:active?"#d8e8ff":"#888"},{ox:34,oy:5,w:22,h:14,lit:wlit}],
        door:{ox:22,oy:10,w:18,h:14,fill:cc.door}});
      break;
    case "conference-hall":
      isoBuilding(ctx, {x,y,w:90,d:36,h:26,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:6,oy:6,w:16,h:14,lit:wlit},{ox:26,oy:6,w:16,h:14,lit:wlit},{ox:46,oy:6,w:16,h:14,lit:wlit},{ox:68,oy:6,w:16,h:14,lit:wlit}],
        door:{ox:36,oy:14,w:18,h:20,fill:cc.door}});
      ctx.fillStyle=active?cc.top:"#888"; ctx.fillRect(x-4,y-6,98,8);
      if(active){ctx.fillStyle="#a83830";ctx.fillRect(x+38,y-22,14,18);ctx.fillStyle="#c85040";ctx.fillRect(x+38,y-22,14,10);}
      break;
    case "park": {
      ctx.fillStyle=active?"#6a9460":"#8a8a82"; ctx.fillRect(x-10,y-10,90,80);
      ctx.fillStyle=active?"#789068":"#909088"; ctx.fillRect(x-8,y-8,86,76);
      if (active) {
        flowerBed(ctx,x+5,y+5,28,16); flowerBed(ctx,x+42,y+8,24,14); flowerBed(ctx,x+10,y+44,30,14);
        bench(ctx,x+52,y+50); bench(ctx,x+6,y+50);
        pond(ctx,x+55,y+22,16,11);
        ctx.strokeStyle="#b09878"; ctx.lineWidth=2; ctx.setLineDash([6,4]);
        ctx.beginPath(); ctx.moveTo(x+20,y+80); ctx.lineTo(x+20,y+10); ctx.lineTo(x+60,y+10); ctx.stroke();
        ctx.setLineDash([]);
      }
      tree(ctx,x+8,y+20,13,0); tree(ctx,x+68,y+16,12,2); tree(ctx,x+40,y+60,14,1); tree(ctx,x+72,y+55,11,0);
      ctx.save(); ctx.font="bold 8px Georgia,serif"; ctx.textAlign="center";
      ctx.fillStyle=active?"#2a4a1a":"#606060"; ctx.fillText(label,x+35,y+96); ctx.restore();
      break;
    }
    case "library":
      isoBuilding(ctx, {x,y,w:74,d:30,h:28,topFill:"#d4ccb8",sideFill:"#c0b8a4",frontFill:"#c8c0ac",label,labelColor:lc,active,
        windows:[{ox:6,oy:6,w:18,h:16,lit:active?"#fff0c8":"#888"},{ox:30,oy:6,w:18,h:16,lit:wlit},{ox:52,oy:6,w:16,h:16,lit:wlit}],
        door:{ox:28,oy:14,w:18,h:14,fill:active?"#7a6848":"#888"}});
      isoRoof(ctx,x,y,74,18,active?"#9a8870":"#888",active?"#8a7860":"#888");
      for(let pi=x+4;pi<x+70;pi+=6){ctx.fillStyle="rgba(60,50,40,0.2)";ctx.fillRect(pi,y,2,28);}
      break;
    case "friends-living-room":
      isoBuilding(ctx, {x,y,w:66,d:28,h:20,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:6,oy:5,w:20,h:14,lit:active?"#fff0c0":"#888"},{ox:34,oy:5,w:18,h:14,lit:wlit}],
        door:{ox:22,oy:10,w:14,h:16,fill:cc.door},
        chimney:{ox:52,h:14,w:7,fill:active?"#8a7a62":"#888"}});
      isoRoof(ctx,x,y,66,16,active?cc.roof:"#888",active?"#7a6850":"#888");
      break;
    case "bookstore":
      isoBuilding(ctx, {x,y,w:68,d:28,h:22,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:5,oy:4,w:28,h:16,lit:active?"#ffe8f0":"#888"},{ox:38,oy:4,w:24,h:16,lit:wlit}],
        door:{ox:26,oy:10,w:14,h:16,fill:cc.door}});
      if(active){["#c84040","#40a848","#4848c8","#e89030","#8040b0"].forEach((bc,i)=>{ctx.fillStyle=bc;ctx.fillRect(x+6+(i*5),y+22+7,4,12);});}
      ctx.fillStyle=active?cc.top:"#999"; ctx.fillRect(x-4,y+18,76,6);
      break;
    case "rooftop-bar":
      isoBuilding(ctx, {x,y,w:72,d:30,h:38,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:5,oy:8,w:14,h:10,lit:wlit},{ox:23,oy:8,w:14,h:10,lit:wlit},{ox:41,oy:8,w:14,h:10,lit:wlit},{ox:59,oy:8,w:8,h:10,lit:wlit},
          {ox:5,oy:22,w:14,h:10,lit:active?"#ffb8c8":"#888"},{ox:23,oy:22,w:14,h:10,lit:wlit},{ox:41,oy:22,w:14,h:10,lit:wlit}],
        door:{ox:30,oy:18,w:12,h:10,fill:cc.door}});
      ctx.fillStyle=active?"#b0a0b8":"#888"; ctx.fillRect(x-4,y-10,80,12);
      if(active){for(let li=x+8;li<x+70;li+=16){ctx.fillStyle="rgba(255,220,120,0.8)";ctx.beginPath();ctx.arc(li,y-5,3,0,Math.PI*2);ctx.fill();}}
      break;
    case "coffee-shop-evening":
      isoBuilding(ctx, {x,y,w:66,d:26,h:20,topFill:"#6858a0",sideFill:"#584888",frontFill:"#685898",label,labelColor:lc,active,
        windows:[{ox:6,oy:4,w:16,h:12,lit:active?"#ffd880":"#888"},{ox:28,oy:4,w:16,h:12,lit:active?"#ffa858":"#888"},{ox:48,oy:4,w:12,h:12,lit:active?"#ffd880":"#888"}],
        door:{ox:24,oy:8,w:18,h:16,fill:active?"#483870":"#888"}});
      ctx.fillStyle=active?"#786898":"#888"; ctx.fillRect(x,y+20,66,5);
      if(active){for(let si=0;si<4;si++){ctx.fillStyle="rgba(255,255,255,0.7)";ctx.beginPath();ctx.arc(x+12+si*18,y-6,1.2,0,Math.PI*2);ctx.fill();}}
      break;
    case "debate-stage":
      isoBuilding(ctx, {x,y,w:82,d:36,h:22,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:5,oy:6,w:16,h:12,lit:wlit},{ox:26,oy:6,w:16,h:12,lit:wlit},{ox:50,oy:6,w:16,h:12,lit:wlit},{ox:66,oy:6,w:10,h:12,lit:wlit}],
        door:{ox:32,oy:14,w:18,h:20,fill:cc.door}});
      if(active){
        ctx.fillStyle="rgba(255,80,40,0.14)"; ctx.fillRect(x+8,y+22+16,30,8);
        ctx.fillStyle="rgba(40,80,255,0.14)"; ctx.fillRect(x+44,y+22+16,30,8);
      }
      break;
    case "customer-service-desk":
      isoBuilding(ctx, {x,y,w:72,d:30,h:22,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:5,oy:5,w:20,h:14,lit:wlit},{ox:30,oy:5,w:20,h:14,lit:wlit},{ox:55,oy:5,w:12,h:14,lit:wlit}],
        door:{ox:26,oy:10,w:20,h:18,fill:cc.door}});
      if(active){ctx.fillStyle="#a09080";ctx.fillRect(x+15,y+22+22,42,4);}
      break;
    case "friends-kitchen":
      isoBuilding(ctx, {x,y,w:66,d:28,h:20,topFill:cc.top,sideFill:cc.side,frontFill:cc.front,label,labelColor:lc,active,
        windows:[{ox:5,oy:4,w:22,h:14,lit:active?"#fff8c0":"#888"},{ox:34,oy:4,w:18,h:14,lit:wlit}],
        door:{ox:20,oy:10,w:14,h:16,fill:cc.door},
        chimney:{ox:50,h:16,w:8,fill:active?"#8a7862":"#888"}});
      isoRoof(ctx,x,y,66,18,active?cc.roof:"#888",active?"#8a7860":"#888");
      break;
  }

  if (hover && active) ctx.restore();
}

// ─── Main render ─────────────────────────────────────────────────────────────
function renderMap(ctx, W, H, activeCategories, hoveredSlug) {
  // base grass
  for (let gx = 0; gx < W; gx += 80) for (let gy = 0; gy < H; gy += 80)
    grassTile(ctx, gx, gy, 80, 80, (gx / 80 + gy / 80));

  // sidewalks
  [[0,60,W,14],[0,188,W,14],[0,374,W,15],[0,519,W,15],[0,644,W,14],
   [180,0,14,H],[384,0,14,H],[514,0,14,H]].forEach(([x,y,w,h])=>drawSidewalk(ctx,x,y,w,h));

  // roads
  [[0,74,W,114,"h"],[0,389,W,130,"h"],[0,534,W,110,"h"],
   [194,0,14,H,"v"],[384,0,14,H,"v"],[514,0,14,H,"v"]].forEach(([x,y,w,h,d])=>drawRoad(ctx,x,y,w,h,d));

  // re-draw sidewalk lines on top of roads
  [[0,60,W,14],[0,188,W,14],[180,0,14,H],[384,0,14,H],[514,0,14,H],
   [0,374,W,15],[0,519,W,15]].forEach(([x,y,w,h])=>drawSidewalk(ctx,x,y,w,h));

  // water features
  pond(ctx, 680, 310, 38, 26);
  pond(ctx, 42, 258, 22, 16);

  // flower beds
  [[20,30,40,14],[210,30,40,14],[530,30,40,14],[20,203,30,12],[400,203,30,12],
   [20,392,35,10],[250,390,35,10],[420,392,35,10],[580,390,35,10]].forEach(([x,y,w,h])=>flowerBed(ctx,x,y,w,h));

  // trees (background layer)
  [[30,50,14,0],[155,45,12,1],[230,50,13,2],[280,42,15,0],[340,48,12,1],
   [425,42,14,2],[470,45,13,0],[555,40,15,1],[620,50,12,2],[665,45,14,0],
   [30,220,13,1],[160,215,12,0],[260,220,14,2],[345,218,13,1],[465,222,15,0],
   [595,218,12,2],[660,222,14,1],[30,350,16,0],[120,348,13,2],[165,355,14,1],
   [420,345,12,0],[460,350,15,2],[600,342,13,1],[655,348,12,0],[700,350,14,2],
   [30,508,13,1],[160,502,15,0],[245,508,12,2],[395,502,14,1],[465,505,13,0],
   [600,500,15,2],[660,505,12,1],[760,335,16,0],[780,220,13,2],[800,350,14,1],
   [820,455,15,0],[840,200,12,2],[860,500,13,1],[880,100,15,0]].forEach(([x,y,s,v])=>tree(ctx,x,y,s,v));

  // lamp posts
  [[40,200],[185,200],[370,202],[510,200],[640,200],
   [40,382],[370,383],[510,382],[640,382],[40,518],[185,518],[510,518],[640,516]].forEach(([x,y])=>lampPost(ctx,x,y));

  // benches
  [[70,232],[200,228],[430,230],[560,225],[70,408],[280,406],[430,408]].forEach(([x,y])=>bench(ctx,x,y));

  // cars
  [[65,90,"#8a7260","h"],[170,90,"#6a7a8a","h"],[220,102,"#7a6a50","h"],
   [330,90,"#8a7060","h"],[440,102,"#6a5a78","h"],[600,96,"#5a6870","h"],
   [530,390,"#706050","h"],[620,400,"#6a5860","h"],[700,390,"#807060","h"],
   [100,400,"#7a6050","h"],[350,400,"#608060","h"]].forEach(([x,y,c,d])=>car(ctx,x,y,c,d));

  [[530,108,"#7a8a60","v"],[200,130,"#607080","v"],[395,140,"#805840","v"],
   [395,308,"#8a7060","v"],[200,440,"#604870","v"],[530,440,"#7a6050","v"],
   [200,560,"#607060","v"],[395,560,"#706050","v"]].forEach(([x,y,c,d])=>car(ctx,x,y,c,d));

  // bushes
  [[110,56],[310,54],[450,52],[680,56],[110,200],[310,198],[680,198],
   [50,384],[300,382],[450,384],[680,382],[50,518],[300,516],[450,518],[680,516]].forEach(([x,y])=>bush(ctx,x,y));

  // buildings
  SCENARIOS.forEach(s => {
    const active = activeCategories.includes(s.category);
    const hover = hoveredSlug === s.slug;
    ctx.globalAlpha = active ? 1 : 0.36;
    drawScenario(ctx, s, active, hover);
    ctx.globalAlpha = 1;
  });

  // zone labels
  ctx.save(); ctx.font = "bold 9px Georgia,serif"; ctx.textAlign = "center";
  [["TOWN SQUARE",293,70],["THE HEIGHTS",570,68],["GARDEN WALK",135,285],
   ["NIGHT QUARTER",280,475],["CIVIC ROW",460,392]].forEach(([t,zx,zy]) => {
    ctx.fillStyle = "rgba(80,60,40,0.45)"; ctx.fillText(t, zx + 1, zy + 1);
    ctx.fillStyle = "rgba(60,45,30,0.35)"; ctx.fillText(t, zx, zy);
  });
  ctx.restore();

  drawCompass(ctx, 840, 660, 24);
}

// ─── TownMap component ────────────────────────────────────────────────────────
// export default function TownMap({ activeCategories = [], onSelectScenario = () => {} }) {
export default function TownMap({ activeCategories = [], onSelectScenario = () => {} }: { activeCategories: string[], onSelectScenario: (slug: string) => void }) {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const W = 900, H = 720;

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    renderMap(ctx, W, H, activeCategories, hovered);
  }, [activeCategories, hovered]);

  useEffect(() => { redraw(); }, [redraw]);

  function getHitScenario(e) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    const my = (e.clientY - rect.top) * (H / rect.height);
    return SCENARIOS.find(s =>
      activeCategories.includes(s.category) &&
      mx >= s.bx - 6 && mx <= s.bx + 96 && my >= s.by - 10 && my <= s.by + 72
    ) || null;
  }

  function handleMouseMove(e) {
    const hit = getHitScenario(e);
    const slug = hit ? hit.slug : null;
    if (slug !== hovered) setHovered(slug);
    canvasRef.current.style.cursor = slug ? "pointer" : "default";
  }

  function handleClick(e) {
    const hit = getHitScenario(e);
    if (hit) onSelectScenario(hit.slug);
  }

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      style={{ width: "100%", height: "100%", display: "block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
      onClick={handleClick}
    />
  );
}