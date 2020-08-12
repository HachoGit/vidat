const PREFERENCE_TEMPLATE = `
<div style="max-width: 800px; margin: 0 auto" class="q-gutter-md">
  <div class="row">
    <div class="text-h5">Preferences</div>
    <q-space></q-space>
    <q-btn class="q-px-md" dense color="primary" icon="cached" @click="handleRestore">Restore</q-btn>
  </div>
  <q-list>
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Objects</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          color="green"
          v-model="preference.objects"
          checked-icon="check"
          unchecked-icon="clear"
          @input="handleSavePreference"
        ></q-toggle>
      </q-item-section>
    </q-item>
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Regions</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          color="green"
          v-model="preference.regions"
          checked-icon="check"
          unchecked-icon="clear"
          @input="handleSavePreference"
        ></q-toggle>
      </q-item-section>
    </q-item>
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Skeletons</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          color="green"
          v-model="preference.skeletons"
          checked-icon="check"
          unchecked-icon="clear"
          @input="handleSavePreference"
        ></q-toggle>
      </q-item-section>
    </q-item>
    <q-item tag="label" v-ripple>
      <q-item-section>
        <q-item-label>Video segments</q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-toggle
          color="green"
          v-model="preference.actions"
          checked-icon="check"
          unchecked-icon="clear"
          @input="handleSavePreference"
        ></q-toggle>
      </q-item-section>
    </q-item>
  </q-list>
</div>
`

export default {
  components: {
  },
  data: () => {
    return {}
  },
  methods: {
    ...Vuex.mapMutations([
      'setPreferenceData',
    ]),
    handleRestore () {
      this.setPreferenceData({
        objects: true,
        regions: true,
        skeletons: true,
        actions: true,
      })
    },
    handleSavePreference () {
      this.setPreferenceData(this.preference)
    },
  },
  computed: {
    preference () {
      return this.$store.state.settings.preferenceData
    },
  },
  template: PREFERENCE_TEMPLATE,
}
