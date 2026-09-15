<template>
  <q-page class="q-pb-xl">
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" height="220px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center">
            <h1 class="text-h3 text-weight-bolder q-my-none">Pizzas Artesanales</h1>
            <p class="text-subtitle1 q-mt-sm text-weight-medium">Masa madurada a la leña con salsa de tomate natural.</p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-lg" style="max-width: 1200px;">
      <div class="q-mb-xl">
        <div class="row items-center q-mb-md">
          <q-icon name="star" color="amber-9" size="32px" class="q-mr-sm" />
          <h2 class="text-h5 text-weight-bold text-amber-10 q-my-none">Recomendación del Chef</h2>
        </div>
        
        <q-card class="bg-amber-1 shadow-8 border-gold">
          <div class="row no-wrap border-responsive">
            <q-img :src="chefPizza.imagen" class="col-12 col-md-5" height="250px" fit="cover" />
            <q-card-section class="col-12 col-md-7 flex flex-center">
              <div class="full-width">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-h5 text-weight-bolder text-primary">{{ chefPizza.nombre }}</div>
                  <q-chip color="amber-9" text-color="white" icon="workspace_premium" class="text-bold">
                    Especialidad
                  </q-chip>
                </div>
                <p class="text-body1 text-grey-9 q-mb-md">{{ chefPizza.descripcion }}</p>
                <div class="row items-center justify-between">
                  <span class="text-h4 text-weight-bolder text-negative">{{ chefPizza.precio }}</span>
                  <q-btn color="secondary" icon="visibility" label="Ver producto" class="text-bold" @click="verDetalle(chefPizza)" />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Menú General</h2>
      <div class="row q-col-gutter-md">
        <div v-for="(producto, index) in pizzas" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card full-height flex flex-center column justify-between shadow-3">
            <q-img :src="producto.imagen" height="200px" fit="cover">
              <div v-if="producto.etiqueta" class="absolute-top-right">
                <q-chip :color="getBadgeColor(producto.etiqueta)" text-color="white" size="sm" class="text-bold">
                  {{ producto.etiqueta }}
                </q-chip>
              </div>
            </q-img>

            <q-card-section class="full-width">
              <div class="text-h6 text-weight-bold q-mb-xs">{{ producto.nombre }}</div>
              <div class="text-caption text-grey-7">{{ producto.descripcion }}</div>
            </q-card-section>

            <q-card-actions class="full-width row items-center justify-between q-px-md q-pb-md">
              <span class="text-h6 text-weight-bolder text-primary">{{ producto.precio }}</span>
              <q-btn flat round color="primary" icon="visibility" @click="verDetalle(producto)">
                <q-tooltip>Ver producto</q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="modalVerProducto">
      <q-card style="width: 450px; max-width: 90vw;" class="rounded-borders">
        <q-img v-if="productoSeleccionado" :src="productoSeleccionado.imagen" height="220px" fit="cover">
          <div class="absolute-top-right bg-transparent">
            <q-btn icon="close" flat round dense color="white" v-close-popup />
          </div>
        </q-img>

        <q-card-section v-if="productoSeleccionado">
          <div class="row items-center justify-between q-mb-xs">
            <div class="text-h6 text-weight-bold">{{ productoSeleccionado.nombre }}</div>
            <q-chip v-if="productoSeleccionado.etiqueta" :color="getBadgeColor(productoSeleccionado.etiqueta)" text-color="white" size="sm" class="text-bold">
              {{ productoSeleccionado.etiqueta }}
            </q-chip>
          </div>
          <div class="text-h6 text-primary text-weight-bolder q-mb-sm">{{ productoSeleccionado.precio }}</div>
          <div class="text-body2 text-grey-8">{{ productoSeleccionado.descripcion }}</div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-btn label="Cerrar" color="primary" flat v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const modalVerProducto = ref(false)
const productoSeleccionado = ref(null)

const chefPizza = {
  nombre: "Pizza Cuatro Quesos Gourmet",
  descripcion: "Mezcla de Mozzarella, Gorgonzola, Parmesano y Provolone ahumado sobre salsa pomodoro artesanal.",
  precio: "$35.000",
  imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=600&auto=format&fit=crop"
}

const pizzas = [
  {
    nombre: "Pizza Hawaiana",
    descripcion: "Salsa pomodoro, queso mozzarella, jamón dulce y trozos de piña en almíbar.",
    precio: "$26.000",
    etiqueta: "Más pedido",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza Pepperoni",
    descripcion: "Abundante pepperoni americano, salsa de tomate picante y queso mozzarella.",
    precio: "$28.000",
    etiqueta: "Nuevo",
    imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza Diablo",
    descripcion: "Salami picante, jalapeños, pimientos rojos y toque de aceite de chile.",
    precio: "$30.000",
    etiqueta: "Picante",
    imagen: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza Margarita",
    descripcion: "Salsa de tomate natural, rodajas de tomate fresco, mozzarella y albahaca.",
    precio: "$24.000",
    etiqueta: "Vegetariano",
    imagen: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=500&auto=format&fit=crop"
  }
]

function verDetalle(item) {
  productoSeleccionado.value = item
  modalVerProducto.value = true
}

const getBadgeColor = (tag) => {
  switch (tag) {
    case 'Nuevo': return 'positive';
    case 'Más pedido': return 'orange-9';
    case 'Picante': return 'negative';
    case 'Vegetariano': return 'green-8';
    default: return 'primary';
  }
}
</script>

<style scoped>
.bg-filter {
  background: rgba(0, 0, 0, 0.55);
}
.border-gold {
  border: 2px solid #ffb300;
  border-radius: 12px;
}
.my-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 10px;
}
.my-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}
@media (max-width: 1023px) {
  .border-responsive {
    flex-direction: column;
  }
}
</style>
