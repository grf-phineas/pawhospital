import { memo, SVGProps } from 'react';

const RiMore2FillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_39_113)'>
      <path
        d='M19.5 4.875C17.7125 4.875 16.25 6.3375 16.25 8.125C16.25 9.9125 17.7125 11.375 19.5 11.375C21.2875 11.375 22.75 9.9125 22.75 8.125C22.75 6.3375 21.2875 4.875 19.5 4.875ZM19.5 27.625C17.7125 27.625 16.25 29.0875 16.25 30.875C16.25 32.6625 17.7125 34.125 19.5 34.125C21.2875 34.125 22.75 32.6625 22.75 30.875C22.75 29.0875 21.2875 27.625 19.5 27.625ZM19.5 16.25C17.7125 16.25 16.25 17.7125 16.25 19.5C16.25 21.2875 17.7125 22.75 19.5 22.75C21.2875 22.75 22.75 21.2875 22.75 19.5C22.75 17.7125 21.2875 16.25 19.5 16.25Z'
        fill='#002046'
      />
    </g>
    <defs>
      <clipPath id='clip0_39_113'>
        <rect width={39} height={39} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(RiMore2FillIcon);
export { Memo as RiMore2FillIcon };
