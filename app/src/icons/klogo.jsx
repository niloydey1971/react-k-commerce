import React from 'react';

const klogo = ({ className, ...props }) => {
  return (
    <svg
      className={`${className}`}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 100 100'
      {...props}
    >
      <rect width='100' height='100' rx='20' fill='#ffffff'></rect>
      <path
        fill='#fd2d78'
        d='M50.85 75.29L27.91 51.53L27.91 77.54Q27.37 77.72 26.47 77.95Q25.57 78.17 24.48 78.17L24.48 78.17Q20.53 78.17 20.53 74.84L20.53 74.84L20.53 23.09Q20.98 22.91 21.92 22.69Q22.87 22.46 23.95 22.46L23.95 22.46Q27.91 22.46 27.91 25.79L27.91 25.79L27.91 48.20L52.66 22.55Q54.99 22.64 56.16 23.72Q57.34 24.80 57.34 26.24L57.34 26.24Q57.34 27.41 56.70 28.40Q56.07 29.39 54.91 30.56L54.91 30.56L35.47 49.64Q43.66 57.65 49.64 63.91Q55.63 70.16 59.95 74.03L59.95 74.03Q59.77 76.01 58.73 77.14Q57.70 78.26 56.07 78.26L56.07 78.26Q54.55 78.26 53.33 77.41Q52.12 76.55 50.85 75.29L50.85 75.29ZM78.22 25.25L78.22 25.25Q78.22 27.95 78.17 32.36Q78.13 36.77 77.99 41.77Q77.85 46.76 77.67 51.80Q77.50 56.84 77.31 60.80L77.31 60.80Q76.14 61.70 74.34 61.70L74.34 61.70Q73.08 61.70 72.28 61.16Q71.47 60.62 71.38 59.45L71.38 59.45Q71.19 56.84 71.02 52.16Q70.83 47.48 70.75 42.17Q70.66 36.86 70.61 31.60Q70.56 26.33 70.56 22.55L70.56 22.55Q72.45 21.38 74.61 21.38L74.61 21.38Q78.22 21.38 78.22 25.25ZM69.39 73.58L69.39 73.58Q69.39 71.42 70.75 69.98Q72.09 68.54 74.44 68.54L74.44 68.54Q76.78 68.54 78.13 69.98Q79.47 71.42 79.47 73.58L79.47 73.58Q79.47 75.74 78.13 77.18Q76.78 78.62 74.44 78.62L74.44 78.62Q72.09 78.62 70.75 77.18Q69.39 75.74 69.39 73.58Z'
      ></path>
    </svg>
  );
};

export default klogo;