<template>
    <header :style="headerStyle">
        <h1>Mon site</h1>
        <!-- <TheNavigationHeader @send-search="$emit('send-search-parent', $event)"></TheNavigationHeader> -->
        <the-navigation-header @send-search="$emit('send-search-parent', $event)"></the-navigation-header>
    </header>
</template>

<script>
    import TheNavigationHeader from './TheNavigationHeader';

    const TheHeader = {
        name: 'Header',
        components: {
            TheNavigationHeader
        }
    }

    export default TheHeader;
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #212529;
        color: white;
        margin-bottom: 15px;
        padding: 10px
    }
</style>