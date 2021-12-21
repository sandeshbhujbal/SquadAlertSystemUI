<template>
    <div class="page">
        <div class="page__header header row js-space-between ai-center">
            <h1 class="header__title">{{ currentUserName }}'s Calendar</h1>
        </div>
        <div class="page__body">
            <div v-if="this.getMyCalendarData">
                <calendar :events="calendarValues" />
            </div>
        </div>
    </div>
</template>

<script src="./my-calendar-view.js"></script>

<style lang="scss" scoped>
.modal-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.drop-down-input {
    width: 75%;
}
</style>
