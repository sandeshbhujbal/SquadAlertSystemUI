<template>
    <div class="calendar">
        <vue-cal
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
    padding: 20px;
}

.vuecal__menu, .vuecal__cell-events-count {background-color: #FE5F55;}
.vuecal__title-bar {background-color: #EEF5DB;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}

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
