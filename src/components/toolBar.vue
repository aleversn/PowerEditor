<template>
    <div
        class="power-editor-tool-bar-container"
        :class="[{ dark: thisTheme === 'dark' }]"
    >
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('bold'))"
            :foreground="getForeground(editor.isActive('bold'))"
            :title="getTitle('Bold')"
            @click="exec('toggleBold')"
        >
            <i class="ms-Icon ms-Icon--Bold"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('italic'))"
            :foreground="getForeground(editor.isActive('italic'))"
            :title="getTitle('Italic')"
            @click="exec('toggleItalic')"
        >
            <i class="ms-Icon ms-Icon--Italic"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('strike'))"
            :foreground="getForeground(editor.isActive('strike'))"
            :title="getTitle('Strikethrough')"
            @click="exec('toggleStrike')"
        >
            <i class="ms-Icon ms-Icon--Strikethrough"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('strike'))"
            :foreground="getForeground(editor.isActive('strike'))"
            :title="getTitle('Underline')"
            @click="exec('toggleUnderline')"
        >
            <i class="ms-Icon ms-Icon--Underline"></i>
        </fv-button>
        <hr>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('blockquote'))"
            :foreground="getForeground(editor.isActive('blockquote'))"
            :title="getTitle('Block Quote')"
            @click="exec('toggleBlockquote')"
        >
            <i class="ms-Icon ms-Icon--RightDoubleQuote"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Horizontal Rule')"
            @click="exec('setHorizontalRule')"
        >
            <i class="ms-Icon ms-Icon--ChromeMinimize"></i>
        </fv-button>
        <heading-callout
            :theme="thisTheme"
            :editor="editor"
            :getBackground="getBackground"
            :getForeground="getForeground"
            :execMore="execMore"
        >
            <fv-button
                class="power-editor-cmd-btn"
                :theme="thisTheme"
                :isBoxShadow="true"
                :background="getBackground(false)"
                :foreground="getForeground(false)"
                :title="getTitle('Header')"
            >
                <i class="ms-Icon ms-Icon--Header1"></i>
            </fv-button>
        </heading-callout>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('powerTaskList'))"
            :foreground="getForeground(editor.isActive('powerTaskList'))"
            :title="getTitle('TaskLogo')"
            @click="exec('togglePowerTaskList')"
        >
            <i class="ms-Icon ms-Icon--TaskLogo"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('ClearFormatting')"
            @click="exec('clearNodes')"
        >
            <i class="ms-Icon ms-Icon--ClearFormatting"></i>
        </fv-button>
        <hr>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('BulletedList')"
            @click="exec('toggleBulletList')"
        >
            <i class="ms-Icon ms-Icon--CheckList"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('NumberedList')"
            @click="exec('toggleOrderedList')"
        >
            <i class="ms-Icon ms-Icon--NumberedList"></i>
        </fv-button>
        <hr>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive({ textAlign: 'left' }))"
            :foreground="getForeground(editor.isActive({ textAlign: 'left' }))"
            :title="getTitle('AlignLeft')"
            @click="execMore('setTextAlign', 'left')"
        >
            <i class="ms-Icon ms-Icon--AlignLeft"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive({ textAlign: 'center' }))"
            :foreground="getForeground(editor.isActive({ textAlign: 'center' }))"
            :title="getTitle('AlignCenter')"
            @click="execMore('setTextAlign', 'center')"
        >
            <i class="ms-Icon ms-Icon--AlignCenter"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive({ textAlign: 'right' }))"
            :foreground="getForeground(editor.isActive({ textAlign: 'right' }))"
            :title="getTitle('AlignRight')"
            @click="execMore('setTextAlign', 'right')"
        >
            <i class="ms-Icon ms-Icon--AlignRight"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive({ textAlign: 'justify' }))"
            :foreground="getForeground(editor.isActive({ textAlign: 'justify' }))"
            :title="getTitle('AlignJustify')"
            @click="execMore('setTextAlign', 'justify')"
        >
            <i class="ms-Icon ms-Icon--AlignJustify"></i>
        </fv-button>
        <hr v-if="false">
        <fv-button
            v-if="false"
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('IncreaseIndent')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--IncreaseIndentLegacy"></i>
        </fv-button>
        <fv-button
            v-if="false"
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('DecreaseIndent')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--DecreaseIndentLegacy"></i>
        </fv-button>
        <hr>
        <color-callout
            :theme="thisTheme"
            :editor="editor"
            :getBackground="getBackground"
            :getForeground="getForeground"
            :exec="exec"
            :execMore="execMore"
        >
            <fv-button
                class="power-editor-cmd-btn"
                :theme="thisTheme"
                :isBoxShadow="true"
                :background="getBackground(false)"
                :foreground="getForeground(false, 'rgba(239, 107, 87, 1)')"
                :title="getTitle('Foreground')"
            >
                <i class="ms-Icon ms-Icon--Eyedropper"></i>
            </fv-button>
        </color-callout>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(222, 81, 140, 1)')"
            :title="getTitle('Draw')"
            @click="insertDrawingBlock"
        >
            <i class="ms-Icon ms-Icon--PenWorkspace"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(255, 180, 0, 1)')"
            :title="getTitle('Emoji2')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--Emoji2"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('codeBlock'))"
            :foreground="getForeground(editor.isActive('codeBlock'))"
            :title="getTitle('Code')"
            @click="exec('toggleCodeBlock')"
        >
            <i class="ms-Icon ms-Icon--Code"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(editor.isActive('equationBlock'))"
            :foreground="getForeground(editor.isActive('equationBlock'))"
            :title="getTitle('Code')"
            @click="insertEquationBlock"
        >
            <i class="ms-Icon ms-Icon--Variable"></i>
        </fv-button>
        <image-callout
            :theme="thisTheme"
            @insert-image="insertImg"
        >
            <fv-button
                class="power-editor-cmd-btn"
                :theme="thisTheme"
                :isBoxShadow="true"
                :background="getBackground(false)"
                :foreground="getForeground(false)"
                :title="getTitle('Image')"
            >
                <i class="ms-Icon ms-Icon--Photo2"></i>
            </fv-button>
        </image-callout>
        <link-callout
            :theme="thisTheme"
            @insert-link="insertLink"
        >
            <fv-button
                class="power-editor-cmd-btn"
                :theme="thisTheme"
                :isBoxShadow="true"
                :background="getBackground(false)"
                :foreground="getForeground(false)"
                :title="getTitle('Link')"
            >
                <i class="ms-Icon ms-Icon--Link"></i>
            </fv-button>
        </link-callout>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Video')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--Video"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(73, 150, 180, 1)')"
            :title="getTitle('Undo')"
            @click="exec('undo')"
        >
            <i class="ms-Icon ms-Icon--Undo"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(73, 150, 180, 1)')"
            :title="getTitle('Redo')"
            @click="exec('redo')"
        >
            <i class="ms-Icon ms-Icon--Redo"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Save')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--Save"></i>
        </fv-button>
    </div>
