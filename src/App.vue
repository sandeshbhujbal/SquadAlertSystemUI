<template>
	<div id="oms-app">
		<div class="app__container">
			<nav class="app__menu">
				<side-menu />
			</nav>

			<header class="app__header">
				<the-header />
			</header>

			<div class="app__content">
				<main class="app__pages">
					<router-view />
				</main>

				<footer class="app__footer">
					<the-footer />
				</footer>
			</div>
		</div>

		<!-- <div class="app__loading">
            <loader v-show="loadingCount" />
        </div> -->
	</div>
</template>

<script src="./app.js"></script>

<style lang="scss">
	#oms-app {
		.app {
			&__container {
				display: grid;
				grid-template-columns: auto 1fr; // 2 columns
				grid-template-rows: 50px auto;
			}

			&__menu {
				grid-area: 1 / 1 / 3 / 2; // row start / column start / row end / column end
			}

			&__content {
				overflow: auto;
                background: #e9f5f5;
			}
		}
	}
</style>
