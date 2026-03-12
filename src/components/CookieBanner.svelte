<script>
    // Usiamo Svelte 5 per gestire lo stato del banner
    let showBanner = $state(false);

    $effect(() => {
        // Appena il componente viene caricato, controlliamo la memoria del browser
        const consent = localStorage.getItem('trinitalk_cookie_consent');
        
        // Se non c'è traccia del consenso, mostriamo il banner
        if (!consent) {
            showBanner = true;
        }
    });

    function acceptCookies() {
        // Quando l'utente clicca, salviamo la sua scelta nel browser per sempre
        localStorage.setItem('trinitalk_cookie_consent', 'true');
        // E facciamo sparire il banner con una transizione istantanea
        showBanner = false;
    }
</script>

{#if showBanner}
    <div class="fixed-bottom p-3 shadow-lg" style="background-color: rgba(26, 3, 11, 0.95); border-top: 2px solid #621322; z-index: 1050; backdrop-filter: blur(5px);">
        <div class="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            
            <p class="mb-0 text-light" style="font-size: 0.9rem;">
                Utilizziamo esclusivamente cookie tecnici essenziali per mantenerti connesso e far funzionare il sito. Non tracciamo i tuoi dati a fini pubblicitari. 
                <a href="/cookies" class="text-custom text-decoration-none fw-bold">Scopri di più</a>.
            </p>
            
            <button class="btn btn-custom text-nowrap px-4" onclick={acceptCookies}>
                Ho capito
            </button>

        </div>
    </div>
{/if}