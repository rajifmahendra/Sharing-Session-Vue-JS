<template>
    <div class="banner-1">
        <div class="flex items-center">
            <div class="w-11/12 space-y-5 md:space-y-10">
                <h3
                    class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
                    👋 Hi,
                </h3>
                <h1
                    class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
                    It's
                    <a href="https://www.linkedin.com/" target="_blank" class="text-black hover:underline">
                        Mr. Rajesh</a>🙇‍♀️<br />Movie maker
                </h1>

                <div class="md:flex gap-1 md:gap-10">
                    <button class="text-white bg-gray-800 submit-button hidden md:block">
                        View My Work
                    </button>
                    <button class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">
                        Contact Me
                    </button>
                </div>
            </div>

            <div class="w-8/12 flex justify-end">
                <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
                    src="../assets/profile.png" alt="user image" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Banner",
}
</script>