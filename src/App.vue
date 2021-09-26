<template>
    <div id="app">
        <editor style="width: 50%;"></editor>
        <image-block></image-block>
    </div>
</template>

<script>
import editor from "@/views/editor.vue";
import imageBlock from "@/components/custom/source/imageBlock.vue";

export default {
    name: "App",
    components: {
        editor,
        imageBlock,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
