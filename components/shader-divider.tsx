export function ShaderDivider() {
  return (
    <div className="relative h-[180px] w-full bg-[#000000] overflow-hidden">
      {/* Center orb */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[120px] rounded-full bg-[#1A56DB] opacity-[0.07] blur-3xl"
        style={{ animation: "pulse 4s ease-in-out infinite" }}
      />

      {/* Left orb */}
      <div
        className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[300px] h-[80px] rounded-full bg-[#1A56DB] opacity-[0.05] blur-3xl"
        style={{ animation: "pulse 6s ease-in-out infinite" }}
      />

      {/* Right orb */}
      <div
        className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[200px] h-[60px] rounded-full bg-white opacity-[0.03] blur-3xl"
        style={{ animation: "pulse 5s ease-in-out infinite alternate" }}
      />
    </div>
  )
}
