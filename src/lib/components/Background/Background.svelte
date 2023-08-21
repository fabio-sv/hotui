<div class="background">
	<div />
	<div />
	<div />
</div>

<style>
	.background {
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: transparent;
		display: flex;
		flex-grow: 1;
		z-index: -1;
	}

	.background div {
		position: absolute;
		border-radius: 100%;
		height: 0;
		filter: blur(240vw);
		opacity: 0.4;
	}

	.background div:nth-child(1) {
		background: linear-gradient(132deg, #f84f16 0%, #ee0000 100%);
		width: 30%;
		padding-top: 30%;
		left: 20%;
		top: 31%;
		transform: translateX(-50%) translateY(-50%);
	}

	.background div:nth-child(2) {
		background: linear-gradient(132deg, #0800ff 0%, #e32be3 100%);
		width: 40%;
		padding-top: 40%;
		left: 50%;
		top: 44%;
		transform: translateX(-50%) translateY(-50%);
	}

	.background div:nth-child(3) {
		background: linear-gradient(132deg, #00ee06 0%, #3ca0b3 100%);
		width: 30%;
		padding-top: 30%;
		left: 80%;
		top: 80%;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
