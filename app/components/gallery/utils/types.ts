/* eslint-disable no-unused-vars */
export interface ImageProps {
    key: string;
    // rest to be filled in by a cloudflare worker
    // height: string;
    // width: string;
    // public_id: string;
    // format: string;
    // blurDataUrl: string;
  }
  
  export interface SharedModalProps {
    index: number;
    images?: ImageProps[];
    currentPhoto?: ImageProps;
    changePhotoId: (newVal: number) => void;
    closeModal: () => void;
    navigation: boolean;
    direction?: number;
  }