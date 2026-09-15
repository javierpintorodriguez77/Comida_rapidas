<template>
  <q-page class="q-pb-xl">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop" height="220px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center">
            <h1 class="text-h3 text-weight-bolder q-my-none">Postres & Dulces</h1>
            <p class="text-subtitle1 q-mt-sm text-weight-medium">El final perfecto para tu comida con nuestros postres hechos a mano.</p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-lg" style="max-width: 1200px;">
      <!-- Recomendación del Chef -->
      <div class="q-mb-xl">
        <div class="row items-center q-mb-md">
          <q-icon name="star" color="amber-9" size="32px" class="q-mr-sm" />
          <h2 class="text-h5 text-weight-bold text-amber-10 q-my-none">Recomendación del Chef</h2>
        </div>
        
        <q-card class="bg-amber-1 shadow-8 border-gold">
          <div class="row no-wrap border-responsive">
            <q-img :src="chefPostre.imagen" class="col-12 col-md-5" height="250px" fit="cover" />
            <q-card-section class="col-12 col-md-7 flex flex-center">
              <div class="full-width">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-h5 text-weight-bolder text-primary">{{ chefPostre.nombre }}</div>
                  <q-chip color="amber-9" text-color="white" icon="workspace_premium" class="text-bold">
                    Especialidad
                  </q-chip>
                </div>
                <p class="text-body1 text-grey-9 q-mb-md">{{ chefPostre.descripcion }}</p>
                <div class="row items-center justify-between">
                  <span class="text-h4 text-weight-bolder text-negative">{{ chefPostre.precio }}</span>
                  <q-btn color="secondary" icon="visibility" label="Ver producto" class="text-bold" @click="verDetalle(chefPostre)" />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Menú General -->
      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Menú General</h2>
      <div class="row q-col-gutter-md">
        <div v-for="(producto, index) in postres" :key="index" class="col-12 col-sm-6 col-md-4">
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

    <!-- Modal para ver detalle del producto -->
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

const chefPostre = {
  nombre: "Volcán de Chocolate con Helado",
  descripcion: "Bizcocho tibio de chocolate amargo con centro fluido, acompañado de bola de helado de vainilla.",
  precio: "$16.000",
  imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop"
}

const postres = [
  {
    nombre: "Cheesecake de Frutos Rojos",
    descripcion: "Base crocante de galleta, crema de queso suave y mermelada artesanal de mora y fresa.",
    precio: "$13.000",
    etiqueta: "Más pedido",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Brownie con Helado",
    descripcion: "Brownie melcochudo de nuez servido tibio con helado de vainilla y fudge de chocolate.",
    precio: "$12.000",
    etiqueta: "Nuevo",
    imagen: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Waffle Supremo",
    descripcion: "Waffle crocante servido con Nutella, banano en rodajas y crema batida.",
    precio: "$14.500",
    etiqueta: "",
    imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Flan de Caramelo",
    descripcion: "Flan casero tradicional con baño de caramelo dorado.",
    precio: "$9.000",
    etiqueta: "Vegetariano",
    imagen: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?q=80&w=500&auto=format&fit=crop"
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
