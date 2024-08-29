<template>
    <div class="dashboard-container">
      <h1 class="dashboard-title">Dashboard de Aplicaciones</h1>
      <div class="app-grid">
        <div
          v-for="app in apps"
          :key="app.id"
          :class="['app-tile', { 'app-tile-large': app.size === 'large', 'app-tile-disabled': !app.enabled }]"
          @click="app.enabled && handleAppSelect(app)"
        >
          <div class="app-icon">{{ app.icon }}</div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const apps = ref([]);
  
  const fetchApps = async () => {
    // Simulación de carga de datos de aplicaciones desde una API
    const mockApps = [
      { id: 1, name: 'Usuarios', icon: '👥', enabled: true, size: 'small' },
      { id: 2, name: 'Aplicaciones', icon: '📱', enabled: true, size: 'small' },
      { id: 3, name: 'Administrados', icon: '🔧', enabled: true, size: 'small' },
      { id: 4, name: 'Licencias', icon: '📄', enabled: true, size: 'small' },
      { id: 5, name: 'Moto Moto', icon: '🏍️', enabled: true, size: 'small' },
    //   { id: 5, name: 'Moto Moto', icon: '🏍️', enabled: true, size: 'small' },
    //   { id: 5, name: 'Moto Moto', icon: '🏍️', enabled: true, size: 'small' },
      { id: 6, name: 'Hambulantes', icon: '🍔', enabled: false, size: 'small' },
    ];
    apps.value = mockApps;
  };
  
  const handleAppSelect = (app) => {
    console.log(`Aplicación seleccionada: ${app.name}`);
    // Aquí iría la lógica para abrir la aplicación seleccionada
  };
  
  onMounted(fetchApps);
  </script>
  
  <style scoped>
  .dashboard-container {
    width: 40%;
    padding: 2rem;
    background-color: #f3f4f6;
    min-height: 50vh;
    /* max-height: 60vh; */
  }
  
  .dashboard-title {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .app-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .app-tile {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #3b82f6;
    color: white;
    height: 150px;
  }
  
  .app-tile-large {
    grid-column: span 2;
    grid-row: span 2;
    height: 200px;
  }
  
  .app-tile:hover:not(.app-tile-disabled) {
    background-color: #2563eb;
  }
  
  .app-tile-disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
  
  .app-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .app-name {
    font-weight: 600;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    .app-grid {
      grid-template-columns: 1fr;
    }
  
    .app-tile-large {
      grid-column: auto;
      grid-row: auto;
      height: 150px;
    }
    .dashboard-container{
      width: 100%;
    }
  }
  </style>