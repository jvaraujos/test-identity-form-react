import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
  width?: number;
  height?: number;
}

export default function Logo({ disabledLink = false, width, height }: Props) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height={height??40}
        width={width??40}
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="8a507970ba">
            <path
              d="M 73.476562 77.425781 L 298 77.425781 L 298 301.644531 L 73.476562 301.644531 Z M 73.476562 77.425781 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="e4a25f9d01">
            <path
              d="M 185.59375 77.425781 C 123.671875 77.425781 73.476562 127.488281 73.476562 189.242188 C 73.476562 250.992188 123.671875 301.054688 185.59375 301.054688 C 247.515625 301.054688 297.714844 250.992188 297.714844 189.242188 C 297.714844 127.488281 247.515625 77.425781 185.59375 77.425781 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="6734696b13">
            <path
              d="M 7.871094 7.871094 L 367.121094 7.871094 L 367.121094 367.121094 L 7.871094 367.121094 Z M 7.871094 7.871094 "
              clip-rule="nonzero"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#8a507970ba)">
          <g clip-path="url(#e4a25f9d01)">
            <path
              fill="#ffffff"
              d="M 73.476562 77.425781 L 297.691406 77.425781 L 297.691406 301.035156 L 73.476562 301.035156 Z M 73.476562 77.425781 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
        <g clip-path="url(#6734696b13)">
          <path
            fill="#000000"
            d="M 213.71875 187.855469 C 213.71875 206.054688 202.285156 220.546875 183.78125 220.546875 C 166 220.546875 154.265625 205.578125 154.265625 187.613281 C 154.265625 170.3125 165.941406 156.300781 183.304688 156.300781 C 201.746094 156.300781 213.71875 170.3125 213.71875 187.855469 Z M 367.121094 187.496094 C 367.121094 286.707031 286.707031 367.121094 187.496094 367.121094 C 88.28125 367.121094 7.871094 286.707031 7.871094 187.496094 C 7.871094 88.28125 88.28125 7.871094 187.496094 7.871094 C 286.707031 7.871094 367.121094 88.28125 367.121094 187.496094 Z M 293.472656 188.09375 C 293.472656 129.835938 249.046875 87.503906 188.933594 87.503906 C 128.519531 87.503906 81.515625 131.691406 81.515625 189.292969 C 81.515625 245.632812 126.480469 287.484375 185.820312 287.484375 C 203.601562 287.484375 226.773438 281.199219 240.542969 271.320312 L 230.964844 254.253906 C 217.851562 263.65625 199.648438 268.085938 185.757812 268.085938 C 138.097656 268.085938 101.632812 234.914062 101.632812 189.292969 C 101.632812 143.007812 140.195312 106.484375 188.871094 106.484375 C 240.785156 106.484375 273.296875 142.289062 273.296875 188.8125 C 273.296875 212.820312 262.757812 229.46875 251.261719 229.46875 C 244.976562 229.46875 240.542969 225.695312 240.542969 216.832031 L 240.542969 135.222656 L 215.277344 135.222656 L 215.277344 150.433594 C 212.941406 145.523438 198.929688 132.890625 178.335938 132.890625 C 147.257812 132.890625 126.902344 157.855469 126.902344 188.753906 C 126.902344 221.445312 152.40625 243.417969 180.910156 243.417969 C 197.074219 243.417969 211.566406 236.710938 221.144531 222.640625 L 221.625 227.3125 C 224.199219 240.425781 234.496094 246.292969 248.746094 246.292969 C 274.972656 246.292969 293.472656 223.359375 293.472656 188.09375 Z M 293.472656 188.09375 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}