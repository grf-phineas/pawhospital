import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BxCalendarIcon } from './BxCalendarIcon';
import { CharmClockIcon } from './CharmClockIcon';
import classes from './DoctorProfileDesktop.module.css';
import { Facebook } from './Facebook/Facebook';
import { FacebookIcon } from './FacebookIcon';
import { Group1Icon } from './Group1Icon';
import { Group1000000864Icon } from './Group1000000864Icon';
import { Group1000001051Icon } from './Group1000001051Icon';
import { Instagram } from './Instagram/Instagram';
import { InstagramIcon } from './InstagramIcon';
import { Linkedin } from './Linkedin/Linkedin';
import { LinkedinIcon } from './LinkedinIcon';
import { RiAttachment2Icon } from './RiAttachment2Icon';
import { RiMic2FillIcon } from './RiMic2FillIcon';
import { RiMore2FillIcon } from './RiMore2FillIcon';
import { RiPhoneFillIcon } from './RiPhoneFillIcon';
import { RiSendPlaneFillIcon } from './RiSendPlaneFillIcon';
import { RiVideoAddFillIcon } from './RiVideoAddFillIcon';
import { Twitter } from './Twitter/Twitter';
import { TwitterIcon } from './TwitterIcon';
import { UnsplashRdeovte7vosIcon } from './UnsplashRdeovte7vosIcon';
import { UnsplashRdeovte7vosIcon2 } from './UnsplashRdeovte7vosIcon2';
import { UnsplashRdeovte7vosIcon3 } from './UnsplashRdeovte7vosIcon3';
import { Youtube } from './Youtube/Youtube';
import { YoutubeIcon } from './YoutubeIcon';

interface Props {
  className?: string;
}
/* @figmaId 26:883 */
export const DoctorProfileDesktop: FC<Props> = memo(function DoctorProfileDesktop(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle620}></div>
      <div className={classes.group1000000864}>
        <Group1000000864Icon className={classes.icon6} />
      </div>
      <div className={classes.frame2}>
        <div className={classes.home}>Home</div>
        <div className={classes.services}>Services</div>
        <div className={classes.blogs}>Blogs</div>
        <div className={classes.about}>About</div>
        <div className={classes.ask}>Ask</div>
        <div className={classes.myPet}>My Pet</div>
      </div>
      <div className={classes.frame1}>
        <div className={classes.myProfile}>My Profile</div>
      </div>
      <div className={classes.group1000001051}>
        <Group1000001051Icon className={classes.icon7} />
      </div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon8} />
      </div>
      <div className={classes.frame5}>
        <div className={classes.home2}>Home</div>
        <div className={classes.service}>Service</div>
        <div className={classes.group89}>
          <div className={classes.blogs2}>Blogs</div>
        </div>
        <div className={classes.about2}>About</div>
        <div className={classes.contact}>Contact</div>
      </div>
      <div className={classes.line48}></div>
      <div className={classes.allRightsReservedUifryComTerms}>
        All rights reserved ® uifry.com | Terms and conditions apply!
      </div>
      <div className={classes.frame120}>
        <Facebook
          swap={{
            facebook: <FacebookIcon className={classes.icon} />,
          }}
        />
        <Instagram
          swap={{
            instagram: <InstagramIcon className={classes.icon2} />,
          }}
        />
        <Youtube
          swap={{
            youtube: <YoutubeIcon className={classes.icon3} />,
          }}
        />
        <Linkedin
          swap={{
            linkedin: <LinkedinIcon className={classes.icon4} />,
          }}
        />
        <Twitter
          swap={{
            twitter: <TwitterIcon className={classes.icon5} />,
          }}
        />
      </div>
      <div className={classes.messageBox}>
        <div className={classes.topBase}>
          <div className={classes.riMore2Fill}>
            <RiMore2FillIcon className={classes.icon9} />
          </div>
          <div className={classes.profile}>
            <div className={classes.unsplashRDEOVtE7vOs}>
              <UnsplashRdeovte7vosIcon className={classes.icon10} />
            </div>
            <div className={classes.frame13}>
              <div className={classes.christopherCampbell}>Christopher Campbell</div>
              <div className={classes.lastSeen255Pm}>Last seen 02:55 pm</div>
            </div>
          </div>
          <div className={classes.calls}>
            <div className={classes.riVideoAddFill}>
              <RiVideoAddFillIcon className={classes.icon11} />
            </div>
            <div className={classes.riPhoneFill}>
              <RiPhoneFillIcon className={classes.icon12} />
            </div>
          </div>
        </div>
        <div className={classes.message}>
          <div className={classes.unsplashRDEOVtE7vOs2}>
            <UnsplashRdeovte7vosIcon2 className={classes.icon13} />
          </div>
          <div className={classes.frame14}>
            <div className={classes.heyHowAreYou}>Hey, How are you?</div>
          </div>
        </div>
        <div className={classes.message2}>
          <div className={classes.message3}>
            <div className={classes.myPetHaveAHeadacheAndItLastsAb}>
              <div className={classes.textBlock}>My pet have a headache, and it lasts about</div>
              <div className={classes.textBlock2}>three days. Meanwhile, she coughs a lot these </div>
              <div className={classes.textBlock3}>days. What should I do?</div>
            </div>
          </div>
        </div>
        <div className={classes.message4}>
          <div className={classes.unsplashRDEOVtE7vOs3}>
            <UnsplashRdeovte7vosIcon3 className={classes.icon14} />
          </div>
          <div className={classes.frame142}>
            <div className={classes.thanks}>Thanks</div>
          </div>
        </div>
        <div className={classes.rightPerson}>
          <div className={classes.message5}>
            <div className={classes.frame143}>
              <div className={classes.heyIThinkYourPetHaveAColdYouSh}>
                <div className={classes.textBlock4}>Hey, I think your pet have a cold. You should </div>
                <div className={classes.textBlock5}>take xxx medication twice a day for two days.</div>
                <div className={classes.textBlock6}>
                  {' '}
                  If there&#39;s no improvement in 5 days, come back for another consultation.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomBase}>
          <div className={classes.typeYourMessage}>Type your Message...</div>
          <div className={classes.riAttachment2}>
            <RiAttachment2Icon className={classes.icon15} />
          </div>
          <div className={classes.riSendPlaneFill}>
            <RiSendPlaneFillIcon className={classes.icon16} />
          </div>
          <div className={classes.riMic2Fill}>
            <RiMic2FillIcon className={classes.icon17} />
          </div>
        </div>
      </div>
      <div className={classes.headacheCoughsALot}>
        <div className={classes.textBlock7}>Headache</div>
        <div className={classes.textBlock8}>Coughs a lot</div>
      </div>
      <div className={classes.dogAbcXyz}>Dog Abc Xyz</div>
      <div className={classes._5Male}>5, Male</div>
      <div className={classes.issueDescription}>Issue Description</div>
      <div className={classes._235PMIST}>02:35 PM IST</div>
      <div className={classes.bxCalendar}>
        <BxCalendarIcon className={classes.icon18} />
      </div>
      <div className={classes.charmClock}>
        <CharmClockIcon className={classes.icon19} />
      </div>
      <div className={classes.saturdayApril242022}>
        <div className={classes.textBlock9}>Saturday</div>
        <div className={classes.textBlock10}>April 24, 2022</div>
      </div>
    </div>
  );
});
