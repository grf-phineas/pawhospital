import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Youtube.module.css';
import { YoutubeIcon } from './YoutubeIcon';

interface Props {
  className?: string;
  swap?: {
    youtube?: ReactNode;
  };
}
/* @figmaId 5:24 */
export const Youtube: FC<Props> = memo(function Youtube(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.youtube}>{props.swap?.youtube || <YoutubeIcon className={classes.icon} />}</div>
    </div>
  );
});
