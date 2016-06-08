if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   if ('serviceWorker' in navigator) {
       console.log('Service Worker is supported');
       navigator.serviceWorker.register('sw.js').then(function(reg) {
           console.log(':^)', reg);
           reg.pushManager.subscribe({
               userVisibleOnly: true
           }).then(function(sub) {
               console.log('endpoint:', sub.endpoint);
               var WebServiceUrl = "https://lyzmi1nt8f.execute-api.eu-west-1.amazonaws.com/prod?endpoint=" + sub.endpoint;
               var DataToSend = {};
               $.ajax({
                   type: "PUT",
                   contentType: "application/json; charset=utf-8",
                   url: WebServiceUrl,
                   data: JSON.stringify({}),
                   dataType: "json",
                   success: function (msg) {
                   },
                   error: function (err){
                   }
               });
               
           });
       }).catch(function(error) {
           console.log(':^(', error);
       });
       }    
 }).catch(function(err) {
   console.log(':^(', err);
 });
}