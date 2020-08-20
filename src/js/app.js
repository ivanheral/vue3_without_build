import {
    createApp,
    ref,
    defineComponent,
    h
} from "https://unpkg.com/vue@3.0.0-rc.6/dist/vue.runtime.esm-browser.prod.js";
// html
import {
    default as htm
} from "https://unpkg.com/htm?module";
const html = htm.bind(h);

import Input from './components/child.js';

const Child = defineComponent({
    setup() {
        const count = ref(0);
        const increase = () => {
            count.value++;
        }
        return {
            count,
            increase
        }
    },
    components: {
        Input
    },
    render() {
        return html `
        <p>${this.count}</p>
        <${Input} count=${this.count}/>
        <button onClick=${this.increase}>increase</button>`
    }
})

createApp(Child).mount("#app");