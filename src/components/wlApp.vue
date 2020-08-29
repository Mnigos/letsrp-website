<template>
  <div class="container">
    <header class="header">
      <h2>Podanie na Whitelist</h2>
    </header>
    <main>
      <article class="content">
        <section class="content-ic">
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Imię i Nazwisko
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/name"
                label="Imię i Nazwisko twojej postaci."
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Data Urodzenia
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/date"
                label="Data urodzenia twojej postaci.(dd-mm-rrrr)"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Pomysł na Postać
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/idea"
                label="Pomysł na twoją postać."
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Kreatywna Akcja
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/action"
                label="Kreatywna akcja z udziałem twojej postaci.(nie wymagane)"
              />
            </form>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'wlApp',
};
</script>
