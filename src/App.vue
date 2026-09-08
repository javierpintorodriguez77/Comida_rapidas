<template>
  <q-layout view="hHh lpR fFf">

    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center">
          <q-icon name="fastfood" size="28px" class="q-mr-sm" />
          <span>Menú Digital</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Menú Lateral Nivel Profesional -->
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered class="bg-grey-1">
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item-label header class="text-weight-bold text-uppercase">
            Categorías del Menú
          </q-item-label>

          <q-item clickable v-ripple to="/hamburguesas" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="lunch_dining" />
            </q-item-section>
            <q-item-section>Hamburguesas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/perros" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="fastfood" />
            </q-item-section>
            <q-item-section>Perros Calientes</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/pizzas" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="local_pizza" />
            </q-item-section>
            <q-item-section>Pizzas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/bebidas" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="local_bar" />
            </q-item-section>
            <q-item-section>Bebidas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/postres" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="icecream" />
            </q-item-section>
            <q-item-section>Postres</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/promociones" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="local_offer" />
            </q-item-section>
            <q-item-section>Promociones</q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable v-ripple to="/nosotros" active-class="text-primary text-bold">
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section>Nosotros</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Contenedor donde Vue Router renderiza cada vista -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-grey-9 text-white">
      <q-toolbar class="justify-center">
        <div class="text-caption">&copy; Menú Digital - Todos los derechos reservados</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>