<script>
    import Icon from "@iconify/svelte";
    import { enhance } from "$app/forms";

    let { form } = $props();

    let validate = $state(false);
    const handleSubmit = ({ cancel, formElement }) => {
        validate = true;

        if (!formElement.checkValidity()) {
            cancel();
            return;
        }

        return async ({ update }) => {
            await update();
            validate = false;
        }
    };
</script>

<div class="card border-custom bg-custom border-2 shadow-lg mx-3" style="width: 450px;">
    <div class="card-header border-custom-2 border-4">
        <h2 class="card-title text-white d-flex justify-content-center m-0">
            Trini<span class="text-custom">Box</span>
        </h2>
    </div>
    <div class="card-body text-white">
        <p class="card-text text-center fw-light mb-3">
            Hai dubbi o curiosità sulla religione cattolica?
            Fai una domanda e ti risponderemo nel podcast!
        </p>
        <form class:was-validated={validate} method="POST" use:enhance={handleSubmit} novalidate>
            <div>
                <label for="nome" class="mb-1">Nome <small class="fw-lighter fst-italic"> (Opzionale)</small></label>
                <input type="text" name="nome" class="form-control input" placeholder="Inserisci il tuo nome">
            </div>
            <div class="my-3">
                <label for="domanda" class="mb-1">Domanda</label>
                <textarea name="domanda" class="form-control input" rows="3" placeholder="Scrivi qui la tua domanda..." required></textarea>
                <div class="invalid-feedback">
                    Bro, la domanda...
                </div>
            </div>
            <button type="submit" class="btn btn-custom w-100 mb-2">Invia Domanda</button>
            <a href="/domande" class="btn btn-outline-light w-100">Visualizza Tutte le Domande</a>
        </form>
    </div>
</div>