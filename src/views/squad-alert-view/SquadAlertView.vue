<template>
    <div class="page">
        <div class="page__header header row js-space-between ai-center">
            <h1 class="header__title">{{ currentSquadName }} Alerts</h1>
        </div>
        <BliCard
            rounded
            class="table">
            <h6>{{ currentSquadName }} Alerts</h6>
            <el-tabs
                @tab-click="fetchTableData"
                type="border-card"
                v-model="activeTabName">
                <el-tab-pane 
                    name="Open Alerts"
                    label="Open Alerts">
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
                </el-tab-pane>
                <el-tab-pane 
                    name="Acknowledged Alerts"
                    label="Acknowledged Alerts">
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
                </el-tab-pane>
            </el-tabs>
        </BliCard>
    </div>
</template>

<script src="./squad-alert-view.js"></script>

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
