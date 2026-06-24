import { useState, useEffect } from "react";

const SCENARIOS = [
  { slug: "coffee-shop", label: "Coffee Shop", category: "casual", x: 80, y: 120, color: { fill: "#D4A26A", roof: "#8B4513", wall: "#F5DEB3", accent: "#A0522D" } },
  { slug: "break-room", label: "Break Room", category: "casual", x: 220, y: 60, color: { fill: "#B8C4D0", roof: "#5A6E80", wall: "#D6E4EE", accent: "#7A9AB5" } },
  { slug: "street-corner", label: "Street Corner", category: "casual", x: 420, y: 90, color: { fill: "#C8B89A", roof: "#6B5B45", wall: "#E8D8C0", accent: "#8B7355" } },
  { slug: "office-building", label: "Office Building", category: "formal", x: 560, y: 70, color: { fill: "#8BA5C0", roof: "#3A5470", wall: "#C5D8EC", accent: "#5A7A9A" } },
  { slug: "interview-room", label: "Interview Room", category: "formal", x: 580, y: 230, color: { fill: "#9A8FB0", roof: "#4A3F60", wall: "#D5CCE8", accent: "#6A5F80" } },
  { slug: "conference-hall", label: "Conference Hall", category: "formal", x: 440, y: 300, color: { fill: "#7098B0", roof: "#2A4860", wall: "#B8D4E8", accent: "#4A7090" } },
  { slug: "park", label: "Park", category: "friendly", x: 100, y: 300, color: { fill: "#7AAB6A", roof: "#3A6A2A", wall: "#B8D8A0", accent: "#5A8A4A" } },
  { slug: "library", label: "Library", category: "friendly", x: 240, y: 240, color: { fill: "#C8A06A", roof: "#6B4A20", wall: "#E8C898", accent: "#A07840" } },
  { slug: "friends-living-room", label: "Friend's Living Room", category: "friendly", x: 320, y: 160, color: { fill: "#D4907A", roof: "#7A3020", wall: "#F0C4B0", accent: "#A05040" } },
  { slug: "bookstore", label: "Bookstore", category: "flirty", x: 80, y: 460, color: { fill: "#C87878", roof: "#7A2828", wall: "#F0B8B8", accent: "#A04848" } },
  { slug: "rooftop-bar", label: "Rooftop Bar", category: "flirty", x: 260, y: 400, color: { fill: "#B878C8", roof: "#5A2878", wall: "#E8B8F0", accent: "#8848A8" } },
  { slug: "coffee-shop-evening", label: "Coffee Shop (evening)", category: "flirty", x: 440, y: 460, color: { fill: "#8878C8", roof: "#2A2878", wall: "#C8B8F0", accent: "#5848A8" } },
  { slug: "debate-stage", label: "Debate Stage", category: "argument", x: 100, y: 600, color: { fill: "#C85050", roof: "#781020", wall: "#F0A8A8", accent: "#A03030" } },
  { slug: "customer-service-desk", label: "Customer Service", category: "argument", x: 320, y: 560, color: { fill: "#C87840", roof: "#783020", wall: "#F0C898", accent: "#A05020" } },
  { slug: "friends-kitchen", label: "Friend's Kitchen", category: "argument", x: 540, y: 500, color: { fill: "#B8A050", roof: "#685810", wall: "#E8D898", accent: "#907030" } },
];

