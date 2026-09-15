<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-py-xs">
        <q-toolbar-title class="row items-center">
          <q-icon name="fastfood" size="28px" class="q-mr-sm" />
          <span class="text-weight-bold">Menú Digital</span>
        </q-toolbar-title>

        <q-btn 
          flat 
          round 
          icon="visibility" 
          aria-label="Ver Producto" 
          @click="modalVerProducto = true"
        >
          <q-tooltip>Ver detalle del producto</q-tooltip>
        </q-btn>
      </q-toolbar>

      <!-- Menú de navegación horizontal superior -->
      <q-tabs 
        v-model="tab" 
        align="center" 
        dense
        active-color="yellow"
        indicator-color="yellow"
        class="bg-primary text-white shadow-2"
        outside-arrows
        mobile-arrows
      >
        <q-route-tab to="/hamburguesas" icon="lunch_dining" label="Hamburguesas" />
        <q-route-tab to="/perros" icon="fastfood" label="Perros Calientes" />
        <q-route-tab to="/pizzas" icon="local_pizza" label="Pizzas" />
        <q-route-tab to="/bebidas" icon="local_bar" label="Bebidas" />
        <q-route-tab to="/postres" icon="icecream" label="Postres" />
        <q-route-tab to="/promociones" icon="local_offer" label="Promociones" />
        <q-route-tab to="/nosotros" icon="groups" label="Nosotros" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="modalVerProducto">
      <q-card style="width: 400px; max-width: 90vw;" class="rounded-borders">
        <q-img :src="productoDemo.imagen" height="200px">
          <div class="absolute-top-right bg-transparent">
            <q-btn icon="close" flat round dense color="white" v-close-popup />
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-weight-bold">{{ productoDemo.nombre }}</div>
          <div class="text-subtitle1 text-primary text-bold">${{ productoDemo.precio.toLocaleString('es-CO') }}</div>
          <div class="text-body2 text-grey-8 q-mt-sm">{{ productoDemo.descripcion }}</div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-btn label="Cerrar" color="primary" flat v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer elevated class="bg-grey-9 text-white">
      <q-toolbar class="justify-center">
        <div class="text-caption">&copy; Menú Digital - Todos los derechos reservados</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('hamburguesas')
const modalVerProducto = ref(false)

const productoDemo = ref({
  nombre: 'Hamburguesa Especial',
  precio: 18000,
  descripcion: 'Deliciosa carne 100% de res, queso doble crema, tocineta crujiente, lechuga fresca, tomate y salsa de la casa.',
  imagen: 'https://cdn.quasar.dev/img/burger.jpg'
})
</script>
