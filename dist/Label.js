// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesNudeVariant, useNudeVariant, 
// styles:
usesBasicLayout, usesBasicVariants, Basic, } from '@nodestrap/basic';
import { 
// styles:
usesContentBasicLayout, usesContentBasicVariants, } from '@nodestrap/content';
import { 
// hooks:
usesThemeDefault, } from '@nodestrap/control';
export const useLabelVariant = (props) => {
    return {
        class: props.labelStyle ? props.labelStyle : null,
    };
};
// styles:
export const usesLabelLayout = () => {
    return composition([
        imports([
            // layouts:
            usesBasicLayout(),
            // colors:
            usesThemeDefault(),
        ]),
        layout({
            // layouts:
            display: 'inline-block',
            // positions:
            verticalAlign: 'baseline',
            // typos:
            textAlign: 'start',
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesLabelVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesBasicVariants(),
            // layouts:
            sizes(),
            usesNudeVariant(),
        ]),
        variants([
            rule('.content', [
                imports([
                    // layouts:
                    usesContentBasicLayout(),
                    // variants:
                    usesContentBasicVariants(),
                ]),
            ]),
        ]),
    ]);
};
export const useLabelSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesLabelLayout(),
            // variants:
            usesLabelVariants(),
        ]),
    ]),
]);
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
    const nudeVariant = useNudeVariant(props);
    const labelVariant = useLabelVariant(props);
    // jsx:
    return (React.createElement(Basic, { ...props, 
        // semantics:
        tag: props.tag ?? 'span', 
        // variants:
        mild: props.mild ?? true, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            nudeVariant.class,
            labelVariant.class,
        ] }));
}
export { Label as default };