function CoffeeShop({ color, active }: any) {
  return (
    <g>
      <rect x={-30} y={-12} width={60} height={10} rx={2} fill={color.accent} opacity={0.9} />
      <rect x={-28} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={-10} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={8} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={-30} y={-2} width={60} height={38} rx={3} fill={color.wall} />
      <rect x={-30} y={-2} width={60} height={38} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
      <rect x={-24} y={6} width={16} height={14} rx={2} fill={active ? "#FFF8E7" : "#E8E8E8"} />
      <line x1={-16} y1={6} x2={-16} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <line x1={-24} y1={13} x2={-8} y2={13} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <rect x={8} y={6} width={16} height={14} rx={2} fill={active ? "#FFF8E7" : "#E8E8E8"} />
      <line x1={16} y1={6} x2={16} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <line x1={8} y1={13} x2={24} y2={13} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <rect x={-6} y={22} width={12} height={14} rx={2} fill={color.accent} opacity={0.8} />
      <circle cx={4} cy={30} r={1.5} fill={color.wall} />
      {active && (<><path d="M-8 -16 Q-10 -22 -8 -28" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.6} /><path d="M0 -18 Q2 -25 0 -32" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.5} /><path d="M8 -16 Q10 -22 8 -28" stroke={color.fill} strokeWidth={1.2} fill="none" opacity={0.6} /></>)}
      <rect x={-32} y={-18} width={64} height={8} rx={2} fill={color.roof} opacity={0.9} />
    </g>
  );
}

function OfficeBuilding({ color, active }: any) {
  return (
    <g>
      <rect x={-25} y={-40} width={50} height={72} rx={2} fill={color.wall} />
      <rect x={-25} y={-40} width={50} height={72} rx={2} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
      {[-28, -16, -4, 8, 20].map((row: number, ri: number) =>
        [-18, -6, 6, 18].map((col: number, ci: number) => (
          <rect key={`w${ri}-${ci}`} x={col - 4} y={row} width={8} height={8} rx={1} fill={active ? "#E8F4FF" : "#D0D8E0"} opacity={0.9} />
        ))
      )}
      <rect x={-10} y={22} width={20} height={10} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={-27} y={-46} width={54} height={8} rx={1} fill={color.roof} />
      <line x1={0} y1={-46} x2={0} y2={-58} stroke={color.roof} strokeWidth={1.5} />
      <circle cx={0} cy={-59} r={2} fill={color.accent} />
    </g>
  );
}

function Park({ color, active }: any) {
  return (
    <g>
      <ellipse cx={0} cy={10} rx={38} ry={24} fill={color.wall} opacity={0.8} />
      <path d="M0 30 Q0 10 0 -8" stroke="#C8A878" strokeWidth={4} fill="none" opacity={0.6} strokeLinecap="round" />
      <path d="M-30 12 Q-10 10 0 10 Q10 10 28 8" stroke="#C8A878" strokeWidth={3} fill="none" opacity={0.5} strokeLinecap="round" />
      {[[-22, -8], [-10, -15], [12, -10], [24, -5], [-5, 5]].map(([tx, ty]: number[], i: number) => (
        <g key={i} transform={`translate(${tx},${ty})`}>
          <circle cx={0} cy={0} r={active ? 8 : 7} fill={color.fill} opacity={0.9} />
          <circle cx={-3} cy={-3} r={5} fill={color.accent} opacity={0.5} />
          <rect x={-1.5} y={6} width={3} height={6} rx={1} fill={color.roof} />
        </g>
      ))}
      <rect x={14} y={12} width={14} height={5} rx={2} fill={color.roof} opacity={0.8} />
      <rect x={15} y={17} width={3} height={5} rx={1} fill={color.roof} opacity={0.6} />
      <rect x={24} y={17} width={3} height={5} rx={1} fill={color.roof} opacity={0.6} />
      {active && [[-25, 15], [20, -2], [-8, 22]].map(([fx, fy]: number[], i: number) => (
        <circle key={i} cx={fx} cy={fy} r={2.5} fill={["#FFB3BA", "#B3D9FF", "#FFFFB3"][i]} opacity={0.9} />
      ))}
    </g>
  );
}

