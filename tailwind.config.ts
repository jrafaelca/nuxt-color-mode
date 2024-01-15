import type {Config} from 'tailwindcss'
import FormPlugin from '@tailwindcss/forms'

export default <Partial<Config>>{
    darkMode: 'class',
    content: [],
    theme: {
        extend: {},
    },
    plugins: [
        FormPlugin
    ],
}

