<template>
  <q-page class="tech-page q-pb-xl text-slate-2">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" height="240px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center q-px-md">
            <h1 class="text-h3 text-weight-bolder tech-title q-my-none">PIZZAS ARTESANALES</h1>
            <p class="text-subtitle1 q-mt-sm text-grey-4 text-weight-regular" style="max-width: 600px; margin: 0 auto;">
              Masa madre horneada en piedra, salsa de tomate italiana y queso mozzarella derretido.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-xl" style="max-width: 1400px;">
      
      <!-- Recomendación del Chef -->
      <div class="q-mb-xl">
        <div class="row items-center q-mb-md">
          <div class="tech-icon-box q-mr-sm">
            <q-icon name="workspace_premium" color="amber-5" size="22px" />
          </div>
          <h2 class="text-h6 text-weight-bold text-amber-4 tech-subtitle q-my-none">RECOMENDACIÓN DESTACADA</h2>
        </div>

        <q-card class="tech-chef-card shadow-12 overflow-hidden border-amber">
          <div class="row no-wrap border-responsive items-stretch">
            <q-img :src="chefPizza.imagen" class="col-12 col-md-5" height="260px" fit="cover" />
            <q-card-section class="col-12 col-md-7 flex flex-center q-pa-lg bg-slate-800">
              <div class="full-width">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-h5 text-weight-bolder text-white">{{ chefPizza.nombre }}</div>
                  <q-chip outline color="amber-5" text-color="amber-5" class="text-bold text-caption">
                    ESPECIALIDAD DE LA CASA
                  </q-chip>
                </div>
                <p class="text-body1 text-grey-4 q-mb-lg font-light">{{ chefPizza.descripcion }}</p>
                <div class="row items-center justify-between">
                  <span class="text-h4 text-weight-bolder text-accent">{{ chefPizza.precio }}</span>
                  <q-btn 
                    unelevated 
                    color="accent" 
                    icon="visibility" 
                    label="Ver detalle" 
                    class="text-bold text-dark rounded-borders"
                    @click="verDetalle(chefPizza)" 
                  />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Sección Menú General -->
      <div class="row items-center justify-between q-mb-md">
        <div class="row items-center">
          <div class="tech-icon-box q-mr-sm">
            <q-icon name="local_pizza" color="accent" size="20px" />
          </div>
          <h2 class="text-h6 text-weight-bold text-white tech-subtitle q-my-none">CATÁLOGO COMPLETO</h2>
        </div>
        <q-badge outline color="grey-6" class="q-px-sm q-py-xs">{{ pizzas.length }} PRODUCTOS DISPONIBLES</q-badge>
      </div>

      <!-- Grid de 4 Productos en una sola fila (col-md-3) -->
      <div class="row q-col-gutter-md items-stretch">
        <div v-for="(producto, index) in pizzas" :key="index" class="col-12 col-sm-6 col-md-3 flex">
          <q-card class="tech-card full-width flex column justify-between">
            <div>
              <q-img :src="producto.imagen" height="170px" fit="cover">
                <div v-if="producto.etiqueta" class="absolute-top-right bg-transparent q-pa-xs">
                  <q-chip 
                    :color="getBadgeColor(producto.etiqueta)" 
                    text-color="white" 
                    size="sm" 
                    class="text-bold shadow-2"
                  >
                    {{ producto.etiqueta }}
                  </q-chip>
                </div>
              </q-img>

              <q-card-section class="q-pa-md">
                <div class="text-subtitle1 text-weight-bold text-white q-mb-xs title-clamp">{{ producto.nombre }}</div>
                <div class="text-caption text-grey-4 desc-clamp">{{ producto.descripcion }}</div>
              </q-card-section>
            </div>

            <!-- Footer con alineación inferior constante -->
            <q-card-section class="q-pt-none q-pa-md row items-center justify-between border-top-subtle">
              <span class="text-subtitle1 text-weight-bolder text-accent">{{ producto.precio }}</span>
              <q-btn 
                flat 
                round 
                color="accent" 
                icon="visibility" 
                class="tech-btn-action"
                @click="verDetalle(producto)"
              >
                <q-tooltip class="bg-slate-900 text-accent">Ver detalle</q-tooltip>
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Modal Técnico de Detalle de Producto -->
    <q-dialog v-model="modalVerProducto" backdrop-filter="blur(6px)">
      <q-card style="width: 440px; max-width: 90vw;" class="tech-dialog text-white">
        <q-img v-if="productoSeleccionado" :src="productoSeleccionado.imagen" height="230px" fit="cover">
          <div class="absolute-top-right bg-transparent q-pa-xs">
            <q-btn icon="close" flat round dense color="white" class="bg-slate-900-semi" v-close-popup />
          </div>
        </q-img>

        <q-card-section v-if="productoSeleccionado" class="q-pa-lg">
          <div class="row items-center justify-between q-mb-sm">
            <div class="text-h6 text-weight-bold text-white">{{ productoSeleccionado.nombre }}</div>
            <q-chip 
              v-if="productoSeleccionado.etiqueta" 
              :color="getBadgeColor(productoSeleccionado.etiqueta)" 
              text-color="white" 
              size="sm" 
              class="text-bold"
            >
              {{ productoSeleccionado.etiqueta }}
            </q-chip>
          </div>
          <div class="text-h5 text-accent text-weight-bolder q-mb-md">{{ productoSeleccionado.precio }}</div>
          <div class="text-body2 text-grey-3 font-light">{{ productoSeleccionado.descripcion }}</div>
        </q-card-section>

        <q-separator dark class="opacity-1" />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn label="Cerrar" color="grey-5" flat v-close-popup />
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
  nombre: "Pizza Master Suprema",
  descripcion: "Masa madre artesanal, pepperoni napolitano, carne molida sazonada, pimentón verde, champiñones frescos y extra queso mozzarella.",
  precio: "$38.000",
  imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
}

