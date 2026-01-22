import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

import * as strings from 'SectionHeadlineWebPartStrings';
import SectionHeadline from './components/SectionHeadline';
import { ISectionHeadlineProps } from './components/ISectionHeadlineProps';

export interface ISectionHeadlineWebPartProps {
  headlineText: string;
  barColor: string;
  fontColor: string;
  fontSize: number;
  leftPadding: number;
  topOffset: number;
  barWidth: number;
  barHeightExtension: number;
}

export default class SectionHeadlineWebPart extends BaseClientSideWebPart<ISectionHeadlineWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISectionHeadlineProps> = React.createElement(
      SectionHeadline,
      {
        headlineText: this.properties.headlineText,
        barColor: this.properties.barColor,
        fontColor: this.properties.fontColor,
        fontSize: this.properties.fontSize,
        leftPadding: this.properties.leftPadding,
        topOffset: this.properties.topOffset,
        barWidth: this.properties.barWidth,
        barHeightExtension: this.properties.barHeightExtension
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    // Set default values if not already set
    if (!this.properties.headlineText) {
      this.properties.headlineText = 'Section Headline';
    }
    if (!this.properties.barColor) {
      this.properties.barColor = '#ad3a39';
    }
    if (!this.properties.fontColor) {
      this.properties.fontColor = '#000000';
    }
    if (this.properties.fontSize === undefined) {
      this.properties.fontSize = 28;
    }
    if (this.properties.leftPadding === undefined) {
      this.properties.leftPadding = 1;
    }
    if (this.properties.topOffset === undefined) {
      this.properties.topOffset = 1;
    }
    if (this.properties.barWidth === undefined) {
      this.properties.barWidth = 6;
    }
    if (this.properties.barHeightExtension === undefined) {
      this.properties.barHeightExtension = 8;
    }

    return Promise.resolve();
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('headlineText', {
                  label: 'Headline Text'
                }),
                PropertyFieldColorPicker('fontColor', {
                  label: 'Font Color',
                  selectedColor: this.properties.fontColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  disabled: false,
                  debounce: 200,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'FontColor',
                  key: 'fontColorFieldId'
                }),
                PropertyPaneSlider('fontSize', {
                  label: 'Font Size (px)',
                  min: 10,
                  max: 40,
                  step: 1,
                  showValue: true
                }),
                PropertyFieldColorPicker('barColor', {
                  label: 'Accent Bar Color',
                  selectedColor: this.properties.barColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  disabled: false,
                  debounce: 200,
                  isHidden: false,
                  alphaSliderHidden: true,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'barColorFieldId'
                }),
                PropertyPaneSlider('leftPadding', {
                  label: 'Left Padding (px)',
                  min: 1,
                  max: 20,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneSlider('topOffset', {
                  label: 'Top Offset (px)',
                  min: 1,
                  max: 20,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneSlider('barWidth', {
                  label: 'Bar Width (px)',
                  min: 2,
                  max: 20,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneSlider('barHeightExtension', {
                  label: 'Bar Height Extension (px)',
                  min: 1,
                  max: 30,
                  step: 1,
                  showValue: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
