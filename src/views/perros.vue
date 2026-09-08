<template>
  <q-page class="q-pb-xl">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=1000&auto=format&fit=crop" height="220px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center">
            <h1 class="text-h3 text-weight-bolder q-my-none">Perros Calientes</h1>
            <p class="text-subtitle1 q-mt-sm text-weight-medium">Los clásicos de la calle con un toque gourmet e ingredientes premium.</p>
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
            <q-img :src="chefDog.imagen" class="col-12 col-md-5" height="250px" fit="cover" />
            <q-card-section class="col-12 col-md-7 flex flex-center">
              <div class="full-width">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-h5 text-weight-bolder text-primary">{{ chefDog.nombre }}</div>
                  <q-chip color="amber-9" text-color="white" icon="workspace_premium" class="text-bold">
                    Especialidad
                  </q-chip>
                </div>
                <p class="text-body1 text-grey-9 q-mb-md">{{ chefDog.descripcion }}</p>
                <div class="row items-center justify-between">
                  <span class="text-h4 text-weight-bolder text-negative">{{ chefDog.precio }}</span>
                  <q-btn color="secondary" icon="shopping_cart" label="Pedir ahora" class="text-bold" />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Menú General -->
      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Menú General</h2>
      <div class="row q-col-gutter-md">
        <div v-for="(producto, index) in dogs" :key="index" class="col-12 col-sm-6 col-md-4">
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
              <q-btn flat round color="primary" icon="add_shopping_cart" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const chefDog = {
  nombre: "Perro Salvaje Premium",
  descripcion: "Salchicha suiza gratinada con 3 quesos, tocineta crocante, ripio de papa, maíz tierno y guacamole.",
  precio: "$24.000",
  imagen: "https://superpapasdelmol.com/wp-content/uploads/2026/05/1778201780227.png"
}

const dogs = [
  {
    nombre: "Perro Sencillo",
    descripcion: "Salchicha manguera, queso fundido, ripio de papa, salsa rosada y piña.",
    precio: "$12.000",
    etiqueta: "Más pedido",
    imagen: "https://i.ytimg.com/vi/bpwovJ-L9x4/sddefault.jpg"
  },
  {
    nombre: "Perro Suizo Extra",
    descripcion: "Salchicha suiza, abundante queso mozzarella, piña y doble tocineta.",
    precio: "$17.500",
    etiqueta: "Nuevo",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Perro Mexicano",
    descripcion: "Salchicha manguera, carne desmechada, pico de gallo, guacamole y ají.",
    precio: "$18.000",
    etiqueta: "Picante",
    imagen: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Perro Veggie",
    descripcion: "Salchicha a base de soya, verduras salteadas, maíz y lactonesa de ajo.",
    precio: "$15.000",
    etiqueta: "Vegetariano",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Aay5oFLnrNtC5vbX82SpNWqSAZwsE5f2I8g2nzkPPw&s=10"
  }
]

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