<script>
    import { enhance } from "$app/forms";

    let { form } = $props();
</script>
<div class="card border-orange shadow mx-3" style="width: 450px;">
    <div class="card-header border-orange">
        <h2 class="card-title d-flex justify-content-center m-0">TriniBox</h2>
    </div>
    <div class="card-body">
        <p class="card-text text-secondary mb-3">
            <small>
                Hai dubbi o curiosità sulla religione cattolica?
                Fai una domanda e ti risponderemo nel podcast!
            </small>
        </p>
        <form method="POST" use:enhance>
            <div>
                <label for="nome">Nome</label>
                <input type="text" name="nome" class="form-control" placeholder="Inserisci il tuo nome" required>
            </div>
            <div class="my-3">
                <label for="domanda">Domanda</label>
                <textarea name="domanda" class="form-control" rows="3" placeholder="Scrivi qui la tua domanda..." required></textarea>
            </div>
            <button type="submit" class="btn btn-orange w-100">Invia Domanda</button>
        </form>
    </div>
</div>