<template>
    <node-view-wrapper
        v-if="node"
        :as="node.attrs.tag"
        class="power-editor-equation-container"
        :class="{div:node.attrs.tag == 'div'}"
    >
        <transition name="power-editor-equation-popper-fade">
            <div
                v-show="node.attrs.showPopper"
                class="power-editor-equation-popper-container"
                :style="{left: `${left}px`, top: `${top}%`}"
                @keyup.enter="!lock ? close() : ''"
            >
                <input
                    v-model="node.attrs.value"
                    class="power-editor-equation-popper-input"
                    :placeholder="node.attrs.placeholder"
                    ref="input"
                />
                <fv-button
                    class="power-editor-equation-popper-btn"
                    :disabled="lock"
                    @click="close"
                >Confirm</fv-button>
            </div>
        </transition>
        <span
            class="power-editor-equation-target"
            :placeholder="node.attrs.emptyPlaceholder"
            :class="{empty:node.attrs.value === ''}"
            v-html="node.attrs.value === '' ? node.attrs.emptyPlaceholder : equationString"
            ref="target"
            :style="{color: `${lock ? 'red' : ''}`}"
            @click="show"
        ></span>
    </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper } from "@tiptap/vue-2";

export default {
    components: {
        NodeViewWrapper,
    },
    props: {
        // the editor instance
        editor: {
            type: Object,
        },

        // the current node
        node: {
            type: Object,
        },

        // an array of decorations
        decorations: {
            type: Array,
        },

        // `true` when there is a `NodeSelection` at the current node view
        selected: {
            type: Boolean,
        },

        // access to the node extension, for example to get options
        extension: {
            type: Object,
        },

        // get the document position of the current node
        getPos: {
            type: Function,
        },

        // update attributes of the current node
        updateAttributes: {
            type: Function,
        },

        // delete the current node
        deleteNode: {
            type: Function,
        },
    },
    data() {
        return {
            left: 0,
            top: 100,
            backup: "",
            equationString: "",
            errorMsg: "",
            lock: false,
        };
    },
    watch: {
        "node.attrs.showPopper"(val) {
            if (val) {
                this.showPos();
                this.backup = this.node.attrs.value;
            }
        },
        "node.attrs.value"(val) {
            if (val === "") {
                this.equationString = "";
                this.lock = false;
            } else this.render();
        },
    },
    mounted() {
        this.outSideClickInit();
        this.render();
        setTimeout(() => {
            if(this.node.attrs.value === '')
                this.show();
        }, 300);
    },
    methods: {
        outSideClickInit() {
            window.addEventListener("click", (event) => {
                if (!this.node.attrs.showPopper) return 0;
                let x = event.target;
                let _self = false;
                while (x && x.tagName && x.tagName.toLowerCase() != "body") {
                    if (x == this.$el) {
                        _self = true;
                        break;
                    }
                    x = x.parentNode;
                }
                if (!_self) this.closeWithBackup();
            });
        },
        render() {
            try {
                this.equationString = this.$katex.renderToString(
                    this.node.attrs.value,
                    {
                        throwOnError: true,
                    }
                );
                this.lock = false;
            } catch (e) {
                if (e instanceof this.$katex.ParseError) {
                    // KaTeX can't parse the expression
                    this.errorMsg = (
                        "Error in LaTeX '" +
                        this.node.attrs.value +
                        "': " +
                        e.message
                    )
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");
                } else {
                    throw e; // other error
                }
                this.lock = true;
            }
        },
        showPos() {
            let el = this.$refs.target;
            let bottom = el.getBoundingClientRect().bottom;
            let left = el.getBoundingClientRect().left;
            if (bottom < 50) this.top = -100;
            else this.top = 100;
            if (left + 300 > document.body.clientWidth)
                this.left = document.body - 300 - left;
            else this.left = 0;
        },
        show() {
            this.updateAttributes({
                showPopper: true,
            });
            setTimeout(() => {
                this.$refs.input.focus();
            }, 300);
        },
        close() {
            this.updateAttributes({
                showPopper: false,
            });
        },
        closeWithBackup() {
            this.close();
            this.updateAttributes({
                value: this.backup,
            });
        },
    },
};
</script>

<style lang="scss">
.power-editor-equation-container {
    position: relative;
    width: auto;
    height: auto;

    &.div
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .power-editor-equation-popper-container {
        position: absolute;
        left: 0px;
        top: 100%;
        width: 300px;
        height: 35px;
        padding: 5px;
        background: whitesmoke;
        border-radius: 3px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

        .power-editor-equation-popper-btn {
            width: 80px;
            margin-left: 5px;
        }

        .power-editor-equation-popper-input {
            height: 100%;
            padding-left: 5px;
            flex: 1;
            border: none;
            border-radius: 3px;
            outline: none;
        }
    }

    .power-editor-equation-target {
        user-select: all;

        &.empty {
            color: rgba(200, 200, 200, 0.8);
        }

        &:hover {
            background: rgba(200, 200, 200, 0.6);
        }
    }

    .power-editor-equation-popper-fade-enter-active {
        transition: opacity 0.1s ease-out, transform 0.1s ease-out;
    }

    .power-editor-equation-popper-fade-enter {
        transform: scale(0);
        opacity: 0;
    }

    .power-editor-equation-popper-fade-enter-to {
        transform: scale(1);
        opacity: 1;
    }

    .power-editor-equation-popper-fade-leave-active {
        transition: transform 0.1s ease-out;
    }

    .power-editor-equation-popper-fade-leave {
        transform: scale(1);
    }

    .power-editor-equation-popper-fade-leave-to {
        transform: scale(0);
    }
}
</style>