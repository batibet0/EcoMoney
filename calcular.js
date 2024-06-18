const metodosAhorro = {
    agua: [
      "Cerrar el grifo mientras te lavas los dientes",
      "Instalar dispositivos de ahorro de agua en grifos y duchas",
      "Reparar fugas de agua tan pronto como sea posible",
      "Utilizar el lavavajillas y la lavadora con carga completa",
      "Recoger agua de lluvia para regar plantas",
      "Utilizar cubiertas en las piscinas para reducir la evaporación",
      "Ducharse en lugar de bañarse para ahorrar agua",
      "Reutilizar el agua de cocinar para regar plantas",
      "Asegurarse de que los grifos no goteen",
      "Rellenar la lavadora y lavavajillas antes de usarlos",
      "Usar la lavadora con cargas completas",
      "Recoger agua de lluvia para regar el jardín",
      "Instalar inodoros de bajo consumo",
      "Regar el jardín por la mañana o por la noche para reducir la evaporación",
      "Regar el césped sólo cuando sea necesario",
      "Usar una escoba en lugar de una manguera para limpiar entradas y aceras",
      "Instalar un cabezal de ducha de bajo flujo",
      "Tomar duchas más cortas",
      "Apagar los grifos mientras se cepilla los dientes",
      "Reducir el tiempo de riego en áreas sombreadas",
    ],
    luz: [
      "Apague las luces cuando salga de la habitación",
      "Cierre las persianas en verano para mantener la casa más fresca",
      "Utilice bombillas LED",
      "Utilice aparatos de iluminación eficientes energéticamente",
      "Utilice luz natural siempre que sea posible",
      "Instale sensores de movimiento en áreas donde la luz no sea necesaria todo el tiempo",
      "Utilice cortinas o persianas para mantener la luz solar fuera en verano",
      "Instale reflectores en las luces exteriores",
      "Limpie regularmente las bombillas y las lámparas",
      "Utilice iluminación de tareas en lugar de iluminar una habitación completa",
      "Apague las luces del porche cuando no las esté usando",
      "Use iluminación direccional",
      "Use bombillas incandescentes de bajo consumo",
      "Mantenga las lámparas y los accesorios libres de polvo",
      "Reduzca el uso de iluminación decorativa",
      "Apague las luces durante el día",
      "Use iluminación de fondo para iluminar una habitación entera",
      "Utilice reflectores de luz en lugar de iluminación directa",
      "Utilice la luz del sol para iluminar su hogar en lugar de luces artificiales",
      "Instale sensores de movimiento en su casa",
    ],
    comida: [
      "Planifique las comidas y haga una lista de compras",
      "Compre en el mercado de agricultores para obtener productos frescos y de temporada",
      "Compre solo lo que necesite y planifique las comidas",
      "Use sobras para hacer nuevas comidas",
      "Compre productos de temporada",
      "Almacene los alimentos en recipientes herméticos",
      "Coma comidas más pequeñas con más frecuencia",
      "Use productos de temporada y locales para cocinar",
      "Haga su propia comida en lugar de comprarla",
      "Coma en casa en lugar de comer fuera",
      "Coma porciones más pequeñas",
      "Coma más verduras y frutas",
      "Use productos secos y enlatados en lugar de productos frescos",
      "Compre en mercados de agricultores para obtener productos frescos",
      "Planifique comidas y compre solo lo que necesite",
      "Use sobras para hacer nuevas comidas",
      "Planifique comidas y compre solo lo que necesite",
      "Use sobras para hacer nuevas comidas",
      "Planifique comidas y compre solo lo que necesite",
      "Use sobras para hacer nuevas comidas",
    ],
  };
  
let metodosMostrados = false;

document.getElementById("btnMostrarMetodos").addEventListener("click", function() {
    const recursoSeleccionado = document.getElementById("selRecurso").value;
    const metodos = metodosAhorro[recursoSeleccionado];
    const metodosContainer = document.getElementById("metodos-container");
    
    metodosContainer.innerHTML = "";
    
    if (metodosMostrados) {
      this.textContent = "Mostrar Métodos de Ahorro";
      metodosMostrados = false;
      return;
    }
    
    metodos.forEach((metodo, index) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `metodo-${index + 1}`;
      checkbox.name = "metodos-especificos";
      checkbox.value = metodo;
      
      const label = document.createElement("label");
      label.htmlFor = `metodo-${index + 1}`;
      label.textContent = metodo;
      
      const div = document.createElement("div");
      div.appendChild(checkbox);
      div.appendChild(label);
      
      metodosContainer.appendChild(div);
    });
    
    this.textContent = "Métodos Aplicados";
    metodosMostrados = true;
});
