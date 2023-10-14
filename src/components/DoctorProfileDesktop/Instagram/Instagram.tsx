import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Instagram.module.css';
import { InstagramIcon } from './InstagramIcon';

interface Props {
  className?: string;
  swap?: {
    instagram?: ReactNode;
  };
}
/* @figmaId 5:22 */
export const Instagram: FC<Props> = memo(function Instagram(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.instagram}>{props.swap?.instagram || <InstagramIcon className={classes.icon} />}</div>
    </div>
  );
});
