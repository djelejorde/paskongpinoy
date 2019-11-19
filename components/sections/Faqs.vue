<template>
    <div class="relative pb-10">
        <HeaderTitle class="mb-6">Mga Karaniwang Tanong</HeaderTitle>

        <div class="flex w-full px-6 lg:px-0 lg:w-2/3 justify-center mx-auto">
            <ItemList class="list-items w-full" :items="infos"/>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '~/components/elements/HeaderTitle'
import ItemList from '~/components/elements/ItemList'

export default {
    name: 'FaqsSection',
    components: { HeaderTitle, ItemList },
    data () {
        return {
            infos: [
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
                {
                    text: 'Ang halaga ng pakikilahok ay isang daang piso lamang (P 100.00)'
                },
            ]
        }
    },
    props: {
    },
    methods: {
    },
    mounted () {

    }
}
</script>

<style>
@media screen and (min-width: 1024px) {   
    .list-items {
        column-count: 2;
    }
    .list-items > .item:first-child {
        margin-top: 0;
    }
}
</style>