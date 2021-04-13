import TheNavigationHeader from './thenavigationheader.js';

const TheHeader = {
    name: 'Header',
    data() {
        return {

        }
    },
    template: `
        <header>
            <h1>Super Site !</h1>
            <TheNavigationHeader></TheNavigationHeader>
        </header>
    `,
    components: {
        TheNavigationHeader
    }
}

export default TheHeader;