import { default as React } from 'react';
import { NudeVariant, BasicProps } from '@nodestrap/basic';
export declare type LabelStyle = 'content';
export interface LabelVariant {
    labelStyle?: LabelStyle;
}
export declare const useLabelVariant: (props: LabelVariant) => {
    class: "content" | null;
};
export declare const usesLabelLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesLabelVariants: () => import("@cssfn/cssfn").Rule;
export declare const useLabelSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface LabelProps<TElement extends HTMLElement = HTMLElement> extends BasicProps<TElement>, NudeVariant, LabelVariant {
    children?: React.ReactNode;
}
export declare function Label<TElement extends HTMLElement = HTMLElement>(props: LabelProps<TElement>): JSX.Element;
export { Label as default };
