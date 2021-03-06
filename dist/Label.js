// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
// rules:
rule, variants, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, 
// styles:
usesBasicLayout, usesBasicVariants, Basic, } from '@nodestrap/basic';
import { 
// styles:
usesContentBasicLayout, usesContentBasicVariants, } from '@nodestrap/content';
export const useLabelVariant = (props) => {
    return {
        class: props.labelStyle ? props.labelStyle : null,
    };
};
// styles:
export const usesLabelLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesBasicLayout(),
        ]),
        ...style({
            // layouts:
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            // positions:
            verticalAlign: 'baseline',
            // typos:
            textAlign: 'start',
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesLabelVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesBasicVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule('.content', {
                ...imports([
                    // layouts:
                    usesContentBasicLayout(),
                    // variants:
                    usesContentBasicVariants(),
                ]),
            }),
        ]),
    });
};
export const useLabelSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesLabelLayout(),
        // variants:
        usesLabelVariants(),
    ])),
], /*sheetId :*/ 'si01upz9vr'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'lb' });
export function Label(props) {
    // styles:
    const sheet = useLabelSheet();
    // variants:
    const labelVariant = useLabelVariant(props);
    // jsx:
    return (React.createElement(Basic, { ...props, 
        // semantics:
        tag: props.tag ?? 'span', 
        // variants:
        theme: props.theme ?? 'secondary', mild: props.mild ?? true, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            labelVariant.class,
        ] }));
}
export { Label as default };
