import * as React from 'react';
import styles from './SectionHeadline.module.scss';
import type { ISectionHeadlineProps } from './ISectionHeadlineProps';

export default class SectionHeadline extends React.Component<ISectionHeadlineProps> {
  public render(): React.ReactElement<ISectionHeadlineProps> {
    const {
      headlineText,
      barColor,
      leftPadding,
      barWidth,
      barHeightExtension
    } = this.props;

    // Calculate bar styles with dynamic values
    const barStyle: React.CSSProperties = {
      backgroundColor: barColor || '#ad3a39',
      width: `${barWidth || 6}px`,
      marginTop: `-${barHeightExtension || 8}px`,
      marginBottom: `-${barHeightExtension || 8}px`
    };

    const containerStyle: React.CSSProperties = {
      paddingLeft: `${leftPadding || 0}px`
    };

    return (
      <div className={styles.sectionHeadline} style={containerStyle}>
        <span className={styles.accentBar} style={barStyle} aria-hidden="true" />
        <h2 className={styles.headlineText}>{headlineText || 'Section Headline'}</h2>
      </div>
    );
  }
}
