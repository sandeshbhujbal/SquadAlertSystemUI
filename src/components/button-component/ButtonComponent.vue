<template>
    <div class="button-wrapper">
        <button>
            <i class=""></i>
            <slot name="icon"></slot>
            <slot></slot>
        </button>
    </div>
</template>

<script src="./button-component.js"></script>

// <style lang="scss" scoped>
// @import "@/style/theme.scss";

// .button-wrapper {
//     display: inline;

//     .default-button {
//         border-radius: 8px;
//         font-size: 14px;
//         cursor: pointer;
//         text-decoration: none;
//         color: $white-color;
//         text-align: center;
//         padding: 8px;
//         border: solid 1px $primary-color;
//         background-color: $primary-color;
//         white-space: nowrap;
//         min-width: 100px;

//         &.info {
//             background-color: #ffffff;
//             border: solid 1px $primary-color;
//             color: $primary-color;
//         }

//         &.cancel-button {
//             background-color: #ffffff;
//             border: solid 1px #cccccc;
//             color: $grey-darkest-color;

//             &.reject {
//                 border: solid 1px $error-color;
//                 color: $error-color;
//             }
//         }

//         &.primary-button-search {
//             background-color: #ECF6FE;

//             &.shadow {
//                 text-align: center;
//                 color: #007aff;
//             }
//         }

//         &.reject-button {
//             background-color: $error-color;
//             border: solid 1px $error-color;
//             color: $white-color;
//         }

//         &.success-button {
//             background-color: $tertiary-color;
//             border: solid 1px $tertiary-color;
//         }

//         &.remove-button {
//             background-color: $remove-btn-color;
//             border: solid 1px $remove-btn-color;
//         }

//         &.secondary-button {
//             background-color: $secondary-color;
//             border: solid 1px $secondary-color;
//         }

//         &.export-button {
//             background-color: #909399;
//             border: solid 1px #909399;
//         }

//         &.valid-invalid-all-button {
//             background-color: #fff;
//             border: solid 1px #EBEEF5;
//             border-radius: 16px;
//             color: #C0C4CC;
//             font-size: 12px;
//             height: 30px;

//             &.active {
//                 background-color: #c6e2ff;
//                 color: #409eff;
//             }
//         }

//         &:focus {
//             outline: 0px;
//         }

//         &+button {
//             margin-left: 10px;
//         }

//         &[disabled] {
//             cursor: not-allowed;
//             opacity: 0.5;
//         }
//     }
// }
// </style>
