import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps, Stack } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
  width?: number;
  height?: number;
}

export default function LogoFull({ disabledLink = false, width, height }: Props) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Stack>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width??400}
        height={height??150}
        zoomAndPan="magnify"
        viewBox="0 0 375 149.999998"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <g />
          <clipPath id="61ee12dce5">
            <path
              d="M 6.417969 18.242188 L 119.933594 18.242188 L 119.933594 131.757812 L 6.417969 131.757812 Z M 6.417969 18.242188 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="4c10100486">
            <path
              d="M 63.175781 18.242188 C 94.523438 18.242188 119.933594 43.652344 119.933594 75 C 119.933594 106.347656 94.523438 131.757812 63.175781 131.757812 C 31.832031 131.757812 6.417969 106.347656 6.417969 75 C 6.417969 43.652344 31.832031 18.242188 63.175781 18.242188 L 63.175781 40.945312 C 44.371094 40.945312 29.121094 56.191406 29.121094 75 C 29.121094 93.808594 44.371094 109.054688 63.175781 109.054688 C 81.984375 109.054688 97.230469 93.808594 97.230469 75 C 97.230469 56.191406 81.984375 40.945312 63.175781 40.945312 L 63.175781 18.242188 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="f672956c1d">
            <path d="M 63 19 L 120 19 L 120 84 L 63 84 Z M 63 19 " clip-rule="nonzero" />
          </clipPath>
          <clipPath id="b9c6bbd0d8">
            <path
              d="M 77.367188 20.046875 C 101.121094 26.179688 118.242188 46.878906 119.816406 71.359375 C 120.21875 77.617188 115.472656 83.011719 109.21875 83.414062 C 102.960938 83.816406 97.5625 79.070312 97.160156 72.816406 C 96.21875 58.125 85.941406 45.707031 71.691406 42.027344 C 67.765625 41.011719 64.675781 37.980469 63.589844 34.074219 C 62.507812 30.167969 63.585938 25.976562 66.429688 23.082031 C 69.269531 20.1875 73.441406 19.03125 77.367188 20.046875 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="e2117772dd">
            <path
              d="M 28.761719 40.652344 L 97.59375 40.652344 L 97.59375 109.484375 L 28.761719 109.484375 Z M 28.761719 40.652344 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="404fbf3117">
            <path
              d="M 63.175781 40.652344 C 44.167969 40.652344 28.761719 56.0625 28.761719 75.070312 C 28.761719 94.078125 44.167969 109.484375 63.175781 109.484375 C 82.183594 109.484375 97.59375 94.078125 97.59375 75.070312 C 97.59375 56.0625 82.183594 40.652344 63.175781 40.652344 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="b75e3744eb">
            <path
              d="M 17.421875 29.242188 L 108.921875 29.242188 L 108.921875 120.742188 L 17.421875 120.742188 Z M 17.421875 29.242188 "
              clip-rule="nonzero"
            />
          </clipPath>
        </defs>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(131.895874, 61.499998)">
            <g>
              <path d="M 22.890625 0 L 21.6875 -15.078125 L 21.53125 -15.078125 L 16.3125 -0.15625 L 12.859375 -0.15625 L 7.65625 -15.078125 L 7.5 -15.078125 L 6.296875 0 L 0.5 0 L 2.78125 -25.453125 L 8.9375 -25.453125 L 14.59375 -10.765625 L 20.234375 -25.453125 L 26.40625 -25.453125 L 28.6875 0 Z M 22.890625 0 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(164.159224, 61.499998)">
            <g>
              <path d="M -0.921875 -25.453125 L 6.046875 -25.453125 L 11.34375 -17.296875 L 16.65625 -25.453125 L 23.625 -25.453125 L 14.25 -11.40625 L 14.25 0 L 8.453125 0 L 8.453125 -11.40625 Z M -0.921875 -25.453125 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(189.945379, 61.499998)">
            <g />
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(201.450851, 61.499998)">
            <g>
              <path d="M 0.25 -20.359375 L 0.25 -25.453125 L 18.140625 -25.453125 L 18.140625 -20.359375 L 12.09375 -20.359375 L 12.09375 0 L 6.296875 0 L 6.296875 -20.359375 Z M 0.25 -20.359375 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(222.918867, 61.499998)">
            <g>
              <path d="M 7.65625 -10.203125 L 7.65625 0 L 1.84375 0 L 1.84375 -25.453125 L 7.65625 -25.453125 L 7.65625 -15.296875 L 15.859375 -15.296875 L 15.859375 -25.453125 L 21.65625 -25.453125 L 21.65625 0 L 15.859375 0 L 15.859375 -10.203125 Z M 7.65625 -10.203125 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(249.506958, 61.499998)">
            <g>
              <path d="M 1.84375 -25.453125 L 10.953125 -25.453125 C 13.398438 -25.453125 15.394531 -24.796875 16.9375 -23.484375 C 18.476562 -22.179688 19.25 -20.316406 19.25 -17.890625 C 19.25 -16.015625 18.78125 -14.441406 17.84375 -13.171875 C 16.90625 -11.910156 15.632812 -11.023438 14.03125 -10.515625 L 22.796875 0 L 15.421875 0 L 7.65625 -10.0625 L 7.65625 0 L 1.84375 0 Z M 7.65625 -14.15625 L 8.328125 -14.15625 C 8.859375 -14.15625 9.304688 -14.164062 9.671875 -14.1875 C 10.046875 -14.207031 10.46875 -14.28125 10.9375 -14.40625 C 11.414062 -14.53125 11.796875 -14.703125 12.078125 -14.921875 C 12.367188 -15.148438 12.617188 -15.476562 12.828125 -15.90625 C 13.035156 -16.34375 13.140625 -16.867188 13.140625 -17.484375 C 13.140625 -18.097656 13.035156 -18.617188 12.828125 -19.046875 C 12.617188 -19.484375 12.367188 -19.816406 12.078125 -20.046875 C 11.796875 -20.273438 11.414062 -20.453125 10.9375 -20.578125 C 10.46875 -20.703125 10.046875 -20.769531 9.671875 -20.78125 C 9.304688 -20.800781 8.859375 -20.8125 8.328125 -20.8125 L 7.65625 -20.8125 Z M 7.65625 -14.15625 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(274.676233, 61.499998)">
            <g>
              <path d="M 16.40625 -25.453125 L 16.40625 -20.359375 L 7.65625 -20.359375 L 7.65625 -15.296875 L 16.03125 -15.296875 L 16.03125 -10.203125 L 7.65625 -10.203125 L 7.65625 -5.09375 L 16.40625 -5.09375 L 16.40625 0 L 1.84375 0 L 1.84375 -25.453125 Z M 16.40625 -25.453125 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(295.650757, 61.499998)">
            <g>
              <path d="M 14.78125 -25.453125 L 25.046875 0 L 18.8125 0 L 16.9375 -5.09375 L 7.25 -5.09375 L 5.359375 0 L -0.859375 0 L 9.40625 -25.453125 Z M 14.953125 -10.171875 L 12.125 -17.578125 L 12.0625 -17.578125 L 9.21875 -10.171875 Z M 14.953125 -10.171875 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(322.917415, 61.499998)">
            <g>
              <path d="M 1.84375 -25.453125 L 9.21875 -25.453125 C 12.757812 -25.453125 15.78125 -24.242188 18.28125 -21.828125 C 20.789062 -19.410156 22.046875 -16.378906 22.046875 -12.734375 C 22.046875 -9.078125 20.796875 -6.039062 18.296875 -3.625 C 15.804688 -1.207031 12.78125 0 9.21875 0 L 1.84375 0 Z M 7.65625 -5.1875 L 8.546875 -5.1875 C 10.660156 -5.1875 12.390625 -5.898438 13.734375 -7.328125 C 15.085938 -8.753906 15.773438 -10.546875 15.796875 -12.703125 C 15.796875 -14.867188 15.117188 -16.671875 13.765625 -18.109375 C 12.421875 -19.546875 10.679688 -20.265625 8.546875 -20.265625 L 7.65625 -20.265625 Z M 7.65625 -5.1875 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(348.765245, 61.499998)">
            <g>
              <path d="M 11.234375 -25.90625 C 12.609375 -25.90625 13.953125 -25.703125 15.265625 -25.296875 C 16.578125 -24.898438 17.554688 -24.507812 18.203125 -24.125 L 19.125 -23.5 L 16.78125 -18.875 C 16.59375 -19 16.332031 -19.15625 16 -19.34375 C 15.675781 -19.539062 15.0625 -19.804688 14.15625 -20.140625 C 13.25 -20.472656 12.40625 -20.640625 11.625 -20.640625 C 10.65625 -20.640625 9.910156 -20.429688 9.390625 -20.015625 C 8.867188 -19.609375 8.609375 -19.054688 8.609375 -18.359375 C 8.609375 -18.003906 8.726562 -17.675781 8.96875 -17.375 C 9.21875 -17.082031 9.640625 -16.765625 10.234375 -16.421875 C 10.835938 -16.085938 11.363281 -15.816406 11.8125 -15.609375 C 12.257812 -15.398438 12.957031 -15.09375 13.90625 -14.6875 C 15.550781 -13.988281 16.953125 -13.035156 18.109375 -11.828125 C 19.273438 -10.628906 19.859375 -9.265625 19.859375 -7.734375 C 19.859375 -6.273438 19.597656 -5 19.078125 -3.90625 C 18.554688 -2.820312 17.835938 -1.972656 16.921875 -1.359375 C 16.003906 -0.742188 14.988281 -0.285156 13.875 0.015625 C 12.769531 0.316406 11.566406 0.46875 10.265625 0.46875 C 9.160156 0.46875 8.070312 0.351562 7 0.125 C 5.925781 -0.101562 5.03125 -0.382812 4.3125 -0.71875 C 3.59375 -1.0625 2.945312 -1.394531 2.375 -1.71875 C 1.800781 -2.050781 1.378906 -2.332031 1.109375 -2.5625 L 0.703125 -2.90625 L 3.609375 -7.765625 C 3.859375 -7.566406 4.195312 -7.304688 4.625 -6.984375 C 5.0625 -6.671875 5.828125 -6.242188 6.921875 -5.703125 C 8.023438 -5.171875 9 -4.90625 9.84375 -4.90625 C 12.289062 -4.90625 13.515625 -5.738281 13.515625 -7.40625 C 13.515625 -7.75 13.425781 -8.070312 13.25 -8.375 C 13.070312 -8.675781 12.757812 -8.972656 12.3125 -9.265625 C 11.875 -9.566406 11.484375 -9.800781 11.140625 -9.96875 C 10.804688 -10.144531 10.253906 -10.410156 9.484375 -10.765625 C 8.710938 -11.128906 8.140625 -11.40625 7.765625 -11.59375 C 6.222656 -12.351562 5.03125 -13.300781 4.1875 -14.4375 C 3.351562 -15.582031 2.9375 -16.816406 2.9375 -18.140625 C 2.9375 -20.421875 3.773438 -22.285156 5.453125 -23.734375 C 7.140625 -25.179688 9.066406 -25.90625 11.234375 -25.90625 Z M 11.234375 -25.90625 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(131.895874, 104.249996)">
            <g>
              <path d="M 22.890625 0 L 21.6875 -15.078125 L 21.53125 -15.078125 L 16.3125 -0.15625 L 12.859375 -0.15625 L 7.65625 -15.078125 L 7.5 -15.078125 L 6.296875 0 L 0.5 0 L 2.78125 -25.453125 L 8.9375 -25.453125 L 14.59375 -10.765625 L 20.234375 -25.453125 L 26.40625 -25.453125 L 28.6875 0 Z M 22.890625 0 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(164.159224, 104.249996)">
            <g>
              <path d="M 0.703125 -12.734375 C 0.703125 -16.421875 1.957031 -19.535156 4.46875 -22.078125 C 6.976562 -24.628906 10.003906 -25.90625 13.546875 -25.90625 C 17.097656 -25.90625 20.117188 -24.632812 22.609375 -22.09375 C 25.097656 -19.5625 26.34375 -16.441406 26.34375 -12.734375 C 26.34375 -9.015625 25.117188 -5.882812 22.671875 -3.34375 C 20.222656 -0.800781 17.179688 0.46875 13.546875 0.46875 C 9.816406 0.46875 6.742188 -0.789062 4.328125 -3.3125 C 1.910156 -5.832031 0.703125 -8.972656 0.703125 -12.734375 Z M 6.96875 -12.734375 C 6.96875 -11.398438 7.171875 -10.179688 7.578125 -9.078125 C 7.992188 -7.984375 8.710938 -7.054688 9.734375 -6.296875 C 10.765625 -5.535156 12.035156 -5.15625 13.546875 -5.15625 C 15.703125 -5.15625 17.328125 -5.894531 18.421875 -7.375 C 19.523438 -8.851562 20.078125 -10.640625 20.078125 -12.734375 C 20.078125 -14.816406 19.515625 -16.601562 18.390625 -18.09375 C 17.273438 -19.582031 15.660156 -20.328125 13.546875 -20.328125 C 11.441406 -20.328125 9.816406 -19.582031 8.671875 -18.09375 C 7.535156 -16.601562 6.96875 -14.816406 6.96875 -12.734375 Z M 6.96875 -12.734375 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(194.294351, 104.249996)">
            <g>
              <path d="M 7.65625 -15.796875 L 7.65625 0 L 1.84375 0 L 1.84375 -25.453125 L 7.65625 -25.453125 L 17.765625 -9.65625 L 17.828125 -9.65625 L 17.828125 -25.453125 L 23.625 -25.453125 L 23.625 0 L 17.828125 0 L 7.703125 -15.796875 Z M 7.65625 -15.796875 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(222.85644, 104.249996)">
            <g>
              <path d="M 16.40625 -25.453125 L 16.40625 -20.359375 L 7.65625 -20.359375 L 7.65625 -15.296875 L 16.03125 -15.296875 L 16.03125 -10.203125 L 7.65625 -10.203125 L 7.65625 -5.09375 L 16.40625 -5.09375 L 16.40625 0 L 1.84375 0 L 1.84375 -25.453125 Z M 16.40625 -25.453125 " />
            </g>
          </g>
        </g>
        <g fill="#f4f4f4" fill-opacity="1">
          <g transform="translate(243.830964, 104.249996)">
            <g>
              <path d="M -0.921875 -25.453125 L 6.046875 -25.453125 L 11.34375 -17.296875 L 16.65625 -25.453125 L 23.625 -25.453125 L 14.25 -11.40625 L 14.25 0 L 8.453125 0 L 8.453125 -11.40625 Z M -0.921875 -25.453125 " />
            </g>
          </g>
        </g>
        <g clip-path="url(#61ee12dce5)">
          <g clip-path="url(#4c10100486)">
            <path
              fill="#000000"
              d="M 6.417969 18.242188 L 119.933594 18.242188 L 119.933594 131.757812 L 6.417969 131.757812 Z M 6.417969 18.242188 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
        <g clip-path="url(#f672956c1d)">
          <g clip-path="url(#b9c6bbd0d8)">
            <path
              fill="#000000"
              d="M 6.417969 18.242188 L 119.933594 18.242188 L 119.933594 131.757812 L 6.417969 131.757812 Z M 6.417969 18.242188 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
        <g clip-path="url(#e2117772dd)">
          <g clip-path="url(#404fbf3117)">
            <path
              fill="#ffffff"
              d="M 28.761719 40.652344 L 97.59375 40.652344 L 97.59375 109.484375 L 28.761719 109.484375 Z M 28.761719 40.652344 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
        <g clip-path="url(#b75e3744eb)">
          <path
            fill="#000000"
            d="M 69.851562 75.085938 C 69.851562 79.71875 66.9375 83.410156 62.226562 83.410156 C 57.695312 83.410156 54.707031 79.597656 54.707031 75.023438 C 54.707031 70.617188 57.679688 67.046875 62.101562 67.046875 C 66.800781 67.046875 69.851562 70.617188 69.851562 75.085938 Z M 108.921875 74.992188 C 108.921875 100.261719 88.441406 120.742188 63.171875 120.742188 C 37.902344 120.742188 17.421875 100.261719 17.421875 74.992188 C 17.421875 49.722656 37.902344 29.242188 63.171875 29.242188 C 88.441406 29.242188 108.921875 49.722656 108.921875 74.992188 Z M 90.164062 75.144531 C 90.164062 60.308594 78.847656 49.527344 63.535156 49.527344 C 48.148438 49.527344 36.179688 60.78125 36.179688 75.449219 C 36.179688 89.800781 47.628906 100.460938 62.742188 100.460938 C 67.273438 100.460938 73.175781 98.859375 76.683594 96.34375 L 74.242188 91.996094 C 70.902344 94.390625 66.265625 95.519531 62.726562 95.519531 C 50.589844 95.519531 41.300781 87.070312 41.300781 75.449219 C 41.300781 63.664062 51.121094 54.359375 63.519531 54.359375 C 76.742188 54.359375 85.023438 63.480469 85.023438 75.328125 C 85.023438 81.445312 82.339844 85.683594 79.410156 85.683594 C 77.808594 85.683594 76.683594 84.722656 76.683594 82.464844 L 76.683594 61.679688 L 70.246094 61.679688 L 70.246094 65.554688 C 69.652344 64.304688 66.082031 61.085938 60.835938 61.085938 C 52.921875 61.085938 47.738281 67.445312 47.738281 75.3125 C 47.738281 83.640625 54.234375 89.238281 61.492188 89.238281 C 65.609375 89.238281 69.300781 87.527344 71.742188 83.945312 L 71.863281 85.132812 C 72.519531 88.472656 75.140625 89.96875 78.769531 89.96875 C 85.449219 89.96875 90.164062 84.128906 90.164062 75.144531 Z M 90.164062 75.144531 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </g>
      </svg>
    </Stack>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}