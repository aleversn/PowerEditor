import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import imageBlock from '../source/imageBlock.vue'

export default Node.create({
    name: 'imageblock',

    group: 'block',

    draggable: true,

    atom: true,

    addAttributes() {
        return {
            src: {
                default: "",
                type: String
            },
            width: {
                default: 100,
                type: Number
            },
            caption: {
                default: '',
                type: String
            },
            alignCenter: {
                default: true,
                type: Boolean
            },
            theme: {
                default: 'light',
                type: String
            }
        }
    },

    parseHTML() {
        return [
            {
                tag: 'image-block',
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['image-block', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(imageBlock)
    },
})