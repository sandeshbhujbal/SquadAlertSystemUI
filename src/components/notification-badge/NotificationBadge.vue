<template>
    <span @click="routeToNotificationListing" class="notification">
        <base-icon
            slot="left-icon"
            icon-name="Notification" 
            :color="'#EEF5DB'"/>
        <span class="badge">10</span>
    </span>
</template>

<style lang="scss" scoped>
.notification {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    position: relative;
    display: inline-block;
    border-radius: 2px;
}

.notification:hover {
    background: #FE5F55;
}

.notification .badge {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px 10px;
    border-radius: 50%;
    background: #EEF5DB;
    color: #4d4e4b;
}
</style>

<script src="./notification-badge.js"></script>
