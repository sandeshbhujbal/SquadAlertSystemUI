<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div
                class="modal-container"
                :style="{width:selectWidth +'vw',height:selectHeight +'vh'}">
                <div class="modal-header">
                    <div class="title">
                        <span>{{title}}</span>
                        <span :id="`${name}CloseButton`" :name="`${name}Close`" @click="handleCloseModal">
                            <base-icon
                                class="action__create-inbound-order-icon"
                                fill="#fff"
                                icon-name="Error" />
                        </span>
                    </div>
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div
                    v-if="buttonRequired"
                    class="modal-default-button">
                    <button-component
                        :id="`${name}OkButton`"
                        :name="`${name}Ok`"
                        :isDisabled="isDisabled"
                        :onClick="handleButtonClick">
                        Ok
                    </button-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./modal-component.js"></script>

<style lang="scss" scoped>
.modal-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;

        .modal-container {
            max-height: calc(100vh - 80px);
            overflow: auto;
            margin: auto;
            padding: 0px 0px 30px 0px;
            background-color: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            border-radius: 8px;

            .modal-header {
                border-radius: 8px 8px 0px 0px;
                background-color: #333;
                padding: 8px 0px;
                position: fixed;
                width: inherit;
                z-index: 99;

                .title {
                    font-size: 14px;
                    color: #fff;
                    padding: 5px;
                    text-align: center;
                }
            }

            .modal-body {
                height: auto;
                margin: 55px 1% 1%;
            }

            .modal-default-button {
                float: right;
                margin-right: 10px;
            }

            .modal-footer {
                position: fixed;
                bottom: 0px;
                padding: 20px;
            }
        }
    }
}
</style>
