<template>
    <div
        v-show="showFooter"
        class="the-footer font-lightgrey row ai-center js-center"
    >
        &#169; {{ new Date().getFullYear() }} PT. Global Digital Niaga
    </div>
</template>

<script src="./the-footer.js"></script>

<style lang="scss" scoped>
    .the-footer {
        padding: 12px 0;
    }
</style>
