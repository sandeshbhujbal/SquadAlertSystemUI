<template>
    <div class="dropdown-wrapper">
        <BliDropdown
            class="dropdown"
            v-model="selectedUser"
            selection
            autoclose
            title="Dropdown title">
            <label slot="label">Select User</label>
            <BliList
                @selectItem="userChanges"
                scrollable>
                <BliListItem
                    v-for="item in userObjectList"
                    :key="item.id"
                    :value="item.userName">
                    {{item.userName}}
                </BliListItem>
            </BliList>
        </BliDropdown>
    </div>
</template>

<script src="./home-view.js"></script>

<style lang="scss" scoped>
.dropdown-wrapper {
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
}

.dropdown {
    width: 400px;
}
</style>
