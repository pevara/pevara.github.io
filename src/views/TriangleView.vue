<script setup lang="ts">

import {useTriangleStore} from "@/store/triangle";

const store = useTriangleStore();

</script>

<template>
	<h1>Triangles</h1>
	<div class="p-1 bg-primary-subtle">
		<svg id="triangle" width="100%" height="100%" viewBox="0 0 1625 1085">
			<title>Triangle</title>
			<path id="triangle-path" d="M312.5,167.105l1000,750l-1000,0l0,-750Z" />
  <g transform="matrix(1.98413,0,0,0.694444,-63.0952,226.608)" class="label edge-label">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="204.766" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px"  style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#880e4f;" id="label-text-B">{{ store.dimensions.B }}</text>
    </g>
  </g>
  <path d="M1312.5,57.675l0,-41.667l-1000,0l0,41.667" style="fill:none;stroke:#64dd17;stroke-width:12.5px;stroke-linejoin:miter;" />
  <path d="M1556.46,929.605l41.667,0l-0,-762.5l-41.667,0" style="fill:none;stroke:#64dd17;stroke-width:12.5px;stroke-linejoin:miter;" />
  <g transform="matrix(1.98413,0,0,0.694444,532.738,601.608)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="204.766" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#880e4f;" id="label-text-A">240 mm</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,366.071,319.154)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="477.801" width="274.386" height="72.234" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#880e4f;" id="label-text-S">21600 mm&sup2;</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,711.905,80.7749)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="244.352" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#880e4f;" id="label-text-C">268.2 mm</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,1265.58,543.023)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="139.078" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#f9a825;" id="label-text-ac">21.1º</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,146.63,-260.847)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="139.078" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#f9a825;" id="label-text-bc">23.9º</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,616.071,-291.156)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="204.766" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#64dd17;" id="label-text-W">240 mm</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,1220.34,130.775)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="204.766" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#64dd17;" id="label-text-H">180 mm</text>
    </g>
  </g>
  <g transform="matrix(1.98413,0,0,0.694444,82.581,598.583)">
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <rect x="36" y="493.785" width="99.492" height="56.25" class="label-bg" />
    </g>
    <g transform="matrix(0.7,0,0,2,10.8,-502.316)">
      <text x="47.883px" y="538.316px" style="font-family:'Roboto-Regular', 'Roboto';font-size:48px;fill:#f9a825;" id="label-text-ab">90º</text>
    </g>
  </g>
  <path d="M312.158,930.742l-0,-0c7.665,-0 13.889,-6.223 13.889,-13.889c-0,-7.665 -6.224,-13.889 -13.889,-13.889l-0,0c-7.666,0 -13.889,6.224 -13.889,13.889c-0,7.666 6.223,13.889 13.889,13.889Z" style="fill:#ffb300;" />
  <path d="M1309.97,930.742l-0,-0c7.665,-0 13.888,-6.223 13.888,-13.889c0,-7.665 -6.223,-13.889 -13.888,-13.889l-0,0c-7.666,0 -13.889,6.224 -13.889,13.889c-0,7.666 6.223,13.889 13.889,13.889Z" style="fill:#ffb300;" />
  <path d="M312.158,157.68l-0,0c-7.666,0 -13.889,6.223 -13.889,13.889c-0,7.665 6.223,13.889 13.889,13.889l-0,-0c7.665,-0 13.889,-6.224 13.889,-13.889c-0,-7.666 -6.224,-13.889 -13.889,-13.889Z" style="fill:#ffb300;" />
</svg>
	</div>
</template>

<style lang="scss">
#triangle {
	fill-rule:evenodd;
	clip-rule:evenodd;
	stroke-linecap:round;
	stroke-linejoin:round;
	stroke-miterlimit:1.5;

	#triangle-path {
		fill:#b2ebf2;
		fill-opacity:0.5;
		stroke:#e91e63;
		stroke-width:16px;
	}

	#label-text-A {
		font-weight: bold;
	}

	.label-bg {
		fill:#b2ebf2;
		fill-opacity:0.46;
	}

}

</style>