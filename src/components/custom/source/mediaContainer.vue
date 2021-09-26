<template>
<div class="power-editor-media-container" :class="[{ dark: theme === 'dark' }]" :style="{width: moveable ? `${elWidthEnd}px` : `${currentWidth}%`}">
    <div v-show="alignCenter" class="power-editor-media-control-resize-block" @mousedown="forward($event, -1)" @mouseup="stop" @touchstart="forward($event.targetTouches[0], -1)" @touchend="stop">
        <i></i>
    </div>
    <slot>
        Media Container
    </slot>
    <div class="power-editor-media-control-resize-block sec" @mousedown="forward" @mouseup="stop" @touchstart="forward($event.targetTouches[0])" @touchend="stop">
        <i></i>
    </div>
    <div class="power-editor-media-control-btn-block">
        <fv-button
            class="power-editor-media-cmd-btn"
            :theme="theme"
            fontSize="12"
            :isBoxShadow="true"
            :title="getTitle('AlignLeft')"
            @click="thisAlignCenter = false"
        >
            <i class="ms-Icon ms-Icon--AlignLeft"></i>
        </fv-button>
        <fv-button
            class="power-editor-media-cmd-btn"
            :theme="theme"
            fontSize="12"
            :isBoxShadow="true"
            :title="getTitle('AlignCenter')"
            @click="thisAlignCenter = true"
        >
            <i class="ms-Icon ms-Icon--AlignCenter"></i>
        </fv-button>
    </div>
    <fv-text-box class="power-editor-media-caption-block" :placeholder="getTitle('Write a caption...')"></fv-text-box>
</div>
</template>

<script>
export default {
    props: {
        width: {
            default: 100
        },
        alignCenter: {
            default: true
        },
        theme: {
            default: 'light'
        }
    },
    data () {
        return {
            thisAlignCenter: this.alignCenter,
            elWidthStart: 0,
            elWidthEnd: 0,
            ppi: 0,
            moveable: false,
            direction: 1,
            disX: 0,
            currentWidth: this.width,
            timer: {}
        }
    },
    watch: {
        width (val) {
            this.currentWidth = val;
        },
        currentWidth (val) {
            this.$emit("update:width", val);
        },
        alignCenter (val) {
            this.thisAlignCenter = val;
        },
        thisAlignCenter (val) {
            this.$emit("update:alignCenter", val);
        }
    },
    mounted () {
        this.Init();
    },
    methods: {
        Init () {
            let agent = event => {
                return (event.clientX - this.disX) * this.direction + this.elWidthStart * 1;
            }
            window.addEventListener ("mousemove", (event => {
                if (this.moveable) {
                    this.elWidthEnd = agent(event);
                }
            }));
            window.addEventListener ("touchmove", (event => {
                event = event.targetTouches[0];
                if (this.moveable) {
                    this.elWidthEnd = agent(event);
                }
            }));
            window.addEventListener ("mouseup", (event => {
                if (this.moveable) {
                    this.stop();
                }
                return event;
            }));
            window.addEventListener ("touchup", (event => {
                if (this.moveable) {
                    this.stop();
                }
                return event;
            }));
        },
        forward (event, direction=1) {
            this.moveable = true;
            this.disX = event.clientX;
            this.direction = direction;
            this.elWidthStart = this.$el.clientWidth;
            this.elWidthEnd = this.elWidthStart;
            this.ppi = this.currentWidth / this.elWidthStart;
        },
        stop () {
            this.moveable = false;
            if(this.elWidthEnd < 20)
                this.elWidthEnd = 20;
            this.currentWidth = this.elWidthEnd * this.ppi;
            if(this.currentWidth > 100)
                this.currentWidth = 100;
        },
        getTitle(name) {
            return name;
        }
    }
}
</script>

<style lang="scss">
.power-editor-media-container
{
    position: relative;
    min-width: 20px;
    width: 100%;
    max-width: 100%;
    height: auto;
    transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
    
    &.dark
    {
        .power-editor-media-control-resize-block
        {
            i
            {
                background: rgba(245, 245, 245, 0.6);
            }
        }
    }

    &:hover
    {
        .power-editor-media-control-resize-block, .power-editor-media-control-btn-block
        {
            opacity: 1;
        }
    }

    &:active
    {
        transform: scale(1.02);
        box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
        opacity: 0.8;
    }

    .power-editor-media-control-resize-block
    {
        position: absolute;
        left: 0px;
        top: 0px;
        min-width: 3px;
        width: 1.2%;
        max-width: 8px;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;
        cursor: e-resize;
        transition: opacity 1s;

        &.sec
        {
            left: inherit;
            right: 0px;
        }

        i
        {
            width: 90%;
            min-height: 10px;
            height: 30%;
            flex-shrink: 0;
            background: rgba(36, 36, 36, 0.6);
            border-radius: 8px;
            backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            z-index: 2;
        }
    }

    .power-editor-media-control-btn-block
    {
        position: absolute;
        right: 0px;
        top: 0px;
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 1s;

        .power-editor-media-cmd-btn
        {
            width: 25px;
            height: 25px;
            margin-left: 3px;
            flex-shrink: 0;
        }
    }

    .power-editor-media-caption-block
    {
        position: relative;
        width: 100%;
    }
}
</style>