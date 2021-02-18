<template>
<div class="relative flex flex-col min-w-0 break-words rounded-lg mb-6 xl:mb-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    <div class="flex-auto p-4">
        <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-gray-500 uppercase font-bold text-xs">
                    {{ statSubtitle }}
                </h5>
                <span class="font-semibold text-xl text-gray-800">
                    {{ statTitle }}
                </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-lg border-4 border-white" :class="[statIconColor]">
                    <i class="text-lg" :class="[statIconName]"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "card-stats",
    props: {
        statSubtitle: {
            type: String,
            default: "Traffic",
        },
        statTitle: {
            type: String,
            default: "350,897",
        },
        statArrow: {
            default: "up",
            validator: function (value) {
                // The value must match one of these strings
                return ["up", "down"].indexOf(value) !== -1;
            },
        },
        statPercent: {
            type: String,
            default: "3.48",
        },
        // can be any of the text color utilities
        // from tailwindcss
        statPercentColor: {
            type: String,
            default: "text-blue-500",
        },
        statDescripiron: {
            type: String,
            default: "Since last month",
        },
        statIconName: {
            type: String,
            default: "far fa-chart-bar",
        },
        // can be any of the background color utilities
        // from tailwindcss
        statIconColor: {
            type: String,
            default: "bg-red-500",
        },
        statBgColor: {
            type: String,
            default: "bg-green-500",
        },
    },
};
</script>

<style>
.shadow-all {
    -webkit-box-shadow: 0px 0px 28px 0px rgba(184, 184, 184, 1);
    -moz-box-shadow: 0px 0px 28px 0px rgba(184, 184, 184, 1);
    box-shadow: 0px 0px 28px 0px rgba(184, 184, 184, 1);
}

.stati {
    background: #fff;
    height: 6em;
    padding: 1em;
    margin: 1em 0;
    -webkit-transition: margin 0.5s ease, box-shadow 0.5s ease;
    /* Safari */
    transition: margin 0.5s ease, box-shadow 0.5s ease;
    /* -moz-box-shadow: 0px 0.2em 0.4em rgb(0, 0, 0, 0.8);
    -webkit-box-shadow: 0px 0.2em 0.4em rgb(0, 0, 0, 0.8); */
    /* box-shadow: 0px 0.2em 0.4em rgb(0, 0, 0, 0.8); */
}

.stati:hover {
    margin-top: 0.5em;
    -moz-box-shadow: 0px 0.4em 0.5em rgb(0, 0, 0, 0.8);
    -webkit-box-shadow: 0px 0.4em 0.5em rgb(0, 0, 0, 0.8);
    box-shadow: 0px 0.4em 0.5em rgb(0, 0, 0, 0.8);
}

</style>
