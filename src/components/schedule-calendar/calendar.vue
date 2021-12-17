<template>
	<div>
		<vue-cal
			class="vuecal--rounded-theme vuecal--blue-theme"
			xsmall
			hide-view-selector
			:time="false"
			active-view="month"
			:disable-views="['week']"
			style="width: 270px; height: 300px"
		>
		</vue-cal>
	</div>
</template>

<script src="./calendar.js"></script>