const pizzas = [
  {
    nombre: "Pizza Pepperoni Clásica",
    descripcion: "Salsa de tomate pomodoro, doble porción de pepperoni crujiente y mozzarella gratinado.",
    precio: "$28.000",
    etiqueta: "Más pedido",
    imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza Hawaiana Gourmet",
    descripcion: "Queso mozzarella, trozos de jamón de pierna, piña caramelizada en almíbar y finas hierbas.",
    precio: "$29.500",
    etiqueta: "Nuevo",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza 4 Quesos",
    descripcion: "Mezcla artesanal de mozzarella, parmesano madurado, queso azul y provolone ahumado.",
    precio: "$32.000",
    etiqueta: "Vegetariano",
    imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pizza Mexicana Picante",
    descripcion: "Salsa de tomate, carne especiada, jalapeños en rodajas, maíz tierno, frijol refrito y doritos crocantes.",
    precio: "$31.000",
    etiqueta: "Picante",
    imagen: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500&auto=format&fit=crop"
  }
]

function verDetalle(item) {
  productoSeleccionado.value = item
  modalVerProducto.value = true
}

const getBadgeColor = (tag) => {
  switch (tag) {
    case 'Nuevo': return 'teal-6';
    case 'Más pedido': return 'deep-orange-6';
    case 'Picante': return 'red-6';
    case 'Vegetariano': return 'green-6';
    default: return 'primary';
  }
}
</script>

<style scoped>
/* Estilos Dark Tech */
.tech-page {
  background-color: #0f172a;
}

.tech-title {
  letter-spacing: 1.5px;
}

.tech-subtitle {
  letter-spacing: 1px;
}

.bg-filter {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(3px);
}

.tech-icon-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tarjeta Destacada */
.tech-chef-card {
  background-color: #1e293b;
  border-radius: 12px;
}

.border-amber {
  border: 1px solid rgba(245, 158, 11, 0.4);
}

.bg-slate-800 {
  background-color: #1e293b;
}

/* Tarjetas Estándar del Grid */
.tech-card {
  background-color: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.25s ease, border-color 0.25s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: rgba(14, 165, 233, 0.4);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

.border-top-subtle {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.tech-btn-action {
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.2s ease;
}

.tech-btn-action:hover {
  background: rgba(14, 165, 233, 0.15);
}

/* Truncado de texto */
.title-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.desc-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
  min-height: 3.9em;
}

/* Modal */
.tech-dialog {
  background-color: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
}

.bg-slate-900-semi {
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
}

.opacity-1 {
  opacity: 0.1;
}

@media (max-width: 1023px) {
  .border-responsive {
    flex-direction: column;
  }
}
</style>
