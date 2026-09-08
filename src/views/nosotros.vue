<template>
  <q-page class="q-pa-md container q-mx-auto" style="max-width: 1000px;">
    
    <q-card class="q-mb-lg shadow-2">
      <q-card-section>
        <div class="text-h4 text-weight-bold text-primary q-mb-md text-center">Nuestra Historia</div>
        <p class="text-body1 text-grey-8">
          Nacimos en el año 2020 como un pequeño emprendimiento familiar enfocado en ofrecer comida rápida con ingredientes artesanales de alta calidad. Lo que comenzó como un puesto local de hamburguesas se ha convertido en el menú digital preferido de la ciudad, combinando sabor, rapidez y excelente servicio.
        </p>
      </q-card-section>
    </q-card>

    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-md-6">
        <q-card class="full-height shadow-2">
          <q-card-section>
            <div class="text-h6 text-weight-bold row items-center q-mb-sm text-secondary">
              <q-icon name="place" class="q-mr-xs" /> Ubicación & Horarios
            </div>
            <p class="q-mb-xs"><strong>Dirección:</strong> Carrera 10 # 15-24, Centro</p>
            <p class="q-mb-none"><strong>Horario:</strong> Lunes a Domingo: 4:00 PM - 11:30 PM</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="full-height shadow-2">
          <q-card-section>
            <div class="text-h6 text-weight-bold row items-center q-mb-sm text-positive">
              <q-icon name="phone" class="q-mr-xs" /> Pedidos & Domicilios
            </div>
            <p class="q-mb-xs"><strong>Teléfono:</strong> (607) 654-3210</p>
            <p class="q-mb-none"><strong>WhatsApp:</strong> +57 310 987 6543</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="text-h5 text-weight-bold text-grey-9 q-mb-md text-center">Nuestro Equipo</div>
    <div class="row q-col-gutter-md">
      <div v-for="(miembro, index) in equipo" :key="index" class="col-12 col-sm-4">
        <q-card class="text-center shadow-3">
          <q-img :src="miembro.foto" height="200px" fit="cover" />
          <q-card-section>
            <div class="text-h6 text-weight-bold">{{ miembro.nombre }}</div>
            <div class="text-subtitle2 text-primary">{{ miembro.cargo }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const equipo = [
  {
    nombre: "Carlos Mendoza",
    cargo: "Chef Principal",
    foto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
  },
  {
    nombre: "Laura Gómez",
    cargo: "Cajera y Atención",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    nombre: "Andrea Silva",
    cargo: "Domiciliario",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  }
]
</script>