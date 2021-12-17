<template>
    <div class="page">
        <div class="page__header header row js-space-between ai-center">
            <h1 class="header__title">Squad Calendar</h1>
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
            <div>
                <calendar />
            </div>
        </div>
        <div>
            <BliModal
                :bli-active.sync="visibleModal"
                @maskClick="visibleModal = false"
                placement="mobile-bottom desktop-center">
                <BliModalContainer class="your-modal-width">
                    <BliModalClose @close="visibleModal=false" />
                    <div class="put-your-modal-style-here">
                        <h4>Add Schedule</h4>
                        <div class="your-modal-content">
                            <!-- <div>Content start</div> -->
                            <BliField class="input">
                                <BliInput placeholder="Squad-Name" />
                            </BliField>
                            <BliField class="input">
                                <BliInput placeholder="description" />
                            </BliField>
                            <BliField class="input">
                                <BliDropdown
                                    v-model="value"
                                    @trigger="openDatePicker"
                                    selection
                                    right-icon>
                                    <label slot="label">Select Date</label>
                                    <BliIconCalendar slot="right-icon" />
                                </BliDropdown>
                                <BliDatepicker
                                    :show-datepicker="showDatePicker"
                                    :time-zone=0
                                    @selected="updateValue"
                                    @close="closeDatePicker"
                                    @maskClick="closeDatePicker" />
                            </BliField>
                            <!-- <div>Content end</div> -->
                        </div>
                        <div class="your-modal-footer">
                            <BliButton
                                color="info"
                                @click="visibleModal = false">Primary action</BliButton>
                            <BliButton
                                color="info"
                                outline
                                @click="visibleModal = false">Secondary action</BliButton>
                        </div>
                    </div>
                </BliModalContainer>
            </BliModal>
        </div>
    </div>
</template>

<script src="./calendar-view.js"></script>

<style lang="scss" scoped>
.input-card {
    display: flex;
    gap: 10px;
    margin: 10px;
}

.your-modal-width {
    max-width: 700px;
    // !only width, do not write any css style in modal container
}

.put-your-modal-style-here {
    padding: 24px;

    .your-modal-content {
        max-height: calc(100vh - 250px);
        padding: 10px;

        .input {
            padding: 10px;
        }
    }

    .your-modal-footer {
        margin-top: 24px;
        display: flex;
        gap: 8px;
        flex-direction: row-reverse;
    }
}
</style>
