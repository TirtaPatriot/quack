<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h4" style="opacity:.4">
        Tidak menemukan apapun...
      </div>

      <q-btn
        class="q-mt-xl"
        unelevated
        outline
        to="/"
        replace
        label="Kembali"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
