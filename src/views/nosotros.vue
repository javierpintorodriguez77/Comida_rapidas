<template>
  <q-page class="tech-page q-pb-xl text-slate-2">
    <!-- Banner de portada -->
    <div class="banner-container relative-position">
      <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" height="260px" fit="cover">
        <div class="absolute-full flex flex-center text-white bg-filter">
          <div class="text-center q-px-md">
            <h1 class="text-h3 text-weight-bolder tech-title q-my-none">NOSOTROS</h1>
            <p class="text-subtitle1 q-mt-sm text-grey-4 text-weight-regular" style="max-width: 650px; margin: 0 auto;">
              Conoce la pasión, dedicación y estándar de calidad detrás de cada uno de nuestros platos.
            </p>
          </div>
        </div>
      </q-img>
    </div>

    <div class="container q-mx-auto q-px-md q-mt-xl" style="max-width: 1400px;">
      
      <!-- Sección Historia y Misión -->
      <div class="row q-col-gutter-lg items-center q-mb-xl">
        <div class="col-12 col-md-6">
          <div class="row items-center q-mb-sm">
            <div class="tech-icon-box q-mr-sm">
              <q-icon name="restaurant" color="accent" size="20px" />
            </div>
            <h2 class="text-h6 text-weight-bold text-accent tech-subtitle q-my-none">NUESTRA HISTORIA</h2>
          </div>
          <h3 class="text-h4 text-weight-bolder text-white q-mt-xs q-mb-md">Pasión por la comida gourmet y el servicio de excelencia</h3>
          <p class="text-body1 text-grey-4 font-light style-paragraph">
            Nacimos con el objetivo de transformar la comida rápida tradicional en una experiencia gastronómica superior. Seleccionamos cuidadosamente ingredientes frescos de productores locales, combinando técnicas artesanales con un toque moderno en cada preparación.
          </p>
          <p class="text-body1 text-grey-4 font-light style-paragraph">
            Desde la elaboración de nuestras hamburguesas 100% artesanal y masas horneadas a la piedra, hasta nuestros postres hechos en casa, nuestro compromiso es ofrecer siempre el mejor sabor y una atención excepcional.
          </p>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="tech-card overflow-hidden">
            <q-img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=700&auto=format&fit=crop" height="320px" fit="cover" />
          </q-card>
        </div>
      </div>

      <!-- Tarjetas de Valores y Pilares -->
      <div class="q-mb-xl">
        <div class="row items-center q-mb-lg">
          <div class="tech-icon-box q-mr-sm">
            <q-icon name="stars" color="amber-5" size="22px" />
          </div>
          <h2 class="text-h6 text-weight-bold text-white tech-subtitle q-my-none">NUESTROS PILARES</h2>
        </div>

        <div class="row q-col-gutter-md">
          <div v-for="(pilar, idx) in pilares" :key="idx" class="col-12 col-sm-6 col-md-3">
            <q-card class="tech-card full-width q-pa-md text-center">
              <div class="tech-avatar-box q-mx-auto q-mb-md">
                <q-icon :name="pilar.icono" color="accent" size="28px" />
              </div>
              <div class="text-subtitle1 text-weight-bold text-white q-mb-xs">{{ pilar.titulo }}</div>
              <div class="text-caption text-grey-4 font-light">{{ pilar.descripcion }}</div>
            </q-card>
          </div>
        </div>
      </div>

      <!-- Banner Informativo / Horarios y Ubicación -->
      <q-card class="tech-chef-card border-slate overflow-hidden q-mb-md">
        <q-card-section class="q-pa-xl bg-slate-800">
          <div class="row q-col-gutter-lg items-center">
            <div class="col-12 col-md-8">
              <div class="text-h5 text-weight-bold text-white q-mb-xs">¿Listo para disfrutar una experiencia única?</div>
              <p class="text-body1 text-grey-4 font-light q-mb-none">
                Visítanos en nuestras instalaciones o realiza tu pedido en línea para disfrutar del mejor sabor directo a tu mesa.
              </p>
            </div>
            <div class="col-12 col-md-4 text-md-right text-left">
              <q-btn 
                unelevated 
                color="accent" 
                icon="menu_book" 
                label="Ver Menú Completo" 
                class="text-bold text-dark rounded-borders q-px-lg q-py-sm"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
const pilares = [
  {
    icono: "verified",
    titulo: "Calidad Premium",
    descripcion: "Ingredientes seleccionados minuciosamente bajo los más altos estándares de higiene y frescura."
  },
  {
    icono: "flatware",
    titulo: "Sabor Artesanal",
    descripcion: "Recetas propias elaboradas al momento para garantizar una textura y sazón inolvidable."
  },
  {
    icono: "electric_bolt",
    titulo: "Agilidad y Eficiencia",
    descripcion: "Procesos optimizados para entregar tus productos calientes y a tiempo en cada pedido."
  },
  {
    icono: "favorite",
    titulo: "Atención al Cliente",
    descripcion: "Nos enfocamos en brindar una experiencia cálida y memorable en cada interacción."
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

.tech-icon-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-avatar-box {
  width: 54px;
  height: 54px;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tarjeta Destacada */
.tech-chef-card {
  background-color: #1e293b;
  border-radius: 12px;
}

.border-slate {
  border: 1px solid rgba(255, 255, 255, 0.1);
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

.style-paragraph {
  line-height: 1.6;
}
</style>
