<template>
  <q-page class="q-pb-xl">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
        height="260px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center q-px-md">
            <h1 class="text-h3 text-weight-bolder q-my-none">Nuestra Historia</h1>
            <p class="text-subtitle1 q-mt-sm text-weight-medium" style="max-width: 600px; margin: 0 auto;">
              Transformando ingredientes de origen en experiencias memorables para el paladar.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-lg" style="max-width: 1100px;">
      <!-- Manifiesto -->
      <div class="q-mb-xl">
        <q-card class="shadow-3 border-radius-lg overflow-hidden">
          <div class="row no-wrap border-responsive items-center">
            <q-img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=700&auto=format&fit=crop"
              class="col-12 col-md-6" height="320px" fit="cover" />
            <q-card-section class="col-12 col-md-6 q-pa-lg">
              <q-icon name="restaurant_menu" color="primary" size="32px" class="q-mb-sm" />
              <div class="text-overline text-primary text-bold">Nuestra Filosofía</div>
              <h2 class="text-h4 text-weight-bolder text-grey-9 q-mb-md">El Arte de la Cocina</h2>
              <p class="text-body1 text-grey-8 q-mb-sm">
                Nacimos con el propósito de redefinir los clásicos de la cocina urbana y tradicional, elevándolos
                mediante técnicas vanguardistas y materia prima de la más alta calidad.
              </p>
              <p class="text-body2 text-grey-7">
                Cada receta es diseñada minuciosamente por nuestro equipo de chefs, donde la temperatura, la textura y
                el maridaje perfecto son los protagonistas.
              </p>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Sección Pilares -->
      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Nuestros Pilares</h2>
      <div class="row q-col-gutter-md q-mb-xl">
        <div v-for="(pilar, index) in pilares" :key="index" class="col-12 col-sm-4">
          <q-card class="my-card full-height flex flex-center column text-center q-pa-lg shadow-3 border-radius-md">
            <q-avatar size="64px" color="primary" text-color="white" class="q-mb-md">
              <q-icon :name="pilar.icono" size="32px" />
            </q-avatar>
            <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">{{ pilar.titulo }}</div>
            <div class="text-body2 text-grey-7">{{ pilar.descripcion }}</div>
          </q-card>
        </div>
      </div>

      <!-- Sección Brigada / Equipo -->
      <h2 class="text-h5 text-weight-bold text-grey-9 q-mb-md">Nuestro Equipo</h2>
      <div class="row q-col-gutter-md items-stretch">
        <div v-for="(miembro, index) in equipo" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card full-height border-radius-md overflow-hidden flex column justify-between shadow-3">
            <div>
              <q-img :src="miembro.imagen" height="260px" fit="cover" position="top center" class="full-width" />
              <q-card-section class="text-center">
                <div class="text-h6 text-weight-bold text-grey-9">{{ miembro.nombre }}</div>
                <div class="text-caption text-primary text-bold text-uppercase q-mb-xs">{{ miembro.cargo }}</div>
                <div class="text-body2 text-grey-7">{{ miembro.bio }}</div>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
const pilares = [
  {
    icono: "eco",
    titulo: "Origen Orgánico",
    descripcion: "Seleccionamos vegetales de huertos locales e ingredientes importados de denominación de origen protegida."
  },
  {
    icono: "local_fire_department",
    titulo: "Técnica Tradicional",
    descripcion: "Procesos de cocción a la leña, fermentaciones lentas de masa madre y maduraciones controladas."
  },
  {
    icono: "verified",
    titulo: "Excelencia Sin Reservas",
    descripcion: "Nos apasiona el detalle en el emplatado y el equilibrio de aromas en cada preparación."
  }
]

const equipo = [
  {
    nombre: "Chef Matteo Rossi",
    cargo: "Executive Chef & Fundador",
    bio: "Especialista en gastronomía mediterránea con más de 15 años de experiencia en restaurantes de alto nivel.",
    imagen: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Valentina Gómez",
    cargo: "Maestra Sommelier",
    bio: "Curadora de nuestra carta de elixires, refrescos botánicos y maridajes exclusivos para cada plato.",
    imagen: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
  },
  {
    nombre: "Pierre Laurent",
    cargo: "Chef Patissier",
    bio: "Maestro repostero formado en París, enfocado en texturas complejas y combinaciones de cacao fino de aroma.",
    imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
  }
]
</script>

<style scoped>
.bg-filter {
  background: rgba(0, 0, 0, 0.55);
}

.border-radius-lg {
  border-radius: 12px;
}

.border-radius-md {
  border-radius: 10px;
}

.my-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.my-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1023px) {
  .border-responsive {
    flex-direction: column;
  }
}
</style>
