import React from "react";

interface BackgroundCompProps {
  children: React.ReactNode;
}

export default function BackgroundComp({ children }: BackgroundCompProps) {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Fondo con patrón de líneas */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-2] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Fondo con gradiente radial (nuevo) */}
      <div className="absolute top-0 z-[-1] min-h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-fixed"></div>

      {/* Contenido */}
      <div className="relative">{children}</div>
    </div>
  );
}

// import React from "react";

// interface BackgroundCompProps {
//   children: React.ReactNode;
// }

// export default function BackgroundComp({ children }: BackgroundCompProps) {
//   return (
//     <div className="relative min-h-screen w-screen">
//       {/* Fondo */}
//       <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//       {/* Contenido */}
//       <div className="relative">{children}</div>
//     </div>
//   );
// }

{
  /* <div className="relative min-h-screen w-screen bg-black">
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

<div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

<div className="relative">{children}</div>
</div> */
}
