import TheNavigationHeader from './thenavigationheader.js';

const TheHeader = {
    name: 'Header',
    data() {
        return {

        }
    },
    methods: {
        sendSearchToApp(event) {
            this.$emit('send-search-parent', event);
        }
    },
    template: `
        <header>
            <h1>Mon site</h1>
            <!-- <TheNavigationHeader @send-search="$emit('send-search-parent', $event)"> -->
            <TheNavigationHeader @send-search="sendSearchToApp($event)">
            </TheNavigationHeader>
        </header>
    `,
    components: {
        TheNavigationHeader
    }
}

export default TheHeader;