function Library({ color, active }: any) {
  return (
    <g>
      {[-18, -6, 6, 18].map((cx: number, i: number) => (
        <rect key={i} x={cx - 2} y={-30} width={4} height={40} rx={1} fill={color.accent} opacity={0.7} />
      ))}
      <rect x={-28} y={-30} width={56} height={42} rx={2} fill={color.wall} />
      <polygon points="-32,-30 0,-50 32,-30" fill={color.roof} opacity={0.9} />
      <rect x={-8} y={2} width={16} height={10} rx={2} fill={color.fill} opacity={0.8} />
      <rect x={-22} y={-20} width={12} height={18} rx={2} fill={active ? "#FFF8E0" : "#E4DCCC"} opacity={0.9} />
      <rect x={10} y={-20} width={12} height={18} rx={2} fill={active ? "#FFF8E0" : "#E4DCCC"} opacity={0.9} />
      <rect x={-24} y={12} width={48} height={4} rx={1} fill={color.accent} opacity={0.5} />
      <rect x={-20} y={14} width={40} height={3} rx={1} fill={color.accent} opacity={0.3} />
    </g>
  );
}

function BreakRoom({ color, active }: any) {
  return (
    <g>
      <rect x={-28} y={-20} width={56} height={46} rx={3} fill={color.wall} />
      <rect x={-28} y={-20} width={56} height={46} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
      <rect x={-30} y={-26} width={60} height={8} rx={2} fill={color.roof} opacity={0.9} />
      <rect x={12} y={-24} width={14} height={6} rx={1} fill={color.accent} opacity={0.7} />
      <ellipse cx={0} cy={6} rx={18} ry={10} fill={color.fill} opacity={0.7} />
      {[[-22, 6], [22, 6], [0, -12], [0, 22]].map(([cx, cy]: number[], i: number) => (
        <circle key={i} cx={cx} cy={cy} r={5} fill={color.accent} opacity={0.6} />
      ))}
      {active && <rect x={16} y={-10} width={8} height={14} rx={1} fill={color.accent} opacity={0.8} />}
      <rect x={-8} y={16} width={16} height={10} rx={2} fill={color.roof} opacity={0.8} />
    </g>
  );
}

function StreetCorner({ color, active }: any) {
  return (
    <g>
      <rect x={-38} y={-4} width={76} height={16} rx={2} fill="#B0A898" opacity={0.6} />
      <rect x={-4} y={-24} width={16} height={56} rx={2} fill="#B0A898" opacity={0.6} />
      {[-2, 4, 10].map((lx: number, i: number) => (
        <rect key={i} x={lx - 30} y={-1} width={8} height={3} rx={1} fill="white" opacity={0.7} />
      ))}
      <rect x={4} y={-36} width={3} height={32} rx={1} fill={color.roof} opacity={0.9} />
      <ellipse cx={5.5} cy={-36} rx={6} ry={3} fill={color.accent} opacity={0.8} />
      {active && <circle cx={5.5} cy={-36} r={4} fill="#FFF8D0" opacity={0.6} />}
      <rect x={10} y={-28} width={28} height={22} rx={2} fill={color.wall} opacity={0.9} />
      <rect x={10} y={-32} width={28} height={6} rx={1} fill={color.roof} opacity={0.9} />
      <rect x={-24} y={-20} width={20} height={10} rx={2} fill={color.accent} opacity={0.8} />
      <rect x={-14} y={-10} width={2} height={12} rx={1} fill={color.roof} opacity={0.7} />
    </g>
  );
}

function ConferenceHall({ color, active }: any) {
  return (
    <g>
      <rect x={-36} y={-18} width={72} height={48} rx={2} fill={color.wall} />
      <rect x={-40} y={-26} width={80} height={10} rx={2} fill={color.roof} opacity={0.9} />
      {[[-30, -10], [-10, -10], [10, -10]].map(([wx, wy]: number[], i: number) => (
        <rect key={i} x={wx} y={wy} width={16} height={20} rx={2} fill={active ? "#E0EEFF" : "#C8D0DC"} opacity={0.9} />
      ))}
      <rect x={-10} y={18} width={20} height={12} rx={2} fill={color.accent} opacity={0.8} />
      <line x1={0} y1={18} x2={0} y2={30} stroke={color.wall} strokeWidth={1} opacity={0.6} />
      {active && <rect x={-20} y={-36} width={40} height={8} rx={2} fill={color.fill} opacity={0.9} />}
      <line x1={-34} y1={-18} x2={-34} y2={-40} stroke={color.roof} strokeWidth={1.5} />
      <rect x={-34} y={-40} width={12} height={7} rx={1} fill={color.fill} opacity={0.8} />
      <line x1={34} y1={-18} x2={34} y2={-40} stroke={color.roof} strokeWidth={1.5} />
      <rect x={22} y={-40} width={12} height={7} rx={1} fill={color.accent} opacity={0.8} />
    </g>
  );
}

