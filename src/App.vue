<templete>
<q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- Título principal a la izquierda -->
        <q-toolbar-title shrink class="row items-center q-mr-md">
          <q-icon name="fastfood" size="28px" class="q-mr-sm" />
          <span class="text-weight-bold text-no-wrap">Menú Digital</span>
        </q-toolbar-title>

        <!-- Categorías del menú en la misma barra superior -->
        <q-tabs 
          v-model="tab" 
          dense
          active-color="yellow"
          indicator-color="yellow"
          outside-arrows
          mobile-arrows
          class="text-white"
        >
          <q-route-tab to="/hamburguesas" icon="lunch_dining" label="Hamburguesas" />
          <q-route-tab to="/perros" icon="fastfood" label="Perros Calientes" />
          <q-route-tab to="/pizzas" icon="local_pizza" label="Pizzas" />
          <q-route-tab to="/bebidas" icon="local_bar" label="Bebidas" />
          <q-route-tab to="/postres" icon="icecream" label="Postres" />
          <q-route-tab to="/promociones" icon="local_offer" label="Promociones" />
          <q-route-tab to="/nosotros" icon="groups" label="Nosotros" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- Contenido principal según la ruta seleccionada -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Pie de página -->
    <q-footer elevated class="bg-grey-9 text-white">
      <q-toolbar class="justify-center">
        <div class="text-caption">&copy; Menú Digital - Todos los derechos reservados</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('hamburguesas')
</script>
