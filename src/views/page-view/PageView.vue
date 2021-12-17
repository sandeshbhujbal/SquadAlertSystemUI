<template>
	<div class="page">
		<div class="page__header header row js-space-between ai-center">
			<h1 class="header__title">Page View</h1>
		</div>
		<div class="page__body">
            <!-- <div>
                <calendar/>
            </div> -->
			<BliCard rounded class="card">
				<div class="input-card">
					<BliField :style="{ width }">
						<BliInput placeholder="page" />
					</BliField>
					<BliButton color="info"> Page </BliButton>
				</div>
				<BliTable
					type="primary"
					:sort="sort"
					:titles="titles"
					:items="contents"
				>
				</BliTable>
			</BliCard>
		</div>
		<!-- <h1 class="header__title">Page View</h1> -->
		<!-- <div class="page__body">
			<BliCard rounded class="card">
				<div class="input-card">
					<BliField :style="{ width }">
						<BliInput placeholder="page" />
					</BliField>
					<BliButton color="info"> Page </BliButton>
				</div>
				<BliTable
					type="primary"
					:sort="sort"
					:titles="titles"
					:items="contents"
				>
				</BliTable>
			</BliCard>
		</div> -->
	</div>
</template>

<script src="./page-view.js"></script>

<style lang="scss" scoped>
	.input-card {
		display: flex;
		gap: 10px;
		justify-content: center;
		margin-bottom: 20px;
	}
</style>
