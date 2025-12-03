import { ReactNode } from 'react';

export interface IconButtonI {
  icon: ReactNode;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  onPress?: () => void;
}

export interface ButtonI {
  onPress?: () => void;
  style?: any;
  mode?: 'flat';
  children: ReactNode;
}

export interface ExploreI {
  title: string;
  percentage: string;
  avatars: string[];
}

export interface ModalI {
  isOpen: boolean;
  onClose: () => void;
}

export interface AssetType {
  image: ReactNode;
  id: string;
  title: string;
  coin: string;
  valueInCoin: string;
  valueInUsd: string;
  gain?: string;
  loss?: string;
}
