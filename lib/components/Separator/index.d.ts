import React from 'react';
export declare type SeparatorProps = {
    color?: string;
    marginTop?: string;
    marginBottom?: string;
} & React.HTMLAttributes<HTMLElement>;
export declare const Separator: ({ color, marginTop, marginBottom, ...props }: SeparatorProps) => JSX.Element;
