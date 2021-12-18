<template>
    <div class="page">
        <BliCard
            rounded
            class="card">
            <div class="input">
                <BliField>
                    <BliInput v-model="pageInputs.pagingEmailAddress" />
                    <span slot="field-unit">@gdn-commerce.com</span>
                </BliField>
            </div>
            <div
                v-if="pageInputs.pagingEmailAddress.length > 7"
                class="input">
                <BliDropdown
                    v-model="pageInputs.severity"
                    selection>
                    <label slot="label">This is label</label>
                    <BliList scrollable>
                        <BliListItem
                            v-for="item in items"
                            :key="item.key"
                            :value="item.value">
                            {{item.value}}
                        </BliListItem>
                    </BliList>
                </BliDropdown>
            </div>
            <div
                v-if="pageInputs.pagingEmailAddress.length > 7"
                class="input">
                <BliField>
                    <BliTextarea v-model="pageInputs.summary" />
                </BliField>
            </div>
            <div
                v-if="pageInputs.pagingEmailAddress.length > 7"
                class="input">
                <BliField>
                    <BliTextarea v-model="pageInputs.summary" />
                </BliField>
            </div>
            <BliButton
                class="button"
                has-left-icon
                color="danger"
                size="large"
                @click="handleCreateInboundOrder">
                <base-icon
                    class="action__create-inbound-order-icon"
                    fill="#fff"
                    icon-name="BroadcastChat" />
                Page
            </BliButton>
        </BliCard>
        <BliCard
            rounded
            class="table">
            <h6>My Alerts</h6>
            <BliTable
                sort="false"
                class="inbound-order-list__table custom-table"
                type="primary"
                :titles="titles"
                :items="contents">
                <!-- <BliButton
                    slot="button-0"
                    color="info"
                    size="small"> default
                </BliButton> -->
                <template
                    v-for="(item, index) in contents">
                    <BliButton
                        v-if="item.status === 'OPEN'"
                        :key="item.index"
                        :slot="`button-${index}`"
                        color="info"
                        size="small"> Acknowledge
                    </BliButton>
                    <BliButton
                        v-else
                        :key="item.index"
                        :slot="`button-${index}`"
                        color="info"
                        size="small"
                        disabled> Acknowledge
                    </BliButton>
                </template>
            </BliTable>
        </BliCard>
    </div>
</template>

<script src="./page-view.js"></script>

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
