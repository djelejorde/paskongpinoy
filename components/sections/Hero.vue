<template>
    <div class="relative">
        <div class="fixed z-0 inset-0">
            <video class="w-full opacity-25" autoplay muted loop id="confetti">
                <source :src="require('@/static/confetti.mp4')" type="video/mp4">
            </video>
        </div>

        <div class="relative h-full z-10 flex flex-col items-center justify-center">
            <div class="w-1/2 mb-8">
                <img :src="require('@/static/paskong_pinoy_logo.svg')" alt="Paskong Pinoy" width="100%">
            </div>

            <div class="tracking-widest mb-8 text-blue">
                HIMIG PINOY | DISENYONG PINOY | SALO-SALONG PINOY | BINGO | PERYA
            </div>

            <div class="text-center">
                <p class="text-orange">IKA-1 NG DISYEMPRE TAONG 2019</p>
                <p class="text-yellow">P1C ANNEX CLUBHOUSE SAN LORENZO SOUTH, SANTA ROSA CITY, LAGUNA</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeroSection',
    mounted () {
        document.getElementById('confetti').playbackRate = 0.5
    }
}
</script>