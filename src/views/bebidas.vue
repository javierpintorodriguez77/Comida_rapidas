<template>
  <q-page class="q-pb-xl">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1000&auto=format&fit=crop" height="220px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center">
            <h1 class="text-h3 text-weight-bolder q-my-none">Bebidas & Refrescos</h1>
            <p class="text-subtitle1 q-mt-sm text-weight-medium">Refresca tu paladar con nuestras limonadas, jugos naturales y gaseosas bien frías.</p>
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
        
        <q-card class="bg-amber-1 shadow-8 border-gold overflow-hidden">
          <div class="row no-wrap border-responsive items-stretch">
            <q-img :src="chefBebida.imagen" class="col-12 col-md-5" height="250px" fit="cover" />
            <q-card-section class="col-12 col-md-7 flex flex-center q-pa-lg">
              <div class="full-width">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-h5 text-weight-bolder text-primary">{{ chefBebida.nombre }}</div>
                  <q-chip color="amber-9" text-color="white" icon="workspace_premium" class="text-bold">
                    Especialidad
                  </q-chip>
                </div>
                <p class="text-body1 text-grey-9 q-mb-md">{{ chefBebida.descripcion }}</p>
                <div class="row items-center justify-between">
                  <span class="text-h4 text-weight-bolder text-negative">{{ chefBebida.precio }}</span>
                  <q-btn color="secondary" icon="visibility" label="Ver producto" class="text-bold" @click="verDetalle(chefBebida)" />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Menú General -->
      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Menú General</h2>
      <div class="row q-col-gutter-md">
        <div v-for="(producto, index) in bebidas" :key="index" class="col-12 col-sm-6 col-md-4 flex">
          <q-card class="my-card full-width column justify-between shadow-3">
            <div>
              <q-img :src="producto.imagen" height="200px" fit="cover">
                <div v-if="producto.etiqueta" class="absolute-top-right">
                  <q-chip :color="getBadgeColor(producto.etiqueta)" text-color="white" size="sm" class="text-bold">
                    {{ producto.etiqueta }}
                  </q-chip>
                </div>
              </q-img>

              <q-card-section>
                <div class="text-h6 text-weight-bold q-mb-xs title-clamp">{{ producto.nombre }}</div>
                <div class="text-caption text-grey-7 desc-clamp">{{ producto.descripcion }}</div>
              </q-card-section>
            </div>

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

    <!-- Modal para visualizar el producto -->
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

const chefBebida = {
  nombre: "Limonada de Coco Frappé",
  descripcion: "Zumo de limón fresco, crema de coco concentrada y hielo granizado.",
  precio: "$11.000",
  imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop"
}

const bebidas = [
  {
    nombre: "Gaseosa 350ml",
    descripcion: "Coca-Cola, Sprite, Premio o Colombiana bien helada.",
    precio: "$5.000",
    etiqueta: "Más pedido",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Jugo Natural en Agua/Leche",
    descripcion: "Sabores: Maracuyá, Mango, Lulo, Mora o Fresa.",
    precio: "$7.500",
    etiqueta: "Nuevo",
    imagen: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Limonada Cerezada",
    descripcion: "Limonada casera mezclada con cerezas dulces y jarabe natural.",
    precio: "$9.500",
    etiqueta: "",
    imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Cerveza Artesanal",
    descripcion: "Cerveza rubia o negra fría de producción local.",
    precio: "$10.000",
    etiqueta: "",
    imagen: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=500&auto=format&fit=crop"
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
  display: flex;
  flex-direction: column;
}
.my-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

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
}

@media (max-width: 1023px) {
  .border-responsive {
    flex-direction: column;
  }
}
</style>
