# &lt;Label&gt;&lt;/Label&gt;
A complementary element represents a caption for a user interface.

Combined with [`<Group></Group>`](https://www.npmjs.com/package/@nodestrap/group) you can create a nicely caption beside the UI.

## Preview

```jsx
<Group theme='primary' size='lg'>
    <Label>Your name</Label>
    <TextInput required={true} name='name' />
</Group>
```
Rendered to:
```html
<div role="group" class="c1 thPrimary szLg">
    <span class="c2">Your name</span>
    // ...
</div>
```

## Features
* Includes all features in [`<Basic />`](https://www.npmjs.com/package/@nodestrap/basic).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/label
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