</template>

<script>
import linkCallout from "@/components/menus/linkCallout.vue";
import colorCallout from "@/components/menus/colorCallout.vue";
import imageCallout from "@/components/menus/imageCallout.vue";
import headingCallout from "@/components/menus/headingCallout.vue";

export default {
    components: {
        linkCallout,
        colorCallout,
        imageCallout,
        headingCallout,
    },
    props: {
        editor: {
            default: () => {
                return {};
            },
        },
        theme: {
            default: "light",
        },
    },
    data() {
        return {
            thisTheme: this.theme,
        };
    },
    watch: {
        theme(val) {
            this.thisTheme = val;
        },
        thisTheme(val) {
            this.$emit("update:theme", val);
        },
    },
    computed: {
        highlightColor() {
            if (this.thisTheme === "dark")
                return {
                    f: "rgba(36, 36, 36, 1)",
                    b: "whitesmoke",
                };
            return {
                f: "whitesmoke",
                b: "rgba(36, 36, 36, 1)",
            };
        },
    },
    mounted() {
        this.thisTheme = this.theme;
    },
    methods: {
        getTitle(name) {
            return name;
        },
        getForeground(
            state,
            color = {
                light: "rgba(65, 74, 90, 1)",
                dark: "rgba(245, 245, 245, 1)",
            }
        ) {
            if (state) return this.highlightColor.f;
            if (typeof color === "string") return color;
            return color[this.thisTheme];
        },
        getBackground(state) {
            if (state) return this.highlightColor.b;
            return "";
        },
        exec(cmd) {
            if (cmd) this.editor.chain().focus()[cmd]().run();
        },
        execMore(name, params) {
            this.editor.chain().focus()[name](params).run();
        },
        insert(html) {
            this.editor.commands.insertContent(html);
        },
        insertImg(base64_list) {
            base64_list.forEach((el) => {
                this.insert(`<image-block src="${el}"></image-block>\n`);
            });
        },
        insertLink(link) {
            this.editor.chain().focus().insertContent(link).run();
        },
        insertInlineEquation () {
            this.editor.chain().focus().insertContent(`<inline-equation></inline-equation>`).run();
        },
        insertEquationBlock () {
            this.editor.chain().focus().insertContent(`<equation-block></equation-block>`).run();
        },
        insertDrawingBlock () {
            this.editor.chain().focus().insertContent(`<drawing-block></drawing-block>`).run();
        }
    },
};
</script>

<style lang="scss">
@import "office-ui-fabric-core/src/sass/_References.scss";

.power-editor-tool-bar-container {
    position: absolute;
    left: 5px;
    top: 5px;
    width: calc(100% - 10px);
    height: 60px;
    padding-right: 5px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    z-index: 2;
    overflow-x: auto;

    &.dark {
        background: rgba(0, 0, 0, 0.8);
    }

    .power-editor-cmd-btn {
        width: 45px;
        height: 45px;
        margin-left: 5px;
        flex-shrink: 0;
    }

    hr {
        width: 1.5px;
        margin-left: 5px;
        height: 30px;
        flex-shrink: 0;
        background: rgba(230, 230, 230, 1);
        border: none;
        border-radius: 2px;
    }
}
</style>