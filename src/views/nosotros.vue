<template>
  <q-page class="tech-page q-pb-xl text-slate-2">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
        height="260px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center q-px-md">
            <h1 class="text-h3 text-weight-bolder tech-title q-my-none">NUESTRA HISTORIA</h1>
            <p class="text-subtitle1 q-mt-sm text-grey-4 text-weight-regular" style="max-width: 600px; margin: 0 auto;">
              Transformando ingredientes de origen en experiencias memorables para el paladar.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-xl" style="max-width: 1100px;">
      
      <!-- Manifiesto / Filosofía -->
      <div class="q-mb-xl">
        <q-card class="tech-card shadow-12 overflow-hidden">
          <div class="row no-wrap border-responsive items-stretch">
            <q-img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=700&auto=format&fit=crop"
              class="col-12 col-md-6" height="340px" fit="cover" />
            <q-card-section class="col-12 col-md-6 q-pa-lg bg-slate-800 flex column justify-center">
              <div class="row items-center q-mb-xs">
                <div class="tech-icon-box q-mr-sm">
                  <q-icon name="restaurant_menu" color="accent" size="20px" />
                </div>
                <div class="text-overline text-accent text-bold tech-subtitle">NUESTRA FILOSOFÍA</div>
              </div>
              <h2 class="text-h4 text-weight-bolder text-white q-mb-md">El Arte de la Cocina</h2>
              <p class="text-body1 text-grey-3 q-mb-sm font-light">
                Nacimos con el propósito de redefinir los clásicos de la cocina urbana y tradicional, elevándolos
                mediante técnicas vanguardistas y materia prima de la más alta calidad.
              </p>
              <p class="text-body2 text-grey-4 font-light q-mb-none">
                Cada receta es diseñada minuciosamente por nuestro equipo de chefs, donde la temperatura, la textura y
                el maridaje perfecto son los protagonistas.
              </p>
            </q-card-section>
          </div>
        </q-card>
      </div>

      <!-- Sección Pilares -->
      <div class="row items-center q-mb-md">
        <div class="tech-icon-box q-mr-sm">
          <q-icon name="auto_awesome" color="accent" size="20px" />
        </div>
        <h2 class="text-h6 text-weight-bold text-white tech-subtitle q-my-none">NUESTROS PILARES</h2>
      </div>

      <div class="row q-col-gutter-lg q-mb-xl items-stretch">
        <div v-for="(pilar, index) in pilares" :key="index" class="col-12 col-sm-4 flex">
          <q-card class="tech-card full-width flex flex-center column text-center q-pa-lg">
            <q-avatar size="60px" color="slate-700" text-color="accent" class="q-mb-md border-subtle">
              <q-icon :name="pilar.icono" size="30px" />
            </q-avatar>
            <div class="text-h6 text-weight-bold text-white q-mb-xs">{{ pilar.titulo }}</div>
            <div class="text-body2 text-grey-4 font-light">{{ pilar.descripcion }}</div>
          </q-card>
        </div>
      </div>

      <!-- Sección Equipo -->
      <div class="row items-center q-mb-md">
        <div class="tech-icon-box q-mr-sm">
          <q-icon name="groups" color="accent" size="20px" />
        </div>
        <h2 class="text-h6 text-weight-bold text-white tech-subtitle q-my-none">NUESTRO EQUIPO</h2>
      </div>

      <div class="row q-col-gutter-lg items-stretch">
        <div v-for="(miembro, index) in equipo" :key="index" class="col-12 col-sm-6 col-md-4 flex">
          <q-card class="tech-card full-width flex column justify-between">
            <div>
              <q-img :src="miembro.imagen" height="260px" fit="cover" position="top center" class="full-width" />
              <q-card-section class="text-center q-pa-md">
                <div class="text-h6 text-weight-bold text-white">{{ miembro.nombre }}</div>
                <div class="text-caption text-accent text-bold text-uppercase q-mb-xs title-clamp">{{ miembro.cargo }}</div>
                <div class="text-body2 text-grey-4 font-light desc-clamp">{{ miembro.bio }}</div>
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

.bg-slate-800 {
  background-color: #1e293b;
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

.border-subtle {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: rgba(30, 41, 59, 0.8) !important;
}

/* Tarjetas */
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
  line-height: 1.4;
}

@media (max-width: 1023px) {
  .border-responsive {
    flex-direction: column;
  }
}
</style>
