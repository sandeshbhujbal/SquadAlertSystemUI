<template>
    <div class="page">
        <div class="page__header header row js-space-between ai-center">
            <h1 class="header__title">{{ currentSquadName }} Calendar</h1>
            <BliButton
                has-left-icon
                color="danger"
                size="large"
                @click="handleCreateInboundOrder">
                <base-icon
                    class="action__create-inbound-order-icon"
                    fill="#fff"
                    icon-name="Add" />
                Add Schedule
            </BliButton>
        </div>
        <div class="page__body">
            <div v-if="this.getSquadCalendarData">
                <calendar :events="calendarValues" />
            </div>
        </div>
        <div>
            <el-dialog
                title="Add Schedule"
                :visible.sync="centerDialogVisible"
                width="40%">
                <div class="modal-wrapper">
                    <div>
                        <el-select
                            class="drop-down-input"
                            v-model="addCalendarInput.picNames"
                            multiple
                            placeholder="Select"
                            size="small">
                            <el-option
                                v-for="item in userObjectList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-date-picker
                            v-model="addCalendarInput.startAndEndDates"
                            type="datetimerange"
                            range-separator="-"
                            start-placeholder="Start date"
                            end-placeholder="End date"
                            size="small">
                        </el-date-picker>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button
                        type="danger"
                        @click="centerDialogVisible = false">Close</el-button>
                    <el-button
                        type="danger"
                        @click="saveCalendarSchedule">Add Schedule</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script src="./calendar-view.js"></script>

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
