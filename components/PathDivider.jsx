export default function PathDivider({ tone = 'clay', flip = false }) {
  const colors = {
    clay: '#A6432B',
    gold: '#D9A441',
    leaf: '#4C6B3A',
    navy: '#16324F',
  };
  const stroke = colors[tone] || colors.clay;

  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[36px] md:h-[52px]"
      >
        <path
          d="M0,32 C120,10 220,54 340,30 C460,6 560,50 680,28 C800,6 900,48 1020,26 C1100,12 1160,20 1200,14"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 14"
        />
        <path
          d="M0,32 C120,10 220,54 340,30 C460,6 560,50 680,28 C800,6 900,48 1020,26 C1100,12 1160,20 1200,14"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