function InterviewRoom({ color, active }: any) {
  return (
    <g>
      <rect x={-26} y={-22} width={52} height={50} rx={3} fill={color.wall} />
      <rect x={-26} y={-22} width={52} height={50} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.4} />
      <rect x={-18} y={-14} width={36} height={22} rx={2} fill={active ? "#D8E8FF" : "#C0C8D8"} opacity={0.9} />
      {active && [[-16, -12], [-16, -8], [-16, -4], [-16, 0], [-16, 4]].map(([lx, ly]: number[], i: number) => (
        <line key={i} x1={lx} y1={ly} x2={lx + 32} y2={ly} stroke={color.fill} strokeWidth={0.8} opacity={0.4} />
      ))}
      {active && <rect x={-10} y={-6} width={20} height={4} rx={1} fill={color.roof} opacity={0.5} />}
      <rect x={-12} y={-26} width={24} height={6} rx={1} fill={color.roof} opacity={0.9} />
      <rect x={-7} y={18} width={14} height={10} rx={2} fill={color.accent} opacity={0.8} />
      <circle cx={5} cy={23} r={1.5} fill={color.wall} />
    </g>
  );
}

function FriendsLivingRoom({ color, active }: any) {
  return (
    <g>
      <rect x={-28} y={-8} width={56} height={44} rx={3} fill={color.wall} />
      <polygon points="-32,-8 0,-36 32,-8" fill={color.roof} opacity={0.9} />
      <rect x={14} y={-34} width={8} height={18} rx={1} fill={color.accent} opacity={0.8} />
      {active && <path d="M18 -35 Q16 -42 18 -48" stroke="#888" strokeWidth={2} fill="none" opacity={0.5} />}
      <rect x={-18} y={2} width={24} height={18} rx={2} fill={active ? "#FFF0D0" : "#E8DCC8"} opacity={0.9} />
      {active && <rect x={-18} y={2} width={24} height={18} rx={2} fill="#FFD070" opacity={0.15} />}
      <line x1={-6} y1={2} x2={-6} y2={20} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <line x1={-18} y1={11} x2={6} y2={11} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <rect x={10} y={20} width={12} height={16} rx={2} fill={color.roof} opacity={0.8} />
      <circle cx={20} cy={29} r={1.5} fill={color.wall} />
      {active && <rect x={-20} y={20} width={26} height={4} rx={2} fill={color.fill} opacity={0.8} />}
      <rect x={-30} y={26} width={6} height={5} rx={1} fill={color.accent} opacity={0.7} />
    </g>
  );
}

function Bookstore({ color, active }: any) {
  return (
    <g>
      <rect x={-28} y={-16} width={56} height={48} rx={2} fill={color.wall} />
      <rect x={-30} y={-22} width={60} height={8} rx={2} fill={color.roof} opacity={0.9} />
      <rect x={-22} y={-8} width={44} height={22} rx={2} fill={active ? "#FFE8E8" : "#E8D8D8"} opacity={0.9} />
      {active && [-16, -10, -4, 2, 8, 14].map((bx: number, i: number) => (
        <rect key={i} x={bx} y={-4} width={5} height={14} rx={0.5} fill={["#E87", "#7B8", "#88D", "#EB5", "#6CE", "#D75"][i]} opacity={0.85} />
      ))}
      <rect x={-14} y={-28} width={28} height={8} rx={2} fill={color.fill} opacity={0.9} />
      <line x1={-8} y1={-22} x2={-8} y2={-16} stroke={color.accent} strokeWidth={0.8} />
      <line x1={8} y1={-22} x2={8} y2={-16} stroke={color.accent} strokeWidth={0.8} />
      <rect x={-6} y={22} width={12} height={10} rx={2} fill={color.accent} opacity={0.8} />
    </g>
  );
}

