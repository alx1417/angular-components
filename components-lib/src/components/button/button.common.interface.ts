/**
 * small: 25% on xl and lg, 33% on md, 50% on sm, 100% on xs
 * medium: 50% on xl and lg, 75% on md, 100% on sm and xs
 * large: 75% on xl and lg, 100% on md, sm and xs
 * full: 100% on xl, lg, md, sm and xs
 * auto: fluid size (one element 100%, two elements 50%, etc.)
 * content: No forced size, only the content size. DEFAULT
 */
export type Size = 'small' | 'medium' | 'large' | 'full' | 'auto' | 'content';

export type BtnType = 'primary' | 'secondary' | 'tertiary' | 'negative';

export interface Button {
  id: string;
  text: string;
  type?: BtnType;
  size?: Size;
  sizeMob?: Size;
  disabled?: boolean;
  // icon?: string;
  // iconPosition?: 'left' | 'right';
}
