<template>
  <v-app>
    <Header 
      :right-drawer="rightDrawer" 
      @toggleMenu="(val) => rightDrawer = val"
    />
    
    <v-content>
      <nuxt />
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item 
          v-for="(item, index) in items" 
          :key="index"
        >
          <v-list-item-content>
            <nuxt-link :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer class="black white--text">
      <span>&copy; SOUTHSIDE STUDIOS PH 2019 all rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/page/Header'

export default {
  components: { Header },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Work',
          to: '#work'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Clients',
          to: '#clients'
        }
        ,
        {
          icon: 'mdi-chart-bubble',
          title: 'Team',
          to: '#team'
        }
        ,
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '#about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Southside Studios PH'
    }
  }
}
</script>