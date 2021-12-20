<template>
    <div class="header">
        <div class="app-name">Squad PIC Management</div>
        <div class="right-container">
            <notification/>
            <BliDropdown
                class="drowdown"
                selection
                autoclose
                no-border
                left-icon>
                <label slot="label"> {{ currentUser }} </label>

                <base-icon
                    slot="left-icon"
                    icon-name="User" />

                <BliList scrollable>
                    <BliListItem
                        class=""
                        @selectItem="handleLogout">
                        Logout
                    </BliListItem>
                </BliList>
            </BliDropdown>
        </div>
    </div>
</template>

<script src="./the-header.js"></script>

<style lang="scss" scoped>
.app-name {
    color: #EEF5DB;
    margin-left: 40%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
}

.header {
    display: flex;
    justify-content: space-between;
    background: #FE5F55;
    height: $spacing-header-height;
    padding: $spacing-m $spacing-xl;
}

.right-container {
    display: flex;
    justify-content: space-evenly;
    height: 30px;
    width: 300px;
}

.drowdown {
    width: 220px;
}

</style>
