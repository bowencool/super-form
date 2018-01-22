<template lang="pug" functional>
  svg.icon-svg(aria-hidden="true" :class="[props.icon]")
    use(:xlink:href="`#icon-${props.icon}`")
</template>

<style lang="less">
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.05em;
  fill: currentColor;
  overflow: hidden;
}
</style>

