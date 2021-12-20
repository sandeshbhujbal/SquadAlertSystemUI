<template>
    <div class="page">
        <div class="page__header header row js-space-between ai-center">
            <h1 class="header__title">My Notifications</h1>
        </div>
        <BliCard
            rounded
            class="table">
            <h6>My Notifications</h6>
            <BliTable
                sort="false"
                class="inbound-order-list__table custom-table"
                type="primary"
                :titles="titles"
                :items="contents">
                <template v-for="(item, index) in contents">
                    <BliButton
                        v-if="item.status === 'OPEN'"
                        :key="item.index"
                        :slot="`button-${index}`"
                        color="danger"
                        size="small"
                        @click="acknowLedgeAlertAction(index)"> Acknowledge
                    </BliButton>
                    <BliButton
                        v-else
                        :key="item.index"
                        :slot="`button-${index}`"
                        color="danger"
                        size="small"
                        disabled> Acknowledge
                    </BliButton>
                </template>
            </BliTable>
        </BliCard>
    </div>
</template>

<script src="./notification-view.js"></script>

<style lang="scss" scoped>
.card {
    margin-top: 40px;
}

.input {
    margin-left: 30%;
    padding: 10px;
    width: 500px;
}

.button {
    margin-left: 50%;
}

.table {
    margin-top: 60px;
}

.page {
    padding: 20px
}
</style>