function RooftopBar({ color, active }: any) {
  return (
    <g>
      <rect x={-30} y={0} width={60} height={36} rx={2} fill={color.wall} opacity={0.8} />
      <rect x={-32} y={-30} width={64} height={32} rx={3} fill={color.fill} opacity={0.85} />
      <rect x={-32} y={-30} width={64} height={32} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
      {[-28, -14, 0, 14, 28].map((rx2: number, i: number) => (
        <line key={i} x1={rx2} y1={-30} x2={rx2} y2={-42} stroke={color.accent} strokeWidth={1} opacity={0.7} />
      ))}
      <line x1={-30} y1={-42} x2={30} y2={-42} stroke={color.accent} strokeWidth={1.5} opacity={0.8} />
      {active && (<>
        <circle cx={-14} cy={-18} r={5} fill={color.roof} opacity={0.7} />
        <circle cx={14} cy={-18} r={5} fill={color.roof} opacity={0.7} />
        <circle cx={-14} cy={-48} r={3} fill="#FFFBB0" opacity={0.9} />
        <circle cx={0} cy={-50} r={3} fill="#FFFBB0" opacity={0.9} />
        <circle cx={14} cy={-48} r={3} fill="#FFFBB0" opacity={0.9} />
        <line x1={-14} y1={-42} x2={-14} y2={-46} stroke={color.accent} strokeWidth={0.8} />
        <line x1={0} y1={-42} x2={0} y2={-48} stroke={color.accent} strokeWidth={0.8} />
        <line x1={14} y1={-42} x2={14} y2={-46} stroke={color.accent} strokeWidth={0.8} />
      </>)}
      <rect x={-6} y={0} width={12} height={6} rx={1} fill={color.accent} opacity={0.6} />
    </g>
  );
}

function CoffeeShopEvening({ color, active }: any) {
  return (
    <g>
      <rect x={-30} y={-12} width={60} height={10} rx={2} fill={color.accent} opacity={0.9} />
      <rect x={-28} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={-10} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={8} y={-14} width={8} height={14} rx={1} fill={color.accent} opacity={0.7} />
      <rect x={-30} y={-2} width={60} height={38} rx={3} fill={color.wall} />
      <rect x={-30} y={-2} width={60} height={38} rx={3} fill="none" stroke={color.accent} strokeWidth={1} opacity={0.5} />
      <rect x={-24} y={6} width={16} height={14} rx={2} fill={active ? "#FFD080" : "#C0B8A8"} />
      {active && <rect x={-24} y={6} width={16} height={14} rx={2} fill="#FFD080" opacity={0.3} />}
      <rect x={8} y={6} width={16} height={14} rx={2} fill={active ? "#FFD080" : "#C0B8A8"} />
      {active && <rect x={8} y={6} width={16} height={14} rx={2} fill="#FFD080" opacity={0.3} />}
      {active && <path d="M18 -26 A8 8 0 1 1 18 -10 A5 5 0 1 0 18 -26" fill="#FFFBB0" opacity={0.8} />}
      {active && [[-20, -28], [-10, -32], [5, -30], [24, -25]].map(([sx, sy]: number[], i: number) => (
        <circle key={i} cx={sx} cy={sy} r={1} fill="white" opacity={0.7} />
      ))}
      <rect x={-32} y={-18} width={64} height={8} rx={2} fill={color.roof} opacity={0.9} />
      <rect x={-6} y={22} width={12} height={14} rx={2} fill={color.accent} opacity={0.8} />
    </g>
  );
}

