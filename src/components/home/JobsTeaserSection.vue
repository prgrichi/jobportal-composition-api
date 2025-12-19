<template>
  <section class="bg-surface pt-5 pb-10 md:pt-10 md:pb-20">
    <div class="mx-auto max-w-app px-4">
      <div class="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 class="text-lg font-semibold text-neutral-900">Neueste Jobs</h2>
          <p class="mt-1 text-sm text-neutral-600">3 aktuelle Frontend- & Web-Rollen.</p>
        </div>

        <a href="#" class="hidden md:inline-flex items-center justify-center rounded-xl
                           border-b-3 border-primary-500/30 bg-white px-4 py-2
                           text-sm font-medium text-primary-600
                           transition hover:bg-primary-500/10
                           focus:outline-none focus:ring-2 focus:ring-primary-500/30">
          Alle Jobs
        </a>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <article
          class="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-primary-500/30">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-neutral-900">Frontend Engineer (Vue)</h3>
              <p class="mt-1 text-sm text-neutral-600">Muster GmbH · Berlin</p>
            </div>
            <span class="shrink-0 rounded-full bg-accent-500/70 px-2.5 py-1 text-xs font-medium text-white">
              Neu
            </span>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Remote</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">In-House</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Vollzeit</span>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm font-medium text-neutral-900">70–85k</p>
            <a href="#"
              class="inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition group-hover:text-accent-600">
              Details <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <!-- Card 2 -->
        <article
          class="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-primary-500/30">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-neutral-900">Frontend Engineer (Vue)</h3>
              <p class="mt-1 text-sm text-neutral-600">Muster GmbH · Berlin</p>
            </div>
            <span class="shrink-0 rounded-full bg-accent-500/70 px-2.5 py-1 text-xs font-medium text-white">
              Neu
            </span>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Remote</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">In-House</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Vollzeit</span>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm font-medium text-neutral-900">70–85k</p>
            <a href="#"
              class="inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition group-hover:text-accent-600">
              Details <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <!-- Card 3 -->
        <article
          class="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-primary-500/30">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-sm font-semibold text-neutral-900">Frontend Engineer (Vue)</h3>
              <p class="mt-1 text-sm text-neutral-600">Muster GmbH · Berlin</p>
            </div>
            <span class="shrink-0 rounded-full bg-accent-500/70 px-2.5 py-1 text-xs font-medium text-white">
              Neu
            </span>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Remote</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">In-House</span>
            <span class="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">Vollzeit</span>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm font-medium text-neutral-900">70–85k</p>
            <a href="#"
              class="inline-flex items-center gap-1 text-sm font-medium text-accent-500 transition group-hover:text-accent-600">
              Details <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

      </div>

      <!-- Mobile CTA -->
      <div class="mt-6 md:hidden">
        <a href="#" class="inline-flex w-full items-center justify-center rounded-xl
                           border border-primary-500/30 bg-white px-4 py-3
                           text-sm font-medium text-primary-600
                           transition hover:bg-primary-500/10
                           focus:outline-none focus:ring-2 focus:ring-primary-500/30">
          Alle Jobs
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JobsTeaserSection',
}
</script>

<style scoped></style>