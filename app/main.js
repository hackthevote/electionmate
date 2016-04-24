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
               $.ajax({
                  url: 'https://lyzmi1nt8f.execute-api.eu-west-1.amazonaws.com/prod?endpoint=' + sub.endpoint,
                  type: 'PUT',
               });
               
               console.log('endpoint:', sub.endpoint);
           });
       }).catch(function(error) {
           console.log(':^(', error);
       });
   }    
 }).catch(function(err) {
   console.log(':^(', err);
 });
}