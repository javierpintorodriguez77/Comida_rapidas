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
      <div class="col-12 col-md-6 flex">
        <q-card class="full-width column justify-between shadow-2">
          <q-card-section>
            <div class="text-h6 text-weight-bold row items-center q-mb-sm text-secondary">
              <q-icon name="place" class="q-mr-xs" /> Ubicación & Horarios
            </div>
            <p class="q-mb-xs"><strong>Dirección:</strong> Carrera 10 # 15-24, Centro</p>
            <p class="q-mb-none"><strong>Horario:</strong> Lunes a Domingo: 4:00 PM - 11:30 PM</p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 flex">
        <q-card class="full-width column justify-between shadow-2">
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
      <div v-for="(miembro, index) in equipo" :key="index" class="col-12 col-sm-4 flex">
        <q-card class="my-card full-width column justify-between text-center shadow-3">
          <div>
            <q-img :src="miembro.foto" height="200px" fit="cover">
              <div class="absolute-top-right bg-transparent">
                <q-btn flat round icon="visibility" color="white" @click="verDetalle(miembro)">
                  <q-tooltip>Ver perfil</q-tooltip>
                </q-btn>
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-weight-bold title-clamp">{{ miembro.nombre }}</div>
              <div class="text-subtitle2 text-primary q-mb-sm title-clamp">{{ miembro.cargo }}</div>
            </q-card-section>
          </div>

          <q-card-actions class="full-width row items-center justify-center q-px-md q-pb-md">
            <q-btn flat color="primary" icon="visibility" label="Ver detalle" @click="verDetalle(miembro)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="modalVerMiembro">
      <q-card style="width: 400px; max-width: 90vw;" class="rounded-borders text-center">
        <q-img v-if="miembroSeleccionado" :src="miembroSeleccionado.foto" height="220px" fit="cover">
          <div class="absolute-top-right bg-transparent">
            <q-btn icon="close" flat round dense color="white" v-close-popup />
          </div>
        </q-img>

        <q-card-section v-if="miembroSeleccionado">
          <div class="text-h6 text-weight-bold">{{ miembroSeleccionado.nombre }}</div>
          <div class="text-subtitle1 text-primary text-bold q-mb-sm">{{ miembroSeleccionado.cargo }}</div>
          <div class="text-body2 text-grey-8">{{ miembroSeleccionado.descripcion }}</div>
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

const modalVerMiembro = ref(false)
const miembroSeleccionado = ref(null)

const equipo = [
  {
    nombre: "Carlos Mendoza",
    cargo: "Chef Principal",
    descripcion: "Especialista en gastronomía urbana con más de 8 años de experiencia perfeccionando recetas artesanales.",
    foto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
  },
  {
    nombre: "Laura Gómez",
    cargo: "Cajera y Atención",
    descripcion: "Encargada de brindar la mejor experiencia de servicio al cliente y gestionar los pedidos con eficiencia.",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    nombre: "Andrea Silva",
    cargo: "Domiciliario",
    descripcion: "Responsable de garantizar que cada pedido llegue caliente, rápido y en perfectas condiciones a tu puerta.",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  }
]

function verDetalle(item) {
  miembroSeleccionado.value = item
  modalVerMiembro.value = true
}
</script>

<style scoped>
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
</style>
