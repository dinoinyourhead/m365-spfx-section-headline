import * as React from 'react';
import styles from './SectionHeadline.module.scss';
import type { ISectionHeadlineProps } from './ISectionHeadlineProps';

export default class SectionHeadline extends React.Component<ISectionHeadlineProps> {
  public render(): React.ReactElement<ISectionHeadlineProps> {
    const {
      headlineText,
      barColor,
      fontColor,
      fontSize,
      leftPadding,
      topOffset,
      barWidth,
      barHeightExtension
    } = this.props;

    // Calculate bar styles with dynamic values
    const heightExt = barHeightExtension || 0;
    const barStyle: React.CSSProperties = {
      backgroundColor: barColor || '#ad3a39',
      width: `${barWidth || 6}px`,
      marginTop: heightExt > 0 ? `-${heightExt}px` : '0',
      marginBottom: heightExt > 0 ? `-${heightExt}px` : '0',
      paddingTop: heightExt > 0 ? `${heightExt}px` : '0',
      paddingBottom: heightExt > 0 ? `${heightExt}px` : '0'
    };

    // Container style with padding and top offset (negative margin to move up)
    const containerStyle: React.CSSProperties = {
      paddingLeft: `${leftPadding || 0}px`,
      marginTop: topOffset ? `-${topOffset}px` : '0'
    };

    const textStyle: React.CSSProperties = {
      color: fontColor || '#000000',
      fontSize: `${fontSize || 28}px`
    };

    return (
      <div className={styles.sectionHeadline} style={containerStyle}>
        <span className={styles.accentBar} style={barStyle} aria-hidden="true" />
        <h2 className={styles.headlineText} style={textStyle}>{headlineText || 'Section Headline'}</h2>
      </div>
    );
  }
}
