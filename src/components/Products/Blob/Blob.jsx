import { useMemo } from "react";

const gradientColors = [
  { from: "rgba(248, 117, 55, 1)", to: "rgba(251, 168, 31, 1)" },
  { from: "rgba(72, 219, 251, 1)", to: "rgba(0, 210, 255, 1)" },
  { from: "rgba(29, 209, 161, 1)", to: "rgba(0, 210, 255, 1)" },
  { from: "rgba(255, 121, 121, 1)", to: "rgba(255, 159, 67, 1)" },
];

const BlobSVG = () => {
  // Escogemos un gradiente aleatorio una sola vez al montar el componente
  const selectedGradient = useMemo(() => {
    const index = Math.floor(Math.random() * gradientColors.length);
    return gradientColors[index];
  }, []);

  return (
    <svg
      className="blob"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop stopColor={selectedGradient.from} offset="0%" />
          <stop stopColor={selectedGradient.to} offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.3,-26.3C27.9,-19.9,33.7,-13.4,36.9,-5.1C40.1,3.3,40.7,13.6,37,22.5C33.2,31.4,25.1,38.9,16.1,40.6C7.2,42.2,-2.5,37.9,-10.7,33.3C-19,28.7,-25.6,23.7,-31.3,16.7C-36.9,9.7,-41.5,0.8,-39.4,-6.2C-37.3,-13.3,-28.5,-18.4,-20.8,-24.6C-13.1,-30.9,-6.6,-38.2,0.4,-38.7C7.4,-39.2,14.7,-32.8,21.3,-26.3Z"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: "0.3s" }}
      />
    </svg>
  );
};

export default BlobSVG;
