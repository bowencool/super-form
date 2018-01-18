<template lang="pug" functional>
  svg.svg-icon(aria-hidden="true")
    use(:xlink:href="`#icon-${props.icon}`")
</template>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.05em;
  fill: currentColor;
  overflow: hidden;
}
</style>

