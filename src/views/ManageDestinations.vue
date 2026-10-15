<template>
  <section class="manage-page">
    <header class="page-heading">
      <div>
        <p class="eyebrow">ADMINISTRATION</p>
        <h1>Manage Destinations</h1>
        <p>Add, view, edit, and delete Bohol tourist destinations.</p>
      </div>
      <button class="primary" @click="startCreate">+ Add Destination</button>
    </header>

    <form v-if="showForm" class="destination-form" @submit.prevent="saveDestination">
      <h2>{{ editingId === null ? 'Add New Destination' : 'Edit Destination' }}</h2>
      <div class="form-grid">
        <label>Destination Name<input v-model.trim="form.name" required maxlength="100" /></label>
        <label>Location<input v-model.trim="form.location" required maxlength="100" /></label>
        <label>Category
          <select v-model="form.category" required>
            <option disabled value="">Choose category</option>
            <option v-for="item in categories" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>
        <label>Activities<input v-model.trim="form.activities" placeholder="Sightseeing, photography" /></label>
        <label class="full">Image URL<input v-model.trim="form.image" type="url" placeholder="https://example.com/image.jpg" /></label>
        <label class="full">Description<textarea v-model.trim="form.description" required rows="3" /></label>
      </div>
      <div class="form-actions">
        <button class="primary" type="submit">{{ editingId === null ? 'Save Destination' : 'Update Destination' }}</button>
        <button class="secondary" type="button" @click="cancelForm">Cancel</button>
      </div>
    </form>

    <div class="list-heading">
      <h2>Destination Records <span>{{ places.length }}</span></h2>
      <input v-model="search" class="search" placeholder="Search destinations..." />
    </div>

    <div class="table-wrap">
      <table>
        <thead><tr><th>Name</th><th>Location</th><th>Category</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="place in filteredPlaces" :key="place.id">
            <td><strong>{{ place.name }}</strong></td><td>{{ place.location }}</td><td><span class="category">{{ place.category }}</span></td>
            <td class="actions"><button class="edit" @click="startEdit(place)">Edit</button><button class="delete" @click="deleteDestination(place.id)">Delete</button></td>
          </tr>
          <tr v-if="filteredPlaces.length === 0"><td colspan="4" class="empty">No destinations found.</td></tr>
        </tbody>
      </table>
    </div>
    <p v-if="message" class="message">{{ message }}</p>
    <p class="note">Changes are saved in this browser using localStorage.</p>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { destinations as initialDestinations } from '../data/destinations'

const storageKey = 'bohol-managed-destinations'
const categories = ['Nature', 'Beach', 'Adventure', 'Wildlife', 'Historical']
const places = ref([])
const search = ref('')
const showForm = ref(false)
const editingId = ref(null)
const message = ref('')
const blankForm = () => ({ name: '', location: '', category: '', activities: '', image: '', description: '' })
const form = ref(blankForm())

onMounted(() => {
  try {
    const saved = localStorage.getItem(storageKey)
    places.value = saved ? JSON.parse(saved) : initialDestinations.map(place => ({ ...place }))
  } catch {
    places.value = initialDestinations.map(place => ({ ...place }))
  }
})
watch(places, value => localStorage.setItem(storageKey, JSON.stringify(value)), { deep: true })
const filteredPlaces = computed(() => places.value.filter(place => `${place.name} ${place.location} ${place.category}`.toLowerCase().includes(search.value.toLowerCase())))

function startCreate() {
  editingId.value = null
  form.value = blankForm()
  showForm.value = true
  message.value = ''
}
function startEdit(place) {
  editingId.value = place.id
  form.value = { ...blankForm(), ...place }
  showForm.value = true
  message.value = ''
}
function saveDestination() {
  const data = { ...form.value }
  if (editingId.value === null) {
    const nextId = Math.max(0, ...places.value.map(place => Number(place.id) || 0)) + 1
    places.value.push({ id: nextId, ...data })
    message.value = 'Destination added successfully.'
  } else {
    const index = places.value.findIndex(place => place.id === editingId.value)
    if (index !== -1) places.value[index] = { ...places.value[index], ...data }
    message.value = 'Destination updated successfully.'
  }
  cancelForm()
}
function deleteDestination(id) {
  const place = places.value.find(item => item.id === id)
  if (!place || !window.confirm(`Delete ${place.name}?`)) return
  places.value = places.value.filter(item => item.id !== id)
  message.value = 'Destination deleted.'
}
function cancelForm() {
  showForm.value = false
  editingId.value = null
  form.value = blankForm()
}
</script>

<style scoped>
.manage-page{max-width:1200px;margin:0 auto;color:#26352d}.page-heading{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:28px}.eyebrow{font-size:12px;font-weight:700;letter-spacing:2px;color:#27805a}.page-heading h1{margin:5px 0 8px;font-size:clamp(30px,4vw,42px);color:#174b36}.page-heading p{color:#64736a}.primary,.secondary,.edit,.delete{border:0;border-radius:8px;padding:10px 15px;font-weight:700;cursor:pointer}.primary{background:#176b4d;color:white}.secondary{background:#e9eee9;color:#34483b}.destination-form{background:white;border:1px solid #e0e8e1;border-radius:14px;padding:24px;margin-bottom:28px;box-shadow:0 8px 24px #173f2410}.destination-form h2,.list-heading h2{margin:0 0 18px;color:#174b36}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.form-grid label{display:flex;flex-direction:column;gap:7px;font-size:14px;font-weight:700}.form-grid input,.form-grid select,.form-grid textarea,.search{width:100%;border:1px solid #d5dfd7;border-radius:8px;padding:11px;font:inherit;background:#fff;color:#26352d}.form-grid .full{grid-column:1/-1}.form-actions{display:flex;gap:10px;margin-top:18px}.list-heading{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:14px}.list-heading h2{margin:0}.list-heading h2 span{font-size:14px;background:#e7f3eb;color:#176b4d;border-radius:20px;padding:4px 9px}.search{max-width:280px}.table-wrap{overflow-x:auto;background:#fff;border:1px solid #e0e8e1;border-radius:12px}table{width:100%;border-collapse:collapse;text-align:left}th,td{padding:15px;border-bottom:1px solid #edf1ed}th{background:#f1f7f2;color:#315440;font-size:13px;text-transform:uppercase;letter-spacing:.4px}tbody tr:last-child td{border-bottom:0}.category{display:inline-block;padding:4px 9px;border-radius:20px;background:#e7f3eb;color:#176b4d;font-size:12px;font-weight:700}.actions{white-space:nowrap}.edit{background:#eaf2ff;color:#2559a6;margin-right:7px}.delete{background:#fff0ef;color:#b42318}.empty{text-align:center;color:#68776d;padding:28px}.message{margin-top:16px;color:#176b4d;font-weight:700}.note{font-size:13px;color:#738078;margin-top:18px}@media(max-width:700px){.page-heading,.list-heading{align-items:stretch;flex-direction:column}.page-heading .primary{align-self:flex-start}.form-grid{grid-template-columns:1fr}.form-grid .full{grid-column:auto}.search{max-width:none}}
</style>
