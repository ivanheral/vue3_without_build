import {
    defineComponent,
    h,
    ref
} from "https://unpkg.com/vue@3.0.0-rc.6/dist/vue.runtime.esm-browser.prod.js";
// html
import {
    default as htm
} from "https://unpkg.com/htm?module";
const html = htm.bind(h);

const Text = defineComponent({
    props: ["count"],
    data() {
        return {
            message: 'example'
        }
    },
    setup() {
        const text = ref('');
        const test = (event) => {
            text.value = event.target.value;
        }
        return {
            test,
            text
        }
    },
    render() {
        return html `<p>${this.count}</p>
        <label style="display: block;">${this.message}</label>
        <input value="${this.text}" onKeydown=${this.test} placeholder="edit me" />
        <p>${this.text}</p>`
    }
})

export default Text;