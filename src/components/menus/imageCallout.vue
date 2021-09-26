<template>
    <fv-callout
        :visible.sync="show"
        :lockScroll="true"
        :position="'bottomCenter'"
        :beak="12"
        :space="0"
        :theme="theme"
        :popperClass="'power-editor-image-callout'"
    >
        <slot></slot>
        <header>
            <p style="font-size: 13.8px;">Insert Image</p>
        </header>
        <main>
            <div class="power-editor-i-c-block">
                <p class="power-editor-i-c-title">Method 1</p>
                <i class="ms-Icon ms-Icon--Photo2Add power-editor-i-c-icon-1" @click="$refs.img_local.click()"></i>
                <p style="margin-top: 15px; font-size: 12px; color: rgba(95, 95, 95, 0.8);">Choose Local Image as Base64 (multiple).</p>
                <input
                    type="file"
                    accept="image/gif,image/png,image/jpeg,image/x-png"
                    multiple="true"
                    style="display: none;"
                    ref="img_local"
                    @change="insertLocal"
                />
            </div>
            <div class="power-editor-i-c-block">
                <p class="power-editor-i-c-title">Method 2</p>
                <fv-text-box
                    v-model="url"
                    placeholder="Insert Image Url."
                    style="width: 90%; border: thin; outline: none;"
                    ref="img_link"
                />
            </div>
            <div class="power-editor-i-c-control-block">
                <fv-button
                    theme="dark"
                    background="rgba(222, 109, 149, 1.00)"
                    @click="insert"
                >Insert</fv-button>
            </div>
        </main>
    </fv-callout>
</template>

<script>
export default {
    props: {
        theme: {
            default: "light",
        }
    },
    data () {
        return {
            url: '',
            show: false
        }
    },
    watch: {
        show (val) {
            if(!val) {
                this.url = [];
                this.$refs.img_local.value = '';
            }
        }
    },
    methods: {
        insert () {
            this.$emit("insert-image", [this.url]);
            this.show = false;
        },
        async insertLocal () {
            let files = this.$refs.img_local.files;
            if(files.length < 1)
                return 0;
            let base64_list = [];
            for(let file of files) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                let base64 = await new Promise(resolve => {
                    reader.onload = event => {
                        resolve(event.target.result);
                    }
                });
                base64_list.push(base64);
            }
            this.$emit("insert-image", base64_list);
            this.show = false;
        }
    }
};
</script>

<style lang="scss">
.power-editor-image-callout {
    div.main {
        width: 300px;
        height: auto;
        padding: 5px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;

        .power-editor-i-c-block {
            position: relative;
            width: 100%;
            height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .power-editor-i-c-title {
                position: relative;
                width: 100%;
                font-size: 13px;
                color: rgba(36, 36, 36, 0.8);
                text-align: left;
                text-indent: 15px;
            }

            .power-editor-i-c-icon-1 {
                position: relative;
                width: 30px;
                height: 30px;
                margin-top: 15px;
                background: transparent;
                border: thin;
                font-size: 36px;
                color: rgba(222, 109, 149, 1);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                outline: none;
                cursor: pointer;
            }
        }

        .power-editor-i-c-control-block {
            width: 300px;
            margin-top: 15px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
}
</style>