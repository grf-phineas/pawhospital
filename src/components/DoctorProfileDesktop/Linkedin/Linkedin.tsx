import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Linkedin.module.css';
import { LinkedinIcon } from './LinkedinIcon';

interface Props {
  className?: string;
  swap?: {
    linkedin?: ReactNode;
  };
}
/* @figmaId 5:26 */
export const Linkedin: FC<Props> = memo(function Linkedin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.linkedin}>{props.swap?.linkedin || <LinkedinIcon className={classes.icon} />}</div>
    </div>
  );
});
