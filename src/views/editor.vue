<template>
    <div class="power-editor-container">
        <tool-bar
            v-if="editor"
            :editor="editor"
        ></tool-bar>
        <div class="tip-tap-editor-container">
            <editor-content
                class="tip-tap-editor"
                :editor="editor"
            />
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import ImageBlock from "@/components/custom/extension/imageBlock.js";

import toolBar from "@/components/toolBar.vue";

export default {
    components: {
        EditorContent,
        toolBar,
    },
    data() {
        return {
            editor: null,
        };
    },

    mounted() {
        this.editor = new Editor({
            content: `<p>I’m running tiptap with Vue.js. 🎉</p>`,
            extensions: [
                StarterKit,
                Underline,
                TextAlign.configure({
                    types: ["heading", "paragraph"],
                }),
                ImageBlock
            ],
        });
    },

    beforeDestroy() {
        this.editor.destroy();
    },
};
</script>

<style lang="scss">
.power-editor-container {
    position: relative;
    width: 300px;
    height: 600px;
    background: rgba(240, 240, 240, 2);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip-tap-editor-container {
        position: relative;
        width: 100%;
        height: 100%;
        flex: 1;
        padding: 0px 5px;
        padding-top: 60px;
        box-sizing: border-box;
        overflow: auto;

        .tip-tap-editor {
            position: relative;
            width: 100%;
            margin-top: 15px;
            min-height: 95%;
            padding: 15px;
            background: white;
            box-sizing: border-box;
        }

        .ProseMirror {
            > * + * {
                margin-top: 0.75em;
            }

            ul,
            ol {
                padding: 0 1rem;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                line-height: 1.1;
            }

            code {
                background-color: rgba(#616161, 0.1);
                color: #616161;
            }

            pre {
                background: #0d0d0d;
                color: #fff;
                font-family: "JetBrainsMono", monospace;
                padding: 0.75rem 1rem;
                border-radius: 0.5rem;

                code {
                    color: inherit;
                    padding: 0;
                    background: none;
                    font-size: 0.8rem;
                }
            }

            img {
                max-width: 100%;
                height: auto;
            }

            blockquote {
                padding-left: 1rem;
                border-left: 2px solid rgba(#0d0d0d, 0.1);
            }

            hr {
                border: none;
                border-top: 2px solid rgba(#0d0d0d, 0.1);
                margin: 2rem 0;
            }
        }
    }
}
</style>