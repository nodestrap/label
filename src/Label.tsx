// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import {
    // compositions:
    composition,
    mainComposition,
    imports,
    
    
    
    // layouts:
    layout,
    
    
    
    // rules:
    variants,
    rule,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
    usesSuffixedProps,
    overwriteProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap components:
import {
    // hooks:
    usesSizeVariant,
    usesNudeVariant,
    NudeVariant,
    useNudeVariant,
    
    
    
    // styles:
    usesBasicLayout,
    usesBasicVariants,
    
    
    
    // react components:
    BasicProps,
    Basic,
}                           from '@nodestrap/basic'
import {
    // styles:
    usesContentBasicLayout,
    usesContentBasicVariants,
}                           from '@nodestrap/content'
import {
    // hooks:
    usesThemeDefault,
}                           from '@nodestrap/control'



// hooks:

// appearances:

export type LabelStyle = 'content' // might be added more styles in the future
export interface LabelVariant {
    labelStyle?: LabelStyle
}
export const useLabelVariant = (props: LabelVariant) => {
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
            display        : 'inline-block', // use inline block, so it takes the width & height as we set
            
            
            
            // positions:
            verticalAlign  : 'baseline',     // label's text should be aligned with sibling text, so the label behave like <span> wrapper
            
            
            
            // typos:
            textAlign      : 'start',        // flow to the document's writing flow
            
            
            
            // customize:
            ...usesGeneralProps(cssProps),   // apply general cssProps
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
            rule('.content', [ // content
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



// react components:

export interface LabelProps<TElement extends HTMLElement = HTMLElement>
    extends
        BasicProps<TElement>,
        
        // layouts:
        NudeVariant,
        
        // appearances:
        LabelVariant
{
    // children:
    children? : React.ReactNode
}
export function Label<TElement extends HTMLElement = HTMLElement>(props: LabelProps<TElement>) {
    // styles:
    const sheet        = useLabelSheet();
    
    
    
    // variants:
    const nudeVariant  = useNudeVariant(props);
    const labelVariant = useLabelVariant(props);

    
    
    // jsx:
    return (
        <Basic<TElement>
            // other props:
            {...props}
            
            
            // semantics:
            tag={props.tag ?? 'span'}
            
            
            // variants:
            mild={props.mild ?? true}
            
            
            // classes:
            mainClass={props.mainClass ?? sheet.main}
            variantClasses={[...(props.variantClasses ?? []),
                nudeVariant.class,
                labelVariant.class,
            ]}
        />
    );
}
export { Label as default }
