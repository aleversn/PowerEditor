<template>
<node-view-wrapper class="power-editor-image-container" :style="{ 'justify-content': node.attrs.alignCenter ? 'center' : 'flex-start' }">
    <media-container :width.sync="node.attrs.width" :alignCenter.sync="node.attrs.alignCenter" :theme="node.attrs.theme">
        <fv-img :src="img" style="width: 100%; height: auto;"></fv-img>
    </media-container>
</node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-2'
import mediaContainer from './mediaContainer.vue';

import img from '@/assets/logo.png';
export default {
    components: {
        NodeViewWrapper,
        mediaContainer
    },
    props: nodeViewProps,
    data () {
        return {
            img: img
        }
    },
    watch: {
        
    }
}
</script>

<style lang="scss">
.power-editor-image-container
{
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>