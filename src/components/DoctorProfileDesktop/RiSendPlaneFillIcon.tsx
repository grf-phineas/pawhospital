import { memo, SVGProps } from 'react';

const RiSendPlaneFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_39_133)'>
      <path
        d='M4.3785 20.9587C3.204 20.5672 3.19275 19.935 4.401 19.5323L47.3467 5.21775C48.537 4.82175 49.2187 5.48775 48.8857 6.65325L36.6142 49.5967C36.2767 50.787 35.5905 50.8275 35.0865 49.698L27 31.5L40.5 13.5L22.5 27L4.3785 20.9587V20.9587Z'
        fill='#A6ADB5'
      />
    </g>
    <defs>
      <clipPath id='clip0_39_133'>
        <rect width={54} height={54} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(RiSendPlaneFillIcon);
export { Memo as RiSendPlaneFillIcon };
