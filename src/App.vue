<template>
  <q-layout view="hHh lpR fFf" class="tech-layout">

    <!-- Header con efecto traslúcido/Glassmorphism y borde inferior sutil -->
    <q-header class="tech-header text-white">
      <!-- Barra Superior: Logo + Título + Status Badge -->
      <q-toolbar class="q-px-lg">
        <div class="row items-center q-gutter-x-sm">
          <div class="tech-icon-box">
            <q-icon name="restaurant_menu" size="20px" class="text-accent" />
          </div>
          <span class="text-subtitle1 text-weight-bold tech-title">Gourmet</span>
          <q-badge outline color="accent" class="q-ml-xs text-caption text-weight-bolder">v2.0</q-badge>
        </div>

        <q-space />

        <!-- Indicador Técnico de Estado -->
        <div class="row items-center text-caption text-grey-5 q-gutter-x-xs gt-xs">
          <span class="status-dot"></span>
          <span>SISTEMA ACTIVO</span>
        </div>
      </q-toolbar>

      <q-separator dark class="tech-separator" />

      <!-- Navegación de Pestañas Centradas -->
      <div class="row justify-center bg-transparent">
        <q-tabs 
          v-model="tab" 
          dense
          no-caps
          inline-label
          active-color="accent"
          indicator-color="accent"
          outside-arrows
          mobile-arrows
          class="tech-tabs text-grey-4"
        >
          <q-route-tab to="/hamburguesas" icon="lunch_dining" label="Hamburguesas" />
          <q-route-tab to="/perros" icon="fastfood" label="Perros Calientes" />
          <q-route-tab to="/pizzas" icon="local_pizza" label="Pizzas" />
          <q-route-tab to="/bebidas" icon="local_bar" label="Bebidas" />
          <q-route-tab to="/postres" icon="icecream" label="Postres" />
          <q-route-tab to="/promociones" icon="local_offer" label="Promociones" />
          <q-route-tab to="/nosotros" icon="groups" label="Nosotros" />
        </q-tabs>
      </div>
    </q-header>

    <!-- Contenedor Principal -->
    <q-page-container class="tech-bg">
      <router-view />
    </q-page-container>

    <!-- Pie de Página Minimalista Técnico -->
    <q-footer class="tech-footer text-grey-5">
      <q-toolbar class="justify-between class q-px-lg text-caption">
        <div>&copy; {{ new Date().getFullYear() }} Menú Digital &bull; Todos los derechos reservados</div>
        <div class="gt-xs text-mono">BUILD 2026.09</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('hamburguesas')
</script>

<style scoped>
/* Tipografía y fondo general */
.tech-layout {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.tech-bg {
  background-color: #0f172a; /* Azul oscuro Slate-900 */
}

/* Header con Blur/Glassmorphism */
.tech-header {
  background-color: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.tech-title {
  letter-spacing: 1.5px;
  color: #f8fafc;
}

/* Contenedor del Icono Principal */
.tech-icon-box {
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Separadores sutiles */
.tech-separator {
  opacity: 0.1;
}

/* Pestañas estilizadas */
.tech-tabs :deep(.q-tab) {
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0 16px;
  min-height: 44px;
  transition: all 0.2s ease;
}

.tech-tabs :deep(.q-tab--active) {
  font-weight: 700;
  background: rgba(255, 255, 255, 0.03);
}

/* Indicador de Estado Activo */
.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  display: inline-block;
  margin-right: 6px;
}

/* Footer estilo terminal/dashboard */
.tech-footer {
  background-color: #0b0f19 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-mono {
  font-family: monospace;
  opacity: 0.6;
}
</style>
