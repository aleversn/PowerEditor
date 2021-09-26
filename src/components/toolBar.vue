<template>
    <div class="power-editor-tool-bar-container">
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
        <fv-callout
            :lockScroll="true"
            :position="'bottomCenter'"
            :beak="12"
            :space="0"
            :theme="thisTheme"
            :popperClass="'power-editor-header-callout'"
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
            <header>
                <p style="font-size: 13.8px;">Headers</p>
            </header>
            <main>
                <fv-button
                    v-for="i in 6"
                    :key="i"
                    class="power-editor-cmd-btn"
                    :theme="thisTheme"
                    :isBoxShadow="true"
                    :background="getBackground(editor.isActive('heading', { level: i }))"
                    :foreground="getForeground(editor.isActive('heading', { level: i }))"
                    :title="getTitle('Horizontal Rule')"
                    @click="execMore('toggleHeading', { level: i })"
                >H{{i}}</fv-button>
            </main>
        </fv-callout>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Clear Formatting')"
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
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(239, 107, 87, 1)')"
            :title="getTitle('Foreground')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--Eyedropper"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false, 'rgba(222, 81, 140, 1)')"
            :title="getTitle('Background')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--BucketColor"></i>
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
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Image')"
            @click="insert(`<image-block></image-block>`)"
        >
            <i class="ms-Icon ms-Icon--Photo2"></i>
        </fv-button>
        <fv-button
            class="power-editor-cmd-btn"
            :theme="thisTheme"
            :isBoxShadow="true"
            :background="getBackground(false)"
            :foreground="getForeground(false)"
            :title="getTitle('Link')"
            @click="exec('')"
        >
            <i class="ms-Icon ms-Icon--Link"></i>
        </fv-button>
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
export default {
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
            thisTheme: "light",
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
        getForeground(state, color = "rgba(65, 74, 90, 1)") {
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
        insert (html) {
            this.editor.commands.insertContent(html);
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

    .power-editor-cmd-btn {
        width: 45px;
        height: 45px;
        margin-left: 5px;
        flex-shrink: 0;
    }

    hr
    {
        width: 1.5px;
        margin-left: 5px;
        height: 30px;
        flex-shrink: 0;
        background: rgba(230, 230, 230, 1);
        border: none;
        border-radius: 2px;
    }

    
}

.power-editor-header-callout
{
    div.main
    {
        height: auto;
        padding: 5px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        .power-editor-cmd-btn {
            width: 45px;
            height: 45px;
            margin-top: 5px;
            flex-shrink: 0;
        }
    }
}
</style>