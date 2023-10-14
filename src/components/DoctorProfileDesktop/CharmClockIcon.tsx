import { memo, SVGProps } from 'react';

const CharmClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M28.8963 40.9688C41.0981 40.9688 50.9896 32.9239 50.9896 23C50.9896 13.0761 41.0981 5.03125 28.8963 5.03125C16.6946 5.03125 6.80306 13.0761 6.80306 23C6.80306 32.9239 16.6946 40.9688 28.8963 40.9688Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M29.7801 13.6562V23.7188L20.9428 29.4688'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CharmClockIcon);
export { Memo as CharmClockIcon };
