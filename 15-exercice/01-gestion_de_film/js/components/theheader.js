import TheNavigationHeader from './thenavigationheader.js';

const TheHeader = {
    name: 'Header',
    data() {
        return {
            headerStyle: {
                display: 'flex',
                'justify-content': 'space-between',
                'align-items': 'center',
                'background-color': "#212529",
                color: 'white',
                'margin-bottom': '15px'
            }
        }
    },
    methods: {
        sendSearchToApp(event) {
            this.$emit('send-search-parent', event);
        }
    },
    template: `
        <header :style="headerStyle">
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