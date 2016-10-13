(function(){
    function nombrar(nombre) {
        return nombre;
    }

    function saludar(nombre) {
        console.info(nombre, ', un saludo desde DO Podcast');
    }

    saludar(nombrar('Juan Andrés')); 
})();