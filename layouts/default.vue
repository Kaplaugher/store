<template>
  <v-app dark>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      :disable-resize-watcher= "disabled"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
         <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <span>Shop</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile
            v-for="item in productTypes"
            :key="item"
            :to="item.to"
          >
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/" exact>Home</v-btn>
      <v-btn flat to="/about">About</v-btn>
      <v-btn flat class="snipcart-checkout"> <v-badge right>
      <span slot="badge">6</span>
      <v-icon
        large
        color="grey lighten-1"
      >
        shopping_cart
      </v-icon>
    </v-badge></v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Super Cool Store 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: true,
      clipped: true,
      items: [
        { title: 'Welcome', to: '/' },
        { title: 'About', to: '/about' },
        { title: 'Products', to: '/products' }
      ],
      title: 'Store Title',
       productTypes: [
        { title: 'All', to: '/products'},
        { title: 'Shirts', to: '/shop/shirts' },
        { title: 'Hats', to: '/shop/hats' },
        { title: 'Socks', to: '/shop/socks' }
      ],
      disabled: true
    };
  }
};
</script>