function DebateStage({ color, active }: any) {
  return (
    <g>
      <rect x={-36} y={4} width={72} height={28} rx={2} fill={color.wall} />
      <rect x={-36} y={4} width={72} height={6} rx={1} fill={color.accent} opacity={0.5} />
      <rect x={-28} y={-14} width={16} height={20} rx={2} fill={color.fill} opacity={0.9} />
      <rect x={12} y={-14} width={16} height={20} rx={2} fill={color.fill} opacity={0.9} />
      <line x1={-20} y1={-14} x2={-20} y2={-24} stroke={color.roof} strokeWidth={1.5} />
      <ellipse cx={-20} cy={-26} rx={3} ry={4} fill={color.roof} opacity={0.8} />
      <line x1={20} y1={-14} x2={20} y2={-24} stroke={color.roof} strokeWidth={1.5} />
      <ellipse cx={20} cy={-26} rx={3} ry={4} fill={color.roof} opacity={0.8} />
      <rect x={-36} y={-36} width={72} height={24} rx={2} fill={color.roof} opacity={0.7} />
      {active && (<>
        <polygon points="-30,-12 -20,-12 -16,4 -34,4" fill="#FFE060" opacity={0.15} />
        <polygon points="30,-12 20,-12 16,4 34,4" fill="#FFE060" opacity={0.15} />
        {[-28, -20, -12, -4, 4, 12, 20, 28].map((ax: number, i: number) => (
          <circle key={i} cx={ax} cy={22} r={3} fill={color.accent} opacity={0.5} />
        ))}
      </>)}
    </g>
  );
}

function CustomerServiceDesk({ color, active }: any) {
  return (
    <g>
      <rect x={-32} y={-16} width={64} height={48} rx={2} fill={color.wall} />
      <rect x={-34} y={-22} width={68} height={8} rx={2} fill={color.roof} opacity={0.9} />
      <rect x={-24} y={-6} width={48} height={10} rx={2} fill={color.fill} opacity={0.85} />
      <rect x={-24} y={-6} width={48} height={4} rx={2} fill={color.accent} opacity={0.5} />
      {active && (<>
        <line x1={-18} y1={18} x2={-18} y2={26} stroke={color.roof} strokeWidth={1.5} />
        <line x1={0} y1={18} x2={0} y2={26} stroke={color.roof} strokeWidth={1.5} />
        <path d="M-18 22 Q-9 19 0 22" stroke={color.accent} strokeWidth={1} fill="none" opacity={0.8} />
        {[-10, 6, 22].map((qx: number, i: number) => (
          <g key={i}>
            <circle cx={qx} cy={30} r={3} fill={color.fill} opacity={0.8} />
            <rect x={qx - 2} y={33} width={4} height={6} rx={1} fill={color.accent} opacity={0.6} />
          </g>
        ))}
      </>)}
      <rect x={6} y={-14} width={18} height={10} rx={1} fill={active ? "#FFF8E0" : "#E0D8C8"} />
      <rect x={-16} y={-28} width={32} height={8} rx={2} fill={color.fill} opacity={0.9} />
    </g>
  );
}

function FriendsKitchen({ color, active }: any) {
  return (
    <g>
      <rect x={-28} y={-8} width={56} height={44} rx={3} fill={color.wall} />
      <polygon points="-32,-8 0,-34 32,-8" fill={color.roof} opacity={0.9} />
      <rect x={-20} y={2} width={28} height={20} rx={2} fill={active ? "#FFFCD0" : "#EAE0C0"} opacity={0.9} />
      <line x1={-6} y1={2} x2={-6} y2={22} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      <line x1={-20} y1={12} x2={8} y2={12} stroke={color.accent} strokeWidth={0.8} opacity={0.5} />
      {active && (<>
        <circle cx={-14} cy={8} r={3} fill={color.fill} opacity={0.8} />
        <circle cx={-4} cy={10} r={3.5} fill={color.accent} opacity={0.7} />
        <path d="M-14 4 Q-12 -2 -14 -8" stroke="#AAA" strokeWidth={1} fill="none" opacity={0.5} />
        <path d="M-4 5 Q-2 -2 -4 -9" stroke="#AAA" strokeWidth={1} fill="none" opacity={0.5} />
      </>)}
      <rect x={10} y={20} width={12} height={16} rx={2} fill={color.roof} opacity={0.8} />
      <rect x={8} y={35} width={16} height={3} rx={1} fill={color.accent} opacity={0.5} />
    </g>
  );
}

