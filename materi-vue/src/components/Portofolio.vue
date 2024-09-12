<template>
    <div class="banner-2 space-y-10 pb-20" id="work">
        <h3 class="heading3 my-5">My Recent Work</h3>
        <div class="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
            <div v-for="(item, index) in movies" :key="index">
                <div class="max-w-sm h-[60vh] overflow-y-auto rounded bg-white overflow-hidden shadow-lg">
                    <img class="w-full h-[350px]" :src="item.Poster" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="flex justify-end gap-5 mb-2">
                            <div class="flex-1 self-center">
                                <span v-if="item.Year > 2018" class="font-bold text-xl">{{ item.Title }} ({{ item.Year }}) Hot</span>
                                <span v-else class="font-bold text-xl">{{ item.Title }} ({{ item.Year }})</span>
                            </div>
                            <div class="bg-gray-200 p-3 rounded self-center text-center">
                                {{ item.Runtime }}
                            </div>
                        </div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                            et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Portofolio",
    props: {
        movies: Array,
    },
}
</script>