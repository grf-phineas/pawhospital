import { memo, SVGProps } from 'react';

const RiVideoAddFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 47 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_39_118)'>
      <path
        d='M31.3333 7.83334C32.4143 7.83334 33.2916 8.71068 33.2916 9.79168V18.0167L43.5004 10.8688C43.943 10.5593 44.554 10.667 44.8653 11.1116C44.9789 11.2761 45.0416 11.4719 45.0416 11.6717V35.3283C45.0416 35.8688 44.6029 36.3075 44.0624 36.3075C43.8607 36.3075 43.6649 36.2448 43.5004 36.1313L33.2916 28.9833V37.2083C33.2916 38.2893 32.4143 39.1667 31.3333 39.1667H3.9166C2.8356 39.1667 1.95827 38.2893 1.95827 37.2083V9.79168C1.95827 8.71068 2.8356 7.83334 3.9166 7.83334H31.3333ZM15.6666 15.6667V21.5417H9.7916V25.4583H15.6646L15.6666 31.3333H19.5833L19.5813 25.4583H25.4583V21.5417H19.5833V15.6667H15.6666Z'
        fill='#002046'
      />
    </g>
    <defs>
      <clipPath id='clip0_39_118'>
        <rect width={47} height={47} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(RiVideoAddFillIcon);
export { Memo as RiVideoAddFillIcon };
