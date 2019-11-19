<template>
    <div class="relative pb-10">
        <SubHeaderTitle>Kasiglahan at Kasiyahan!</SubHeaderTitle>

        <div class="flex w-full lg:w-4/5 px-6 lg:px-0 justify-center container mx-auto lg:mt-12">
            <div class="flex flex-wrap items-start justify-around mt-2 w-full">

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0"
                    v-for="(activity, i) in activities"
                    :class="{ '!border-b-0' : (i+1) === Object.keys(activities).length,  }"
                    :key="i"
                >
                    <div class="w-full mx-2 lg:mx-0"
                        :class="{ 
                            'px-6 lg:px-8' : activity.name === 'Himig Pinoy',
                            '!mx-auto lg:my-8 lg:py-2 !w-2/3' : activity.name === 'Himig Pinoy',
                        }"
                    >
                        <img class="block" :src="activity.image.data.url" :alt="activity.name" width="100%">
                    </div>
                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange"
                        :class="{ 'lg:mt-0' : activity.name === 'Bingo' }"
                    >{{ activity.excerpt }}</div>

                    <PrimaryButton @click="showDetails(activity.activity_details)" class="flex-end">ALAMIN</PrimaryButton>
                </div>
            </div>
        </div>

        <div class="fixed inset-0 z-20 bg-black opacity-50 modal-backdrop" v-show="open"></div>
        <div class="fixed inset-0 z-30 modal-dialog flex items-center justify-center" v-show="open">
            <div class="flex items-center justify-center w-1/2 text-center bg-white relative details">
                <a @click="close" class="modal-close cursor-pointer absolute text-white font-body font-bold">x</a>
                <div v-html="activityDetails"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SubHeaderTitle from '~/components/elements/SubHeaderTitle'
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'ActivitiesSection',
    components: { SubHeaderTitle, PrimaryButton },
    data () {
        return {
            open: false,
            activityDetails: null,
            activities: []
        }
    },
    props: {
    },
    methods: {
        showDetails (val) {
            this.open = true

            this.activityDetails = val
        },
        close () {
            this.open = false
            this.activityDetails = null
        },
        getActivities () {
            this.fetchCollectionData('/activities?fields=name,excerpt,image.*.*,activity_details')
                .then(response => {
                    if(response.data && Object.keys(response.data.data).length) {
                        this.activities = response.data.data
                    }
                })
        }
    },
    mounted () {
        this.getActivities()
    }
}
</script>

<style scoped>
.activity-item { 
    width: 300px;
    height: auto;
}

@media screen and (min-width: 1024px) {   
    .activity-item {
        height: 500px;
    }
}

.activity-item img {
    min-height: 180px;
}
.modal-close {
    right: -10px;
    top: -15px;
    @apply .bg-green;
    @apply .rounded-full;
    @apply .w-6;
    @apply .h-6;
    @apply .text-center;
}
.modal-dialog .details {
    height: 300px;
}
</style>