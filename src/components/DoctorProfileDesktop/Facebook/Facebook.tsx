import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Facebook.module.css';
import { FacebookIcon } from './FacebookIcon';

interface Props {
  className?: string;
  swap?: {
    facebook?: ReactNode;
  };
}
/* @figmaId 5:20 */
export const Facebook: FC<Props> = memo(function Facebook(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.facebook}>{props.swap?.facebook || <FacebookIcon className={classes.icon} />}</div>
    </div>
  );
});
