import { memo, SVGProps } from 'react';

const BxCalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.8529 25.6667H24.2395V30.3333H18.8529V25.6667ZM18.8529 35H24.2395V39.6667H18.8529V35ZM29.626 25.6667H35.0126V30.3333H29.626V25.6667ZM29.626 35H35.0126V39.6667H29.626V35ZM40.3991 25.6667H45.7857V30.3333H40.3991V25.6667ZM40.3991 35H45.7857V39.6667H40.3991V35Z'
      fill='black'
    />
    <path
      d='M13.4664 51.3333H51.1722C54.1429 51.3333 56.5588 49.2403 56.5588 46.6667V14C56.5588 11.4263 54.1429 9.33333 51.1722 9.33333H45.7857V4.66667H40.3991V9.33333H24.2395V4.66667H18.8529V9.33333H13.4664C10.4957 9.33333 8.07983 11.4263 8.07983 14V46.6667C8.07983 49.2403 10.4957 51.3333 13.4664 51.3333ZM51.1722 18.6667L51.1749 46.6667H13.4664V18.6667H51.1722Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(BxCalendarIcon);
export { Memo as BxCalendarIcon };
