# tailwindcss-skeleton-screen
Just add the class. Not by width or height, but by number of characters.

![](.github/main.png)

## Concept

`As close as possible to normal markup`

Skeleton display is performed only when there are no children.  
Just add the class of `ss-text-[n]`.

```jsx
{/* Skeleton displayed only if empty */}
<p className="text-base text-gray-600 ss-text-[71]">{text}</p>
```



### Differences from Others

![](.github/diff_others.png)

[PR for checking diff](https://github.com/t4y3/tailwindcss-skeleton-screen/pull/2/files)

### Number of characters, not Height and width
```html
<!-- ❌ -->
<div class="h-4 w-full bg-gray-200"></div>
```

```html
<-- 😍 -->
<p class="ss-text-[24]"></p>
```

### Wrapping of long sentences is also supported
```html
<!-- ❌ -->
<div class="h-4 max-w-[360px] bg-gray-200 mb-2.5"></div>
<div class="h-4 max-w-[360px] bg-gray-200 mb-2.5"></div>
<div class="h-4 max-w-[360px] bg-gray-200 mb-2.5"></div>
<div class="h-4 max-w-[80px] bg-gray-200"></div>
```

```html
<-- 😍 -->
<p class="text-base text-gray-600 ss-text-[71]"></p>
```

## Installation
Install the plugin from npm:

```shell
npm install -D tailwindcss-skeleton-screen
```

Then add the plugin to your tailwind.config.js file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      skeletonScreen: {
        color: '#d0d0d0', // optional
        borderRadius: "4px" // optional
      }
    }
  },
  plugins: [
    require('tailwindcss-skeleton-screen')
  ]
};

```

## Basic usage
- Only the number of characters is specified.
- The height can be changed by font-size and light-height, so there is no need to specify it for skeleton.


| class           |   |
|-----------------|---|
| ss-object       | Display skeleton with background-color |
| ss-text-[n]     | Display skeleton for n characters |
| ss-text-[n/n/n] | The number of characters per line can be specified by separating each line with a "slash (/)". |