const BUILDING_COMPONENTS: Record<string, any> = {
  "coffee-shop": CoffeeShop,
  "break-room": BreakRoom,
  "street-corner": StreetCorner,
  "office-building": OfficeBuilding,
  "interview-room": InterviewRoom,
  "conference-hall": ConferenceHall,
  "park": Park,
  "library": Library,
  "friends-living-room": FriendsLivingRoom,
  "bookstore": Bookstore,
  "rooftop-bar": RooftopBar,
  "coffee-shop-evening": CoffeeShopEvening,
  "debate-stage": DebateStage,
  "customer-service-desk": CustomerServiceDesk,
  "friends-kitchen": FriendsKitchen,
};

function MapDecorations() {
  return (
    <g opacity={0.35}>
      <line x1={0} y1={0} x2={700} y2={0} stroke="#C8C0A8" strokeWidth={18} />
      <line x1={0} y1={380} x2={700} y2={380} stroke="#C8C0A8" strokeWidth={18} />
      <line x1={180} y1={0} x2={180} y2={700} stroke="#C8C0A8" strokeWidth={14} />
      <line x1={400} y1={0} x2={400} y2={700} stroke="#C8C0A8" strokeWidth={14} />
      {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660].map((d: number, i: number) => (
        <line key={i} x1={d} y1={0} x2={d + 40} y2={0} stroke="white" strokeWidth={2} opacity={0.7} />
      ))}
      <ellipse cx={300} cy={200} rx={70} ry={50} fill="#A8C888" opacity={0.5} />
      <ellipse cx={530} cy={400} rx={60} ry={45} fill="#A8C888" opacity={0.4} />
      <ellipse cx={500} cy={180} rx={40} ry={28} fill="#88B4D8" opacity={0.5} />
      <ellipse cx={505} cy={183} rx={30} ry={20} fill="#A0C4E0" opacity={0.4} />
    </g>
  );
}

interface TownMapProps {
  activeCategories: string[];
  onSelectScenario: (slug: string) => void;
}

