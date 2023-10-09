// spotifyInit.js

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    
    if (!element) {
        console.error('Element "embed-iframe" not found');
        return;
    }

    const options = {
        uri: 'spotify:episode:6q9xgGXdlSNTMM1zrXOxXw',
        width: '100%',             // Establece el ancho al 60% del contenedor padre
        height: '200px',
        
         
    }; // Puedes cambiar esto según tus necesidades.
    
   
    const callback = (EmbedController) => {
        // Aquí puedes agregar lógica adicional si es necesario.
    };

    IFrameAPI.createController(element, options, callback);
};
