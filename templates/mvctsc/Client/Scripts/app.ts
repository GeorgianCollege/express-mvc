// Custom TypeScript

//IIFE -- Immediately Invoked Function Expression Example
(function(){
    function Start():void
    {
        console.info(`App Started!`);
    }

    window.addEventListener('load', Start);
})(); 