<template>
    <div class="calendar">
        <vue-cal
            class="vuecal--blue-theme"
            selected-date="2021-12-16"
            :time-from="0 * 60"
            :time-to="23 * 60"
            :disable-views="['years', 'year', 'month']"
            :events="events"
            :on-event-click="asa">
        </vue-cal>
        <div>
            <modal-component
                v-if="openModal"
                name="createCostModal"
                :handleCloseModal="() => {openModal = false}"
                :selectWidth="35"
                :title="modalHeaders.title">
                <template slot="body">
                </template>
            </modal-component>
        </div>
    </div>
</template>

<script src="./calendar.js"></script>

<style>
.calendar {
    height: 80vh;
}

.vuecal__event.health {
    background-color: rgba(255, 102, 102, 0.9);
    border: 1px solid rgb(235, 82, 82);
    color: #fff;
}

.vuecal__event.sport {
    background-color: rgba(255, 102, 102, 0.9);
    border: 1px solid rgb(235, 82, 82);
    color: #fff;
}
</style>
