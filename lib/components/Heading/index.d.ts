import React from 'react';
export declare type HeadingProps = {
    children: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'big';
    color?: 'white' | 'gray' | 'black';
    bold?: boolean;
    uppercase?: boolean;
} & React.HTMLAttributes<HTMLElement>;
export declare const Heading: React.FC<HeadingProps>;