export default function TownMap({ activeCategories = [], onSelectScenario = () => {} }: TownMapProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulsePhase(p => (p + 1) % 360), 50);
    return () => clearInterval(id);
  }, []);

  const isActive = (scenario: typeof SCENARIOS[0]) => activeCategories.includes(scenario.category);

  const glowR = (slug: string) => {
    const base = 36;
    const amp = 3;
    const offset = SCENARIOS.findIndex(s => s.slug === slug) * 30;
    return base + amp * Math.sin((pulsePhase + offset) * Math.PI / 180);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      <svg width="100%" height="100%" viewBox="0 0 700 700" style={{ display: "block", background: "transparent" }}>
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#F5EDD8" />
            <stop offset="100%" stopColor="#E8D8B8" />
          </radialGradient>
        </defs>
        <rect x={0} y={0} width={700} height={700} fill="url(#bgGrad)" />
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map((y: number, i: number) => (
          <line key={i} x1={0} y1={y} x2={700} y2={y} stroke="#D4C4A0" strokeWidth={0.5} opacity={0.3} />
        ))}
        <MapDecorations />
        {[
          { label: "Town Square", x: 340, y: 18, color: "#7A6840" },
          { label: "The Garden District", x: 130, y: 348, color: "#4A7A30" },
          { label: "The Heights", x: 540, y: 128, color: "#2A5080" },
          { label: "Night Quarter", x: 260, y: 430, color: "#5A3880" },
          { label: "Civic Row", x: 420, y: 348, color: "#6A3020" },
        ].map((zone, i) => (
          <text key={i} x={zone.x} y={zone.y} textAnchor="middle" fontSize={9} fontFamily="serif"
            fill={zone.color} opacity={0.5} letterSpacing={2} style={{ userSelect: "none" }}>
            {zone.label}
          </text>
        ))}
        {SCENARIOS.map((scenario) => {
          const active = isActive(scenario);
          const hovered = hoveredSlug === scenario.slug;
          const Building = BUILDING_COMPONENTS[scenario.slug];
          const cx = scenario.x + 48;
          const cy = scenario.y + 40;
          return (
            <g key={scenario.slug} transform={`translate(${cx}, ${cy})`}
              style={{ cursor: active ? "pointer" : "default", filter: active && hovered ? `drop-shadow(0 0 8px ${scenario.color.fill}88)` : "none", transition: "filter 0.2s ease" }}
              onClick={() => active && onSelectScenario(scenario.slug)}
              onMouseEnter={() => active && setHoveredSlug(scenario.slug)}
              onMouseLeave={() => setHoveredSlug(null)}>
              {active && (
                <circle cx={0} cy={10} r={glowR(scenario.slug)} fill={scenario.color.fill}
                  opacity={0.08 + (hovered ? 0.06 : 0)} style={{ transition: "opacity 0.2s" }} />
              )}
              <ellipse cx={0} cy={38} rx={28} ry={8} fill="#4A3A20" opacity={active ? 0.12 : 0.06} />
              <g opacity={active ? 1 : 0.15} style={{ transition: "opacity 0.3s" }}>
                <Building color={active ? scenario.color : { fill: "#A0A0A0", roof: "#606060", wall: "#D0D0D0", accent: "#808080" }} active={active && hovered} />
              </g>
              {active && hovered && (
                <circle cx={0} cy={10} r={34} fill="none" stroke={scenario.color.fill}
                  strokeWidth={1.5} opacity={0.4} strokeDasharray="4 3" />
              )}
              <text x={0} y={52} textAnchor="middle" fontSize={active ? 8.5 : 8} fontFamily="'Georgia', serif"
                fill={active ? scenario.color.roof : "#B0A898"} fontWeight={active ? "600" : "400"}
                style={{ userSelect: "none", transition: "fill 0.3s", paintOrder: "stroke", stroke: active ? "#F5EDD8" : "none", strokeWidth: 3, strokeLinejoin: "round" }}>
                {scenario.label}
              </text>
              <circle cx={0} cy={58} r={3} fill={active ? scenario.color.fill : "#C0C0C0"} opacity={0.8} style={{ transition: "fill 0.3s" }} />
            </g>
          );
        })}
        <g transform="translate(660, 640)" opacity={0.5}>
          <circle cx={0} cy={0} r={16} fill="#F0E8D0" stroke="#B0A070" strokeWidth={0.5} />
          <text x={0} y={-20} textAnchor="middle" fontSize={8} fill="#6B4A20" fontFamily="serif" fontWeight="bold">N</text>
          <polygon points="0,-14 -3,-4 0,-8 3,-4" fill="#C84040" opacity={0.8} />
          <polygon points="0,14 -3,4 0,8 3,4" fill="#404040" opacity={0.6} />
          <polygon points="-14,0 -4,-3 -8,0 -4,3" fill="#404040" opacity={0.6} />
          <polygon points="14,0 4,-3 8,0 4,3" fill="#404040" opacity={0.6} />
          <circle cx={0} cy={0} r={2} fill="#B0A070" />
        </g>
        <text x={350} y={686} textAnchor="middle" fontSize={10} fontFamily="'Georgia', serif"
          fill="#7A6840" opacity={0.6} letterSpacing={3}>CONVERSATION TOWN</text>
      </svg>
    </div>
  );
}
