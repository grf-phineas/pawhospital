import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Twitter.module.css';
import { TwitterIcon } from './TwitterIcon';

interface Props {
  className?: string;
  swap?: {
    twitter?: ReactNode;
  };
}
/* @figmaId 5:28 */
export const Twitter: FC<Props> = memo(function Twitter(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.twitter}>{props.swap?.twitter || <TwitterIcon className={classes.icon} />}</div>
    </div>
  );
});
