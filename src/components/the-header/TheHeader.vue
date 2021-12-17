<template>
	<div class="the-header">
		<div class="app-name">Squad PIC Management</div>
		<div class="the-header__action action">
			<BliDropdown
				class="action__dropdown"
				selection
				autoclose
				no-border
				left-icon
			>
				<label slot="label"> User </label>

				<base-icon slot="left-icon" icon-name="User" />

				<BliList scrollable>
					<BliListItem
						class="action__dropdown-list-item"
						@selectItem="handleLogout"
					>
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
		margin-left: 40%;
		font-weight: bold;
		font-family: "Times New Roman", Times, serif;
        font-size: 25px;
	}
	.the-header {
		position: relative;
		height: $spacing-header-height;
		padding: $spacing-m $spacing-xl;
		background-color: #fff;

		.action {
			position: absolute;
			top: 10px;
			right: 0;
			width: 220px;
			order: 2;
		}
	}
</style>
